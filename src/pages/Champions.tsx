import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ChapterNav from "../components/ChapterNav";
import Figure from "../components/Figure";
import {
  ChampionsDiagram,
  SharedCombatPipelineDiagram,
  HealingLinkDiagram,
  ChampionInterfaceCard,
  MinesVsProjectileDiagram,
} from "../components/diagrams";
import {
  PageIntro,
  Eyebrow,
  WideSection,
  Callout,
  Principle,
  Grid,
  Item,
  PageNav,
  DiagramPanel,
  Takeaway,
} from "../components/ui";

export default function Champions() {
  return (
    <Layout>
      <ChapterNav chapterId="champions" />

      <PageIntro>
        <Eyebrow>Chapter 03 · Champions</Eyebrow>
        <h1>Champions</h1>
        <p>
          Three interfaces, same combat principle. Each champion has a weapon
          plus one optical role: Tank emits a light beam; Fighter and Artillery
          carry a photodiode.
        </p>
      </PageIntro>

      <WideSection>
        <Figure
          src="/images/eurobot-robots.jpg"
          alt="Competition robots on a Eurobot arena"
          caption="Different machines on a shared field — three champions, one pipeline."
          credit="Wikimedia Commons · Eurobot at ESTEC"
        />
        <DiagramPanel>
          <ChampionsDiagram />
          <figcaption>
            Weapon + optics on every interface. Only the Tank emits the heal
            beam; the others receive it.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <WideSection>
        <h2>Shared principle</h2>
        <p>
          All three champions use the same loop. Projectiles are special only
          because their simulation is not instantaneous — the steps stay the
          same.
        </p>
        <DiagramPanel>
          <SharedCombatPipelineDiagram />
          <figcaption>
            Physical action → measurement → virtual action → server →
            interactive simulation → continuous projection.
          </figcaption>
        </DiagramPanel>
        <Grid>
          <Item>
            <strong>Tank attack</strong>
            <p>Shield burst motion → measure → virtual hit → server → sim → project</p>
          </Item>
          <Item>
            <strong>Fighter attack</strong>
            <p>Sword swing → IMU measure → virtual hit → server → sim → project</p>
          </Item>
          <Item>
            <strong>Artillery attack</strong>
            <p>Launcher motion → measure → virtual shot → server → flight sim → project</p>
          </Item>
        </Grid>
        <Principle>
          One pipeline. Different physical actions. Same authority: the server.
        </Principle>
      </WideSection>

      <WideSection>
        <h2>Healing is not a one-way chain</h2>
        <p>
          The light beam sits on the Tank. The photodiode sits on the ally.
          Both Cores talk to the server. The server decides whether heal
          applies and updates HP — it is not “beam → diode → Core → HP” as a
          single private path.
        </p>
        <DiagramPanel>
          <HealingLinkDiagram />
          <figcaption>
            Optical link between champions; calculation and HP update on the
            server.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      {/* ——— TANK ——— */}
      <WideSection>
        <h2>1 · Tank / Support</h2>
        <p>
          Frontline. Weapon: heavy shield. Optics: light beam emitter (support
          heal).
        </p>
        <DiagramPanel>
          <ChampionInterfaceCard
            title="Tank / Support"
            role="Shield weapon · light beam emitter"
            accent="#3ecfff"
            teamParts={[
              "Shield structure & orientation",
              "Burst motion of the robot",
              "Aiming the heal beam",
            ]}
            interfaceParts={[
              "Core",
              "Weapon sensors (shield / motion)",
              "Light beam emitter",
            ]}
          />
        </DiagramPanel>
        <h3>Shield defense</h3>
        <p>
          Physically orient the shield. Effectiveness can use pose, distance,
          and attack direction — still evaluated through the shared pipeline.
        </p>
        <h3>Shield burst (Tank attack)</h3>
        <p>
          Rapid physical movement is measured, turned into a virtual attack,
          ruled by the server, simulated, and projected — same principle as
          sword or launcher, usually near-instant in simulation time.
        </p>
        <h3>Heal beam</h3>
        <p>
          Emits modulated light toward an ally photodiode. LOS, distance,
          alignment, duration matter. Both sides report; the server updates HP.
        </p>
      </WideSection>

      {/* ——— FIGHTER ——— */}
      <WideSection>
        <h2>2 · Fighter</h2>
        <p>
          Melee. Weapon: physical sword. Optics: photodiode (can receive heal).
        </p>
        <DiagramPanel>
          <ChampionInterfaceCard
            title="Fighter"
            role="Sword weapon · photodiode receiver"
            accent="#ffb45a"
            teamParts={[
              "Sword actuator & linkage",
              "Mass, reach, structure",
              "Swing control",
            ]}
            interfaceParts={[
              "Core",
              "Weapon sensors (sword IMU)",
              "Photodiode",
            ]}
          />
        </DiagramPanel>
        <Callout>
          <strong>Swing flavour (balancing)</strong>
          <p>
            Fast narrow swing → stronger hit. Wide swing → larger area, lower
            strength. That only changes how measurement maps into the virtual
            action — not the pipeline itself.
          </p>
        </Callout>
      </WideSection>

      {/* ——— ARTILLERY ——— */}
      <WideSection>
        <h2>3 · Artillery</h2>
        <p>
          Range and area control. Weapons: launcher + mines. Optics:
          photodiode (can receive heal).
        </p>
        <DiagramPanel>
          <ChampionInterfaceCard
            title="Artillery"
            role="Launcher & mines · photodiode receiver"
            accent="#3ecfff"
            teamParts={[
              "Launcher aim / fire mechanism",
              "Mine deploy / move mechanism",
              "Carriage & control",
            ]}
            interfaceParts={[
              "Core",
              "Weapon sensors (launch params)",
              "Photodiode",
            ]}
          />
        </DiagramPanel>

        <h3>Launcher</h3>
        <p>
          Same shared pipeline. The difference: after measurement, the virtual
          projectile is simulated over time (not instant), and projection
          follows that flight continuously. No real projectile is fired.
        </p>
        <Callout $tone="warn">
          <strong>Safety</strong>
          <p>
            Simulation mechanism only — not for firing dangerous projectiles
            at robots or people.
          </p>
        </Callout>

        <h3>Mines</h3>
        <p>
          Unlike virtual projectiles, mines <strong>physically exist</strong>,
          have <strong>their own position</strong>, and can be moved in the
          arena. Deploy uses the pipeline; while on the ground they remain
          physical game objects until triggered.
        </p>
        <DiagramPanel>
          <MinesVsProjectileDiagram />
          <figcaption>
            Projectile: virtual and time-extended in simulation. Mine: real
            object with independent placement.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <WideSection>
        <Callout>
          <strong>Deployment</strong>
          <p>
            No fixed lane roles. Teams place Tank, Fighter, and Artillery where
            they want and rotate freely.
          </p>
        </Callout>
      </WideSection>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Every champion: weapon + (light beam if Tank, else photodiode). All
          attacks share one pipeline through the server. Heal is a two-champion
          optical link judged by the server. Mines stay physical with their own
          position.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/game">← Game</Link>
        <Link to="/arena">Next: Arena →</Link>
      </PageNav>
    </Layout>
  );
}
