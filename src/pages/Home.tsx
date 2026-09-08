import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Figure from "../components/Figure";
import { ArenaItemCards } from "../components/arenaItems";
import {
  HealBeamIllustration,
  ShieldPassiveIllustration,
  ShieldBurstIllustration,
  SwordIllustration,
  LauncherIllustration,
  MinesIllustration,
} from "../components/championIllos";
import {
  BoundaryDiagram,
  PhysicalDigitalDiagram,
  SharedCombatPipelineDiagram,
  ResourceTriadDiagram,
  SpawnLogicDiagram,
  NexusLaneDiagram,
} from "../components/diagrams";
import { chapters } from "../data/chapters";
import {
  Eyebrow,
  Principle,
  Callout,
  Grid,
  Item,
  TextLink,
  DiagramPanel,
  Takeaway,
  TourStep,
  TourClose,
  HomeHero,
  HomeHeroCopy,
  HomeHeroBrand,
  HomeHeroActions,
  HomeHeroMedia,
} from "../components/ui";

export default function Home() {
  return (
    <Layout>
      <HomeHero>
        <HomeHeroCopy>
          <HomeHeroBrand>Robotics MOBA</HomeHeroBrand>
          <Eyebrow>Competition concept</Eyebrow>
          <h1>A MOBA played with robots</h1>
          <p>
            If you have never heard of a MOBA, or of this competition, start
            here. The page walks through the whole idea. Deeper pages exist
            if you want them — you do not need them to understand.
          </p>
          <HomeHeroActions>
            <a className="primary" href="#tour">
              Start the tour <span aria-hidden>↓</span>
            </a>
          </HomeHeroActions>
        </HomeHeroCopy>

        <HomeHeroMedia>
          <div className="frame">
            <img
              src="/images/wild-rift-ref.jpg"
              alt="League of Legends Wild Rift — a digital MOBA match"
            />
          </div>
          <figcaption>
            <strong>The game this is like</strong>
            <span>Wild Rift · two teams, three lanes, destroy the Nexus</span>
          </figcaption>
        </HomeHeroMedia>
      </HomeHero>

      <TourStep
        id="tour"
        n="01"
        question="What is a MOBA?"
      >
        <p>
          A MOBA is a team fight on a map. Two sides. Each has a base. The
          job is to walk down a path — a <strong>lane</strong> — break the
          defenses on that path, and destroy the enemy{" "}
          <strong>Nexus</strong> (the heart of their base).
        </p>
        <p>
          Between the lanes is the <strong>jungle</strong>: extra fights,
          extra resources. You do not win by farming the jungle. You win
          when the Nexus falls.
        </p>
      </TourStep>

      <TourStep n="02" question="Here the champions are robots">
        <p>
          Same game idea. The “champions” are not avatars on a screen. They
          are <strong>three custom-built robots per team</strong>, on a real
          floor, in front of a crowd.
        </p>
        <p>
          Projection paints the game layer onto that floor — zones, shots,
          events — so spectators can read the match. The machines stay real.
          This is not six remote-control cars driving in circles.
        </p>
        <Figure
          src="/images/xr-projection.jpg"
          alt="Floor projection showing player zones and luminous game effects"
          caption="Projection makes the match readable. The robots and weapons are still physical."
          credit="Reference: Alfa5 XR Sports / Digital AV Magazine"
        />
      </TourStep>

      <TourStep
        n="03"
        question="How do you win?"
        more={{ to: "/game", label: "More on match rules →" }}
      >
        <p>
          Destroy the enemy Nexus. You cannot chip it from the start. Like
          Wild Rift, the Nexus is invulnerable until a lane is{" "}
          <strong>cleared</strong> — you break the turrets (and the
          structure that locks that path) first.
        </p>
        <DiagramPanel>
          <NexusLaneDiagram />
          <figcaption>
            Push a lane → lane cleared → Nexus can take damage. No shortcut
            through an uncleared base.
          </figcaption>
        </DiagramPanel>
      </TourStep>

      <TourStep
        n="04"
        question="What does the map look like?"
        more={{ to: "/arena", label: "More on the arena →" }}
      >
        <p>
          Two bases sit in <strong>opposite corners</strong>. Three lanes —
          top, mid, bot — <strong>connect those bases</strong>. Jungle fills
          the pockets between the lanes. A river cuts across.
        </p>
        <p>
          That is the layout idea. Where each object sits on our floor is
          not fixed yet.
        </p>
        <Figure
          src="/images/wild-rift-map.jpg"
          alt="Wild Rift map: corner bases, three connecting lanes, jungle and river"
          caption="Layout reference only. Placement of our items comes later."
          credit="Wild Rift map · oneesports.gg"
          fit="contain"
        />
      </TourStep>

      <TourStep
        n="05"
        question="Who are the three robots?"
        more={{ to: "/champions", label: "More on weapons and sensors →" }}
      >
        <p>
          First edition is 3v3. Each robot wears a sealed official
          interface: a <strong>weapon</strong> the team actuates, plus one
          optical role. Deployment across lanes and jungle is free.
        </p>
        <Grid $cols={2}>
          <Item>
            <strong>Tank / Support</strong>
            <p>Shield (IMU) and a coded heal beam (light, not IMU).</p>
          </Item>
          <Item>
            <strong>Fighter</strong>
            <p>Sword (IMU) and a photodiode that can receive the heal.</p>
          </Item>
          <Item>
            <strong>Artillery</strong>
            <p>Launcher (IMU), photodiode, and can arm mines on the map.</p>
          </Item>
        </Grid>

        <h3>Tank — shield and beam</h3>
        <p>
          Point the shield at the incoming attack. Farther from the Core =
          stronger block. A shove is a burst in that facing direction.
          Hits start only after a small gap (~3 cm) so ramming does not
          count.
        </p>
        <ShieldPassiveIllustration />
        <ShieldBurstIllustration />
        <p>
          The heal is not a flashlight. It is a coded optical signal.
          Alignment and timing must be real — you cannot intercept the beam
          and fake it over radio.
        </p>
        <HealBeamIllustration />

        <h3>Fighter — sword</h3>
        <p>
          The swing is the attack. Damage follows{" "}
          <strong>sword acceleration × time in range</strong>. A spin covers
          more area and hits softer. Same ~3 cm dead zone as the shield.
        </p>
        <SwordIllustration />

        <h3>Artillery — launcher</h3>
        <p>
          The actuator must throw like a real launcher. The IMU records that
          motion. The server applies physics to a{" "}
          <strong>virtual</strong> projectile and projects the hit. Nothing
          physical is fired at another robot.
        </p>
        <LauncherIllustration />
        <p>
          Mines are map items, not a weapon. Artillery can pick one up,
          move it, then arm it.
        </p>
        <MinesIllustration />
      </TourStep>

      <TourStep n="06" question="A swing is not a button">
        <p>
          The game does not take a keypress. The robot moves something
          real. Official sensors measure that motion. The server turns it
          into a virtual action, applies the rules, and projection shows
          the result.
        </p>
        <DiagramPanel>
          <PhysicalDigitalDiagram />
          <figcaption>
            Act. Measure. Rule. Show. The metal is input — not the hit
            itself.
          </figcaption>
        </DiagramPanel>
        <DiagramPanel>
          <SharedCombatPipelineDiagram />
          <figcaption>
            Shield, sword, and launcher use an IMU. The heal beam is the
            exception: coded light + photodiode, with timing.
          </figcaption>
        </DiagramPanel>
      </TourStep>

      <TourStep n="07" question="Three separate tanks of “fuel”">
        <p>
          Mixing these up breaks the game and the robot. They are not the
          same bar.
        </p>
        <DiagramPanel>
          <ResourceTriadDiagram />
          <figcaption>
            HP is alive-or-dead. Mana pays for attacks. Charge moves the
            machine.
          </figcaption>
        </DiagramPanel>
        <Callout>
          <strong>Quick map</strong>
          <p>
            <strong>HP</strong> — weapons stay on only while you are alive.{" "}
            <strong>Mana</strong> — spent on an attack, plus a cooldown
            between accepted attacks. <strong>Charge</strong> — energy to
            drive. Charge stations on the map refill Charge, not Mana.
          </p>
        </Callout>
      </TourStep>

      <TourStep n="08" question="What happens when you die?">
        <p>
          HP hits zero: weapons shut off. The robot must return to its
          base. Revival is not a global countdown you can ignore.
        </p>
        <DiagramPanel>
          <SpawnLogicDiagram />
          <figcaption>
            The spawn timer only runs while you stay in base without
            leaving. Leave early and it resets.
          </figcaption>
        </DiagramPanel>
      </TourStep>

      <TourStep
        n="09"
        question="What else is on the floor?"
        more={{ to: "/arena", label: "More on map items →" }}
      >
        <p>
          Many objectives are <strong>physical objects</strong> with their
          own lighting — not stickers or holograms. Monsters can move in
          place in their camp. Placement on our map is still open; the
          types are not.
        </p>
        <ArenaItemCards />
      </TourStep>

      <TourStep n="10" question="Who builds what?">
        <Principle>We define the game. You define the robot.</Principle>
        <p>
          The organization owns the sealed Champion Interface (sensors +
          Core), the arena systems, and the game server. Teams build the
          chassis, the actuators that produce the motion, the control, and
          the strategy.
        </p>
        <DiagramPanel>
          <BoundaryDiagram />
          <figcaption>
            Team robot → official interface → server. You move it. We
            measure it.
          </figcaption>
        </DiagramPanel>
        <p>
          How a team practices before match day is a separate story.
        </p>
        <TextLink to="/system">More on robot structure →</TextLink>
        <TextLink to="/development">How teams develop →</TextLink>
      </TourStep>

      <TourStep
        n="11"
        question="Who is the referee?"
        more={{ to: "/server", label: "More on the server →" }}
      >
        <p>
          The <strong>game server</strong> is the electronic referee.
          Robots report measurements. The server decides HP, hits, cooldowns,
          and whether the Nexus can take damage. Projection and screens
          show that state — they do not invent it.
        </p>
        <Callout>
          <strong>Authority</strong>
          <p>
            If the floor looks wrong and the server says otherwise, the
            server wins.
          </p>
        </Callout>
      </TourStep>

      <Takeaway>
        <strong>That’s the whole idea</strong>
        <p>
          A MOBA, played with three robots per side, on a real map. Physical
          motion is measured, ruled, then shown. You win by clearing a lane
          and taking the Nexus. Everything else — jungle, items, Charge —
          exists to force that fight.
        </p>
      </Takeaway>

      <TourClose>
        Want more depth?{" "}
        {chapters.map((chapter, i) => (
          <span key={chapter.path}>
            {i > 0 && " · "}
            <Link to={chapter.path}>{chapter.title}</Link>
          </span>
        ))}
      </TourClose>
    </Layout>
  );
}
