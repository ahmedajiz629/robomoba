import "./index.css";
import ArchitecturePreview from "./components/ArchitecturePreview";
import ChampionPreview from "./components/ChampionPreview";

const champions = [
  {
    role: "TANK / SUPPORT",
    name: "Guardian",
    description: "Controls space, protects allies, and turns defense into offense.",
    abilities: ["Heavy Shield", "Shield Burst", "Healing Beam"],
    accent: "cyan" as const,
  },
  {
    role: "FIGHTER",
    name: "Fighter",
    description: "Closes the distance and converts physical movement into damage.",
    abilities: ["Sword", "Precision Swing", "Mobility"],
    accent: "orange" as const,
  },
  {
    role: "ARTILLERY",
    name: "Artillery",
    description: "Controls territory with ballistic attacks and persistent mines.",
    abilities: ["Ballistic Launcher", "Mines", "Area Control"],
    accent: "purple" as const,
  },
];

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="nav-logo">
          <span className="logo-mark">M</span>
          <span>MOBA // ROBOTICS</span>
        </div>

        <nav>
          <a href="#concept">Concept</a>
          <a href="#architecture">Architecture</a>
          <a href="#champions">Champions</a>
          <a href="#arena">Arena</a>
          <a href="#roadmap">Roadmap</a>
        </nav>

        <div className="nav-badge">3V3 · PHYSICAL MOBA</div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="concept">
          <div className="hero-grid" />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              ROBOTICS COMPETITION · 01
            </div>

            <h1>
              WE DEFINE
              <br />
              <span>THE GAME.</span>
            </h1>

            <p className="hero-subtitle">
              <strong>You define the robot.</strong>
            </p>

            <p className="hero-description">
              A physical MOBA where engineering becomes gameplay.
              Teams build the robots. The arena, sensors, and game server
              turn their physical actions into a competitive game.
            </p>

            <div className="hero-actions">
              <a href="#architecture" className="button button-primary">
                Explore the system
                <span>→</span>
              </a>

              <a href="#champions" className="button button-secondary">
                Meet the champions
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="arena-lines" />

            <div className="arena-label label-top">TOP LANE</div>
            <div className="arena-label label-mid">MID</div>
            <div className="arena-label label-bottom">BOT LANE</div>

            <div className="arena-node node-1" />
            <div className="arena-node node-2" />
            <div className="arena-node node-3" />

            <div className="hero-core">
              <span>POWER</span>
              <strong>CORE</strong>
            </div>

            <div className="hero-caption">
              <span>LIVE ARENA</span>
              <small>3 LANES · JUNGLE · OBJECTIVES</small>
            </div>
          </div>
        </section>

        {/* FORMAT */}
        <section className="format-section">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <span className="eyebrow">THE FORMAT</span>
              <h2>Three robots.<br />One team.</h2>
            </div>
          </div>

          <div className="format-grid">
            <div className="format-card featured">
              <span className="format-number">3V3</span>
              <h3>TEAM BATTLE</h3>
              <p>
                Three champions enter the arena simultaneously.
                Teams decide how and where they deploy them.
              </p>
            </div>

            <div className="format-card">
              <span className="format-number">03</span>
              <h3>CHAMPIONS</h3>
              <p>
                Tank / Support, Fighter, and Artillery.
                No champion is locked to a lane.
              </p>
            </div>

            <div className="format-card">
              <span className="format-number">∞</span>
              <h3>ENGINEERING FREEDOM</h3>
              <p>
                Chassis, motors, actuators and mechanisms are
                designed by the team.
              </p>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="architecture-section" id="architecture">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <span className="eyebrow">THE SYSTEM</span>
              <h2>The game is digital.<br />The action is physical.</h2>
            </div>
          </div>

          <p className="section-intro">
            The organization standardizes the measurement.
            The team engineers the physical action.
          </p>

          <ArchitecturePreview />

          <div className="architecture-principles">
            <div>
              <span>01</span>
              <strong>Organization</strong>
              <p>
                Defines the rules, Champion Interface, arena,
                game server and measurement boundary.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>Team</strong>
              <p>
                Designs the robot, mechanical systems,
                actuators and physical mechanisms.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>Server</strong>
              <p>
                Maintains the authoritative game state and
                interprets physical measurements as game events.
              </p>
            </div>
          </div>
        </section>

        {/* CHAMPIONS */}
        <section className="champions-section" id="champions">
          <div className="section-heading">
            <span className="section-number">03</span>
            <div>
              <span className="eyebrow">CHAMPIONS</span>
              <h2>Three play styles.<br />Infinite robots.</h2>
            </div>
          </div>

          <div className="champions-grid">
            {champions.map((champion, index) => (
              <ChampionPreview
                key={champion.name}
                index={index}
                {...champion}
              />
            ))}
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="philosophy-section">
          <div className="philosophy-mark">"</div>

          <blockquote>
            The competition standardizes the game boundary,
            <span> not the robot.</span>
          </blockquote>

          <div className="philosophy-bottom">
            <span>PHYSICAL WHERE PHYSICAL INTERACTION CREATES GAMEPLAY.</span>
            <span>DIGITAL WHERE DIGITAL IMPLEMENTATION IS MORE PRACTICAL.</span>
          </div>
        </section>

        {/* ARENA TEASER */}
        <section className="arena-section" id="arena">
          <div className="arena-content">
            <span className="eyebrow">THE BATTLEFIELD</span>

            <h2>
              THREE LANES.
              <br />
              ONE JUNGLE.
              <br />
              <span>NO SCRIPT.</span>
            </h2>

            <p>
              Turrets. Dragon. Mana monsters. Power charges.
              Gates. Mines. A central Power Core.
            </p>

            <a className="text-link" href="#roadmap">
              Discover the arena →
            </a>
          </div>

          <div className="arena-map-teaser">
            <div className="lane lane-top">TOP</div>
            <div className="lane lane-mid">MID</div>
            <div className="lane lane-bottom">BOT</div>

            <div className="jungle-text">JUNGLE</div>
            <div className="dragon">DRAGON</div>
            <div className="power-core">POWER CORE</div>

            <div className="turret turret-a" />
            <div className="turret turret-b" />
            <div className="turret turret-c" />
            <div className="turret turret-d" />
          </div>
        </section>

        {/* SPECTATOR */}
        <section className="spectator-section">
          <div className="spectator-copy">
            <span className="eyebrow">BUILT TO BE WATCHED</span>
            <h2>
              Physical robotics.
              <br />
              <span>Esports spectacle.</span>
            </h2>

            <p>
              The arena remains physical and visible while a
              projection layer makes the invisible game state
              understandable to spectators.
            </p>
          </div>

          <div className="spectator-stack">
            <div className="spectator-layer layer-top">
              <span>GAME SERVER</span>
              <small>AUTHORITATIVE STATE</small>
            </div>

            <div className="spectator-arrow">↓</div>

            <div className="spectator-layer">
              <span>VISUALIZATION</span>
              <small>TRAJECTORIES · DAMAGE · AOE · EVENTS</small>
            </div>

            <div className="spectator-arrow">↓</div>

            <div className="spectator-output">
              <div>
                <span>PROJECTION</span>
                <small>ARENA</small>
              </div>
              <div>
                <span>LEDs</span>
                <small>ROBOTS</small>
              </div>
              <div>
                <span>HUD</span>
                <small>SCREENS</small>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="roadmap-section" id="roadmap">
          <div className="section-heading">
            <span className="section-number">04</span>
            <div>
              <span className="eyebrow">SIX MONTHS</span>
              <h2>Build the platform.<br />Then break it.</h2>
            </div>
          </div>

          <div className="roadmap">
            {[
              ["01", "SPECIFY", "Rules · Interface · Architecture"],
              ["02", "CONNECT", "Core · API · BLE · Server"],
              ["03", "FIGHT", "Shield · Sword · Launcher · Mines"],
              ["04", "BUILD", "Arena · Turrets · Objectives"],
              ["05", "TEST", "1v1 → 2v2 → 3v3"],
              ["06", "STABILIZE", "Reliability · Safety · Balance"],
            ].map(([number, title, subtitle]) => (
              <div className="roadmap-item" key={number}>
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <small>{subtitle}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="final-section">
          <span className="eyebrow">THE IDEA</span>

          <h2>
            You don't control
            <br />
            <span>the game.</span>
          </h2>

          <p>
            You build the machine that survives it.
          </p>
        </section>
      </main>

      <footer>
        <span>MOBA // ROBOTICS</span>
        <span>3V3 · ENGINEERING COMPETITION</span>
      </footer>
    </div>
  );
}

export default App;