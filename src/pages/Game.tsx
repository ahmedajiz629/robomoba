import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ChapterNav from "../components/ChapterNav";
import Figure from "../components/Figure";
import {
  PhysicalDigitalDiagram,
  StepChainDiagram,
} from "../components/diagrams";
import {
  PageIntro,
  Eyebrow,
  Section,
  WideSection,
  Callout,
  Grid,
  Item,
  PageNav,
  DiagramPanel,
  Takeaway,
} from "../components/ui";

export default function Game() {
  return (
    <Layout>
      <ChapterNav chapterId="game" />

      <PageIntro>
        <Eyebrow>Chapter 02 · Match design</Eyebrow>
        <h1>Game</h1>
        <p>
          A MOBA structure — lanes, jungle, objectives, team fights — played
          through physical robots and ruled by an authoritative server.
        </p>
      </PageIntro>

      <WideSection>
        <Figure
          src="/images/xr-projection.jpg"
          alt="Projected game effects on a physical court"
          caption="Spectators see robots and the projected game layer at once: zones, beams, events."
          credit="Reference: Alfa5 XR Sports / Digital AV Magazine"
        />
        <DiagramPanel>
          <PhysicalDigitalDiagram />
          <figcaption>
            How a physical action becomes an official game event.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <Section>
        <h2>Format</h2>
        <p>
          First edition is <strong>3v3</strong>. Each team fields
          Tank/Support, Fighter, and Artillery. Deployment is free: lanes and
          jungle are strategic areas, not fixed role assignments.
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
        <h2>Combat model</h2>
        <ul>
          <li>
            Fighter: fast narrow swings hit harder; wide swings cover more
            area with less strength.
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

      <WideSection>
        <h2>Path to victory</h2>
        <DiagramPanel>
          <StepChainDiagram
            steps={["Lane / jungle", "Objectives", "Turrets", "Nexus"]}
            highlightIndex={3}
          />
          <figcaption>
            Energy and death/respawn feed this loop; the Nexus is the only win
            condition.
          </figcaption>
        </DiagramPanel>
        <p>
          Champions spend energy to act. Map resources feed that economy.
          Death removes a robot for a respawn timer owned by the server.
        </p>
      </WideSection>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Robots create the feel of the match. The server creates fairness.
          Projection makes the digital layer visible.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/system">← Robot structure</Link>
        <Link to="/champions">Next: Champions →</Link>
      </PageNav>
    </Layout>
  );
}
