import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  PageIntro,
  Eyebrow,
  Section,
  WideSection,
  Callout,
  Grid,
  Item,
  Flow,
  PageNav,
} from "../components/ui";

export default function Game() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Match design</Eyebrow>
        <h1>Game</h1>
        <p>
          A MOBA structure — lanes, jungle, objectives, team fights —
          played through physical robots and interpreted by an authoritative
          server.
        </p>
      </PageIntro>

      <Section>
        <h2>Format</h2>
        <p>
          First edition is <strong>3v3</strong>. Each team fields Tank/Support,
          Fighter, and Artillery at the same time. Deployment is free: lanes
          and jungle are strategic areas, not fixed role assignments.
        </p>
        <Callout>
          <strong>Strategic freedom</strong>
          <p>
            A Tank can jungle. A Fighter can mid. Compositions and rotations
            are team decisions.
          </p>
        </Callout>
      </Section>

      <WideSection>
        <h2>Physical action → game event</h2>
        <p>
          Robots act in the real world. Sensors measure those actions. The
          server applies rules and updates the official state.
        </p>
        <Grid>
          <Item>
            <strong>Fighter</strong>
            <p>Sword motion → IMU → attack calculation → damage</p>
          </Item>
          <Item>
            <strong>Tank</strong>
            <p>Shield pose / burst → geometry → mitigation or attack</p>
          </Item>
          <Item>
            <strong>Artillery</strong>
            <p>Launcher motion → measured params → simulated projectile</p>
          </Item>
        </Grid>
      </WideSection>

      <Section>
        <h2>Combat model (first edition)</h2>
        <ul>
          <li>
            Fighter: fast narrow swings hit harder; wide swings cover more
            area with less strength (exact curve set in balancing).
          </li>
          <li>
            Tank shield effectiveness depends on orientation, position, and
            distance from the champion.
          </li>
          <li>
            Artillery never fires a real projectile at opponents — launch is
            physical, impact is simulated and projected.
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Energy, death, respawn</h2>
        <p>
          Champions spend energy to act. Resources on the map (Mana Monsters,
          objectives) feed that economy. Death removes a robot from play for
          a respawn timer; the server owns alive/dead state.
        </p>
      </Section>

      <Section>
        <h2>Win condition</h2>
        <p>
          Destroy the opposing <strong>Nexus</strong>. Turrets, jungle
          objectives, Dragon, Power Charges, and the Power Core create the
          path to that goal — they are not separate win conditions.
        </p>
        <Flow>{`Pressure lanes / contest jungle
        → take objectives & resources
        → break turrets
        → destroy Nexus`}</Flow>
      </Section>

      <Section>
        <h2>Physical vs digital</h2>
        <p>
          Spectators see real robots and weapons. Projection adds the digital
          layer: trajectories, AoE, HP, events. The server remains the
          referee; projection is visualization, not authority.
        </p>
      </Section>

      <PageNav>
        <Link to="/system">← System</Link>
        <Link to="/champions">Next: Champions →</Link>
      </PageNav>
    </Layout>
  );
}
