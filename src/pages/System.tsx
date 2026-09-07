import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ChapterNav from "../components/ChapterNav";
import Figure from "../components/Figure";
import {
  BoundaryDiagram,
  OrgTeamDiagram,
  RobotCompositionDiagram,
} from "../components/diagrams";
import {
  PageIntro,
  Eyebrow,
  Section,
  WideSection,
  Callout,
  Principle,
  ListPlain,
  PageNav,
  TwoCol,
  DiagramPanel,
  Takeaway,
} from "../components/ui";

export default function System() {
  return (
    <Layout>
      <ChapterNav chapterId="system" />

      <PageIntro>
        <Eyebrow>Chapter 01 · Architecture</Eyebrow>
        <h1>System</h1>
        <p>
          The competition standardizes the game boundary — not the robot.
          Fairness comes from a shared interface; creativity from everything
          around it.
        </p>
      </PageIntro>

      <WideSection>
        <Figure
          src="/images/frc-match.jpg"
          alt="Robots competing on a FIRST Robotics field"
          caption="Real competition robots on a shared field — engineering differences, common rules."
          credit="Wikimedia Commons · FIRST Robotics Competition"
        />
        <DiagramPanel>
          <BoundaryDiagram />
          <figcaption>Team robot ↔ Champion Interface ↔ game server</figcaption>
        </DiagramPanel>
      </WideSection>

      <WideSection>
        <h2>Champion vs robot</h2>
        <p>
          The <strong>champion</strong> is the standardized game entity. The{" "}
          <strong>robot</strong> is the team’s physical implementation.
        </p>
        <DiagramPanel>
          <RobotCompositionDiagram />
          <figcaption>
            Amber = team-built. Cyan = organization interface mounted onto the
            robot.
          </figcaption>
        </DiagramPanel>
        <Principle>
          The organization standardizes the measurement. The team engineers
          the physical action.
        </Principle>
      </WideSection>

      <WideSection>
        <h2>Who builds what</h2>
        <DiagramPanel>
          <OrgTeamDiagram />
          <figcaption>
            Organization owns the interface and infrastructure. Teams own the
            machine and strategy.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <Section>
        <h2>Champion Interface</h2>
        <p>
          A sealed hardware assembly supplied by the organization. Each
          champion type has its own interface. Mounted before the match,
          removed after.
        </p>
        <p>
          A 3v3 match needs six competition interfaces (two of each type).
          Teams do not permanently own competition hardware.
        </p>
        <Callout $tone="warn">
          <strong>Sealed assembly</strong>
          <p>
            Protected wiring must not be modified or bypassed. Tampering is
            disqualification. The goal is a shared game interface — not to
            limit robot engineering.
          </p>
        </Callout>
      </Section>

      <Section>
        <h2>Core</h2>
        <p>
          The Core connects the robot (USB power + data API) and the
          competition infrastructure (wireless link to the game server).
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
              <li>Critical match infrastructure</li>
            </ul>
          </div>
        </TwoCol>
      </Section>

      <Section>
        <h2>Open interface, protected token</h2>
        <ListPlain>
          <li>
            <strong>Open</strong>
            <span>
              Interface hardware and firmware so teams can understand and
              reproduce them for development
            </span>
          </li>
          <li>
            <strong>Protected</strong>
            <span>Competition-time authentication token only</span>
          </li>
        </ListPlain>
      </Section>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Same interface for everyone. Different robots. The organization
          measures; teams act.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/">← Home</Link>
        <Link to="/game">Next: Game →</Link>
      </PageNav>
    </Layout>
  );
}
