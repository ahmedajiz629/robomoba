import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const interfaceParts = [
  {
    name: "CORE",
    description:
      "The central electronics module. It powers the interface, exposes the robot-facing API and provides BLE/network communication with the game platform.",
    owner: "ORGANIZATION",
  },
  {
    name: "MEASUREMENT",
    description:
      "Official sensors such as IMUs, photodiodes and other champion-specific measurement hardware used to determine what physically happened.",
    owner: "ORGANIZATION",
  },
  {
    name: "PHYSICAL CONNECTIONS",
    description:
      "The protected hard-wired connections between Core and official components. They are assembled by the organization and are not intended to be modified.",
    owner: "ORGANIZATION",
  },
  {
    name: "CHAMPION-SPECIFIC I/O",
    description:
      "The standardized interface through which the robot's mechanism is measured and interpreted as the corresponding champion ability.",
    owner: "ORGANIZATION",
  },
];

const boundaries = [
  {
    title: "TEAM OWNS",
    color: "team",
    items: [
      "Chassis",
      "Motors / locomotion",
      "Actuators",
      "Weapon mechanisms",
      "Shield mechanism",
      "Launcher mechanism",
      "Mine deployment",
      "Robot control software",
      "Mechanical design",
    ],
  },
  {
    title: "ORGANIZATION OWNS",
    color: "organization",
    items: [
      "Champion Interface",
      "Core",
      "Official sensors",
      "Competition authentication",
      "Arena infrastructure",
      "Game server",
      "Tracking",
      "Electronic referee",
      "Visualization pipeline",
    ],
  },
];

const communicationSteps = [
  {
    number: "01",
    title: "ROBOT → CORE",
    description:
      "The team's robot communicates with the Champion Interface through the standardized USB connection. USB provides both power and data.",
  },
  {
    number: "02",
    title: "CORE → PLATFORM",
    description:
      "The Core communicates with the competition platform using BLE/network connectivity. The Core therefore becomes the controlled bridge between robot hardware and the game.",
  },
  {
    number: "03",
    title: "SERVER → GAME STATE",
    description:
      "The server validates measurements and applies game rules. It decides what actually happened: attack, hit, damage, healing, objective interaction, death and so on.",
  },
  {
    number: "04",
    title: "GAME STATE → VISUALIZATION",
    description:
      "The resulting state is exposed to the visualization layer, which can drive projection, arena LEDs and spectator displays.",
  },
];

export default function System() {
  return (
    <div className="site">
      {/* PAGE HEADER */}
      <Navbar />

      <header className="subpage-header">

        <div>
          <span className="eyebrow">SYSTEM ARCHITECTURE</span>

          <h1>
            The competition
            <br />
            is a <span>platform.</span>
          </h1>

          <p>
            The central architectural decision is to separate the game,
            the measurement boundary and the robot engineering. We provide
            a standardized interface and authoritative game infrastructure.
            Teams engineer the machine that interacts with it.
          </p>
        </div>

        <div className="subpage-index">
          <span>02</span>
          <small>SYSTEM</small>
        </div>

      </header>


      {/* CORE PRINCIPLE */}

      <section className="system-principle">

        <div className="system-principle-main">
          <span className="eyebrow">BOUNDARY</span>

          <h2>
            Standardize
            <br />
            the <span>measurement.</span>
          </h2>
        </div>

        <div className="system-principle-text">
          <p>
            We do not standardize the robot. We standardize the information
            required to determine how that robot interacts with the game.
          </p>

          <p>
            This gives every team the same competition interface while
            leaving mechanical engineering open.
          </p>

          <strong>
            The organization standardizes the measurement.
            <br />
            The team engineers the physical action.
          </strong>
        </div>

      </section>


      {/* COMPLETE ARCHITECTURE */}

      <section className="system-architecture">

        <div className="section-header">

          <span className="section-number">01</span>

          <div>
            <span className="eyebrow">COMPLETE ARCHITECTURE</span>

            <h2>
              From physical
              <br />
              action to game state.
            </h2>
          </div>

        </div>

        <div className="big-architecture">

          {/* PHYSICAL SIDE */}

          <div className="architecture-side">

            <div className="arch-side-label">
              PHYSICAL WORLD
            </div>

            <div className="arch-node team-node-large">

              <div className="node-type">TEAM</div>

              <h3>TEAM ROBOT</h3>

              <div className="node-list">
                <span>Chassis</span>
                <span>Locomotion</span>
                <span>Actuators</span>
                <span>Weapons</span>
                <span>Mechanisms</span>
                <span>Control software</span>
              </div>

            </div>

          </div>


          <div className="arch-connector">

            <div className="connector-line" />

            <span>USB</span>

            <div className="connector-arrow">
              →
            </div>

          </div>


          {/* INTERFACE */}

          <div className="architecture-side">

            <div className="arch-side-label cyan">
              STANDARDIZED BOUNDARY
            </div>

            <div className="arch-node interface-node-large">

              <div className="node-type">
                ORGANIZATION
              </div>

              <h3>CHAMPION INTERFACE</h3>

              <div className="node-list">
                <span>Core</span>
                <span>IMU / sensors</span>
                <span>Photodiode</span>
                <span>Champion-specific I/O</span>
                <span>Protected wiring</span>
                <span>Competition token</span>
              </div>

            </div>

          </div>


          <div className="arch-connector">

            <div className="connector-line" />

            <span>BLE / NETWORK</span>

            <div className="connector-arrow">
              →
            </div>

          </div>


          {/* SERVER */}

          <div className="architecture-side">

            <div className="arch-side-label purple">
              AUTHORITATIVE
            </div>

            <div className="arch-node server-node-large">

              <div className="node-type">
                ORGANIZATION
              </div>

              <h3>GAME SERVER</h3>

              <div className="node-list">
                <span>Game state</span>
                <span>Rules engine</span>
                <span>Combat validation</span>
                <span>Objective state</span>
                <span>Electronic referee</span>
                <span>Match management</span>
              </div>

            </div>

          </div>


          {/* VISUALIZATION */}

          <div className="visualization-connector">
            <div className="vertical-line" />
            <span>GAME STATE</span>
            <div className="down-arrow">↓</div>
          </div>

          <div className="visualization-row">

            <div>
              <strong>PROJECTION</strong>
              <span>
                Trajectories · AoE · Impacts · Effects
              </span>
            </div>

            <div>
              <strong>ARENA</strong>
              <span>
                Turret HP · Objective state · LEDs
              </span>
            </div>

            <div>
              <strong>SPECTATOR HUD</strong>
              <span>
                Champions · HP · Energy · Match state
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* CHAMPION INTERFACE */}

      <section className="interface-section">

        <div className="section-header">

          <span className="section-number">02</span>

          <div>
            <span className="eyebrow">CHAMPION INTERFACE</span>

            <h2>
              One interface.
              <br />
              Different robots.
            </h2>
          </div>

        </div>

        <div className="interface-layout">

          <div className="interface-description">

            <p className="large-copy">
              The Champion Interface is the organization's standardized
              hardware boundary. There is one official interface design
              for each champion type.
            </p>

            <p>
              For the first 3v3 competition, the tournament requires only
              six official assemblies: two Tank interfaces, two Fighter
              interfaces and two Artillery interfaces.
            </p>

            <p>
              The organization can manufacture additional units for
              development, calibration and replacement, but the interface
              specification itself remains common.
            </p>

          </div>

          <div className="interface-stack">

            <div className="interface-stack-item active">
              <span>01</span>

              <div>
                <strong>CORE</strong>
                <small>
                  Power + API + communication
                </small>
              </div>
            </div>

            <div className="interface-stack-item">
              <span>02</span>

              <div>
                <strong>MEASUREMENT</strong>
                <small>
                  IMU + optical + champion sensors
                </small>
              </div>
            </div>

            <div className="interface-stack-item">
              <span>03</span>

              <div>
                <strong>PHYSICAL CONNECTION</strong>
                <small>
                  Protected hard-wired assembly
                </small>
              </div>
            </div>

            <div className="interface-stack-item">
              <span>04</span>

              <div>
                <strong>COMPETITION IDENTITY</strong>
                <small>
                  Official patched authentication token
                </small>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* SEALED HARDWARE */}

      <section className="sealed-section">

        <div className="sealed-visual">

          <div className="sealed-frame">

            <div className="sealed-topline">
              OFFICIAL COMPETITION ASSEMBLY
            </div>

            <div className="sealed-body">

              <div className="sealed-core">
                CORE
              </div>

              <div className="sealed-wire wire-one" />
              <div className="sealed-wire wire-two" />
              <div className="sealed-wire wire-three" />

              <div className="sealed-component c-one">
                IMU
              </div>

              <div className="sealed-component c-two">
                SENSOR
              </div>

              <div className="sealed-component c-three">
                I/O
              </div>

            </div>

            <div className="seal">
              SEALED
            </div>

          </div>

        </div>

        <div className="sealed-copy">

          <span className="eyebrow">
            OFFICIAL HARDWARE
          </span>

          <h2>
            Standardized.
            <br />
            Sealed.
            <br />
            <span>Auditable.</span>
          </h2>

          <p>
            The protected links between Core and official components are
            assembled by the organization. The assembly is not intended
            to be disassembled without physically cutting the wiring.
          </p>

          <p>
            Attempting to disassemble, modify, bypass or tamper with the
            official assembly is a competition violation and results in
            disqualification.
          </p>

          <div className="warning-box">
            <strong>WHY?</strong>

            <span>
              Every team must interact with exactly the same measurement
              boundary. The robot remains open; the competition interface
              remains controlled.
            </span>
          </div>

        </div>

      </section>


      {/* RESPONSIBILITY BOUNDARY */}

      <section className="responsibility-section system-responsibility">

        <div className="section-header">

          <span className="section-number">03</span>

          <div>
            <span className="eyebrow">RESPONSIBILITY BOUNDARY</span>

            <h2>
              What is ours?
              <br />
              What is theirs?
            </h2>
          </div>

        </div>

        <div className="boundary-grid">

          {boundaries.map((boundary) => (
            <div
              key={boundary.title}
              className={`boundary-card ${boundary.color}`}
            >

              <div className="boundary-title">
                <span className="boundary-marker" />
                <strong>{boundary.title}</strong>
              </div>

              <div className="boundary-items">
                {boundary.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* INTERFACE COMPONENTS */}

      <section className="components-section">

        <div className="section-header">

          <span className="section-number">04</span>

          <div>
            <span className="eyebrow">INTERFACE COMPONENTS</span>

            <h2>
              What exactly
              <br />
              do we provide?
            </h2>
          </div>

        </div>

        <div className="component-grid">

          {interfaceParts.map((part, index) => (
            <article key={part.name} className="component-card">

              <div className="component-card-top">
                <span>0{index + 1}</span>
                <small>{part.owner}</small>
              </div>

              <h3>{part.name}</h3>

              <p>{part.description}</p>

            </article>
          ))}

        </div>

      </section>


      {/* OPEN SOURCE */}

      <section className="opensource-section">

        <div className="opensource-copy">

          <span className="eyebrow">
            TRANSPARENCY MODEL
          </span>

          <h2>
            Open by design.
            <br />
            Private only
            <br />
            <span>where necessary.</span>
          </h2>

          <p>
            Everything required to reproduce and understand the Champion
            Interface should be public. Teams should not need to reverse
            engineer our hardware or guess how the protocol works.
          </p>

        </div>

        <div className="opensource-boundary">

          <div className="open-column">

            <div className="open-column-title">
              <span>OPEN SOURCE</span>
              <small>PUBLIC</small>
            </div>

            <div className="open-items">
              <span>Interface hardware design</span>
              <span>Interface software</span>
              <span>Core API</span>
              <span>Communication protocol</span>
              <span>Documentation</span>
              <span>Development tools</span>
              <span>Test interface implementation</span>
            </div>

          </div>

          <div className="private-column">

            <div className="open-column-title">
              <span>PRIVATE</span>
              <small>COMPETITION</small>
            </div>

            <div className="open-items">
              <span>Competition-time patched token</span>
              <span>Game server implementation</span>
            </div>

          </div>

        </div>

      </section>


      {/* PUBLIC TEST SERVER */}

      <section className="test-server-section">

        <div className="section-header">

          <span className="section-number">05</span>

          <div>
            <span className="eyebrow">
              DEVELOPMENT INFRASTRUCTURE
            </span>

            <h2>
              Teams should
              <br />
              practice against
              <br />
              the <span>real system.</span>
            </h2>
          </div>

        </div>

        <div className="test-server-layout">

          <div className="test-server-copy">

            <p className="large-copy">
              The official test server must be available at least two
              months before the competition.
            </p>

            <p>
              Teams can connect their development robot, implement against
              the public API and observe how physical inputs are converted
              into game state.
            </p>

            <p>
              The goal is to remove integration surprises. The competition
              should not be the first time a team discovers how the
              protocol or game server behaves.
            </p>

            <div className="milestone">
              <span>T − 2 MONTHS</span>
              <strong>
                PUBLIC SERVER + API + INTERFACE SPECIFICATION
              </strong>
            </div>

          </div>


          <div className="test-server-diagram">

            <div className="test-box robot">
              <small>TEAM</small>
              <strong>ROBOT</strong>
              <span>
                local development
              </span>
            </div>

            <div className="test-arrow">
              USB
              <strong>↓</strong>
            </div>

            <div className="test-box interface">
              <small>OPEN SOURCE</small>
              <strong>INTERFACE</strong>
              <span>
                team replica
              </span>
            </div>

            <div className="test-arrow">
              BLE / NETWORK
              <strong>↓</strong>
            </div>

            <div className="test-box server">
              <small>PUBLIC</small>
              <strong>TEST SERVER</strong>
              <span>
                real game protocol
              </span>
            </div>

            <div className="test-arrow">
              GAME STATE
              <strong>↓</strong>
            </div>

            <div className="test-output">

              <div>
                <strong>PROJECTION</strong>
                <span>
                  launch trajectory
                  <br />
                  AoE / impacts
                </span>
              </div>

              <div>
                <strong>HUD</strong>
                <span>
                  HP / energy
                  <br />
                  objectives
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* COMMUNICATION */}

      <section className="communication-section">

        <div className="section-header">

          <span className="section-number">06</span>

          <div>
            <span className="eyebrow">
              COMMUNICATION MODEL
            </span>

            <h2>
              Every layer has
              <br />
              one responsibility.
            </h2>
          </div>

        </div>

        <div className="communication-list">

          {communicationSteps.map((step) => (
            <div className="communication-step" key={step.number}>

              <span className="communication-number">
                {step.number}
              </span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* WHY SERVER AUTHORITY */}

      <section className="authority-section">

        <div className="authority-box">

          <span className="eyebrow">
            CRITICAL RULE
          </span>

          <h2>
            The robot
            <br />
            never decides
            <br />
            the <span>game.</span>
          </h2>

          <p>
            The robot produces physical actions and measurements.
            The game server interprets those measurements under the
            official rules and maintains the authoritative state.
          </p>

          <div className="authority-flow">

            <span>PHYSICAL ACTION</span>
            <i>→</i>
            <span>MEASUREMENT</span>
            <i>→</i>
            <span>SERVER VALIDATION</span>
            <i>→</i>
            <span>GAME STATE</span>

          </div>

        </div>

      </section>


      {/* NEXT */}

      <section className="next-page-section">

        <div>
          <span className="eyebrow">
            NEXT SYSTEM
          </span>

          <h2>
            Now define
            <br />
            the <span>game.</span>
          </h2>
        </div>

        <Link to="/game" className="primary-button">
          Game architecture
          <span>→</span>
        </Link>

      </section>

    </div>
  );
}