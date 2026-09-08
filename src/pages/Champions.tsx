import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import ChapterNav from "../components/ChapterNav";
import { SharedCombatPipelineDiagram } from "../components/diagrams";
import {
  HealBeamIllustration,
  ShieldPassiveIllustration,
  ShieldBurstIllustration,
  SwordIllustration,
  LauncherIllustration,
  MinesIllustration,
} from "../components/championIllos";
import {
  PageIntro,
  Eyebrow,
  WideSection,
  DiagramPanel,
  PageNav,
  Callout,
  Takeaway,
} from "../components/ui";

const Trio = styled.div`
  display: grid;
  gap: 0.85rem;
  margin: 0 0 2.5rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Peek = styled.article<{ $accent: string }>`
  padding: 1rem 1.1rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-top: 3px solid ${({ $accent }) => $accent};
  border-radius: ${({ theme }) => theme.radii.md};

  small {
    color: ${({ $accent }) => $accent};
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0.3rem 0 0.45rem;
    font-size: 1.15rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.88rem;
  }
`;

const Champ = styled.section<{ $accent: string }>`
  margin: 0 0 2.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.line};

  > header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.5rem 1rem;
    margin-bottom: 0.35rem;
  }

  > header span {
    color: ${({ $accent }) => $accent};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  > h2 {
    margin: 0 0 1.25rem;
    font-size: 1.7rem;
  }
`;

const Ability = styled.div`
  margin-bottom: 1.75rem;

  h3 {
    margin: 0 0 0.35rem;
    font-size: 1.15rem;
  }

  > p {
    margin: 0 0 0.5rem;
    color: ${({ theme }) => theme.colors.muted};
    max-width: 40rem;
  }
`;

const AbilityNo = styled.span`
  display: inline-block;
  margin-right: 0.45rem;
  color: ${({ theme }) => theme.colors.faint};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
`;

const Sensor = styled.p`
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.accent};

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

export default function Champions() {
  return (
    <Layout>
      <ChapterNav chapterId="champions" />

      <PageIntro>
        <Eyebrow>Chapter 03</Eyebrow>
        <h1>Champions</h1>
        <p>
          Three interfaces. Each has a weapon IMU and one optical role: Tank
          emits a coded beam; Fighter and Artillery receive it.
        </p>
      </PageIntro>

      <Trio>
        <Peek $accent="#3ecfff">
          <small>01</small>
          <h2>Tank / Support</h2>
          <p>Shield (IMU) · light beam (signal)</p>
        </Peek>
        <Peek $accent="#ffb45a">
          <small>02</small>
          <h2>Fighter</h2>
          <p>Sword (IMU) · photodiode</p>
        </Peek>
        <Peek $accent="#a78bfa">
          <small>03</small>
          <h2>Artillery</h2>
          <p>Launcher (IMU) · photodiode · can arm mines</p>
        </Peek>
      </Trio>

      <WideSection>
        <h2>How a weapon hit is made</h2>
        <DiagramPanel>
          <SharedCombatPipelineDiagram />
        </DiagramPanel>
        <Callout>
          <strong>IMU on every weapon</strong>
          <p>
            Shield, sword, launcher: the interface IMU measures the physical
            motion. The server turns that motion into a virtual action. The
            heal beam is not an IMU — it is a coded optical link.
          </p>
        </Callout>
      </WideSection>

      <Champ $accent="#3ecfff">
        <header>
          <span>01 · TANK / SUPPORT</span>
        </header>
        <h2>Shield + beam</h2>

        <Ability>
          <h3>
            <AbilityNo>A1</AbilityNo>
            Passive · shield pose
          </h3>
          <Sensor>
            Sensor: <strong>IMU</strong> — orientation of the shield face
          </Sensor>
          <ShieldPassiveIllustration />
        </Ability>

        <Ability>
          <h3>
            <AbilityNo>A2</AbilityNo>
            Burst · directed hit
          </h3>
          <Sensor>
            Sensor: <strong>IMU</strong> — acceleration of the burst
          </Sensor>
          <ShieldBurstIllustration />
        </Ability>

        <Ability>
          <h3>
            <AbilityNo>A3</AbilityNo>
            Heal · coded light
          </h3>
          <Sensor>
            Sensor: <strong>optical</strong> — Tank emitter + ally photodiode
          </Sensor>
          <HealBeamIllustration />
        </Ability>
      </Champ>

      <Champ $accent="#ffb45a">
        <header>
          <span>02 · FIGHTER</span>
        </header>
        <h2>Sword</h2>

        <Ability>
          <h3>
            <AbilityNo>A1</AbilityNo>
            The swing is the attack
          </h3>
          <Sensor>
            Sensor: <strong>IMU</strong> on the blade
          </Sensor>
          <SwordIllustration />
        </Ability>
      </Champ>

      <Champ $accent="#a78bfa">
        <header>
          <span>03 · ARTILLERY</span>
        </header>
        <h2>Launcher</h2>

        <Ability>
          <h3>
            <AbilityNo>A1</AbilityNo>
            Throw like a real launcher
          </h3>
          <Sensor>
            Sensor: <strong>IMU</strong> on the throw motion
          </Sensor>
          <LauncherIllustration />
        </Ability>

        <Ability>
          <h3>
            <AbilityNo>MAP</AbilityNo>
            Mines · map items, not a weapon
          </h3>
          <MinesIllustration />
        </Ability>
      </Champ>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Shield, sword, and launcher are IMU weapons. The heal beam is a
          timed optical signal that cannot be radio-spoofed. Mines are map
          items Artillery can arm — not a fourth weapon.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/game">← Game</Link>
        <Link to="/arena">Next: Arena →</Link>
      </PageNav>
    </Layout>
  );
}
