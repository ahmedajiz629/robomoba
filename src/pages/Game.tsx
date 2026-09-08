import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Figure from "../components/Figure";
import {
  PhysicalDigitalDiagram,
  ResourceTriadDiagram,
  AttackGateDiagram,
  SpawnLogicDiagram,
  NexusLaneDiagram,
} from "../components/diagrams";
import {
  PageIntro,
  Eyebrow,
  Section,
  WideSection,
  Callout,
  Principle,
  Grid,
  Item,
  PageNav,
  DiagramPanel,
  Takeaway,
} from "../components/ui";

export default function Game() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Chapter 01 · Match rules</Eyebrow>
        <h1>Game</h1>
        <p>
          How physical play becomes a match: action → sensing → server →
          projection — plus HP, Mana, Charge, cooldowns, base spawn, and a
          Nexus that opens only when a lane is cleared.
        </p>
      </PageIntro>

      <WideSection>
        <Figure
          src="/images/wild-rift-nexus.png"
          alt="Wild Rift briefing: lanes, turrets, spawn platform, and destroy the enemy Nexus"
          caption="The match you are playing. Push the lanes, break the turrets, destroy the Nexus."
          credit="League of Legends: Wild Rift · interfaceingame.com"
          fit="contain"
        />
      </WideSection>

      <WideSection>
        <h2>Physical action → game event</h2>
        <Figure
          src="/images/xr-projection.jpg"
          alt="Projected game effects on a physical court"
          caption="Spectators see robots and the projected game layer at once: zones, beams, events."
          credit="Reference: Alfa5 XR Sports / Digital AV Magazine"
        />
        <DiagramPanel>
          <PhysicalDigitalDiagram />
          <figcaption>
            The robot acts. Sensors measure. The server rules. Projection
            shows the result.
          </figcaption>
        </DiagramPanel>
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
            <p>Launcher motion → measured params → simulated projectile → projection</p>
          </Item>
        </Grid>
        <Callout>
          <strong>Simulation stays in the loop</strong>
          <p>
            Especially for Artillery: the launch is physical, the projectile
            path and impact are simulated, then projected on the arena.
          </p>
        </Callout>
      </WideSection>

      <WideSection>
        <h2>HP · Mana · Charge</h2>
        <p>
          Three separate pools. Mixing them up breaks both game design and
          robot design.
        </p>
        <DiagramPanel>
          <ResourceTriadDiagram />
          <figcaption>
            HP and Mana are game-state (server). Charge is robot energy for
            physical movement.
          </figcaption>
        </DiagramPanel>
        <Callout>
          <strong>Quick map</strong>
          <p>
            <strong>HP</strong> — weapons stay active while alive.{" "}
            <strong>Mana</strong> — spent on attacks. <strong>Charge</strong>{" "}
            (energy) — spent to move the physical robot.
          </p>
        </Callout>
      </WideSection>

      <WideSection>
        <h2>Attacks and cooldown</h2>
        <p>
          A sensed physical action is only accepted as an attack when the
          champion is alive, has enough Mana, and the attack cooldown has
          finished — then simulation / damage / projection can apply.
        </p>
        <DiagramPanel>
          <AttackGateDiagram />
          <figcaption>
            Cooldown is a timer between accepted attacks — separate from Mana
            cost and from Charge used to drive.
          </figcaption>
        </DiagramPanel>
        <Principle>
          No HP → weapons inactive. No Mana → cannot afford the attack. On
          cooldown → wait.
        </Principle>
      </WideSection>

      <WideSection>
        <h2>Death and spawn</h2>
        <p>
          When HP reaches zero the champion is dead: weapons shut off and the
          robot must return to base. Revival is not automatic on a global
          timer alone.
        </p>
        <DiagramPanel>
          <SpawnLogicDiagram />
          <figcaption>
            The spawn timer only advances while the robot stays continuously
            in base. Leave early and the timer resets.
          </figcaption>
        </DiagramPanel>
        <Callout $tone="warn">
          <strong>Continuous presence</strong>
          <p>
            You must spend the full spawn duration inside the base without
            leaving. Interrupted presence does not count toward revive.
          </p>
        </Callout>
      </WideSection>

      <WideSection>
        <h2>Goal: take down the Nexus</h2>
        <p>
          Destroy the enemy Nexus to win. Like Wild Rift, the Nexus does not
          take damage until at least one lane is cleared — you must break the
          structures that protect that path first.
        </p>
        <DiagramPanel>
          <NexusLaneDiagram />
          <figcaption>
            Push a lane (turrets → inhibitor) → lane cleared → Nexus becomes
            damageable. No shortcut through an uncleared base.
          </figcaption>
        </DiagramPanel>
        <Callout>
          <strong>Strategy</strong>
          <p>
            Jungle objectives, Mana, and Charge management exist to help you
            clear lanes and force a Nexus fight — not as alternate win
            conditions.
          </p>
        </Callout>
      </WideSection>

      <Section>
        <h2>Format reminder</h2>
        <p>
          First edition is 3v3 with Tank/Support, Fighter, and Artillery.
          Deployment across lanes and jungle is free.
        </p>
      </Section>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Physical action is measured, ruled, then projected. HP keeps weapons
          on; Mana fuels attacks (with cooldown); Charge moves the robot.
          Revive needs continuous base time. The Nexus opens only after a lane
          is cleared.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/">← Home</Link>
        <Link to="/system">Next: Robot structure →</Link>
      </PageNav>
    </Layout>
  );
}
