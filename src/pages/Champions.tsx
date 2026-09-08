import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ChapterNav from "../components/ChapterNav";
import {
  SharedCombatPipelineDiagram,
  HealingLinkDiagram,
  MinesVsProjectileDiagram,
  ChampionInterfaceCard,
} from "../components/diagrams";
import {
  JumpNav,
  Compare,
  AccentHead,
  Dossier,
  AbilityRow,
  AbilityTile,
  Note,
  SectionLabel,
  SoftRule,
  DossierHint,
  TradePair,
} from "../components/ChampionUI";
import {
  PageIntro,
  Eyebrow,
  WideSection,
  DiagramPanel,
  PageNav,
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
          Compare the three, learn the one shared rule, then open each dossier.
          Every interface = weapon + optics.
        </p>
      </PageIntro>

      <JumpNav>
        <a href="#compare">1 Compare</a>
        <a href="#pipeline">2 Pipeline</a>
        <a href="#heal">3 Heal</a>
        <a href="#tank">Tank</a>
        <a href="#fighter">Fighter</a>
        <a href="#artillery">Artillery</a>
      </JumpNav>

      <WideSection id="compare">
        <SectionLabel>1 · Side by side</SectionLabel>
        <Compare>
          <div className="corner" />
          <AccentHead className="head" $accent="#3ecfff">
            <strong>Tank / Support</strong>
            <span>01</span>
          </AccentHead>
          <AccentHead className="head" $accent="#ffb45a">
            <strong>Fighter</strong>
            <span>02</span>
          </AccentHead>
          <AccentHead className="head" $accent="#a78bfa">
            <strong>Artillery</strong>
            <span>03</span>
          </AccentHead>

          <div className="label">Weapon</div>
          <div className="cell">
            Heavy shield
            <small>Defense + burst attack</small>
          </div>
          <div className="cell">
            Physical sword
            <small>Melee swing</small>
          </div>
          <div className="cell">
            Launcher + mines
            <small>Range + territory</small>
          </div>

          <div className="label">Optics</div>
          <div className="cell">
            Light beam
            <small>Emitter · heals allies</small>
          </div>
          <div className="cell">
            Photodiode
            <small>Receiver · can be healed</small>
          </div>
          <div className="cell">
            Photodiode
            <small>Receiver · can be healed</small>
          </div>

          <div className="label">Team builds</div>
          <div className="cell">Shield mechanism & pose</div>
          <div className="cell">Sword actuator & control</div>
          <div className="cell">Launcher + mine deploy</div>

          <div className="label">We measure</div>
          <div className="cell">Shield / motion sensors</div>
          <div className="cell">Sword IMU</div>
          <div className="cell">Launch parameters</div>
        </Compare>
        <Note>
          <strong>Start here.</strong>
          Differences are easiest to see in this grid.
        </Note>
      </WideSection>

      <WideSection id="pipeline">
        <SectionLabel>2 · One pipeline for every attack</SectionLabel>
        <DiagramPanel>
          <SharedCombatPipelineDiagram />
          <figcaption>
            Physical → measure → virtual → server → simulate → project
          </figcaption>
        </DiagramPanel>
        <Note>
          <strong>Including</strong> shield burst, sword, and launcher. Flight
          only lasts longer in simulation — same steps.
        </Note>
      </WideSection>

      <WideSection id="heal">
        <SectionLabel>3 · Heal crosses two champions</SectionLabel>
        <DiagramPanel>
          <HealingLinkDiagram />
          <figcaption>Beam and photodiode live on different robots</figcaption>
        </DiagramPanel>
        <Note>
          <strong>Not a private wire.</strong>
          Both Cores → server → HP update.
        </Note>
      </WideSection>

      <SoftRule />

      <SectionLabel>4 · Dossiers</SectionLabel>
      <DossierHint>
        Same layout each time: badges → who owns what → abilities.
      </DossierHint>

      <Dossier id="tank" $accent="#3ecfff">
        <div className="banner">
          <span className="id">01</span>
          <h2>Tank / Support</h2>
          <div className="badges">
            <span className="badge on">Weapon · shield</span>
            <span className="badge on">Optics · light beam</span>
          </div>
        </div>
        <div className="body split">
          <DiagramPanel>
            <ChampionInterfaceCard
              title="Who owns what"
              role="Protect · burst · emit heal"
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
          <AbilityRow>
            <AbilityTile $wide>
              <div className="tag">
                <b>A1</b>
                <span>Defense</span>
              </div>
              <h3>Heavy shield</h3>
              <p>Pose and distance drive protection.</p>
              <div className="chips">
                <i>distance</i>
                <i>orientation</i>
                <i>attack geometry</i>
                <i>→ protection</i>
              </div>
            </AbilityTile>
            <AbilityTile $wide>
              <div className="tag">
                <b>A2</b>
                <span>Attack</span>
              </div>
              <h3>Shield burst</h3>
              <p>Same pipeline — usually near-instant.</p>
              <div className="chips">
                <i>burst</i>
                <i>measure</i>
                <i>server</i>
                <i>→ damage / knockback</i>
              </div>
            </AbilityTile>
            <AbilityTile $wide>
              <div className="tag">
                <b>A3</b>
                <span>Heal</span>
              </div>
              <h3>Light beam</h3>
              <p>Emitter only. Ally photodiode + server apply HP.</p>
              <div className="chips">
                <i>LOS</i>
                <i>alignment</i>
                <i>modulation</i>
              </div>
            </AbilityTile>
          </AbilityRow>
        </div>
      </Dossier>

      <Dossier id="fighter" $accent="#ffb45a">
        <div className="banner">
          <span className="id">02</span>
          <h2>Fighter</h2>
          <div className="badges">
            <span className="badge on">Weapon · sword</span>
            <span className="badge on">Optics · photodiode</span>
          </div>
        </div>
        <div className="body split">
          <DiagramPanel>
            <ChampionInterfaceCard
              title="Who owns what"
              role="Swing · measure · receive heal"
              accent="#ffb45a"
              teamParts={[
                "Sword actuator",
                "Mass / reach / structure",
                "Swing control",
              ]}
              interfaceParts={["Core", "Sword IMU", "Photodiode"]}
            />
          </DiagramPanel>
          <div>
            <AbilityTile>
              <div className="tag">
                <b>A1</b>
                <span>Melee</span>
              </div>
              <h3>Physical sword</h3>
              <p>The swing is the input — not a button press.</p>
              <div className="chips">
                <i>swing</i>
                <i>IMU</i>
                <i>virtual hit</i>
                <i>→ damage / area</i>
              </div>
            </AbilityTile>
            <TradePair>
              <AbilityTile>
                <div className="tag">
                  <b>A</b>
                  <span>Tradeoff</span>
                </div>
                <h3>Fast + narrow</h3>
                <p>Stronger · smaller area</p>
              </AbilityTile>
              <AbilityTile>
                <div className="tag">
                  <b>B</b>
                  <span>Tradeoff</span>
                </div>
                <h3>Wide + slower</h3>
                <p>Weaker · larger area</p>
              </AbilityTile>
            </TradePair>
          </div>
        </div>
      </Dossier>

      <Dossier id="artillery" $accent="#a78bfa">
        <div className="banner">
          <span className="id">03</span>
          <h2>Artillery</h2>
          <div className="badges">
            <span className="badge on">Launcher</span>
            <span className="badge on">Mines</span>
            <span className="badge on">Photodiode</span>
          </div>
        </div>
        <div className="body">
          <DiagramPanel>
            <ChampionInterfaceCard
              title="Who owns what"
              role="Launch & deploy · measure · receive heal"
              accent="#a78bfa"
              teamParts={[
                "Launcher mechanism",
                "Mine deploy / move",
                "Carriage & control",
              ]}
              interfaceParts={["Core", "Launch sensors", "Photodiode"]}
            />
          </DiagramPanel>

          <AbilityRow>
            <AbilityTile>
              <div className="tag">
                <b>A1</b>
                <span>Ranged</span>
              </div>
              <h3>Launcher</h3>
              <p>Same pipeline; flight lasts over time.</p>
              <div className="chips">
                <i>launch</i>
                <i>measure</i>
                <i>flight sim</i>
                <i>→ project</i>
              </div>
            </AbilityTile>
            <AbilityTile>
              <div className="tag">
                <b>A2</b>
                <span>Physical</span>
              </div>
              <h3>Mines</h3>
              <p>Own position. Can move. Not virtual.</p>
              <div className="chips">
                <i>deploy</i>
                <i>position</i>
                <i>trigger</i>
              </div>
            </AbilityTile>
            <AbilityTile>
              <div className="tag">
                <b>—</b>
                <span>Safety</span>
              </div>
              <h3>No real projectile</h3>
              <p>Nothing dangerous is fired at opponents.</p>
            </AbilityTile>
          </AbilityRow>

          <Note $tone="warn">
            <strong>Mines ≠ projectiles.</strong>
            After measurement, shots become virtual. Mines stay physical.
          </Note>
          <DiagramPanel>
            <MinesVsProjectileDiagram />
          </DiagramPanel>
        </div>
      </Dossier>

      <Takeaway>
        <strong>Reading order</strong>
        <p>
          Grid → pipeline → heal → dossiers. Each dossier only adds what is
          unique to that champion.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/game">← Game</Link>
        <Link to="/arena">Next: Arena →</Link>
      </PageNav>
    </Layout>
  );
}
