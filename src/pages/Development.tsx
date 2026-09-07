import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const workflow = [
  {
    number: "01",
    title: "READ",
    label: "OPEN SPECIFICATION",
    description:
      "The team receives the complete public Champion Interface design, API documentation, communication protocol and behavioral specification.",
  },
  {
    number: "02",
    title: "REPRODUCE",
    label: "TEST HARDWARE",
    description:
      "Because the interface is open source, the team can build its own development replica instead of depending on official competition hardware.",
  },
  {
    number: "03",
    title: "CONNECT",
    label: "ROBOT + INTERFACE",
    description:
      "The team's robot connects to the interface through the standardized USB boundary and communicates using the documented API.",
  },
  {
    number: "04",
    title: "PRACTICE",
    label: "PUBLIC TEST SERVER",
    description:
      "The robot connects to the public test environment and interacts with the real game protocol before competition day.",
  },
  {
    number: "05",
    title: "OBSERVE",
    label: "GAME STATE + PROJECTION",
    description:
      "The same game events are reflected through the visualization pipeline, allowing the team to see how physical actions are interpreted by the platform.",
  },
  {
    number: "06",
    title: "CERTIFY",
    label: "OFFICIAL HARDWARE",
    description:
      "Before competition, the team integrates the official Champion Interface assembly and verifies that its robot behaves correctly against the official system.",
  },
];

const openSourceAreas = [
  {
    title: "HARDWARE DESIGN",
    description:
      "Schematics, PCB design, component selection and assembly information needed to reproduce the development interface.",
  },
  {
    title: "CORE SOFTWARE",
    description:
      "Firmware and interface-side software required to communicate with the team robot and competition platform.",
  },
  {
    title: "API",
    description:
      "The robot-facing API and event model used to interact with the Champion Interface.",
  },
  {
    title: "PROTOCOL",
    description:
      "Communication semantics, message formats, validation rules and documented behavior.",
  },
  {
    title: "DOCUMENTATION",
    description:
      "A complete technical reference covering installation, integration, troubleshooting and development.",
  },
  {
    title: "TEST TOOLS",
    description:
      "Utilities and simulators that allow teams to test individual interface functions without a complete robot.",
  },
];

const maturityLevels = [
  {
    number: "M0",
    title: "CONCEPT",
    description:
      "Rules and interfaces are still being designed. Internal prototypes are expected.",
  },
  {
    number: "M1",
    title: "SIMULATOR",
    description:
      "The protocol and game behavior can be exercised without physical robots.",
  },
  {
    number: "M2",
    title: "OPEN INTERFACE",
    description:
      "The interface hardware/software design and API are public and reproducible.",
  },
  {
    number: "M3",
    title: "PUBLIC SERVER",
    description:
      "Teams can connect physical development systems to the actual test platform.",
  },
  {
    number: "M4",
    title: "INTEGRATED",
    description:
      "Robot, interface, tracking, server and visualization operate together.",
  },
  {
    number: "M5",
    title: "COMPETITION READY",
    description:
      "The complete system has passed reliability, safety and tournament procedure tests.",
  },
];

export default function Development() {
  return (
    <div className="site">
      <Navbar />

      {/* HEADER */}

      <header className="subpage-header development-page-header">
        <div>
          <span className="eyebrow">DEVELOPMENT ECOSYSTEM</span>

          <h1>
            Teams should
            <br />
            <span>build before</span>
            <br />
            the competition.
          </h1>

          <p>
            The competition is not just an event. It is a platform that
            teams should be able to integrate with, simulate and test for
            months before they enter the arena.
          </p>
        </div>

        <div className="subpage-index">
          <span>07</span>
          <small>DEVELOPMENT</small>
        </div>
      </header>

      {/* CENTRAL IDEA */}

      <section className="development-principle">

        <div>
          <span className="eyebrow">DEVELOPMENT PRINCIPLE</span>

          <h2>
            Minimize
            <br />
            <span>surprises.</span>
          </h2>
        </div>

        <div className="development-principle-copy">

          <p>
            Teams should not discover the real communication behavior,
            sensor assumptions or server semantics on tournament day.
          </p>

          <p>
            Everything that defines the competition boundary should be
            documented and testable well in advance.
          </p>

          <strong>
            The competition should be the final validation of a system
            teams already know how to use.
          </strong>

        </div>

      </section>

      {/* WORKFLOW */}

      <section className="development-workflow">

        <div className="section-header">

          <span className="section-number">01</span>

          <div>
            <span className="eyebrow">TEAM WORKFLOW</span>

            <h2>
              From specification
              <br />
              to competition.
            </h2>
          </div>

        </div>

        <div className="workflow-grid">

          {workflow.map((step) => (
            <article
              key={step.number}
              className="workflow-card"
            >

              <div className="workflow-card-top">
                <span>{step.number}</span>
                <small>{step.label}</small>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </article>
          ))}

        </div>

      </section>

      {/* OPEN SOURCE */}

      <section className="development-open-source">

        <div className="section-header">

          <span className="section-number">02</span>

          <div>
            <span className="eyebrow">OPEN SOURCE INTERFACE</span>

            <h2>
              Give teams
              <br />
              the actual
              <br />
              <span>boundary.</span>
            </h2>
          </div>

        </div>

        <div className="open-source-layout">

          <div className="open-source-copy">

            <p>
              The Champion Interface should be open-source because it is
              part of the contract between the competition and the teams.
            </p>

            <p>
              There is little value in hiding the implementation of a
              measurement device. Doing so mainly increases integration
              uncertainty and prevents teams from preparing effectively.
            </p>

            <div className="open-source-rule">
              <span>RULE</span>

              <strong>
                Anything required to reproduce the development interface
                should be publicly available.
              </strong>
            </div>

          </div>

          <div className="open-source-list">

            {openSourceAreas.map((area, index) => (
              <article key={area.title}>

                <span>0{index + 1}</span>

                <div>
                  <h3>{area.title}</h3>

                  <p>{area.description}</p>
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* WHAT REMAINS PRIVATE */}

      <section className="privacy-boundary">

        <div className="privacy-visual">

          <div className="privacy-open">

            <span>PUBLIC</span>

            <strong>INTERFACE</strong>

            <div>
              Hardware
              <br />
              Firmware
              <br />
              API
              <br />
              Protocol
              <br />
              Documentation
            </div>

          </div>

          <div className="privacy-divider">
            <span>BOUNDARY</span>
            <i />
          </div>

          <div className="privacy-private">

            <span>PRIVATE</span>

            <strong>COMPETITION</strong>

            <div>
              Competition token
              <br />
              Server implementation
            </div>

          </div>

        </div>

        <div className="privacy-copy">

          <span className="eyebrow">WHAT REMAINS PRIVATE</span>

          <h2>
            Transparency
            <br />
            does not mean
            <br />
            <span>everything is open.</span>
          </h2>

          <p>
            The game server does not need to be open source. What teams
            need is a stable and complete public contract describing its
            behavior and APIs.
          </p>

          <p>
            The competition-time authentication token is the intentionally
            private part of the Champion Interface. It distinguishes the
            official competition assembly from development replicas.
          </p>

        </div>

      </section>

      {/* PUBLIC SERVER */}

      <section className="development-server">

        <div className="server-intro">

          <span className="eyebrow">
            PUBLIC TEST SERVER
          </span>

          <h2>
            A real
            <br />
            integration
            <br />
            <span>environment.</span>
          </h2>

          <p>
            The public server is the bridge between documentation and a
            working competition. It should behave like the official game
            platform from a team's perspective.
          </p>

          <div className="server-milestone">

            <span>
              REQUIRED MILESTONE
            </span>

            <strong>
              AVAILABLE ≥ 2 MONTHS
              <br />
              BEFORE COMPETITION
            </strong>

          </div>

        </div>

        <div className="development-server-diagram">

          <div className="server-stage">

            <div className="server-stage-label">
              TEAM
            </div>

            <div className="dev-server-node">
              <strong>ROBOT</strong>
              <span>physical development system</span>
            </div>

          </div>

          <div className="dev-server-arrow">
            USB
            <strong>↓</strong>
          </div>

          <div className="server-stage">

            <div className="server-stage-label">
              LOCAL
            </div>

            <div className="dev-server-node interface-node">
              <strong>INTERFACE REPLICA</strong>
              <span>open-source implementation</span>
            </div>

          </div>

          <div className="dev-server-arrow">
            BLE / NETWORK
            <strong>↓</strong>
          </div>

          <div className="server-stage">

            <div className="server-stage-label">
              ORGANIZATION
            </div>

            <div className="dev-server-node server-node">
              <strong>PUBLIC TEST SERVER</strong>
              <span>real API · real game state</span>
            </div>

          </div>

          <div className="dev-server-arrow">
            GAME STATE
            <strong>↓</strong>
          </div>

          <div className="dev-server-output">

            <div>
              <strong>GAME STATE</strong>
              <span>
                Champion
                <br />
                Arena
                <br />
                Objectives
              </span>
            </div>

            <div>
              <strong>VISUALIZATION</strong>
              <span>
                Projection
                <br />
                HUD
                <br />
                Event stream
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* SAME PIPELINE */}

      <section className="same-system-section">

        <span className="eyebrow">DEVELOPMENT ≈ COMPETITION</span>

        <blockquote>
          The development environment should use
          <br />
          the <span>same conceptual pipeline</span>
          <br />
          as the tournament.
        </blockquote>

        <div className="same-system-flow">

          <div>
            <span>ROBOT</span>
            <strong>Physical action</strong>
          </div>

          <i>→</i>

          <div>
            <span>INTERFACE</span>
            <strong>Measurement</strong>
          </div>

          <i>→</i>

          <div>
            <span>SERVER</span>
            <strong>Game state</strong>
          </div>

          <i>→</i>

          <div>
            <span>VISUALIZATION</span>
            <strong>Projection / HUD</strong>
          </div>

        </div>

      </section>

      {/* SDK */}

      <section className="sdk-section">

        <div className="section-header">

          <span className="section-number">03</span>

          <div>
            <span className="eyebrow">
              DEVELOPER EXPERIENCE
            </span>

            <h2>
              Do not make teams
              <br />
              reverse-engineer
              <br />
              the platform.
            </h2>
          </div>

        </div>

        <div className="sdk-grid">

          <div>

            <span className="sdk-number">01</span>

            <h3>DOCUMENTATION</h3>

            <p>
              A single authoritative reference for the API, protocol,
              interface behavior, event model and game state.
            </p>

          </div>

          <div>

            <span className="sdk-number">02</span>

            <h3>EXAMPLES</h3>

            <p>
              Minimal reference implementations demonstrating how a robot
              communicates with the Core and how a client interacts with
              the test platform.
            </p>

          </div>

          <div>

            <span className="sdk-number">03</span>

            <h3>SIMULATOR</h3>

            <p>
              A software-only environment that can generate representative
              physical events before teams have complete hardware.
            </p>

          </div>

          <div>

            <span className="sdk-number">04</span>

            <h3>DIAGNOSTICS</h3>

            <p>
              Tools that expose sensor values, connection state, event
              timing and communication problems during integration.
            </p>

          </div>

        </div>

      </section>

      {/* RELEASE PLAN */}

      <section className="release-section">

        <div className="release-copy">

          <span className="eyebrow">
            RELEASE STRATEGY
          </span>

          <h2>
            Release the
            <br />
            platform in
            <br />
            <span>layers.</span>
          </h2>

          <p>
            Teams do not need to wait for the complete arena to exist before
            beginning development. The organization should progressively
            release the pieces that define the competition boundary.
          </p>

        </div>

        <div className="release-timeline">

          <div>
            <span>01</span>
            <strong>SPECIFICATION</strong>
            <small>
              Game rules + Interface + API
            </small>
          </div>

          <div>
            <span>02</span>
            <strong>REFERENCE IMPLEMENTATION</strong>
            <small>
              Open hardware + software
            </small>
          </div>

          <div>
            <span>03</span>
            <strong>SIMULATOR</strong>
            <small>
              Protocol + game behavior
            </small>
          </div>

          <div className="release-highlight">
            <span>04</span>
            <strong>PUBLIC SERVER</strong>
            <small>
              Stable integration environment
            </small>
          </div>

          <div>
            <span>05</span>
            <strong>OFFICIAL HARDWARE</strong>
            <small>
              Competition assemblies
            </small>
          </div>

        </div>

      </section>

      {/* MATURITY */}

      <section className="maturity-section">

        <div className="section-header">

          <span className="section-number">04</span>

          <div>
            <span className="eyebrow">
              PLATFORM MATURITY
            </span>

            <h2>
              Know when
              <br />
              the system is
              <br />
              <span>ready.</span>
            </h2>
          </div>

        </div>

        <div className="maturity-grid">

          {maturityLevels.map((level) => (
            <article key={level.number}>

              <span>{level.number}</span>

              <h3>{level.title}</h3>

              <p>{level.description}</p>

            </article>
          ))}

        </div>

      </section>

      {/* ORGANIZATION CHECKLIST */}

      <section className="development-checklist">

        <span className="eyebrow">
          ORGANIZATION CHECKLIST
        </span>

        <h2>
          Before we tell teams
          <br />
          to <span>build,</span>
          <br />
          we must provide this.
        </h2>

        <div className="checklist-grid">

          <div>
            <span>✓</span>
            <strong>COMPLETE INTERFACE SPEC</strong>
          </div>

          <div>
            <span>✓</span>
            <strong>OPEN-SOURCE REFERENCE DESIGN</strong>
          </div>

          <div>
            <span>✓</span>
            <strong>PUBLIC API DOCUMENTATION</strong>
          </div>

          <div>
            <span>✓</span>
            <strong>TEST SERVER</strong>
          </div>

          <div>
            <span>✓</span>
            <strong>VISUALIZATION PIPELINE</strong>
          </div>

          <div>
            <span>✓</span>
            <strong>INTEGRATION EXAMPLES</strong>
          </div>

          <div>
            <span>✓</span>
            <strong>DIAGNOSTIC TOOLS</strong>
          </div>

          <div>
            <span>✓</span>
            <strong>STABLE BEHAVIOR</strong>
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
            Now build
            <br />
            the <span>plan.</span>
          </h2>

        </div>

        <Link to="/roadmap" className="primary-button">
          Six-month roadmap
          <span>→</span>
        </Link>

      </section>
    </div>
  );
}