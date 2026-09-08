import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Figure from "../components/Figure";
import {
  RobotStructureDiagram,
  InterfaceCompositionDiagram,
  ActuatorVsSensorDiagram,
  RobotWiringDiagram,
  BoundaryDiagram,
} from "../components/diagrams";
import {
  PageIntro,
  Eyebrow,
  Section,
  WideSection,
  Callout,
  Principle,
  PageNav,
  DiagramPanel,
  Takeaway,
} from "../components/ui";

export default function System() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Chapter 02 · Robot structure</Eyebrow>
        <h1>Robot structure</h1>
        <p>
          How a competition robot is put together: what the team builds, what
          the organization mounts, how it is wired, and who owns the weapon
          actuator versus the weapon sensor.
        </p>
      </PageIntro>

      <WideSection>
        <h2>Two zones in one machine</h2>
        <Figure
          src="/images/unitree-b1.jpg"
          alt="Quadruped robot with a payload mounted on the chassis"
          caption="A real machine: team body and locomotion, plus hardware mounted on top. That split is the structure we care about — not this platform, and not this payload."
          credit="Unitree B1 · The Defense Post"
        />
        <DiagramPanel>
          <RobotStructureDiagram />
          <figcaption>
            Amber is team-owned. Cyan is the sealed Champion Interface —
            mounted for the match, then removed.
          </figcaption>
        </DiagramPanel>
        <Principle>
          The organization standardizes the measurement. The team engineers
          the physical action.
        </Principle>
      </WideSection>

      <WideSection>
        <h2>The critical split: actuator vs sensor</h2>
        <p>
          On the same weapon, ownership is split. The team builds the
          mechanism that <strong>moves</strong> it. The organization provides
          the sealed sensor that <strong>measures</strong> it.
        </p>
        <DiagramPanel>
          <ActuatorVsSensorDiagram />
          <figcaption>
            Example: Fighter sword — you design the swing mechanism; we own
            the IMU that reports the swing to the server.
          </figcaption>
        </DiagramPanel>
        <Callout>
          <strong>Why split ownership?</strong>
          <p>
            Fairness: every team is measured the same way. Freedom: every team
            can invent a different way to produce that motion.
          </p>
        </Callout>
      </WideSection>

      <WideSection>
        <h2>Interface composition</h2>
        <p>
          The Champion Interface is one sealed assembly. Exact parts vary by
          champion (Tank optics, Fighter IMU, Artillery launch sensing), but
          the pattern is the same: a Core hard-wired to its sensors.
        </p>
        <DiagramPanel>
          <InterfaceCompositionDiagram />
          <figcaption>
            Core ↔ weapon sensors ↔ optics are protected organization wiring.
            Opening or bypassing them is a rules violation.
          </figcaption>
        </DiagramPanel>
        <Callout $tone="warn">
          <strong>Sealed</strong>
          <p>
            The assembly is supplied as a unit. It must not be disassembled.
            Tampering with internal links is grounds for disqualification.
          </p>
        </Callout>
      </WideSection>

      <WideSection>
        <h2>How the robot is wired</h2>
        <p>
          Teams never rewire the sealed interface. They connect to the Core
          over USB (power + documented API). The Core talks to the game
          server over BLE.
        </p>
        <DiagramPanel>
          <RobotWiringDiagram />
          <figcaption>
            Team computer ↔ USB ↔ Core ↔ sealed sensors · and Core ↔ BLE ↔
            server.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <WideSection>
        <h2>Where this sits in the match</h2>
        <DiagramPanel>
          <BoundaryDiagram />
          <figcaption>
            Physical robot → measurement boundary (interface) → authoritative
            server.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <Section>
        <h2>Match logistics</h2>
        <p>
          Six official interfaces for 3v3 (two of each champion type). Mounted
          before the match, removed after. Teams do not keep competition
          hardware. Interface designs stay open for development; only the
          competition auth token stays private.
        </p>
      </Section>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Robot structure = team shell + sealed interface. You own the weapon
          actuator. We own the weapon sensor. Wiring to the game goes only
          through the Core.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/game">← Game</Link>
        <Link to="/champions">Next: Champions →</Link>
      </PageNav>
    </Layout>
  );
}
