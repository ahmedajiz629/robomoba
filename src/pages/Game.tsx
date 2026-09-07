import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const phases = [
  {
    number: "01",
    title: "DEPLOY",
    description:
      "Both teams place their three champions in the arena. There is no mandatory champion-per-lane assignment.",
  },
  {
    number: "02",
    title: "LANING",
    description:
      "Teams establish pressure across the three lanes while using the jungle to collect resources and contest neutral objectives.",
  },
  {
    number: "03",
    title: "CONTEST",
    description:
      "Teams rotate between lanes, jungle resources and major objectives. Physical positioning and robot capability determine the tactical options.",
  },
  {
    number: "04",
    title: "TEAM FIGHT",
    description:
      "Champion abilities combine physical mechanisms with server rules. Shields, sword attacks, healing, mines and artillery create different forms of interaction.",
  },
  {
    number: "05",
    title: "PUSH",
    description:
      "Winning fights and objectives creates opportunities to attack defensive structures and eventually the opposing Nexus.",
  },
  {
    number: "06",
    title: "END",
    description:
      "The match ends when one team's Nexus is destroyed or when another explicitly defined victory condition is reached.",
  },
];

const systems = [
  {
    title: "LANES",
    description:
      "Three strategic corridors structure the battlefield. They create predictable areas of conflict without determining where a particular champion must play.",
  },
  {
    title: "JUNGLE",
    description:
      "The space between lanes contains resources and neutral objectives. It creates reasons to rotate, invade, ambush and contest territory.",
  },
  {
    title: "RESOURCES",
    description:
      "Energy is a game resource used by champions. Mana monsters and power charges create recurring reasons to leave a lane.",
  },
  {
    title: "STRUCTURES",
    description:
      "Turrets and the Nexus turn positional advantage into measurable progress toward victory.",
  },
];

const neutralObjectives = [
  {
    name: "MANA MONSTERS",
    kind: "RECURRING RESOURCE",
    description:
      "Neutral jungle entities that restore or provide energy. Their purpose is to create repeated smaller contests.",
    color: "cyan",
  },
  {
    name: "POWER CHARGES",
    kind: "MAP RESOURCE",
    description:
      "Distributed pickups that provide a temporary or strategic advantage and encourage movement across the map.",
    color: "orange",
  },
  {
    name: "DRAGON",
    kind: "MAJOR OBJECTIVE",
    description:
      "A significant neutral objective whose reward is valuable enough to force teams to prepare, rotate and fight for control.",
    color: "purple",
  },
  {
    name: "POWER CORE",
    kind: "UNIQUE OBJECTIVE",
    description:
      "A central physical objective designed specifically for this competition. Capturing, escorting or contesting it makes physical positioning itself a game mechanic.",
    color: "cyan",
  },
];

const combatExamples = [
  {
    champion: "FIGHTER",
    action: "SWORD SWING",
    measurement: "IMU + MOTION",
    interpretation: "Attack strength + geometry",
    outcome: "Damage / hit area",
  },
  {
    champion: "TANK",
    action: "SHIELD POSITION",
    measurement: "ORIENTATION + POSITION",
    interpretation: "Protection geometry",
    outcome: "Damage mitigation",
  },
  {
    champion: "TANK",
    action: "HEALING BEAM",
    measurement: "OPTICAL SIGNAL",
    interpretation: "Source + target + LOS",
    outcome: "Healing",
  },
  {
    champion: "ARTILLERY",
    action: "LAUNCH",
    measurement: "LAUNCH PARAMETERS",
    interpretation: "Simulated trajectory",
    outcome: "Projected impact / AoE",
  },
  {
    champion: "ARTILLERY",
    action: "MINE",
    measurement: "PHYSICAL TRIGGER",
    interpretation: "Opponent interaction",
    outcome: "Damage / slow / effect",
  },
];

export default function Game() {
  return (
    <div className="site">
      <Navbar />

      {/* HEADER */}

      <header className="subpage-header game-header">
        <div>
          <span className="eyebrow">GAME DESIGN</span>

          <h1>
            A MOBA that
            <br />
            <span>actually exists.</span>
          </h1>

          <p>
            The rules are digital, but the decisions are made through
            physical machines operating in a physical battlefield.
            The game must therefore be understandable as both a MOBA
            and an engineering system.
          </p>
        </div>

        <div className="subpage-index">
          <span>03</span>
          <small>GAME</small>
        </div>
      </header>

      {/* FORMAT */}

      <section className="game-format">
        <div className="section-header">
          <span className="section-number">01</span>

          <div>
            <span className="eyebrow">MATCH FORMAT</span>

            <h2>
              3v3.
              <br />
              Three champions.
              <br />
              Free deployment.
            </h2>
          </div>
        </div>

        <div className="format-explanation">
          <div className="format-large">
            <span>TEAM</span>
            <strong>03</strong>
            <small>CHAMPIONS</small>
          </div>

          <div className="format-copy">
            <p>
              Each team simultaneously fields three champions:
              Tank / Support, Fighter and Artillery.
            </p>

            <p>
              The map still contains three lanes and a jungle, but
              <strong> no champion is permanently assigned to a lane.</strong>
              Teams decide where to deploy, when to rotate and how to
              combine their champions.
            </p>

            <p>
              The first edition is deliberately 3v3 so the organization
              can make the complete physical and digital system reliable
              within the six-month development window.
            </p>
          </div>
        </div>

        <div className="deployment-diagram">
          <div className="deployment-map">
            <div className="deployment-lane top">
              TOP
            </div>

            <div className="deployment-lane mid">
              MID
            </div>

            <div className="deployment-lane bot">
              BOT
            </div>

            <div className="deployment-jungle">
              JUNGLE
            </div>

            <div className="deployment-robot tank">
              TANK
            </div>

            <div className="deployment-robot fighter">
              FIGHTER
            </div>

            <div className="deployment-robot artillery">
              ARTILLERY
            </div>
          </div>

          <div className="deployment-caption">
            <span>NO FIXED LANES</span>
            <p>
              Top / Mid / Bot are map regions, not champion classes.
              The team chooses the deployment strategy.
            </p>
          </div>
        </div>
      </section>

      {/* MATCH LOOP */}

      <section className="match-loop">
        <div className="section-header">
          <span className="section-number">02</span>

          <div>
            <span className="eyebrow">MATCH LOOP</span>

            <h2>
              The match is a
              <br />
              continuous system.
            </h2>
          </div>
        </div>

        <div className="phase-grid">
          {phases.map((phase) => (
            <article className="phase-card" key={phase.number}>
              <span>{phase.number}</span>

              <h3>{phase.title}</h3>

              <p>{phase.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* MAP LOGIC */}

      <section className="map-logic">
        <div className="section-header">
          <span className="section-number">03</span>

          <div>
            <span className="eyebrow">MAP LOGIC</span>

            <h2>
              Every part of the
              <br />
              arena has a purpose.
            </h2>
          </div>
        </div>

        <div className="map-logic-grid">
          {systems.map((system, index) => (
            <article key={system.title} className="map-logic-card">
              <span>0{index + 1}</span>

              <h3>{system.title}</h3>

              <p>{system.description}</p>
            </article>
          ))}
        </div>

        <div className="map-principle">
          <span className="eyebrow">DESIGN INTENT</span>

          <p>
            <strong>
              Lanes create structure.
            </strong>

            <span>
              Jungle creates movement.
            </span>

            <span>
              Objectives create conflict.
            </span>

            <span>
              Structures create progress.
            </span>
          </p>
        </div>
      </section>

      {/* RESOURCES */}

      <section className="resources-section">
        <div className="section-header">
          <span className="section-number">04</span>

          <div>
            <span className="eyebrow">RESOURCES & OBJECTIVES</span>

            <h2>
              Give teams
              <br />
              reasons to move.
            </h2>
          </div>
        </div>

        <p className="section-lead">
          A MOBA becomes strategically interesting when staying in one
          place is not always optimal. Resources and neutral objectives
          therefore exist to pull teams away from a static lane setup.
        </p>

        <div className="objective-grid">
          {neutralObjectives.map((objective) => (
            <article
              key={objective.name}
              className={`objective-card ${objective.color}`}
            >
              <div className="objective-orb" />

              <span>{objective.kind}</span>

              <h3>{objective.name}</h3>

              <p>{objective.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COMBAT */}

      <section className="combat-section">
        <div className="section-header">
          <span className="section-number">05</span>

          <div>
            <span className="eyebrow">COMBAT MODEL</span>

            <h2>
              Physical action
              <br />
              becomes game logic.
            </h2>
          </div>
        </div>

        <p className="section-lead">
          Combat should not be reduced to pressing a button that tells
          the server to deal damage. The robot produces a real physical
          action. Sensors measure it. The server interprets it according
          to the game rules.
        </p>

        <div className="combat-table">
          <div className="combat-table-header">
            <span>CHAMPION</span>
            <span>PHYSICAL ACTION</span>
            <span>MEASUREMENT</span>
            <span>INTERPRETATION</span>
            <span>GAME RESULT</span>
          </div>

          {combatExamples.map((example) => (
            <div className="combat-row" key={`${example.champion}-${example.action}`}>
              <strong>{example.champion}</strong>
              <span>{example.action}</span>
              <span>{example.measurement}</span>
              <span>{example.interpretation}</span>
              <span>{example.outcome}</span>
            </div>
          ))}
        </div>

        <Link className="page-link" to="/champions">
          Explore each champion's physical mechanism →
        </Link>
      </section>

      {/* HP / ENERGY */}

      <section className="state-section">
        <div className="state-grid">
          <div className="state-copy">
            <span className="eyebrow">GAME STATE</span>

            <h2>
              Keep the state
              <br />
              <span>digital.</span>
            </h2>

            <p>
              HP, energy, cooldowns, status effects, damage, death,
              respawn and other abstract game state belong to the
              authoritative server.
            </p>

            <p>
              This prevents the competition from requiring unnecessary
              physical hardware simply to represent numbers that have
              no gameplay value as physical objects.
            </p>
          </div>

          <div className="state-panel">
            <div className="state-row">
              <span>CHAMPION</span>
              <strong>FIGHTER</strong>
            </div>

            <div className="state-row">
              <span>HP</span>

              <div className="state-bar">
                <i style={{ width: "74%" }} />
              </div>

              <strong>740 / 1000</strong>
            </div>

            <div className="state-row">
              <span>ENERGY</span>

              <div className="state-bar energy">
                <i style={{ width: "46%" }} />
              </div>

              <strong>46 / 100</strong>
            </div>

            <div className="state-row">
              <span>STATUS</span>
              <strong className="cyan-text">ALIVE</strong>
            </div>

            <div className="state-row">
              <span>ULTIMATE</span>
              <strong>READY</strong>
            </div>
          </div>
        </div>
      </section>

      {/* DEATH */}

      <section className="death-section">
        <div className="section-header">
          <span className="section-number">06</span>

          <div>
            <span className="eyebrow">DEATH & RESPAWN</span>

            <h2>
              Losing a fight
              <br />
              has consequences.
            </h2>
          </div>
        </div>

        <div className="death-flow">
          <div>
            <span>01</span>
            <strong>LP → 0</strong>
            <small>SERVER REGISTERS DEATH</small>
          </div>

          <i>→</i>

          <div>
            <span>02</span>
            <strong>DEAD</strong>
            <small>OFFENSIVE ABILITIES DISABLED</small>
          </div>

          <i>→</i>

          <div>
            <span>03</span>
            <strong>RETURN</strong>
            <small>CHAMPION RETURNS TO BASE</small>
          </div>

          <i>→</i>

          <div>
            <span>04</span>
            <strong>RESPAWN</strong>
            <small>CHAMPION RE-ENTERS THE GAME</small>
          </div>
        </div>

        <p className="death-note">
          The exact behavior of the physical robot while its champion is
          dead is an implementation detail to finalize during the rules
          and safety design. The authoritative game state remains DEAD
          regardless of the robot's physical condition.
        </p>
      </section>

      {/* STRUCTURES */}

      <section className="structures-section">
        <div className="structures-copy">
          <span className="eyebrow">PROGRESS TOWARD VICTORY</span>

          <h2>
            Turrets protect
            <br />
            the <span>Nexus.</span>
          </h2>

          <p>
            The arena needs a clear spatial progression so that battles
            produce visible changes in the state of the map.
          </p>

          <div className="structure-principles">
            <div>
              <strong>TURRETS</strong>
              <span>
                Defensive structures represented physically with
                visible HP through LED strips.
              </span>
            </div>

            <div>
              <strong>NEXUS</strong>
              <span>
                Final objective whose destruction determines victory.
              </span>
            </div>
          </div>

          <Link to="/arena" className="page-link">
            Explore the arena →
          </Link>
        </div>

        <div className="structure-visual">
          <div className="turret-visual">
            <div className="turret-top" />
            <div className="turret-body" />

            <div className="turret-hp">
              <span>HP</span>

              <div>
                <i style={{ width: "68%" }} />
              </div>

              <strong>68%</strong>
            </div>
          </div>

          <div className="nexus-visual">
            <span>NEXUS</span>
          </div>
        </div>
      </section>

      {/* GAME PRINCIPLE */}

      <section className="game-principle">
        <span className="eyebrow">GAME DESIGN PRINCIPLE</span>

        <blockquote>
          The physical world creates
          <br />
          the <span>decisions.</span>
          <br />
          The digital world maintains
          <br />
          the <span>rules.</span>
        </blockquote>

        <div className="principle-actions">
          <Link to="/champions">Champion design →</Link>
          <Link to="/arena">Arena design →</Link>
          <Link to="/server">Server design →</Link>
        </div>
      </section>

      {/* NEXT */}

      <section className="next-page-section">
        <div>
          <span className="eyebrow">NEXT</span>

          <h2>
            Define the
            <br />
            <span>champions.</span>
          </h2>
        </div>

        <Link to="/champions" className="primary-button">
          Champion architecture
          <span>→</span>
        </Link>
      </section>
    </div>
  );
}