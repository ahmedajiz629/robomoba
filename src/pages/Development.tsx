import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ChapterNav from "../components/ChapterNav";
import Figure from "../components/Figure";
import { DevWorkflowDiagram } from "../components/diagrams";
import {
  PageIntro,
  Eyebrow,
  Section,
  WideSection,
  Callout,
  PageNav,
  DiagramPanel,
  Takeaway,
} from "../components/ui";

export default function Development() {
  return (
    <Layout>
      <ChapterNav chapterId="development" />

      <PageIntro>
        <Eyebrow>Chapter 06 · Team workflow</Eyebrow>
        <h1>Development</h1>
        <p>
          Teams should build and integrate without waiting for scarce official
          interfaces — against a public specification and a practice server.
        </p>
      </PageIntro>

      <WideSection>
        <Figure
          src="/images/frc-pit.jpg"
          alt="Teams working with robots at a FIRST Robotics Championship"
          caption="Development happens before the match — pits, practice, iteration."
          credit="Wikimedia Commons · FIRST Robotics Championship"
        />
        <DiagramPanel>
          <DevWorkflowDiagram />
          <figcaption>
            From published spec to competition match — practice is part of
            the product.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <Section>
        <h2>Publish before practice</h2>
        <p>
          Before the development server opens, publish the full technical
          specification: interface docs, Core API, protocols, game-state
          definitions, timing, tracking, rules, limits, safety, and test
          procedures.
        </p>
        <Callout>
          <strong>Goal</strong>
          <p>
            Teams develop against the specification — not against undocumented
            behavior discovered late.
          </p>
        </Callout>
      </Section>

      <Section>
        <h2>Team-owned test interfaces</h2>
        <p>
          Because the Champion Interface is open source (except the
          competition token), teams can reproduce hardware and firmware for
          local development. Official sealed units stay for matches.
        </p>
      </Section>

      <Section>
        <h2>Two-month practice window</h2>
        <p>
          The official game server must be available at least{" "}
          <strong>two months</strong> before the event, with documentation and
          APIs at the same time.
        </p>
        <p>
          That window is for integration, testing, and balancing — not for
          discovering how the competition works. Major API or interface
          changes after that point should be avoided except for safety or
          critical reliability.
        </p>
      </Section>

      <Section>
        <h2>Engineering freedom</h2>
        <p>
          Constraints exist only where needed for safety, compatibility,
          fairness, tracking, communication, and interface integration.
          Drivetrain, motors, chassis, actuators, geometry, and control are
          team choices.
        </p>
      </Section>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Spec first, practice server early, official interface last. Teams
          should not be guessing at the event.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/server">← Server</Link>
        <Link to="/roadmap">Next: Roadmap →</Link>
      </PageNav>
    </Layout>
  );
}
