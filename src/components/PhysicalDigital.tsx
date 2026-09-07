const physical = [
    "Robots",
    "Sword",
    "Heavy shield",
    "Healing emitter",
    "Missile launcher",
    "Mines",
    "Turrets",
    "Dragon",
    "Power Core",
  ];
  
  const digital = [
    "HP / LP",
    "Damage",
    "Energy",
    "Cooldowns",
    "Status effects",
    "Projectile simulation",
    "Respawn",
    "Game rules",
    "Match state",
  ];
  
  const projected = [
    "Missile trajectories",
    "Projectile impact",
    "Area of effect",
    "Healing effect",
    "Combat feedback",
    "Objective state",
  ];
  
  export default function PhysicalDigital() {
    return (
      <section className="physical-digital">
        <div className="section-header">
          <span className="section-number">02</span>
  
          <div>
            <span className="eyebrow">DESIGN PRINCIPLE</span>
            <h2>
              Physical.
              <br />
              Digital.
              <br />
              Projected.
            </h2>
          </div>
        </div>
  
        <p className="section-lead">
          We do not physically implement something just because we can.
          Physical hardware is used when the physical interaction itself
          creates gameplay. Digital systems handle state and rules.
          Projection makes invisible game events visible.
        </p>
  
        <div className="three-columns">
  
          <div className="pd-column">
            <div className="pd-heading">
              <span className="pd-icon physical-icon" />
              <h3>PHYSICAL</h3>
            </div>
  
            <p>Things that physically interact with the battlefield.</p>
  
            <div className="tag-list">
              {physical.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
  
          <div className="pd-column">
            <div className="pd-heading">
              <span className="pd-icon digital-icon" />
              <h3>DIGITAL</h3>
            </div>
  
            <p>Game state and rules maintained by the server.</p>
  
            <div className="tag-list">
              {digital.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
  
          <div className="pd-column">
            <div className="pd-heading">
              <span className="pd-icon projected-icon" />
              <h3>PROJECTED</h3>
            </div>
  
            <p>Digital information turned into visible battlefield events.</p>
  
            <div className="tag-list">
              {projected.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
  
        </div>
      </section>
    );
  }