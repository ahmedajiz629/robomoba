import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  PageIntro,
  Eyebrow,
  Section,
  Callout,
  Principle,
  Flow,
  ListPlain,
  PageNav,
  TwoCol,
} from "../components/ui";

export default function System() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Architecture</Eyebrow>
        <h1>System</h1>
        <p>
          The competition standardizes the game boundary — not the robot.
          Fairness comes from a shared interface; creativity comes from
          everything around it.
        </p>
      </PageIntro>

      <Section>
        <h2>Champion vs robot</h2>
        <p>
          The <strong>champion</strong> is the standardized game entity.
          The <strong>robot</strong> is the team’s physical implementation.
        </p>
        <Flow>{`TEAM ROBOT
   ├── chassis, motors, actuators, mechanics
   └── Champion Interface (organization)
         ├── Core
         ├── Weapon sensors / actuators interface
         └── Photodiode / light beam (where required)`}</Flow>
        <Principle>
          The organization standardizes the measurement. The team engineers
          the physical action.
        </Principle>
      </Section>

      <Section>
        <h2>Champion Interface</h2>
        <p>
          A sealed hardware assembly supplied by the organization. Each
          champion type has its own interface. It is mounted before the
          match and removed after.
        </p>
        <p>
          For a 3v3 match the organization needs six competition interfaces
          (two of each type). Extra units can exist for testing and demos,
          but teams do not permanently own competition hardware.
        </p>
        <Callout $tone="warn">
          <strong>Sealed assembly</strong>
          <p>
            Protected wiring must not be modified, bypassed, or separated.
            Tampering is grounds for disqualification. The goal is a shared
            game interface — not to limit robot engineering.
          </p>
        </Callout>
      </Section>

      <Section>
        <h2>Core</h2>
        <p>
          The Core is the center of the interface. It connects the robot
          (USB power + data API) and the competition infrastructure
          (wireless link to the game server).
        </p>
        <TwoCol>
          <div>
            <h3>USB to the robot</h3>
            <ul>
              <li>Powers protected interface components</li>
              <li>Exposes a documented API</li>
              <li>Hides internal electronics from teams</li>
            </ul>
          </div>
          <div>
            <h3>Wireless to the server</h3>
            <ul>
              <li>BLE + antenna in the Core</li>
              <li>Low latency and failure detection</li>
              <li>Treated as critical match infrastructure</li>
            </ul>
          </div>
        </TwoCol>
      </Section>

      <Section>
        <h2>Who builds what</h2>
        <ListPlain>
          <li>
            <strong>Organization</strong>
            <span>
              Champion Interfaces, Core, arena electronics, tracking, game
              server, projection, safety and tournament process
            </span>
          </li>
          <li>
            <strong>Team</strong>
            <span>
              Chassis, drivetrain, weapon actuators, mechanical structure,
              control software, strategy
            </span>
          </li>
        </ListPlain>
        <p>
          Example: the Fighter IMU lives in the interface and measures the
          sword. The mechanism that moves the sword is entirely the team’s
          problem.
        </p>
      </Section>

      <Section>
        <h2>Open interface, protected token</h2>
        <p>
          Interface hardware and firmware should be open source so teams can
          understand and reproduce them for development — except the
          competition-time authentication token.
        </p>
        <Callout>
          <strong>Integrity vs freedom</strong>
          <p>
            The interface must stay identical. The robot around it is open to
            innovation. Same boundary for everyone; different machines.
          </p>
        </Callout>
      </Section>

      <PageNav>
        <Link to="/">← Home</Link>
        <Link to="/game">Next: Game →</Link>
      </PageNav>
    </Layout>
  );
}
