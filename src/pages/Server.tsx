import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const serverResponsibilities = [
  {
    number: "01",
    title: "GAME STATE",
    description:
      "Maintains the authoritative state of every champion, structure, objective and match resource.",
  },
  {
    number: "02",
    title: "RULES",
    description:
      "Applies the game rules to physical measurements and converts them into valid game events.",
  },
  {
    number: "03",
    title: "VALIDATION",
    description:
      "Checks whether attacks, healing, interactions and objective events are actually valid.",
  },
  {
    number: "04",
    title: "MATCH CONTROL",
    description:
      "Owns timers, spawning, death, respawn, objectives, victory conditions and tournament state.",
  },
];

const stateGroups = [
  {
    name: "CHAMPIONS",
    items: [
      "Identity",
      "Position",
      "Orientation",
      "HP / LP",
      "Energy",
      "Cooldowns",
      "Alive / Dead",
      "Status effects",
    ],
  },
  {
    name: "COMBAT",
    items: [
      "Attacks",
      "Hits",
      "Damage",
      "Healing",
      "Protection",
      "Area effects",
      "Knockback",
      "Triggers",
    ],
  },
  {
    name: "ARENA",
    items: [
      "Turrets",
      "Nexus",
      "Dragon",
      "Mana monsters",
      "Power charges",
      "Power Core",
      "Gates",
      "Mine state",
    ],
  },
];

const publicApiAreas = [
  {
    title: "CORE API",
    description:
      "Robot-facing commands and events exposed by the Champion Interface.",
  },
  {
    title: "GAME API",
    description:
      "Game state, match events, champion state and validated interactions.",
  },
  {
    title: "VISUALIZATION API",
    description:
      "Projection events, trajectories, impact locations, AoE and other spectator information.",
  },
  {
    title: "DEVELOPMENT API",
    description:
      "Tools needed for teams to connect to and exercise the public test environment.",
  },
];

export default function Server() {
  return (
    <div className="site">
      <Navbar />

      {/* HEADER */}

      <header className="subpage-header server-page-header">
        <div>
          <span className="eyebrow">SERVER & PLATFORM</span>

          <h1>
            The server
            <br />
            <span>is the referee.</span>
          </h1>

          <p>
            Physical systems produce measurements. The game server decides
            what those measurements mean, maintains the authoritative match
            state and exposes that state to the visualization layer.
          </p>
        </div>

        <div className="subpage-index">
          <span>06</span>
          <small>SERVER</small>
        </div>
      </header>

      {/* PRIMARY PRINCIPLE */}

      <section className="server-principle">

        <div className="server-principle-main">
          <span className="eyebrow">AUTHORITATIVE STATE</span>

          <h2>
            The robot
            <br />
            does not
            <br />
            <span>decide.</span>
          </h2>
        </div>

        <div className="server-principle-copy">
          <p>
            A robot can say, in effect, "I moved my sword", "I emitted a
            healing signal" or "I deployed a mine". It cannot decide that
            the attack dealt 40 damage.
          </p>

          <p>
            The server receives measurements, applies the game rules and
            updates the authoritative state.
          </p>

          <div className="server-equation">
            <span>PHYSICAL EVENT</span>
            <i>→</i>
            <span>MEASUREMENT</span>
            <i>→</i>
            <strong>SERVER</strong>
            <i>→</i>
            <span>GAME STATE</span>
          </div>
        </div>

      </section>

      {/* COMPLETE LOOP */}

      <section className="server-loop">

        <div className="section-header">

          <span className="section-number">01</span>

          <div>
            <span className="eyebrow">COMPLETE DATA LOOP</span>

            <h2>
              From the arena
              <br />
              back to the arena.
            </h2>
          </div>

        </div>

        <div className="server-loop-diagram">

          <div className="server-loop-node physical">
            <small>PHYSICAL WORLD</small>
            <strong>ROBOT</strong>
            <span>
              Movement
              <br />
              weapon action
              <br />
              sensor event
            </span>
          </div>

          <div className="loop-arrow">→</div>

          <div className="server-loop-node interface">
            <small>MEASUREMENT</small>
            <strong>CORE</strong>
            <span>
              IMU
              <br />
              optical
              <br />
              champion sensors
            </span>
          </div>

          <div className="loop-arrow">→</div>

          <div className="server-loop-node transport">
            <small>COMMUNICATION</small>
            <strong>BLE / NETWORK</strong>
            <span>
              authenticated
              <br />
              event transport
            </span>
          </div>

          <div className="loop-arrow">→</div>

          <div className="server-loop-node authority">
            <small>AUTHORITY</small>
            <strong>GAME SERVER</strong>
            <span>
              rules
              <br />
              validation
              <br />
              state
            </span>
          </div>

          <div className="loop-bottom">

            <div className="loop-down">
              GAME STATE
              <strong>↓</strong>
            </div>

            <div className="loop-output">
              <div>
                <strong>ARENA</strong>
                <span>LEDs / structures</span>
              </div>

              <div>
                <strong>PROJECTION</strong>
                <span>events / trajectories / AoE</span>
              </div>

              <div>
                <strong>HUD</strong>
                <span>state / values / match</span>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* RESPONSIBILITIES */}

      <section className="server-responsibilities">

        <div className="section-header">

          <span className="section-number">02</span>

          <div>
            <span className="eyebrow">SERVER RESPONSIBILITIES</span>

            <h2>
              One authority.
              <br />
              Four jobs.
            </h2>
          </div>

        </div>

        <div className="server-responsibility-grid">

          {serverResponsibilities.map((responsibility) => (
            <article
              key={responsibility.number}
              className="server-responsibility-card"
            >
              <span>{responsibility.number}</span>

              <h3>{responsibility.title}</h3>

              <p>{responsibility.description}</p>
            </article>
          ))}

        </div>

      </section>

      {/* STATE MODEL */}

      <section className="server-state">

        <div className="server-state-copy">

          <span className="eyebrow">AUTHORITATIVE DATA MODEL</span>

          <h2>
            Everything the
            <br />
            server <span>knows.</span>
          </h2>

          <p>
            The exact schema is a later implementation detail, but the
            conceptual state model should be explicit from the beginning.
            The visualization, referee and match logic all consume this
            authoritative state rather than creating separate versions.
          </p>

        </div>

        <div className="server-state-groups">

          {stateGroups.map((group) => (
            <div className="state-group" key={group.name}>

              <div className="state-group-title">
                <strong>{group.name}</strong>
                <span>SERVER OWNED</span>
              </div>

              <div className="state-group-items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ELECTRONIC REFEREE */}

      <section className="referee-section">

        <div className="section-header">

          <span className="section-number">03</span>

          <div>
            <span className="eyebrow">ELECTRONIC REFEREE</span>

            <h2>
              Rules should
              <br />
              be <span>machine-verifiable.</span>
            </h2>
          </div>

        </div>

        <div className="referee-layout">

          <div className="referee-copy">

            <p className="large-copy">
              The electronic referee is not a separate magical system.
              It is the part of the game server responsible for deciding
              whether a measured physical event satisfies the rules.
            </p>

            <p>
              This is what allows the competition to avoid depending on
              human referees for every combat interaction.
            </p>

            <p>
              Human officials remain important for safety, sportsmanship,
              equipment inspection and exceptional cases. The normal game
              state should come from deterministic system rules.
            </p>

          </div>

          <div className="referee-examples">

            <div className="referee-case">

              <span>ATTACK</span>

              <div className="referee-question">
                <strong>Did this sword movement count?</strong>

                <div>
                  <span>Valid champion</span>
                  <i>✓</i>
                </div>

                <div>
                  <span>Movement threshold</span>
                  <i>✓</i>
                </div>

                <div>
                  <span>Target in range</span>
                  <i>✓</i>
                </div>
              </div>

              <strong className="referee-result">
                ATTACK VALID
              </strong>

            </div>

            <div className="referee-case">

              <span>HEALING</span>

              <div className="referee-question">
                <strong>Did this beam count?</strong>

                <div>
                  <span>Correct source</span>
                  <i>✓</i>
                </div>

                <div>
                  <span>Correct target</span>
                  <i>✓</i>
                </div>

                <div>
                  <span>Line of sight</span>
                  <i>✓</i>
                </div>
              </div>

              <strong className="referee-result">
                HEAL VALID
              </strong>

            </div>

          </div>

        </div>

      </section>

      {/* TRACKING */}

      <section className="tracking-section">

        <div className="tracking-copy">

          <span className="eyebrow">
            POSITION & SPATIAL STATE
          </span>

          <h2>
            The server needs
            <br />
            to know <span>where.</span>
          </h2>

          <p>
            Many game rules depend on spatial relationships: attack range,
            shield orientation, line of sight, objective zones, collisions,
            mine activation and arena regions.
          </p>

          <p>
            Tracking therefore becomes a foundational infrastructure
            problem rather than a late visualization feature.
          </p>

          <div className="tracking-requirements">

            <span>POSITION</span>
            <span>ORIENTATION</span>
            <span>ZONE</span>
            <span>DISTANCE</span>
            <span>RELATIONSHIP</span>

          </div>

        </div>

        <div className="tracking-visual">

          <div className="tracking-field">

            <div className="tracking-grid" />

            <div className="tracked-robot robot-a">
              <span>A</span>
            </div>

            <div className="tracked-robot robot-b">
              <span>B</span>
            </div>

            <div className="tracked-objective">
              CORE
            </div>

            <div className="range-circle" />

            <div className="tracking-vector">
              <span />
              <strong>RANGE</strong>
            </div>

          </div>

          <div className="tracking-caption">
            <span>TRACKING</span>
            <i>→</i>
            <span>SPATIAL MODEL</span>
            <i>→</i>
            <strong>RULE VALIDATION</strong>
          </div>

        </div>

      </section>

      {/* VISUALIZATION */}

      <section className="visualization-section">

        <div className="section-header">

          <span className="section-number">04</span>

          <div>
            <span className="eyebrow">VISUALIZATION ENGINE</span>

            <h2>
              One state.
              <br />
              Multiple views.
            </h2>
          </div>

        </div>

        <p className="section-lead">
          The visualization layer should never become a second game engine.
          It consumes authoritative server state and turns it into visual
          output appropriate for the physical arena and spectators.
        </p>

        <div className="visualization-pipeline">

          <div className="visual-source">
            <small>AUTHORITATIVE</small>
            <strong>GAME STATE</strong>
          </div>

          <div className="visual-arrow">→</div>

          <div className="visual-engine">
            <small>VISUALIZATION</small>
            <strong>RENDERING / PROJECTION</strong>
          </div>

          <div className="visual-arrow">→</div>

          <div className="visual-outputs">

            <div>
              <strong>PROJECTOR</strong>
              <span>
                Missile
                <br />
                trajectory
              </span>
            </div>

            <div>
              <strong>ARENA LEDs</strong>
              <span>
                HP
                <br />
                objective
              </span>
            </div>

            <div>
              <strong>SCREENS</strong>
              <span>
                Detailed
                <br />
                HUD
              </span>
            </div>

          </div>

        </div>

        <div className="visualization-rule">

          <span>IMPORTANT</span>

          <strong>
            Visualization reads the game state.
            It does not create or modify the game state.
          </strong>

        </div>

      </section>

      {/* PUBLIC TEST SERVER */}

      <section className="public-server-section">

        <div className="public-server-copy">

          <span className="eyebrow">
            PUBLIC TEST SERVER
          </span>

          <h2>
            The real platform,
            <br />
            before the real match.
          </h2>

          <p>
            At least two months before competition, the organization should
            expose a stable testing environment using the same public API
            and the same conceptual communication pipeline as competition.
          </p>

          <p>
            This server can operate independently from the private
            competition server while exposing the same documented behavior.
          </p>

        </div>

        <div className="public-server-card">

          <div className="public-server-card-head">
            <span>PUBLIC TEST ENVIRONMENT</span>
            <strong>ONLINE</strong>
          </div>

          <div className="public-terminal">

            <div>
              <span>API</span>
              <strong>AVAILABLE</strong>
            </div>

            <div>
              <span>GAME STATE</span>
              <strong>STREAMING</strong>
            </div>

            <div>
              <span>VISUALIZATION</span>
              <strong>AVAILABLE</strong>
            </div>

            <div>
              <span>AUTHENTICATION</span>
              <strong>TEST MODE</strong>
            </div>

          </div>

          <div className="public-flow">

            <div>
              <small>01</small>
              <strong>CONNECT ROBOT</strong>
            </div>

            <i>↓</i>

            <div>
              <small>02</small>
              <strong>SEND / RECEIVE EVENTS</strong>
            </div>

            <i>↓</i>

            <div>
              <small>03</small>
              <strong>SEE GAME STATE</strong>
            </div>

            <i>↓</i>

            <div>
              <small>04</small>
              <strong>SEE PROJECTION DATA</strong>
            </div>

          </div>

        </div>

      </section>

      {/* API */}

      <section className="api-section">

        <div className="section-header">

          <span className="section-number">05</span>

          <div>
            <span className="eyebrow">PUBLIC CONTRACT</span>

            <h2>
              Document the
              <br />
              boundary, not
              <br />
              the implementation.
            </h2>
          </div>

        </div>

        <div className="api-grid">

          {publicApiAreas.map((area, index) => (
            <article key={area.title}>

              <span>0{index + 1}</span>

              <h3>{area.title}</h3>

              <p>{area.description}</p>

            </article>
          ))}

        </div>

        <div className="api-principle">
          <span>PUBLIC CONTRACT</span>

          <strong>
            Teams should be able to build against the documented API
            without knowing how the official server is implemented.
          </strong>
        </div>

      </section>

      {/* RELIABILITY */}

      <section className="reliability-section">

        <div className="section-header">

          <span className="section-number">06</span>

          <div>
            <span className="eyebrow">RELIABILITY</span>

            <h2>
              If communication
              <br />
              fails, the game fails.
            </h2>
          </div>

        </div>

        <div className="reliability-grid">

          <div>
            <span>01</span>
            <strong>COMMUNICATION</strong>
            <p>
              The radio/network path must be stress-tested early, not
              discovered to be unreliable during tournament integration.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>STATE CONSISTENCY</strong>
            <p>
              Robot events, tracking data and server state must remain
              consistent and recover cleanly from transient failures.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>FAILURE BEHAVIOR</strong>
            <p>
              Connection loss, sensor failure and unexpected robot behavior
              need explicit system-level handling.
            </p>
          </div>

          <div>
            <span>04</span>
            <strong>OBSERVABILITY</strong>
            <p>
              Logs, metrics, diagnostics and replayable match data are
              essential for debugging a distributed physical system.
            </p>
          </div>

        </div>

      </section>

      {/* SERVER ARCHITECTURE */}

      <section className="server-stack-section">

        <div className="server-stack-copy">

          <span className="eyebrow">
            PROPOSED SOFTWARE STACK
          </span>

          <h2>
            Separate
            <br />
            concerns.
          </h2>

          <p>
            The exact technologies can be chosen later. The architectural
            separation is more important than the implementation language.
          </p>

        </div>

        <div className="server-stack">

          <div className="stack-layer client">

            <span>CLIENTS</span>

            <div>
              Robot clients
              <br />
              Admin tools
              <br />
              Spectator HUD
            </div>

          </div>

          <div className="stack-connector">↓</div>

          <div className="stack-layer api">

            <span>API / TRANSPORT</span>

            <div>
              Authentication
              <br />
              Event transport
              <br />
              State streaming
            </div>

          </div>

          <div className="stack-connector">↓</div>

          <div className="stack-layer game">

            <span>GAME ENGINE</span>

            <div>
              Rules
              <br />
              Combat
              <br />
              Objectives
              <br />
              Match lifecycle
            </div>

          </div>

          <div className="stack-connector">↓</div>

          <div className="stack-layer state">

            <span>STATE</span>

            <div>
              Champions
              <br />
              Arena
              <br />
              Match
              <br />
              Event history
            </div>

          </div>

        </div>

      </section>

      {/* NEXT */}

      <section className="next-page-section">

        <div>
          <span className="eyebrow">
            NEXT
          </span>

          <h2>
            Give teams a
            <br />
            <span>way to build.</span>
          </h2>
        </div>

        <Link to="/development" className="primary-button">
          Development ecosystem
          <span>→</span>
        </Link>

      </section>
    </div>
  );
}