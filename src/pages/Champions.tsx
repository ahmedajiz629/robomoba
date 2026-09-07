import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const champions = [
  {
    id: "01",
    role: "TANK / SUPPORT",
    name: "Tank",
    color: "cyan",
    summary:
      "A defensive champion whose physical shield and optical healing system turn positioning, geometry and motion into gameplay.",
    mechanisms: [
      "Heavy shield",
      "Shield burst",
      "Healing light beam",
    ],
    interface: [
      "IMU",
      "Position / orientation measurement",
      "Optical emitter",
      "Photodiode receiver",
      "Core",
    ],
  },
  {
    id: "02",
    role: "FIGHTER",
    name: "Fighter",
    color: "orange",
    summary:
      "A close-range champion whose mechanically actuated sword translates real motion into attack strength and hit geometry.",
    mechanisms: [
      "Physical sword",
      "Actuator mechanism",
      "Swing control",
    ],
    interface: [
      "IMU",
      "Motion measurement",
      "Core",
      "Champion API",
    ],
  },
  {
    id: "03",
    role: "ARTILLERY",
    name: "Artillery",
    color: "purple",
    summary:
      "A ranged champion combining a physical launcher with persistent mine deployment and server-side projectile simulation.",
    mechanisms: [
      "Ballistic launcher",
      "Launcher actuation",
      "Mine deployment",
    ],
    interface: [
      "IMU",
      "Launch measurement",
      "Mine interaction",
      "Core",
      "Champion API",
    ],
  },
];

export default function Champions() {
  return (
    <div className="site">
      <Navbar />

      {/* HEADER */}

      <header className="subpage-header champions-header">
        <div>
          <span className="eyebrow">CHAMPION ARCHITECTURE</span>

          <h1>
            Three champions.
            <br />
            <span>Three engineering problems.</span>
          </h1>

          <p>
            The champion is not a predefined robot. It is a set of gameplay
            capabilities and measurement rules. The team decides how to
            physically realize those capabilities.
          </p>
        </div>

        <div className="subpage-index">
          <span>04</span>
          <small>CHAMPIONS</small>
        </div>
      </header>

      {/* CHAMPION PRINCIPLE */}

      <section className="champion-principle">
        <div className="champion-principle-copy">
          <span className="eyebrow">DESIGN BOUNDARY</span>

          <h2>
            The ability is
            <br />
            defined by the
            <br />
            <span>game.</span>
          </h2>
        </div>

        <div className="champion-principle-copy">
          <p>
            The mechanism that performs it is designed by the team.
          </p>

          <p>
            This means two teams can implement the same champion very
            differently while still interacting with the same standardized
            competition interface.
          </p>

          <div className="mechanism-equation">
            <span>GAME CAPABILITY</span>
            <i>+</i>
            <span>TEAM ENGINEERING</span>
            <i>→</i>
            <strong>PHYSICAL GAMEPLAY</strong>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}

      <section className="champion-overview">
        <div className="section-header">
          <span className="section-number">01</span>

          <div>
            <span className="eyebrow">THE THREE CHAMPIONS</span>

            <h2>
              Same interface philosophy.
              <br />
              Different physical actions.
            </h2>
          </div>
        </div>

        <div className="champion-overview-grid">
          {champions.map((champion) => (
            <article
              key={champion.name}
              className={`champion-overview-card ${champion.color}`}
            >
              <div className="champion-card-head">
                <span>{champion.id}</span>
                <small>{champion.role}</small>
              </div>

              <div className="champion-orb">
                <div className="orb-ring outer" />
                <div className="orb-ring inner" />
                <div className="orb-center" />
              </div>

              <h3>{champion.name}</h3>

              <p>{champion.summary}</p>

              <div className="champion-list-block">
                <span>PHYSICAL SYSTEM</span>

                <div>
                  {champion.mechanisms.map((mechanism) => (
                    <strong key={mechanism}>{mechanism}</strong>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TANK */}

      <section className="champion-detail tank-detail">
        <div className="champion-detail-header">
          <span>01 / CHAMPION</span>
          <strong>TANK / SUPPORT</strong>
        </div>

        <div className="champion-detail-grid">
          <div className="champion-detail-copy">
            <span className="eyebrow">ROLE</span>

            <h2>
              Protect.
              <br />
              Control.
              <br />
              Sustain.
            </h2>

            <p>
              The Tank is not just a robot carrying a shield. Its gameplay
              comes from the interaction between shield geometry, movement,
              incoming attacks and the server's interpretation of physical
              measurements.
            </p>

            <p>
              The same champion also provides a healing beam, creating a
              cooperation mechanic between two physical machines.
            </p>
          </div>

          <div className="champion-detail-diagram">
            <div className="mechanism-diagram">
              <div className="mechanism-node tank-node-main">
                <span>TEAM BUILDS</span>
                <strong>SHIELD MECHANISM</strong>
              </div>

              <div className="mechanism-arrow">↓</div>

              <div className="measurement-node">
                <span>OFFICIAL INTERFACE</span>
                <strong>IMU / POSITION</strong>
              </div>

              <div className="mechanism-arrow">↓</div>

              <div className="server-node">
                <span>SERVER</span>
                <strong>PROTECTION CALCULATION</strong>
              </div>

              <div className="mechanism-arrow">↓</div>

              <div className="result-node">
                <strong>DAMAGE MITIGATION</strong>
              </div>
            </div>
          </div>
        </div>

        {/* SHIELD */}

        <div className="ability-section">
          <div>
            <span className="ability-number">A1</span>
            <span className="eyebrow">DEFENSIVE ABILITY</span>

            <h3>Heavy Shield</h3>

            <p>
              The team builds the mechanism that physically moves and
              orients the shield. The interface measures the relevant
              physical state. The server determines how much protection
              the shield provides.
            </p>
          </div>

          <div className="ability-logic">
            <span>SHIELD DISTANCE</span>
            <i>+</i>
            <span>SHIELD ORIENTATION</span>
            <i>+</i>
            <span>ATTACK GEOMETRY</span>
            <i>→</i>
            <strong>PROTECTION</strong>
          </div>
        </div>

        {/* BURST */}

        <div className="ability-section">
          <div>
            <span className="ability-number">A2</span>
            <span className="eyebrow">OFFENSIVE ABILITY</span>

            <h3>Shield Burst</h3>

            <p>
              The same heavy shield can become an offensive weapon.
              A deliberate burst movement produces a measurable physical
              event that the server interprets as an attack or knockback
              according to the game rules.
            </p>
          </div>

          <div className="burst-diagram">
            <div className="burst-shield" />

            <div className="burst-vector">
              <span>MOTION</span>
              <strong>→ → →</strong>
            </div>

            <div className="burst-impact">
              IMPACT
            </div>
          </div>
        </div>

        {/* HEAL */}

        <div className="ability-section healing-section">
          <div>
            <span className="ability-number">A3</span>
            <span className="eyebrow">COOPERATIVE ABILITY</span>

            <h3>Healing Beam</h3>

            <p>
              The Tank emits a modulated optical signal. The allied
              champion contains a photodiode receiver. The server verifies
              the source, target, line of sight and duration before applying
              healing.
            </p>

            <p>
              The modulation pattern matters because an arbitrary light
              source must not be able to impersonate the healer.
            </p>
          </div>

          <div className="beam-diagram">

            <div className="beam-source">
              <span>TANK</span>
              <strong>LIGHT</strong>
            </div>

            <div className="beam">
              <i />
              <i />
              <i />
              <i />
            </div>

            <div className="beam-target">
              <span>ALLY</span>
              <strong>PHOTODIODE</strong>
            </div>

            <div className="beam-validation">
              <span>SIGNAL</span>
              <strong>✓ VERIFIED</strong>
            </div>

          </div>
        </div>
      </section>

      {/* FIGHTER */}

      <section className="champion-detail fighter-detail">

        <div className="champion-detail-header">
          <span>02 / CHAMPION</span>
          <strong>FIGHTER</strong>
        </div>

        <div className="champion-detail-grid">

          <div className="champion-detail-copy">
            <span className="eyebrow">ROLE</span>

            <h2>
              Speed.
              <br />
              Reach.
              <br />
              Precision.
            </h2>

            <p>
              The Fighter's defining object is a real sword. The team
              decides how the sword is mounted, articulated and actuated.
            </p>

            <p>
              The game does not simply classify a button press as an
              attack. The physical swing itself becomes the attack input.
            </p>
          </div>

          <div className="fighter-visual">

            <div className="sword">
              <div className="sword-grip" />
              <div className="sword-blade" />
            </div>

            <div className="swing-arc narrow">
              <span>FAST / NARROW</span>
            </div>

            <div className="swing-arc wide">
              <span>WIDE / WEAKER</span>
            </div>

          </div>

        </div>

        <div className="fighter-logic">

          <div className="fighter-logic-row">

            <div>
              <span>PHYSICAL INPUT</span>
              <strong>SWORD ACCELERATION</strong>
            </div>

            <i>→</i>

            <div>
              <span>MEASUREMENT</span>
              <strong>IMU</strong>
            </div>

            <i>→</i>

            <div>
              <span>GAME INTERPRETATION</span>
              <strong>STRENGTH + SWING GEOMETRY</strong>
            </div>

            <i>→</i>

            <div>
              <span>RESULT</span>
              <strong>DAMAGE / HIT AREA</strong>
            </div>

          </div>

        </div>

        <div className="fighter-tradeoff">

          <div className="tradeoff-card fast">
            <span>OPTION A</span>

            <h3>FAST + NARROW</h3>

            <div className="tradeoff-visual fast-visual">
              <i />
            </div>

            <p>
              Higher attack strength and a smaller effective area.
            </p>
          </div>

          <div className="tradeoff-card wide">
            <span>OPTION B</span>

            <h3>WIDE + SLOW</h3>

            <div className="tradeoff-visual wide-visual">
              <i />
            </div>

            <p>
              Lower attack strength but a larger effective area.
            </p>
          </div>

        </div>
      </section>

      {/* ARTILLERY */}

      <section className="champion-detail artillery-detail">

        <div className="champion-detail-header">
          <span>03 / CHAMPION</span>
          <strong>ARTILLERY</strong>
        </div>

        <div className="champion-detail-grid">

          <div className="champion-detail-copy">
            <span className="eyebrow">ROLE</span>

            <h2>
              Distance.
              <br />
              Prediction.
              <br />
              Territory.
            </h2>

            <p>
              Artillery combines a physical launcher with deployable mines.
              One creates a ranged event; the other creates persistent
              physical territory control.
            </p>

            <p>
              The launcher does not need to fire a dangerous physical
              projectile. The physical mechanism produces the launch input,
              while the server simulates the projectile.
            </p>
          </div>

          <div className="artillery-visual">

            <div className="launcher">
              <div className="launcher-base" />
              <div className="launcher-arm" />
              <div className="launcher-barrel" />
            </div>

            <div className="trajectory">
              <i />
              <i />
              <i />
              <i />
              <span>SIMULATED TRAJECTORY</span>
            </div>

            <div className="impact-zone">
              <span>AOE</span>
            </div>

          </div>
        </div>

        {/* LAUNCHER */}

        <div className="ability-section">

          <div>
            <span className="ability-number">A1</span>
            <span className="eyebrow">RANGED ABILITY</span>

            <h3>Ballistic Launcher</h3>

            <p>
              The team designs the launcher mechanism. The interface
              measures the physical launch state. The server computes the
              simulated trajectory and impact.
            </p>
          </div>

          <div className="launcher-flow">

            <div>
              <span>PHYSICAL</span>
              <strong>LAUNCH ACTION</strong>
            </div>

            <i>→</i>

            <div>
              <span>MEASUREMENT</span>
              <strong>LAUNCH PARAMETERS</strong>
            </div>

            <i>→</i>

            <div>
              <span>SERVER</span>
              <strong>TRAJECTORY</strong>
            </div>

            <i>→</i>

            <div>
              <span>PROJECTION</span>
              <strong>IMPACT / AOE</strong>
            </div>

          </div>

        </div>

        {/* MINES */}

        <div className="ability-section mine-section">

          <div>
            <span className="ability-number">A2</span>
            <span className="eyebrow">PERSISTENT ABILITY</span>

            <h3>Mines</h3>

            <p>
              Mines are physically deployed onto the battlefield.
              Unlike a purely digital trap, their location is represented
              by an actual object that other robots must navigate around.
            </p>

            <p>
              When an opponent triggers the mine, the server registers
              the interaction and applies the defined effect.
            </p>
          </div>

          <div className="mine-field">

            <div className="mine active-mine">
              <span>ARMED</span>
            </div>

            <div className="mine-hit">
              <div className="mine-glow">
                HIT
              </div>
            </div>

            <div className="mine">
              <span>ARMED</span>
            </div>

            <div className="mine">
              <span>ARMED</span>
            </div>

          </div>

        </div>

      </section>

      {/* COMMON ARCHITECTURE */}

      <section className="common-interface-section">

        <div className="section-header">

          <span className="section-number">02</span>

          <div>
            <span className="eyebrow">COMMON ARCHITECTURE</span>

            <h2>
              Different abilities.
              <br />
              Same boundary.
            </h2>
          </div>

        </div>

        <div className="common-flow">

          <div className="common-box physical">
            <small>TEAM</small>
            <strong>PHYSICAL MECHANISM</strong>
            <span>
              The part the team invents.
            </span>
          </div>

          <i>→</i>

          <div className="common-box interface">
            <small>ORGANIZATION</small>
            <strong>MEASUREMENT</strong>
            <span>
              The official interface measures
              the physical event.
            </span>
          </div>

          <i>→</i>

          <div className="common-box server">
            <small>ORGANIZATION</small>
            <strong>GAME INTERPRETATION</strong>
            <span>
              Server converts measurements
              into game state.
            </span>
          </div>

          <i>→</i>

          <div className="common-box result">
            <small>GAME</small>
            <strong>GAMEPLAY RESULT</strong>
            <span>
              Damage, healing, control,
              movement or effect.
            </span>
          </div>

        </div>

      </section>

      {/* ENGINEERING FREEDOM */}

      <section className="engineering-freedom">

        <div className="engineering-copy">

          <span className="eyebrow">
            ENGINEERING FREEDOM
          </span>

          <h2>
            We should not
            <br />
            design their
            <br />
            <span>robots.</span>
          </h2>

          <p>
            A champion specification should describe what the game must
            observe and how that observation affects gameplay. It should
            not prescribe the team's chassis, motor choice, wheel layout,
            actuator technology or mechanical architecture unless safety,
            compatibility or fairness genuinely requires it.
          </p>

        </div>

        <div className="freedom-diagram">

          <div className="freedom-official">

            <span>DEFINED BY US</span>

            <strong>
              GAME CAPABILITY
            </strong>

            <small>
              What must be measured
              <br />
              and how it affects the game
            </small>

          </div>

          <div className="freedom-arrow">
            →
          </div>

          <div className="freedom-team">

            <span>DEFINED BY TEAM</span>

            <strong>
              ENGINEERING SOLUTION
            </strong>

            <small>
              How the robot physically
              creates the required action
            </small>

          </div>

        </div>

      </section>

      {/* BALANCE */}

      <section className="balance-section">

        <div className="section-header">

          <span className="section-number">03</span>

          <div>
            <span className="eyebrow">GAME / ENGINEERING BALANCE</span>

            <h2>
              Hardware choices
              <br />
              should matter.
            </h2>
          </div>

        </div>

        <div className="balance-grid">

          <div>
            <span>MECHANICAL DESIGN</span>
            <strong>
              Affects what the robot can physically do.
            </strong>
          </div>

          <div>
            <span>SENSOR MEASUREMENT</span>
            <strong>
              Determines what the game can observe.
            </strong>
          </div>

          <div>
            <span>GAME RULES</span>
            <strong>
              Convert physical measurements into consequences.
            </strong>
          </div>

          <div>
            <span>STRATEGY</span>
            <strong>
              Determines when the team chooses to use those capabilities.
            </strong>
          </div>

        </div>

        <div className="balance-statement">
          <span>THE OBJECTIVE</span>

          <strong>
            Better engineering should create different
            <br />
            strategic possibilities — not simply better statistics.
          </strong>
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
            <span>battlefield.</span>
          </h2>
        </div>

        <Link to="/arena" className="primary-button">
          Arena architecture
          <span>→</span>
        </Link>

      </section>
    </div>
  );
}