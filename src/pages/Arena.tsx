import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const arenaElements = [
  {
    id: "01",
    name: "THREE LANES",
    type: "MAP STRUCTURE",
    color: "cyan",
    description:
      "Three strategic corridors create the primary routes between the bases. Lanes are map regions, not fixed champion assignments.",
  },
  {
    id: "02",
    name: "JUNGLE",
    type: "RESOURCE AREA",
    color: "green",
    description:
      "The space between lanes contains neutral resources and objectives. It exists to force movement away from static lane play.",
  },
  {
    id: "03",
    name: "TURRETS",
    type: "DEFENSIVE STRUCTURE",
    color: "orange",
    description:
      "Physical defensive structures that protect progress toward the Nexus. Their HP is made visible using LED strips.",
  },
  {
    id: "04",
    name: "DRAGON",
    type: "MAJOR OBJECTIVE",
    color: "purple",
    description:
      "A major neutral objective designed to create deliberate preparation, rotation and team fights.",
  },
  {
    id: "05",
    name: "MANA MONSTERS",
    type: "RESOURCE",
    color: "cyan",
    description:
      "Neutral jungle entities that provide energy and create recurring smaller contests around the map.",
  },
  {
    id: "06",
    name: "POWER CHARGES",
    type: "RESOURCE",
    color: "yellow",
    description:
      "Distributed map resources that provide temporary or strategic advantages and reward movement.",
  },
  {
    id: "07",
    name: "GATES",
    type: "DYNAMIC STRUCTURE",
    color: "orange",
    description:
      "Simple physical barriers that can open or close according to the game state and objective state.",
  },
  {
    id: "08",
    name: "MOVABLE OBSTACLES",
    type: "PHYSICAL INTERACTION",
    color: "red",
    description:
      "Selected physical objects that robots can push or displace, allowing engineering and positioning to directly affect the battlefield.",
  },
  {
    id: "09",
    name: "POWER CORE",
    type: "UNIQUE OBJECTIVE",
    color: "cyan",
    description:
      "A central physical objective that differentiates this competition from a conventional MOBA by making territorial interaction itself a game mechanic.",
  },
  {
    id: "10",
    name: "NEXUS",
    type: "VICTORY STRUCTURE",
    color: "white",
    description:
      "The final structure. Destroying the opposing Nexus is the primary route to victory.",
  },
];

const arenaInfrastructure = [
  {
    name: "LED STATUS",
    description:
      "Turrets, objectives and selected physical elements expose game state locally through visible LEDs.",
  },
  {
    name: "TRACKING",
    description:
      "The arena should provide sufficient position information for the game server to reason about interactions and spatial rules.",
  },
  {
    name: "PROJECTION",
    description:
      "A spatial visualization layer makes simulated projectiles, trajectories, AoE and effects visible without requiring dangerous physical projectiles.",
  },
  {
    name: "ARENA CONTROL",
    description:
      "Gates, structures and other controllable objects receive commands from the game infrastructure.",
  },
];

export default function Arena() {
  return (
    <div className="site">
      <Navbar />

      {/* HEADER */}

      <header className="subpage-header arena-page-header">
        <div>
          <span className="eyebrow">ARENA ARCHITECTURE</span>

          <h1>
            The arena is
            <br />
            part of the
            <br />
            <span>game system.</span>
          </h1>

          <p>
            The battlefield is not a passive surface for robots. It contains
            physical structures, resources and objectives that create the
            strategic interactions of the game.
          </p>
        </div>

        <div className="subpage-index">
          <span>05</span>
          <small>ARENA</small>
        </div>
      </header>

      {/* MAP OVERVIEW */}

      <section className="arena-overview-section">

        <div className="section-header">
          <span className="section-number">01</span>

          <div>
            <span className="eyebrow">MAP OVERVIEW</span>

            <h2>
              Three lanes.
              <br />
              One jungle.
              <br />
              Many reasons to move.
            </h2>
          </div>
        </div>

        <div className="arena-overview-grid">

          <div className="large-arena-map">

            <div className="base blue-base">
              <span>BLUE</span>
              <strong>BASE</strong>
            </div>

            <div className="base red-base">
              <span>RED</span>
              <strong>BASE</strong>
            </div>

            <div className="map-lane lane-top-map">
              <span>TOP LANE</span>
            </div>

            <div className="map-lane lane-mid-map">
              <span>MID LANE</span>
            </div>

            <div className="map-lane lane-bottom-map">
              <span>BOT LANE</span>
            </div>

            <div className="map-jungle">
              JUNGLE
            </div>

            <div className="map-objective dragon-objective">
              <small>MAJOR OBJECTIVE</small>
              <strong>DRAGON</strong>
            </div>

            <div className="map-objective core-objective">
              <small>CENTRAL OBJECTIVE</small>
              <strong>POWER CORE</strong>
            </div>

            <div className="map-monster mana-1">
              MANA
            </div>

            <div className="map-monster mana-2">
              MANA
            </div>

            <div className="map-charge charge-1">
              +
            </div>

            <div className="map-charge charge-2">
              +
            </div>

            <div className="map-charge charge-3">
              +
            </div>

            <div className="arena-turret at-1" />
            <div className="arena-turret at-2" />
            <div className="arena-turret at-3" />
            <div className="arena-turret at-4" />
            <div className="arena-turret at-5" />
            <div className="arena-turret at-6" />

          </div>

          <div className="arena-overview-copy">

            <div className="map-key">
              <div>
                <span className="key-line lane-key" />
                <strong>LANE</strong>
              </div>

              <div>
                <span className="key-dot turret-key" />
                <strong>TURRET</strong>
              </div>

              <div>
                <span className="key-dot objective-key" />
                <strong>OBJECTIVE</strong>
              </div>

              <div>
                <span className="key-dot resource-key" />
                <strong>RESOURCE</strong>
              </div>
            </div>

            <p>
              The exact arena dimensions, lane widths, spawn positions and
              physical clearances should be frozen during the first design
              phase because they affect tracking, safety and robot mechanics.
            </p>

            <p>
              The important concept is the relationship between regions:
              lanes create predictable conflict zones, the jungle creates
              movement and uncertainty, and objectives create reasons to
              contest the center and side areas.
            </p>

            <div className="arena-design-rule">
              <span>DESIGN RULE</span>

              <strong>
                Every physical object should exist because
                it creates gameplay, spectator value, or both.
              </strong>
            </div>

          </div>

        </div>
      </section>

      {/* ELEMENTS */}

      <section className="arena-elements-section">

        <div className="section-header">

          <span className="section-number">02</span>

          <div>
            <span className="eyebrow">ARENA ELEMENTS</span>

            <h2>
              What actually
              <br />
              exists in the arena?
            </h2>
          </div>

        </div>

        <div className="arena-elements-grid">

          {arenaElements.map((element) => (
            <article
              key={element.id}
              className={`arena-element-card ${element.color}`}
            >
              <div className="arena-element-top">
                <span>{element.id}</span>
                <small>{element.type}</small>
              </div>

              <div className="element-indicator" />

              <h3>{element.name}</h3>

              <p>{element.description}</p>
            </article>
          ))}

        </div>
      </section>

      {/* LANES */}

      <section className="lanes-section">

        <div className="lanes-copy">

          <span className="eyebrow">LANE STRUCTURE</span>

          <h2>
            Lanes are
            <br />
            <span>regions,</span>
            <br />
            not roles.
          </h2>

          <p>
            The map contains Top, Mid and Bot lanes because the lanes give
            the game a readable strategic structure. They do not determine
            which champion is supposed to occupy them.
          </p>

          <p>
            A team may put its Fighter in Mid, rotate the Artillery to Top,
            use the Tank to escort an objective, or abandon a lane entirely
            to contest the jungle.
          </p>

        </div>

        <div className="lane-diagram">

          <div className="lane-diagram-row">
            <span>TOP</span>
            <i />
            <span>JUNGLE</span>
            <i />
            <span>TOP</span>
          </div>

          <div className="lane-diagram-row highlighted">
            <span>MID</span>
            <i />
            <strong>ROTATION</strong>
            <i />
            <span>MID</span>
          </div>

          <div className="lane-diagram-row">
            <span>BOT</span>
            <i />
            <span>JUNGLE</span>
            <i />
            <span>BOT</span>
          </div>

        </div>
      </section>

      {/* TURRETS */}

      <section className="turret-section">

        <div className="section-header">

          <span className="section-number">03</span>

          <div>
            <span className="eyebrow">DEFENSIVE STRUCTURES</span>

            <h2>
              Turrets make
              <br />
              progress <span>visible.</span>
            </h2>
          </div>

        </div>

        <div className="turret-layout">

          <div className="turret-illustration">

            <div className="physical-turret">

              <div className="turret-head" />

              <div className="turret-body">
                <div className="turret-glow" />
              </div>

              <div className="turret-base" />

            </div>

            <div className="turret-led-strip">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

          </div>

          <div className="turret-copy">

            <span className="eyebrow">
              PHYSICAL + DIGITAL
            </span>

            <p>
              Each lane contains defensive turrets whose health is owned
              by the game server but made physically visible through an
              LED strip.
            </p>

            <div className="hp-demo">

              <div className="hp-demo-header">
                <span>TURRET HP</span>
                <strong>68%</strong>
              </div>

              <div className="hp-demo-bar">
                <i style={{ width: "68%" }} />
              </div>

              <small>
                The same state exists digitally in the game server and
                physically on the arena structure.
              </small>

            </div>

            <div className="turret-principle">
              <span>WHY PHYSICAL?</span>

              <strong>
                A spectator should be able to understand
                the state of the arena without opening a screen.
              </strong>
            </div>

          </div>

        </div>
      </section>

      {/* OBJECTIVES */}

      <section className="objective-layout-section">

        <div className="objective-layout-copy">

          <span className="eyebrow">
            NEUTRAL OBJECTIVES
          </span>

          <h2>
            Objectives create
            <br />
            <span>conflict.</span>
          </h2>

          <p>
            The strongest reason to leave a lane is an objective whose
            reward is important enough to change the team's strategy.
          </p>

          <p>
            Objectives should therefore have different scales: small
            recurring resources, medium map interactions, and a major
            objective capable of forcing a full team fight.
          </p>

        </div>

        <div className="objective-ladder">

          <div className="objective-level small">

            <div className="objective-level-label">
              <span>SMALL</span>
              <strong>MANA MONSTERS</strong>
            </div>

            <p>
              Recurring energy resource.
            </p>

          </div>

          <div className="objective-level medium">

            <div className="objective-level-label">
              <span>MEDIUM</span>
              <strong>POWER CHARGES</strong>
            </div>

            <p>
              Distributed map advantage.
            </p>

          </div>

          <div className="objective-level major">

            <div className="objective-level-label">
              <span>MAJOR</span>
              <strong>DRAGON</strong>
            </div>

            <p>
              Strong reward requiring preparation and contest.
            </p>

          </div>

          <div className="objective-level unique">

            <div className="objective-level-label">
              <span>UNIQUE</span>
              <strong>POWER CORE</strong>
            </div>

            <p>
              Physical territorial objective at the center of the arena.
            </p>

          </div>

        </div>

      </section>

      {/* POWER CORE */}

      <section className="power-core-section">

        <div className="power-core-visual">

          <div className="core-grid" />

          <div className="power-core-object">

            <div className="core-ring core-ring-one" />
            <div className="core-ring core-ring-two" />
            <div className="core-center">CORE</div>

          </div>

          <span className="core-label label-north">
            CONTEST ZONE
          </span>

          <span className="core-label label-south">
            CENTRAL OBJECTIVE
          </span>

        </div>

        <div className="power-core-copy">

          <span className="eyebrow">
            UNIQUE GAMEPLAY ELEMENT
          </span>

          <h2>
            Make the center
            <br />
            <span>physically matter.</span>
          </h2>

          <p>
            The Power Core is intended to be the competition's distinctive
            physical objective. Unlike a normal digital objective, its
            gameplay should emerge from actual robot positioning.
          </p>

          <div className="role-interactions">

            <div>
              <strong>FIGHTER</strong>
              <span>
                Contest space and attack opposing robots.
              </span>
            </div>

            <div>
              <strong>TANK</strong>
              <span>
                Block access and protect the team.
              </span>
            </div>

            <div>
              <strong>ARTILLERY</strong>
              <span>
                Control approaches using mines and ranged attacks.
              </span>
            </div>

          </div>

          <div className="power-core-note">
            <span>DESIGN STATUS</span>

            <strong>
              Mechanic to be prototyped and finalized during game design.
            </strong>
          </div>

        </div>

      </section>

      {/* DYNAMIC ELEMENTS */}

      <section className="dynamic-arena-section">

        <div className="section-header">

          <span className="section-number">04</span>

          <div>
            <span className="eyebrow">
              DYNAMIC PHYSICAL ELEMENTS
            </span>

            <h2>
              Let the
              <br />
              battlefield change.
            </h2>
          </div>

        </div>

        <div className="dynamic-grid">

          <div className="dynamic-card gates">

            <div className="gate-visual">

              <div className="gate-post left" />
              <div className="gate-post right" />
              <div className="gate-bar" />

            </div>

            <span>DYNAMIC STRUCTURE</span>

            <h3>Gates</h3>

            <p>
              Gates can open or close according to defined game events.
              They should remain mechanically simple so they add map-state
              changes without becoming an independent robotics project.
            </p>

          </div>

          <div className="dynamic-card obstacles">

            <div className="obstacle-visual">

              <div className="obstacle-box box-one" />
              <div className="obstacle-box box-two" />
              <div className="movement-arrow">→</div>

            </div>

            <span>PHYSICAL INTERACTION</span>

            <h3>Movable Obstacles</h3>

            <p>
              Selected obstacles may be pushed or displaced by robots.
              Their purpose is to let robot mechanics influence the geometry
              of the battlefield without requiring a transforming arena.
            </p>

          </div>

        </div>
      </section>

      {/* ARENA INFRASTRUCTURE */}

      <section className="arena-infrastructure">

        <div className="section-header">

          <span className="section-number">05</span>

          <div>
            <span className="eyebrow">
              INFRASTRUCTURE
            </span>

            <h2>
              The arena also
              <br />
              contains electronics.
            </h2>
          </div>

        </div>

        <div className="infrastructure-grid">

          {arenaInfrastructure.map((item, index) => (
            <article key={item.name}>

              <span>0{index + 1}</span>

              <h3>{item.name}</h3>

              <p>{item.description}</p>

            </article>
          ))}

        </div>

      </section>

      {/* PROJECTION */}

      <section className="projection-section">

        <div className="projection-copy">

          <span className="eyebrow">
            VISUALIZATION LAYER
          </span>

          <h2>
            Projection makes
            <br />
            the invisible
            <br />
            <span>visible.</span>
          </h2>

          <p>
            Many game events have no useful physical representation:
            a simulated projectile, an area of effect, damage feedback,
            a healing event or the predicted trajectory of an artillery
            launch.
          </p>

          <p>
            Instead of adding unnecessary physical hardware, these events
            are represented through projection mapping.
          </p>

          <Link to="/server" className="page-link">
            Explore server + visualization →
          </Link>

        </div>

        <div className="projection-visual">

          <div className="projection-arena">

            <div className="projected-lane" />
            <div className="projected-lane second" />

            <div className="projected-trajectory">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="projected-aoe">
              <span>AOE</span>
            </div>

            <div className="projected-impact">
              IMPACT
            </div>

            <div className="projected-heal">
              + HEAL
            </div>

          </div>

          <div className="projection-caption">
            <span>SERVER STATE</span>
            <i>→</i>
            <span>VISUALIZATION ENGINE</span>
            <i>→</i>
            <strong>PROJECTOR</strong>
          </div>

        </div>

      </section>

      {/* PHYSICAL SPECTACLE */}

      <section className="spectacle-section">

        <div className="spectacle-quote">
          <span className="eyebrow">
            DESIGN OBJECTIVE
          </span>

          <blockquote>
            The audience should understand
            <br />
            what is happening by
            <br />
            <span>looking at the arena.</span>
          </blockquote>
        </div>

        <div className="spectacle-grid">

          <div>
            <strong>LOCAL STATE</strong>
            <span>
              LEDs on robots and structures communicate immediate state.
            </span>
          </div>

          <div>
            <strong>SPATIAL STATE</strong>
            <span>
              Projection communicates events across the physical arena.
            </span>
          </div>

          <div>
            <strong>DETAILED STATE</strong>
            <span>
              Screens communicate exact values, cooldowns and objectives.
            </span>
          </div>

        </div>

      </section>

      {/* ENGINEERING CONSTRAINT */}

      <section className="arena-engineering">

        <div className="section-header">

          <span className="section-number">06</span>

          <div>
            <span className="eyebrow">
              ENGINEERING PRIORITIES
            </span>

            <h2>
              Build the arena
              <br />
              as infrastructure.
            </h2>
          </div>

        </div>

        <div className="arena-priority-grid">

          <div>
            <span>01</span>
            <strong>SAFETY</strong>
            <p>
              Robot access, human access, batteries, moving parts,
              emergency shutdown and physical barriers.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>RELIABILITY</strong>
            <p>
              Arena sensors and actuators must continue operating over
              repeated matches without manual intervention.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>CALIBRATION</strong>
            <p>
              Position, projection alignment and physical interaction
              boundaries must be calibratable before every event.
            </p>
          </div>

          <div>
            <span>04</span>
            <strong>SPECTACLE</strong>
            <p>
              Structures and visualization should make the game legible
              from outside the arena, not only from a software dashboard.
            </p>
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
            Build the
            <br />
            <span>server.</span>
          </h2>
        </div>

        <Link to="/server" className="primary-button">
          Server architecture
          <span>→</span>
        </Link>

      </section>
    </div>
  );
}