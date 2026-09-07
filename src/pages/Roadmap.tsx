import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const months = [
  {
    number: "01",
    name: "DEFINE",
    subtitle: "Game + System Architecture",
    focus:
      "Freeze the conceptual boundaries before building hardware or infrastructure.",
    deliverables: [
      "Game rules v1",
      "3 champion specifications",
      "Champion Interface specification",
      "Core architecture",
      "Robot ↔ Interface API",
      "Communication architecture",
      "Arena geometry",
      "Tracking architecture",
      "Safety requirements",
    ],
    gate: "Everything required for implementation is specified.",
  },
  {
    number: "02",
    name: "BUILD THE PLATFORM",
    subtitle: "Core + Server + Protocol",
    focus:
      "Create the minimum digital and electronic infrastructure against which everything else can be developed.",
    deliverables: [
      "Core firmware",
      "Robot API",
      "BLE / network communication",
      "Game server v1",
      "Authoritative state model",
      "Basic electronic referee",
      "Tracking prototype",
      "Simulation environment",
      "Initial visualization pipeline",
    ],
    gate: "A software-only match can run end-to-end.",
  },
  {
    number: "03",
    name: "MAKE IT PHYSICAL",
    subtitle: "Champion Mechanisms",
    focus:
      "Validate that real physical actions can be measured reliably and converted into useful game events.",
    deliverables: [
      "Tank interface prototype",
      "Fighter interface prototype",
      "Artillery interface prototype",
      "Shield measurement",
      "Sword measurement",
      "Healing optical link",
      "Launcher measurement",
      "Mine interaction",
      "Physical test fixtures",
    ],
    gate: "Every champion has a working physical → server path.",
  },
  {
    number: "04",
    name: "BUILD THE ARENA",
    subtitle: "Physical Battlefield",
    focus:
      "Turn the game rules into a reliable physical environment.",
    deliverables: [
      "Three lanes",
      "Jungle",
      "Bases",
      "Turrets",
      "Nexus",
      "Dragon",
      "Mana monsters",
      "Power charges",
      "Power Core prototype",
      "Gates",
      "Selected obstacles",
      "Arena LEDs",
    ],
    gate: "A complete match can physically take place.",
  },
  {
    number: "05",
    name: "INTEGRATE",
    subtitle: "Complete System Testing",
    focus:
      "Stop testing components independently and start testing the complete competition.",
    deliverables: [
      "Robot integration",
      "1v1 testing",
      "2v2 testing",
      "3v3 testing",
      "Full tracking",
      "Team communication stress tests",
      "Objective testing",
      "Team fight testing",
      "Projection integration",
      "Initial balance passes",
    ],
    gate: "A full match can run repeatedly without engineers intervening.",
  },
  {
    number: "06",
    name: "FREEZE",
    subtitle: "Reliability + Competition",
    focus:
      "Stabilize the system. No new gameplay features unless required for safety or critical reliability.",
    deliverables: [
      "Reliability testing",
      "Communication stress testing",
      "Calibration procedure",
      "Safety verification",
      "Hardware inspection procedure",
      "Official interface preparation",
      "Tournament procedure",
      "Match recovery procedure",
      "Projection calibration",
      "Final documentation",
    ],
    gate: "The system is tournament-ready.",
  },
];

const workstreams = [
  {
    name: "GAME",
    color: "cyan",
    description:
      "Rules, champion mechanics, resources, objectives, combat and balance.",
  },
  {
    name: "HARDWARE",
    color: "orange",
    description:
      "Champion Interfaces, Core, arena electronics and physical infrastructure.",
  },
  {
    name: "SOFTWARE",
    color: "purple",
    description:
      "Server, API, communication, tracking, referee and visualization.",
  },
  {
    name: "OPERATIONS",
    color: "white",
    description:
      "Safety, calibration, inspection, tournament procedures and recovery.",
  },
];

const criticalMilestones = [
  {
    timing: "END OF MONTH 1",
    title: "SYSTEM SPECIFICATION FREEZE",
    description:
      "The game boundary, interface boundary and major arena concepts are defined well enough for implementation.",
  },
  {
    timing: "END OF MONTH 2",
    title: "END-TO-END DIGITAL PROTOTYPE",
    description:
      "A complete software match exists, including server state, rules and visualization.",
  },
  {
    timing: "END OF MONTH 3",
    title: "CHAMPION PHYSICAL PROTOTYPES",
    description:
      "The three champion concepts can produce measurable physical events.",
  },
  {
    timing: "END OF MONTH 4",
    title: "FIRST COMPLETE ARENA",
    description:
      "A match can physically occur in the intended battlefield.",
  },
  {
    timing: "T − 2 MONTHS",
    title: "PUBLIC SERVER RELEASE",
    description:
      "The public server, interface specification and public API are available to participating teams.",
  },
  {
    timing: "T − 1 MONTH",
    title: "FULL MATCH RELIABILITY",
    description:
      "Repeated full matches run without manual intervention in normal operation.",
  },
  {
    timing: "T − 2 WEEKS",
    title: "COMPETITION FREEZE",
    description:
      "Only safety-critical or reliability-critical changes remain permitted.",
  },
];

const risks = [
  {
    risk: "COMMUNICATION FAILURE",
    why:
      "Every robot depends on communication. Failure here invalidates the whole game.",
    priority: "CRITICAL",
  },
  {
    risk: "TRACKING UNCERTAINTY",
    why:
      "Many rules depend on position, orientation, range and spatial relationships.",
    priority: "CRITICAL",
  },
  {
    risk: "INTERFACE INSTABILITY",
    why:
      "A poorly designed measurement boundary creates different behavior between teams.",
    priority: "CRITICAL",
  },
  {
    risk: "ARENA COMPLEXITY",
    why:
      "Too many mechanisms increase installation, calibration and failure modes.",
    priority: "HIGH",
  },
  {
    risk: "BALANCE DISCOVERY TOO LATE",
    why:
      "Physical mechanics are expensive to rebalance after teams have already designed around them.",
    priority: "HIGH",
  },
  {
    risk: "PROJECTION CALIBRATION",
    why:
      "The projection system must remain visually aligned with the physical arena.",
    priority: "MEDIUM",
  },
];

export default function Roadmap() {
  return (
    <div className="site">
      <Navbar />

      {/* HEADER */}

      <header className="subpage-header roadmap-page-header">
        <div>
          <span className="eyebrow">IMPLEMENTATION ROADMAP</span>

          <h1>
            Six months.
            <br />
            One complete
            <br />
            <span>system.</span>
          </h1>

          <p>
            The challenge is not only to invent the game. We must design,
            prototype, integrate, test and stabilize a distributed physical
            system within a fixed six-month development window.
          </p>
        </div>

        <div className="subpage-index">
          <span>08</span>
          <small>ROADMAP</small>
        </div>
      </header>

      {/* PRINCIPLE */}

      <section className="roadmap-principle">

        <div>
          <span className="eyebrow">PROJECT PRINCIPLE</span>

          <h2>
            Build the
            <br />
            <span>platform first.</span>
          </h2>
        </div>

        <div className="roadmap-principle-copy">

          <p>
            The organization controls the competition platform, so platform
            dependencies must be resolved before asking teams to depend on
            them.
          </p>

          <p>
            We therefore prioritize the interface, protocol, server,
            tracking and simulator early. Hardware and arena features then
            integrate into an already defined system.
          </p>

          <strong>
            No critical dependency should first become real during the
            final month.
          </strong>

        </div>

      </section>

      {/* SIX MONTH TIMELINE */}

      <section className="six-month-section">

        <div className="section-header">

          <span className="section-number">01</span>

          <div>
            <span className="eyebrow">SIX-MONTH PLAN</span>

            <h2>
              The path from
              <br />
              concept to arena.
            </h2>
          </div>

        </div>

        <div className="month-timeline">

          <div className="timeline-spine" />

          {months.map((month) => (
            <article className="month-card" key={month.number}>

              <div className="month-marker">
                <span>{month.number}</span>
              </div>

              <div className="month-main">

                <div className="month-heading">

                  <div>
                    <small>MONTH {month.number}</small>

                    <h3>{month.name}</h3>

                    <strong>{month.subtitle}</strong>
                  </div>

                  <div className="month-tag">
                    PHASE {month.number}
                  </div>

                </div>

                <p className="month-focus">
                  {month.focus}
                </p>

                <div className="deliverables">

                  <span className="deliverables-title">
                    KEY DELIVERABLES
                  </span>

                  <div className="deliverable-list">
                    {month.deliverables.map((deliverable) => (
                      <span key={deliverable}>
                        {deliverable}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="phase-gate">
                  <span>EXIT CRITERION</span>

                  <strong>
                    {month.gate}
                  </strong>
                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* WORKSTREAMS */}

      <section className="workstreams-section">

        <div className="section-header">

          <span className="section-number">02</span>

          <div>
            <span className="eyebrow">PARALLEL WORKSTREAMS</span>

            <h2>
              Four disciplines.
              <br />
              One system.
            </h2>
          </div>

        </div>

        <div className="workstream-grid">

          {workstreams.map((stream) => (
            <article
              key={stream.name}
              className={`workstream-card ${stream.color}`}
            >

              <div className="workstream-marker" />

              <h3>{stream.name}</h3>

              <p>{stream.description}</p>

            </article>
          ))}

        </div>

        <div className="dependency-diagram">

          <div>
            <span>GAME</span>
            <strong>RULES</strong>
          </div>

          <i>→</i>

          <div>
            <span>INTERFACE</span>
            <strong>MEASUREMENT</strong>
          </div>

          <i>→</i>

          <div>
            <span>SERVER</span>
            <strong>INTERPRETATION</strong>
          </div>

          <i>→</i>

          <div>
            <span>ARENA</span>
            <strong>PHYSICALIZATION</strong>
          </div>

        </div>

      </section>

      {/* CRITICAL MILESTONES */}

      <section className="critical-milestones">

        <div className="section-header">

          <span className="section-number">03</span>

          <div>
            <span className="eyebrow">HARD MILESTONES</span>

            <h2>
              Deadlines that
              <br />
              protect the project.
            </h2>
          </div>

        </div>

        <div className="milestone-list">

          {criticalMilestones.map((milestone, index) => (
            <article key={milestone.timing}>

              <div className="milestone-index">
                0{index + 1}
              </div>

              <div className="milestone-timing">
                {milestone.timing}
              </div>

              <div className="milestone-content">

                <h3>{milestone.title}</h3>

                <p>{milestone.description}</p>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* PUBLIC SERVER MILESTONE */}

      <section className="roadmap-server-milestone">

        <div className="server-deadline">

          <span>T − 2 MONTHS</span>

          <strong>
            THE PLATFORM
            <br />
            BECOMES PUBLIC.
          </strong>

        </div>

        <div className="server-deadline-copy">

          <h2>
            This is not
            <br />
            a soft deadline.
          </h2>

          <p>
            By this point, participating teams need enough information and
            infrastructure to begin serious integration. The public
            interface specification, API documentation and test server
            should therefore be considered a contractual project milestone.
          </p>

          <div className="deadline-checks">

            <span>✓ OPEN INTERFACE DESIGN</span>
            <span>✓ CORE SOFTWARE</span>
            <span>✓ PUBLIC API</span>
            <span>✓ TEST SERVER</span>
            <span>✓ VISUALIZATION PIPELINE</span>

          </div>

        </div>

      </section>

      {/* TESTING PYRAMID */}

      <section className="testing-section">

        <div className="section-header">

          <span className="section-number">04</span>

          <div>
            <span className="eyebrow">TESTING STRATEGY</span>

            <h2>
              Test small.
              <br />
              Integrate early.
              <br />
              Repeat often.
            </h2>
          </div>

        </div>

        <div className="testing-pyramid">

          <div className="test-level level-1">
            <span>LEVEL 1</span>

            <div>
              <strong>UNIT / COMPONENT</strong>
              <small>
                Sensor · Core · API · rule
              </small>
            </div>
          </div>

          <div className="test-level level-2">
            <span>LEVEL 2</span>

            <div>
              <strong>SUBSYSTEM</strong>
              <small>
                Champion · communication · tracking
              </small>
            </div>
          </div>

          <div className="test-level level-3">
            <span>LEVEL 3</span>

            <div>
              <strong>INTEGRATION</strong>
              <small>
                Robot ↔ interface ↔ server
              </small>
            </div>
          </div>

          <div className="test-level level-4">
            <span>LEVEL 4</span>

            <div>
              <strong>GAME</strong>
              <small>
                Objectives · fights · respawn
              </small>
            </div>
          </div>

          <div className="test-level level-5">
            <span>LEVEL 5</span>

            <div>
              <strong>FULL MATCH</strong>
              <small>
                3v3 · arena · projection
              </small>
            </div>
          </div>

        </div>

      </section>

      {/* RISKS */}

      <section className="risk-section">

        <div className="section-header">

          <span className="section-number">05</span>

          <div>
            <span className="eyebrow">PROJECT RISKS</span>

            <h2>
              Attack the
              <br />
              dangerous parts
              <br />
              <span>first.</span>
            </h2>
          </div>

        </div>

        <div className="risk-grid">

          {risks.map((risk) => (
            <article
              key={risk.risk}
              className={`risk-card ${risk.priority.toLowerCase()}`}
            >

              <div className="risk-top">

                <span>{risk.priority}</span>

                <i />

              </div>

              <h3>{risk.risk}</h3>

              <p>{risk.why}</p>

            </article>
          ))}

        </div>

      </section>

      {/* SCOPE CONTROL */}

      <section className="scope-section">

        <div className="scope-copy">

          <span className="eyebrow">
            SCOPE CONTROL
          </span>

          <h2>
            The six-month
            <br />
            project needs
            <br />
            <span>a hard boundary.</span>
          </h2>

          <p>
            The goal is not to build the most feature-rich MOBA possible.
            The goal is to build a complete competition that reliably
            demonstrates the core concept.
          </p>

        </div>

        <div className="scope-columns">

          <div className="scope-in">

            <span>V1 MUST HAVE</span>

            <strong>
              3v3
            </strong>

            <p>
              Three champions, three lanes, jungle, combat,
              objectives, server authority, interface and projection.
            </p>

            <div>
              <span>✓</span>
              Complete match
            </div>

            <div>
              <span>✓</span>
              Physical gameplay
            </div>

            <div>
              <span>✓</span>
              Public test environment
            </div>

          </div>

          <div className="scope-out">

            <span>V1 SHOULD NOT BECOME</span>

            <strong>
              FEATURE CREEP
            </strong>

            <p>
              Additional champions, complicated transforming arenas,
              unnecessary hardware and experimental features that do not
              improve the core competition.
            </p>

            <div>
              <span>×</span>
              New systems in Month 6
            </div>

            <div>
              <span>×</span>
              Arbitrary robot restrictions
            </div>

            <div>
              <span>×</span>
              Complexity without gameplay value
            </div>

          </div>

        </div>

      </section>

      {/* FINAL GOAL */}

      <section className="roadmap-final">

        <span className="eyebrow">
          END STATE
        </span>

        <blockquote>
          At the end of six months,
          <br />
          we should not have
          <br />
          <span>a prototype.</span>
          <br />
          We should have a
          <br />
          <span>competition.</span>
        </blockquote>

        <div className="roadmap-final-links">

          <Link to="/system">
            System architecture
          </Link>

          <Link to="/game">
            Game design
          </Link>

          <Link to="/champions">
            Champions
          </Link>

          <Link to="/arena">
            Arena
          </Link>

          <Link to="/server">
            Server
          </Link>

          <Link to="/development">
            Development
          </Link>

        </div>

      </section>
    </div>
  );
}