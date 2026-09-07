import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ChapterNav from "../components/ChapterNav";
import Figure from "../components/Figure";
import { OpenClosedDiagram } from "../components/diagrams";
import {
  PageIntro,
  Eyebrow,
  Section,
  WideSection,
  Callout,
  TwoCol,
  ListPlain,
  PageNav,
  DiagramPanel,
  Takeaway,
} from "../components/ui";

export default function Server() {
  return (
    <Layout>
      <ChapterNav chapterId="server" />

      <PageIntro>
        <Eyebrow>Chapter 05 · Infrastructure</Eyebrow>
        <h1>Server</h1>
        <p>
          The game server is the electronic referee. Robots report physical
          measurements; the server decides official game state.
        </p>
      </PageIntro>

      <WideSection>
        <Figure
          src="/images/interactive-floor.jpg"
          alt="Interactive floor projection system"
          caption="Projection turns a floor into a readable game surface — fed by authoritative state."
          credit="LumoPlay · portable interactive floor"
        />
        <Figure
          src="/images/xr-projection.jpg"
          alt="Projected spectator layer on a physical play space"
          caption="The server feeds visualization: projection and HUD are the spectator layer, not the authority."
          credit="Reference: Alfa5 XR Sports / Digital AV Magazine"
        />
      </WideSection>

      <Section>
        <h2>Authoritative state</h2>
        <p>
          The server maintains champion identity and position, HP, energy,
          alive/dead, abilities and cooldowns, combat outcomes, respawn,
          turrets, monsters, Power Charges, Dragon, Power Core, Nexus, and
          match timer.
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
          authoritative, a comms failure is a match-level risk.
        </p>
        <ul>
          <li>Low latency and predictable behavior</li>
          <li>Efficient bandwidth and reliable delivery</li>
          <li>Failure detection and recovery</li>
          <li>Stress tests with full robot count and interference</li>
        </ul>
      </Section>

      <WideSection>
        <h2>Open interface, closed server</h2>
        <DiagramPanel>
          <OpenClosedDiagram />
          <figcaption>
            Teams get everything needed to integrate. The organization keeps
            match authority.
          </figcaption>
        </DiagramPanel>
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
      </WideSection>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Open what teams need to build. Close what must stay fair and
          authoritative.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/arena">← Arena</Link>
        <Link to="/development">Next: Development →</Link>
      </PageNav>
    </Layout>
  );
}
