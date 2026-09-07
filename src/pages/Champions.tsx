import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ChapterNav from "../components/ChapterNav";
import Figure from "../components/Figure";
import {
  ChampionsDiagram,
  StepChainDiagram,
} from "../components/diagrams";
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

export default function Champions() {
  return (
    <Layout>
      <ChapterNav chapterId="champions" />

      <PageIntro>
        <Eyebrow>Chapter 03 · Roles</Eyebrow>
        <h1>Champions</h1>
        <p>
          Three champion types. Each is a physical engineering problem wired
          into game rules through the Champion Interface.
        </p>
      </PageIntro>

      <WideSection>
        <Figure
          src="/images/eurobot-robots.jpg"
          alt="Competition robots on a Eurobot arena"
          caption="Different machines, shared field rules — the spirit of champion-vs-robot design."
          credit="Wikimedia Commons · Eurobot at ESTEC"
        />
        <DiagramPanel>
          <ChampionsDiagram />
          <figcaption>
            Three roles, three mechanisms — not three cosmetic skins.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <Section>
        <h2>Tank / Support</h2>
        <p>
          Frontline and protection. Primary mechanism: a{" "}
          <strong>heavy shield</strong>.
        </p>
        <h3>Shield defense</h3>
        <p>
          Orientation, position, attack direction, and distance matter.
          Pushing the shield farther from the body can increase effectiveness —
          defense is a physical pose.
        </p>
        <h3>Shield burst</h3>
        <p>
          A rapid physical movement can be read as an offensive burst
          (damage / knockback).
        </p>
        <h3>Healing beam</h3>
        <p>
          Optical emitter on the Tank; photodiode on the ally. Healing can
          depend on line of sight, distance, alignment, and duration.
        </p>
      </Section>

      <WideSection>
        <DiagramPanel>
          <StepChainDiagram
            steps={["Light beam", "Photodiode", "Core", "HP recovery"]}
          />
          <figcaption>Healing as a physical optical link, then a game rule.</figcaption>
        </DiagramPanel>
      </WideSection>

      <Section>
        <h2>Fighter</h2>
        <p>
          Close-range combat. Primary weapon: a <strong>physical sword</strong>.
        </p>
        <p>
          The interface holds the IMU that measures the sword. The team builds
          the actuator, mass, reach, and control that move it.
        </p>
        <Callout>
          <strong>Attack model (provisional)</strong>
          <p>
            Fast, narrow swing → stronger hit. Wide swing → larger area, lower
            strength. Exact curve set during balancing.
          </p>
        </Callout>
      </Section>

      <Section>
        <h2>Artillery</h2>
        <p>
          Long range and area control: ballistic launcher and mines.
        </p>
        <h3>Launcher</h3>
        <p>
          The team builds the aiming and operating mechanism. The interface
          measures launch parameters. The server simulates the projectile and
          projects impact.
        </p>
        <Callout $tone="warn">
          <strong>Safety</strong>
          <p>
            No real projectile is fired at opponents. Launch is physical;
            damage is simulated.
          </p>
        </Callout>
      </Section>

      <WideSection>
        <DiagramPanel>
          <StepChainDiagram
            steps={["Launcher", "Sensors", "Simulation", "Projection", "Impact"]}
            highlightIndex={2}
          />
          <figcaption>
            Physical launch, digital impact — safe and still engineered.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <Section>
        <h3>Mines</h3>
        <p>
          Physically deployed objects that become game entities. Effects are
          decided by the server on trigger.
        </p>
      </Section>

      <Section>
        <h2>Deployment</h2>
        <p>
          No forced Top / Mid / Bot / Jungle roles. Teams choose where each
          champion plays and how they rotate.
        </p>
      </Section>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Champion = game role + interface. Robot = how your team makes that
          role real.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/game">← Game</Link>
        <Link to="/arena">Next: Arena →</Link>
      </PageNav>
    </Layout>
  );
}
