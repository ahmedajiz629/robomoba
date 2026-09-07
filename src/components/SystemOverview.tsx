const systems = [
    {
      number: "01",
      title: "THE GAME",
      text:
        "A physical 3v3 MOBA. Three champions, three lanes, a jungle, objectives, resources, combat and a common win condition.",
    },
    {
      number: "02",
      title: "THE ROBOTS",
      text:
        "Teams design the machines. Chassis, locomotion, actuators and physical mechanisms are engineering decisions that directly affect gameplay.",
    },
    {
      number: "03",
      title: "THE PLATFORM",
      text:
        "The organization provides the standardized Champion Interface, Core, game server, communication protocol, tracking and arena infrastructure.",
    },
    {
      number: "04",
      title: "THE DEVELOPMENT ECOSYSTEM",
      text:
        "Teams can reproduce the open interface, connect to the public test server and see the game state through the same visualization pipeline before competition.",
    },
  ];
  
  export default function SystemOverview() {
    return (
      <section className="system-overview">
        <div className="section-header">
          <span className="section-number">01</span>
  
          <div>
            <span className="eyebrow">THE COMPLETE SYSTEM</span>
            <h2>
              What are
              <br />
              we actually building?
            </h2>
          </div>
        </div>
  
        <div className="system-grid">
          {systems.map((system) => (
            <article key={system.number} className="system-card">
              <span className="system-number">{system.number}</span>
  
              <h3>{system.title}</h3>
  
              <p>{system.text}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }