export default function ArchitecturePreview() {
    return (
      <div className="architecture-diagram">
        <div className="architecture-column">
          <span className="diagram-label">TEAM</span>
  
          <div className="diagram-box team-box">
            <strong>YOUR ROBOT</strong>
            <span>Chassis</span>
            <span>Actuators</span>
            <span>Mechanisms</span>
            <span>Control software</span>
          </div>
        </div>
  
        <div className="diagram-connector">
          <span>USB</span>
          <i>→</i>
        </div>
  
        <div className="architecture-column">
          <span className="diagram-label">STANDARDIZED</span>
  
          <div className="diagram-box interface-box">
            <strong>CHAMPION INTERFACE</strong>
            <span>Core</span>
            <span>IMU / Sensors</span>
            <span>Photodiode</span>
            <span>Weapon interface</span>
          </div>
        </div>
  
        <div className="diagram-connector">
          <span>BLE</span>
          <i>→</i>
        </div>
  
        <div className="architecture-column">
          <span className="diagram-label">AUTHORITATIVE</span>
  
          <div className="diagram-box server-box">
            <strong>GAME SERVER</strong>
            <span>Game state</span>
            <span>Rules</span>
            <span>Damage</span>
            <span>Objectives</span>
            <span>Electronic referee</span>
          </div>
        </div>
      </div>
    );
  }