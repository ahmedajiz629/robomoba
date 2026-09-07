import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  PageIntro,
  Eyebrow,
  Section,
  Callout,
  TwoCol,
  ListPlain,
  PageNav,
} from "../components/ui";

export default function Server() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Infrastructure</Eyebrow>
        <h1>Server</h1>
        <p>
          The game server is the electronic referee. Robots report physical
          measurements; the server decides official game state.
        </p>
      </PageIntro>

      <Section>
        <h2>Authoritative state</h2>
        <p>The server maintains, among other things:</p>
        <p>
          champion identity and position, HP, energy, alive/dead, abilities
          and cooldowns, combat outcomes, respawn, turrets, monsters, Power
          Charges, Dragon, Power Core, Nexus, and match timer.
        </p>
        <Callout>
          <strong>Rule of interpretation</strong>
          <p>
            Physical phenomena determine how play feels. The server determines
            what officially happened.
          </p>
        </Callout>
      </Section>

      <Section>
        <h2>Communication</h2>
        <p>
          Cores talk to infrastructure over BLE. Because the server is
          authoritative, a comms failure is a match-level risk — not a minor
          robot glitch.
        </p>
        <ul>
          <li>Low latency and predictable behavior</li>
          <li>Efficient bandwidth and reliable delivery</li>
          <li>Failure detection and recovery</li>
          <li>Stress tests with full robot count and interference</li>
        </ul>
      </Section>

      <Section>
        <h2>Open interface, closed server</h2>
        <TwoCol>
          <div>
            <h3>Public</h3>
            <ListPlain>
              <li>
                <strong>Champion Interface</strong>
                <span>Hardware design and firmware (except token)</span>
              </li>
              <li>
                <strong>APIs and protocols</strong>
                <span>Core API, game protocol, integration docs</span>
              </li>
            </ListPlain>
          </div>
          <div>
            <h3>Private</h3>
            <ListPlain>
              <li>
                <strong>Game server</strong>
                <span>Implementation remains organization-controlled</span>
              </li>
              <li>
                <strong>Competition token</strong>
                <span>Authentication secret for official matches</span>
              </li>
            </ListPlain>
          </div>
        </TwoCol>
        <p>
          Teams get everything needed to integrate. The organization keeps
          control of fairness and match authority.
        </p>
      </Section>

      <Section>
        <h2>Spectator layer</h2>
        <p>
          The server feeds a visualization engine for projection and HUD:
          trajectories, AoE, HP, events. Projection is the digital skin over
          a physical match — not a substitute for seeing robots act.
        </p>
      </Section>

      <PageNav>
        <Link to="/arena">← Arena</Link>
        <Link to="/development">Next: Development →</Link>
      </PageNav>
    </Layout>
  );
}
