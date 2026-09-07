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

export default function Champions() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Roles</Eyebrow>
        <h1>Champions</h1>
        <p>
          Three champion types. Each is a physical engineering problem wired
          into game rules through the Champion Interface.
        </p>
      </PageIntro>

      <Section>
        <h2>Tank / Support</h2>
        <p>
          Frontline and protection. Primary mechanism: a <strong>heavy shield</strong>.
        </p>
        <h3>Shield defense</h3>
        <p>
          The shield is oriented toward threats. The server can use shield
          orientation, position, attack direction, and distance. Pushing the
          shield farther from the body can increase effectiveness — defense
          is a physical pose, not only a status flag.
        </p>
        <h3>Shield burst</h3>
        <p>
          A rapid physical movement of the robot can be interpreted as an
          offensive burst (damage / knockback), measured then ruled by the
          server.
        </p>
        <h3>Healing beam</h3>
        <p>
          An optical emitter on the Tank; a photodiode on the ally. Healing
          can depend on line of sight, distance, alignment, and duration.
          Modulation identifies source and ability so arbitrary light does
          not count as heal.
        </p>
        <Flow>{`Tank light beam → ally photodiode → Core → HP recovery`}</Flow>
      </Section>

      <Section>
        <h2>Fighter</h2>
        <p>
          Close-range combat. Primary weapon: a <strong>physical sword</strong>.
        </p>
        <p>
          The interface holds the IMU that measures the sword. The team
          builds the actuator, mass, reach, and control that move it.
        </p>
        <Callout>
          <strong>Attack model (provisional)</strong>
          <p>
            Fast, narrow swing → stronger hit. Wide swing → larger area,
            lower strength. Exact curve set during balancing.
          </p>
        </Callout>
      </Section>

      <Section>
        <h2>Artillery</h2>
        <p>
          Long range and area control. Two mechanisms: ballistic launcher and
          mines.
        </p>
        <h3>Launcher</h3>
        <p>
          The team builds the mechanism that aims and operates the launcher.
          The interface measures launch parameters. The server simulates the
          projectile and projects impact.
        </p>
        <Callout $tone="warn">
          <strong>Safety</strong>
          <p>
            No real projectile is fired at opponents. Launch is physical;
            damage is simulated.
          </p>
        </Callout>
        <Flow>{`Physical launcher → sensors → server simulation → projection → impact`}</Flow>
        <h3>Mines</h3>
        <p>
          Physically deployed objects that become game entities. Effects
          (damage, slow, AoE) are decided by the server on trigger. A mine
          can light up physically while projection shows the game effect.
        </p>
      </Section>

      <Section>
        <h2>Deployment</h2>
        <p>
          No forced Top / Mid / Bot / Jungle roles. Teams choose where each
          champion plays and how they rotate.
        </p>
      </Section>

      <PageNav>
        <Link to="/game">← Game</Link>
        <Link to="/arena">Next: Arena →</Link>
      </PageNav>
    </Layout>
  );
}
