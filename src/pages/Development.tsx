import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  PageIntro,
  Eyebrow,
  Section,
  Callout,
  Flow,
  PageNav,
} from "../components/ui";

export default function Development() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Team workflow</Eyebrow>
        <h1>Development</h1>
        <p>
          Teams should be able to build and integrate without waiting for
          scarce official interfaces — against a public specification and a
          practice server.
        </p>
      </PageIntro>

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
            Teams develop against the specification — not against
            undocumented behavior discovered late.
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
        <h2>Recommended workflow</h2>
        <Flow>{`Public specification
  → team builds test Core / interface
  → team builds robot
  → API integration + local simulation
  → official development server
  → official interface
  → competition`}</Flow>
      </Section>

      <Section>
        <h2>Two-month practice window</h2>
        <p>
          The official game server must be available at least{" "}
          <strong>two months</strong> before the event, with documentation
          and APIs at the same time.
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

      <PageNav>
        <Link to="/server">← Server</Link>
        <Link to="/roadmap">Next: Roadmap →</Link>
      </PageNav>
    </Layout>
  );
}
