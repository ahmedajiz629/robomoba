import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Figure from "../components/Figure";
import {
  OpenClosedDiagram,
  ServerIODiagram,
  ServerModulesDiagram,
  ItemStatesDiagram,
  SessionLifecycleDiagram,
} from "../components/diagrams";
import {
  PageIntro,
  Eyebrow,
  WideSection,
  Callout,
  TwoCol,
  ListPlain,
  TextLink,
  PageNav,
  DiagramPanel,
  Takeaway,
} from "../components/ui";

export default function Server() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Chapter 05 · Infrastructure</Eyebrow>
        <h1>Server</h1>
        <p>
          The game server is the electronic referee. Cores report IMU and
          pose. Mines report where they are. The server decides HP, hits,
          and the Nexus — then tells the floor and the lights what to show.
        </p>
      </PageIntro>

      <WideSection>
        <h2>What comes in. What goes out.</h2>
        <p>
          The Core is the only uplink for a champion. Team laptops,
          projectors, and screens do not get a vote.
        </p>
        <DiagramPanel>
          <ServerIODiagram />
          <figcaption>
            Authenticated measurements in. Official snapshot out. Lighting
            and projection only subscribe.
          </figcaption>
        </DiagramPanel>
        <p>
          After session auth each Core sends a timestamped{" "}
          <strong>pose</strong> (x, y, heading) in the arena frame,{" "}
          <strong>IMU</strong> samples for the sealed actuator, and{" "}
          <strong>optical events</strong> (heal emit / photodiode receive).
          Battery or Charge readings may ride along as diagnostics. They
          are not a game resource.
        </p>
        <p>
          Each mine tag sends <strong>identity and position</strong>.
          Arming is still a game event — Artillery on the mine, then arm —
          not a fourth weapon. Map items do not decide hits. They may
          acknowledge a lighting command.
        </p>
      </WideSection>

      <WideSection>
        <h2>Inside the referee</h2>
        <DiagramPanel>
          <ServerModulesDiagram />
          <figcaption>
            Ingest, world, rules, then one snapshot. Everything else reads
            that bus.
          </figcaption>
        </DiagramPanel>
        <ListPlain>
          <li>
            <strong>Ingest + clock</strong>
            <span>Accept only authenticated packets. Drop stale or replayed samples.</span>
          </li>
          <li>
            <strong>World model</strong>
            <span>Six champion poses, mine poses, fixed landmarks (Nexus, turrets, camps, pads, gates).</span>
          </li>
          <li>
            <strong>Rules + combat sim</strong>
            <span>IMU and optics become virtual actions. HP, Mana, cooldowns, projectiles, Nexus vulnerability.</span>
          </li>
          <li>
            <strong>State bus</strong>
            <span>One official snapshot per tick. Projection, lights, and Cores subscribe.</span>
          </li>
        </ListPlain>
        <Callout>
          <strong>Rule of interpretation</strong>
          <p>
            Physical motion is the input. The snapshot is what happened. If
            the floor looks wrong, the snapshot wins.
          </p>
        </Callout>
      </WideSection>

      <WideSection>
        <h2>The projection scene</h2>
        <p>
          The server owns the scene the floor <strong>must</strong> show:
          attacks, AoE, virtual projectiles, a confirmed heal, and{" "}
          <strong>HP and Mana</strong> near each robot. Visualizer and
          projectors only rasterize that scene. They cannot invent a hit.
        </p>
        <p>
          <strong>Charge stays off the image.</strong> It is physical robot
          energy, not a virtual bar.
        </p>
        <Figure
          src="/images/xr-projection.jpg"
          alt="Projected spectator layer on a physical play space"
          caption="The image is a drawing of the snapshot: attacks, AoE, HP, Mana. Not Charge."
          credit="Reference: Alfa5 XR Sports / Digital AV Magazine"
        />
      </WideSection>

      <WideSection>
        <h2>Self-lighting map items</h2>
        <p>
          Nexus, turrets, mines, camps, charge pads, and gates light
          themselves. The server sends the state. The object does not
          referee.
        </p>
        <DiagramPanel>
          <ItemStatesDiagram />
          <figcaption>
            Lighting follows official state. A mine that looks armed is
            armed only if the snapshot says so.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <WideSection>
        <h2>Deploy, session, tokens, calibrate</h2>
        <DiagramPanel>
          <SessionLifecycleDiagram />
          <figcaption>
            Hardware first, then a session, then bound Cores, then one
            shared arena frame.
          </figcaption>
        </DiagramPanel>

        <h3>Deploy</h3>
        <p>
          Match day is one stack: Game Server, BLE gateway, projector
          machine (can be the same host), and the item lighting bus.
          Practice uses the same protocol without competition tokens —
          local or hosted.
        </p>
        <TextLink to="/development">How teams practice against it →</TextLink>

        <h3>Create the session</h3>
        <p>
          The operator opens a session: map profile, sides, duration. The
          server allocates six champion slots, the mine IDs, and the fixed
          item IDs. Nothing plays until those slots are bound and
          calibrated.
        </p>

        <h3>Register Cores and tokens</h3>
        <p>
          An official Core presents the patched competition token. The
          server binds it to <strong>(session, team, role)</strong> and
          issues a short-lived session credential. Practice tokens are
          organization-issued and cannot impersonate match hardware. The
          token never ships in public firmware.
        </p>
        <p>
          From then on the Core downlink carries official{" "}
          <strong>alive</strong> — weapons on or off. Projection never
          turns a weapon off.
        </p>

        <h3>Calibrate</h3>
        <p>
          One shared <strong>arena frame</strong>. Base corners and spawn
          pads are the position references. Projector homography maps
          pixels to meters in that same frame. Each Core records an IMU
          rest pose. Mine tags are paired to IDs. Fixed items are stored
          as landmarks.
        </p>
        <p>
          The clock does not start until every bound Core and mine reports
          inside tolerance.
        </p>
        <Callout>
          <strong>Comms failure</strong>
          <p>
            Cores talk over BLE. Because the server is the referee, a lost
            Core is a match-level risk — not an ordinary robot stall.
          </p>
        </Callout>
      </WideSection>

      <WideSection>
        <h2>Open interface, closed server</h2>
        <DiagramPanel>
          <OpenClosedDiagram />
          <figcaption>
            Teams get everything needed to integrate. The organization
            keeps match authority.
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
          Cores and mines report. The server decides. The floor image shows
          attacks, AoE, HP, and Mana. Lights follow item state. Charge
          stays on the robot.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/arena">← Arena</Link>
        <Link to="/development">Next: Development →</Link>
      </PageNav>
    </Layout>
  );
}
