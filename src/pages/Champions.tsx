import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ChapterNav from "../components/ChapterNav";
import {
  ChampionsDiagram,
  SharedCombatPipelineDiagram,
  HealingLinkDiagram,
  ChampionInterfaceCard,
  MinesVsProjectileDiagram,
  StepChainDiagram,
} from "../components/diagrams";
import {
  ChampionOverviewGrid,
  ChampionCard,
  MechList,
  ChampionBlock,
  Ability,
  Equation,
  TradeoffGrid,
  Tradeoff,
} from "../components/ChampionUI";
import {
  PageIntro,
  Eyebrow,
  WideSection,
  Callout,
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
          Three roles. Same pipeline. Each interface ={" "}
          <strong>weapon</strong> + <strong>optics</strong> (beam if Tank,
          photodiode otherwise).
        </p>
      </PageIntro>

      <WideSection>
        <DiagramPanel>
          <ChampionsDiagram />
          <figcaption>Who has what — weapon and optical role.</figcaption>
        </DiagramPanel>
        <DiagramPanel>
          <SharedCombatPipelineDiagram />
          <figcaption>
            Shared for every attack (including shield burst and launcher).
          </figcaption>
        </DiagramPanel>
        <Callout>
          <strong>Note</strong>
          <p>
            Projectiles only differ by duration: simulation continues over
            time. Steps stay the same.
          </p>
        </Callout>
      </WideSection>

      <WideSection>
        <h2>At a glance</h2>
        <ChampionOverviewGrid>
          <ChampionCard $accent="#3ecfff">
            <header>
              <span>01</span>
              <small>Tank / Support</small>
            </header>
            <h3>Tank / Support</h3>
            <MechList>
              <span>Systems</span>
              <strong>Heavy shield</strong>
              <strong>Shield burst</strong>
              <strong>Heal beam (emitter)</strong>
            </MechList>
          </ChampionCard>
          <ChampionCard $accent="#ffb45a">
            <header>
              <span>02</span>
              <small>Fighter</small>
            </header>
            <h3>Fighter</h3>
            <MechList>
              <span>Systems</span>
              <strong>Physical sword</strong>
              <strong>Swing actuation</strong>
              <strong>Photodiode (receiver)</strong>
            </MechList>
          </ChampionCard>
          <ChampionCard $accent="#a78bfa">
            <header>
              <span>03</span>
              <small>Artillery</small>
            </header>
            <h3>Artillery</h3>
            <MechList>
              <span>Systems</span>
              <strong>Launcher (virtual flight)</strong>
              <strong>Mines (physical)</strong>
              <strong>Photodiode (receiver)</strong>
            </MechList>
          </ChampionCard>
        </ChampionOverviewGrid>
      </WideSection>

      {/* TANK */}
      <ChampionBlock $accent="#3ecfff">
        <header>
          <span>01</span>
          <strong>TANK / SUPPORT</strong>
        </header>
        <h2>
          <em>Protect</em> · Control · Sustain
        </h2>

        <DiagramPanel>
          <ChampionInterfaceCard
            title="Interface split"
            role="You actuate · we measure · beam emits heal"
            accent="#3ecfff"
            teamParts={[
              "Shield structure & orientation",
              "Burst motion",
              "Beam aiming",
            ]}
            interfaceParts={[
              "Core",
              "Shield / motion sensors",
              "Light beam emitter",
            ]}
          />
        </DiagramPanel>

        <Ability>
          <div className="meta">
            <span className="num">A1</span>
            <span className="kind">Defense</span>
          </div>
          <h3>Heavy shield</h3>
          <Equation>
            <span>Distance</span>
            <i>+</i>
            <span>Orientation</span>
            <i>+</i>
            <span>Attack geometry</span>
            <i>→</i>
            <strong>Protection</strong>
          </Equation>
        </Ability>

        <Ability>
          <div className="meta">
            <span className="num">A2</span>
            <span className="kind">Attack</span>
          </div>
          <h3>Shield burst</h3>
          <DiagramPanel>
            <StepChainDiagram
              steps={["Burst", "Measure", "Virtual", "Server", "Project"]}
            />
          </DiagramPanel>
        </Ability>

        <Ability>
          <div className="meta">
            <span className="num">A3</span>
            <span className="kind">Heal</span>
          </div>
          <h3>Healing beam</h3>
          <Callout>
            <strong>Note</strong>
            <p>
              Beam on Tank, photodiode on ally. Both Cores → server → HP. Not a
              private wire between robots.
            </p>
          </Callout>
          <DiagramPanel>
            <HealingLinkDiagram />
          </DiagramPanel>
        </Ability>
      </ChampionBlock>

      {/* FIGHTER */}
      <ChampionBlock $accent="#ffb45a">
        <header>
          <span>02</span>
          <strong>FIGHTER</strong>
        </header>
        <h2>
          <em>Speed</em> · Reach · Precision
        </h2>

        <DiagramPanel>
          <ChampionInterfaceCard
            title="Interface split"
            role="You swing · we measure · photodiode receives heal"
            accent="#ffb45a"
            teamParts={[
              "Sword actuator",
              "Mass / reach / structure",
              "Swing control",
            ]}
            interfaceParts={["Core", "Sword IMU", "Photodiode"]}
          />
        </DiagramPanel>

        <Ability>
          <div className="meta">
            <span className="num">A1</span>
            <span className="kind">Melee</span>
          </div>
          <h3>Physical sword</h3>
          <DiagramPanel>
            <StepChainDiagram
              steps={["Swing", "IMU", "Virtual", "Server", "Damage"]}
              highlightIndex={1}
            />
          </DiagramPanel>
          <TradeoffGrid>
            <Tradeoff $accent="#ffb45a">
              <span>A</span>
              <h3>Fast + narrow</h3>
              <div className="bar">
                <i style={{ width: "85%" }} />
              </div>
              <p>Stronger hit · smaller area</p>
            </Tradeoff>
            <Tradeoff $accent="#3ecfff">
              <span>B</span>
              <h3>Wide + slower</h3>
              <div className="bar">
                <i style={{ width: "45%" }} />
              </div>
              <p>Weaker hit · larger area</p>
            </Tradeoff>
          </TradeoffGrid>
        </Ability>
      </ChampionBlock>

      {/* ARTILLERY */}
      <ChampionBlock $accent="#a78bfa">
        <header>
          <span>03</span>
          <strong>ARTILLERY</strong>
        </header>
        <h2>
          <em>Distance</em> · Prediction · Territory
        </h2>

        <DiagramPanel>
          <ChampionInterfaceCard
            title="Interface split"
            role="You launch & deploy · we measure · photodiode receives heal"
            accent="#a78bfa"
            teamParts={[
              "Launcher mechanism",
              "Mine deploy / move",
              "Carriage & control",
            ]}
            interfaceParts={["Core", "Launch sensors", "Photodiode"]}
          />
        </DiagramPanel>

        <Ability>
          <div className="meta">
            <span className="num">A1</span>
            <span className="kind">Ranged</span>
          </div>
          <h3>Launcher</h3>
          <Callout $tone="warn">
            <strong>Note</strong>
            <p>
              No real projectile at opponents. Flight is simulated over time,
              then projected.
            </p>
          </Callout>
          <DiagramPanel>
            <StepChainDiagram
              steps={["Launch", "Measure", "Flight sim", "Project", "Impact"]}
              highlightIndex={2}
            />
          </DiagramPanel>
        </Ability>

        <Ability>
          <div className="meta">
            <span className="num">A2</span>
            <span className="kind">Physical object</span>
          </div>
          <h3>Mines</h3>
          <Callout>
            <strong>Note</strong>
            <p>
              Mines exist in the arena with their own position. They can be
              moved. Not virtual projectiles.
            </p>
          </Callout>
          <DiagramPanel>
            <MinesVsProjectileDiagram />
          </DiagramPanel>
        </Ability>
      </ChampionBlock>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Weapon + optics on every champion. One attack pipeline. Heal =
          Tank↔ally optical link judged by the server. Mines stay physical.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/game">← Game</Link>
        <Link to="/arena">Next: Arena →</Link>
      </PageNav>
    </Layout>
  );
}
