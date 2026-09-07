import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SystemOverview from "../components/SystemOverview";
import ArchitectureFlow from "../components/ArchitectureFlow";
import PhysicalDigital from "../components/PhysicalDigital";

const champions = [
  {
    role: "TANK / SUPPORT",
    name: "Guardian",
    description:
      "Protects allies with a heavy shield and provides healing through a physical light beam.",
    color: "cyan",
    abilities: ["Heavy Shield", "Shield Burst", "Healing Beam"],
  },
  {
    role: "FIGHTER",
    name: "Fighter",
    description:
      "Uses a physically actuated sword where movement, acceleration and swing geometry become gameplay.",
    color: "orange",
    abilities: ["Sword", "Precision Swing", "Mobility"],
  },
  {
    role: "ARTILLERY",
    name: "Artillery",
    description:
      "Controls territory with a physical launcher and persistent deployable mines.",
    color: "purple",
    abilities: ["Ballistic Launcher", "Mines", "Area Control"],
  },
];

export default function Home() {
  return (
    <div className="site">
      <Navbar />

      <main>

        {/* HERO */}

        <section className="home-hero">

          <div className="hero-background-grid" />

          <div className="hero-copy">

            <div className="eyebrow hero-eyebrow">
              ROBOTICS COMPETITION · INTERNAL CONCEPT
            </div>

            <h1>
              We define
              <br />
              <span>the game.</span>
            </h1>

            <div className="hero-statement">
              You define the robot.
            </div>

            <p>
              A physical 3v3 MOBA where robotics is not decoration around
              the game — the robot itself is the mechanism through which
              the game is played.
            </p>

            <div className="hero-actions">
              <Link to="/system" className="primary-button">
                Understand the system
                <span>→</span>
              </Link>

              <Link to="/game" className="secondary-button">
                Explore the game
              </Link>
            </div>

          </div>

          <div className="hero-system">

            <div className="hero-system-title">
              <span>SYSTEM OVERVIEW</span>
              <small>THE ENTIRE COMPETITION</small>
            </div>

            <div className="mini-system">

              <div className="mini-node team-node">
                <small>TEAM</small>
                <strong>ROBOT</strong>
                <span>physical machine</span>
              </div>

              <div className="mini-arrow">→</div>

              <div className="mini-node interface-node">
                <small>OFFICIAL</small>
                <strong>INTERFACE</strong>
                <span>measurement boundary</span>
              </div>

              <div className="mini-arrow">→</div>

              <div className="mini-node server-node">
                <small>AUTHORITATIVE</small>
                <strong>SERVER</strong>
                <span>game state + rules</span>
              </div>

            </div>

            <div className="mini-divider" />

            <div className="mini-output">
              <span>PROJECTION</span>
              <span>ARENA</span>
              <span>SPECTATOR HUD</span>
            </div>

          </div>
        </section>


        {/* QUICK CONCEPT */}

        <section className="concept-strip">

          <div>
            <strong>3V3</strong>
            <span>three champions per team</span>
          </div>

          <div>
            <strong>3</strong>
            <span>champion types</span>
          </div>

          <div>
            <strong>3</strong>
            <span>lanes + jungle</span>
          </div>

          <div>
            <strong>1</strong>
            <span>authoritative game server</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>robot engineering possibilities</span>
          </div>

        </section>


        {/* COMPLETE SYSTEM */}

        <SystemOverview />


        {/* ARCHITECTURE */}

        <section className="architecture-section">

          <div className="section-header">
            <span className="section-number">03</span>

            <div>
              <span className="eyebrow">SYSTEM ARCHITECTURE</span>

              <h2>
                One game.
                <br />
                Three boundaries.
              </h2>
            </div>
          </div>

          <p className="section-lead">
            The organization owns the standardized competition boundary.
            Teams own everything inside their robot. The server remains
            authoritative over the game.
          </p>

          <ArchitectureFlow />

          <div className="architecture-principle">

            <span className="principle-label">THE CORE IDEA</span>

            <p>
              <strong>
                The organization standardizes the measurement.
              </strong>

              <br />

              The team engineers the physical action.
            </p>

          </div>

          <div className="architecture-link">
            <Link to="/system">
              Explore the complete architecture →
            </Link>
          </div>

        </section>


        {/* HOW PHYSICAL ACTION BECOMES GAMEPLAY */}

        <section className="translation-section">

          <div className="section-header">
            <span className="section-number">04</span>

            <div>
              <span className="eyebrow">PHYSICAL → DIGITAL</span>

              <h2>
                The robot acts.
                <br />
                The server interprets.
              </h2>
            </div>
          </div>

          <div className="translation-grid">

            <div className="translation-card">
              <span>FIGHTER</span>

              <div className="translation-flow">
                <strong>SWORD MOVEMENT</strong>
                <i>↓</i>
                <strong>IMU MEASUREMENT</strong>
                <i>↓</i>
                <strong>ATTACK CALCULATION</strong>
                <i>↓</i>
                <strong>DAMAGE</strong>
              </div>
            </div>

            <div className="translation-card">
              <span>TANK</span>

              <div className="translation-flow">
                <strong>SHIELD POSITION</strong>
                <i>↓</i>
                <strong>GEOMETRY / ORIENTATION</strong>
                <i>↓</i>
                <strong>PROTECTION RULE</strong>
                <i>↓</i>
                <strong>DAMAGE MITIGATION</strong>
              </div>
            </div>

            <div className="translation-card">
              <span>ARTILLERY</span>

              <div className="translation-flow">
                <strong>LAUNCH ACTION</strong>
                <i>↓</i>
                <strong>LAUNCH PARAMETERS</strong>
                <i>↓</i>
                <strong>SIMULATED TRAJECTORY</strong>
                <i>↓</i>
                <strong>PROJECTED IMPACT</strong>
              </div>
            </div>

          </div>

        </section>


        {/* CHAMPIONS */}

        <section className="home-champions">

          <div className="section-header">

            <span className="section-number">05</span>

            <div>
              <span className="eyebrow">THE THREE CHAMPIONS</span>

              <h2>
                Three roles.
                <br />
                Three physical problems.
              </h2>
            </div>

          </div>

          <div className="home-champion-grid">

            {champions.map((champion, index) => (
              <article
                key={champion.name}
                className={`home-champion-card ${champion.color}`}
              >

                <div className="champion-number">
                  0{index + 1}
                </div>

                <div className="champion-visual">
                  <div className="visual-ring outer" />
                  <div className="visual-ring inner" />
                  <div className="visual-core" />
                </div>

                <div className="champion-role">
                  {champion.role}
                </div>

                <h3>{champion.name}</h3>

                <p>{champion.description}</p>

                <div className="champion-abilities">
                  {champion.abilities.map((ability) => (
                    <span key={ability}>{ability}</span>
                  ))}
                </div>

              </article>
            ))}

          </div>

          <div className="section-link">
            <Link to="/champions">
              See physical mechanisms and game interpretation →
            </Link>
          </div>

        </section>


        {/* PHYSICAL / DIGITAL / PROJECTED */}

        <PhysicalDigital />


        {/* ARENA */}

        <section className="arena-home">

          <div className="arena-home-copy">

            <span className="eyebrow">THE PHYSICAL BATTLEFIELD</span>

            <h2>
              Three lanes.
              <br />
              One jungle.
              <br />
              <span>One arena.</span>
            </h2>

            <p>
              The arena is not simply a floor for robots to drive on.
              It contains the structures and resources that create the
              strategic game: turrets, jungle monsters, Dragon, power
              charges, gates, a central Power Core and the Nexus.
            </p>

            <Link to="/arena" className="text-link">
              Explore arena composition →
            </Link>

          </div>

          <div className="arena-schematic">

            <div className="lane schematic-top">
              TOP LANE
            </div>

            <div className="lane schematic-mid">
              MID LANE
            </div>

            <div className="lane schematic-bottom">
              BOT LANE
            </div>

            <div className="schematic-jungle">
              JUNGLE
            </div>

            <div className="schematic-dragon">
              DRAGON
            </div>

            <div className="schematic-core">
              POWER CORE
            </div>

            <div className="schematic-turret t1" />
            <div className="schematic-turret t2" />
            <div className="schematic-turret t3" />
            <div className="schematic-turret t4" />

          </div>

        </section>


        {/* DEVELOPMENT SERVER */}

        <section className="development-preview">

          <div className="section-header">

            <span className="section-number">06</span>

            <div>
              <span className="eyebrow">DEVELOPMENT ECOSYSTEM</span>

              <h2>
                The competition
                <br />
                starts before the event.
              </h2>
            </div>

          </div>

          <div className="development-grid">

            <div className="development-copy">

              <p>
                The Champion Interface is open source. Teams can reproduce
                its hardware and software during development instead of
                waiting for official competition hardware.
              </p>

              <p>
                A public test server is available at least two months before
                the competition. Teams connect their robots to it, exercise
                the real protocol and receive the game state through the
                same visualization pipeline.
              </p>

              <Link to="/development" className="text-link">
                See development workflow →
              </Link>

            </div>

            <div className="development-diagram">

              <div className="dev-node">
                <strong>TEAM ROBOT</strong>
                <span>local development</span>
              </div>

              <div className="dev-arrow">↓</div>

              <div className="dev-node test-server">
                <strong>PUBLIC TEST SERVER</strong>
                <span>real API · real game state</span>
              </div>

              <div className="dev-arrow">↓</div>

              <div className="dev-node projection-node">
                <strong>VISUALIZER</strong>
                <span>projection · HUD · events</span>
              </div>

            </div>

          </div>

        </section>


        {/* ORGANIZATION RESPONSIBILITY */}

        <section className="responsibility-section">

          <span className="eyebrow">WHAT THE ORGANIZATION HAS TO BUILD</span>

          <h2>
            The competition is a
            <br />
            <span>system, not just a game.</span>
          </h2>

          <div className="responsibility-grid">

            <div>
              <span>01</span>
              <strong>GAME DESIGN</strong>
              <p>
                Rules, combat, resources, objectives, win conditions.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>HARDWARE</strong>
              <p>
                Champion Interfaces, Core, arena electronics and infrastructure.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>SOFTWARE</strong>
              <p>
                Server, protocol, tracking, referee and visualization.
              </p>
            </div>

            <div>
              <span>04</span>
              <strong>OPERATIONS</strong>
              <p>
                Calibration, safety, testing, tournament procedure and reliability.
              </p>
            </div>

          </div>

          <Link to="/roadmap" className="primary-button responsibility-button">
            See six-month roadmap →
          </Link>

        </section>


        {/* FINAL PRINCIPLE */}

        <section className="final-principle">

          <span className="eyebrow">THE DESIGN PHILOSOPHY</span>

          <blockquote>
            “The game server determines the rules,
            <br />
            but physical phenomena determine
            <br />
            <span>how the game is played.</span>”
          </blockquote>

          <div className="final-links">
            <Link to="/system">System architecture</Link>
            <Link to="/game">Game design</Link>
            <Link to="/development">Development platform</Link>
            <Link to="/roadmap">Implementation roadmap</Link>
          </div>

        </section>

      </main>

      <footer>
        <strong>MOBA / ROBOTICS</strong>
        <span>INTERNAL CONCEPT · 3V3 · ENGINEERING COMPETITION</span>
      </footer>

    </div>
  );
}