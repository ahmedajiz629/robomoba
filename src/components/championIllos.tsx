import styled, { css } from "styled-components";

const Stage = styled.div`
  margin: 0.75rem 0 0;
  padding: 1.1rem 1.15rem 1.2rem;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;

const Caption = styled.p`
  margin: 0.7rem 0 0;
  color: ${({ theme }) => theme.colors.faint};
  font-size: 0.78rem;
`;

const Formula = styled.p`
  margin: 0.85rem 0 0;
  padding: 0.55rem 0.7rem;
  background: ${({ theme }) => theme.colors.surfaceRaised};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const Tag = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.faint};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

const Flow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0.4rem 0.55rem;
  align-items: stretch;
  margin-top: 0.9rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    text-align: center;

    em {
      display: none;
    }
  }
`;

const FlowBox = styled.div`
  padding: 0.5rem 0.65rem;
  background: ${({ theme }) => theme.colors.surfaceRaised};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.sm};

  small {
    display: block;
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.65rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 0.15rem;
    font-size: 0.82rem;
    font-weight: 600;
  }
`;

const Arrow = styled.em`
  align-self: center;
  color: ${({ theme }) => theme.colors.faint};
  font-style: normal;
`;

/* ——— HEAL BEAM (moba2 animation) ——— */

const BeamGrid = styled.div`
  display: grid;
  grid-template-columns: 5.5rem 1fr 6.5rem;
  align-items: center;
  gap: 0.4rem;
  min-height: 8.5rem;
  padding: 0.85rem 0.6rem 0.4rem;
  background: radial-gradient(
    circle at 50% 40%,
    rgba(62, 207, 255, 0.08),
    transparent 58%
  );

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    min-height: auto;
    text-align: center;
  }
`;

const BeamEnd = styled.div<{ $accent?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-align: center;

  small {
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  strong {
    color: ${({ $accent, theme }) => $accent || theme.colors.accent};
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.05rem;
  }
`;

const BeamTrack = styled.div`
  position: relative;
  height: 5px;
  margin: 0 0.4rem;
  background: ${({ theme }) => theme.colors.accentSoft};
  border-radius: 99px;

  i {
    position: absolute;
    top: -3px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent};
    animation: beamMove 2s linear infinite;
  }

  i:nth-child(1) {
    animation-delay: 0s;
  }
  i:nth-child(2) {
    animation-delay: 0.5s;
  }
  i:nth-child(3) {
    animation-delay: 1s;
  }
  i:nth-child(4) {
    animation-delay: 1.5s;
  }

  @media (max-width: 520px) {
    height: 4px;
    margin: 0.6rem 1.5rem;
  }
`;

const Verified = styled.div`
  grid-column: 1 / -1;
  margin-top: 0.75rem;
  padding-top: 0.7rem;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  text-align: center;
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.faint};

  strong {
    margin-left: 0.6rem;
    color: ${({ theme }) => theme.colors.accent};
    letter-spacing: 0.04em;
    animation: beamPulse 1.6s ease-in-out infinite;
  }
`;

const SpoofRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;
  margin-top: 0.85rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const SpoofCard = styled.div<{ $ok?: boolean }>`
  padding: 0.55rem 0.7rem;
  border: 1px solid
    ${({ $ok, theme }) => ($ok ? theme.colors.accent : theme.colors.amber)};
  background: ${({ $ok, theme }) =>
    $ok ? theme.colors.accentSoft : theme.colors.amberSoft};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};

  b {
    display: block;
    margin-bottom: 0.2rem;
    color: ${({ $ok, theme }) => ($ok ? theme.colors.accent : theme.colors.amber)};
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-size: 0.68rem;
  }
`;

export function HealBeamIllustration() {
  return (
    <Stage>
      <Tag>Optical signal · not IMU · not a flashlight</Tag>
      <BeamGrid>
        <BeamEnd>
          <small>TANK</small>
          <strong>LIGHT</strong>
        </BeamEnd>
        <BeamTrack>
          <i />
          <i />
          <i />
          <i />
        </BeamTrack>
        <BeamEnd>
          <small>ALLY</small>
          <strong>PHOTODIODE</strong>
        </BeamEnd>
        <Verified>
          SIGNAL
          <strong>✓ VERIFIED</strong>
        </Verified>
      </BeamGrid>
      <SpoofRow>
        <SpoofCard>
          <b>Invalid</b>
          Intercept the beam → replay over radio. Alignment and timing skipped.
        </SpoofCard>
        <SpoofCard $ok>
          <b>Valid</b>
          Photodiode on the ally, packets + line of sight, timing that matches.
        </SpoofCard>
      </SpoofRow>
      <Caption>
        The robot cannot simulate this link on its own. Wireless cannot replace
        aiming at the photodiode.
      </Caption>
    </Stage>
  );
}

/* ——— SHIELD PASSIVE ——— */

const Field = styled.div`
  position: relative;
  height: 14rem;
  background: radial-gradient(
    circle at 18% 50%,
    rgba(255, 180, 90, 0.08),
    transparent 42%
  );
`;

const Core = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  width: 2.6rem;
  height: 2.6rem;
  margin-top: -1.3rem;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.amber};
  background: ${({ theme }) => theme.colors.amberSoft};
  display: grid;
  place-items: center;
  font-size: 0.62rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.amber};
  z-index: 2;
`;

const Axis = styled.div`
  position: absolute;
  left: 18%;
  right: 10%;
  top: 50%;
  height: 1px;
  background: ${({ theme }) => theme.colors.lineStrong};

  &::after {
    content: "";
    position: absolute;
    right: -2px;
    top: -3px;
    border: 4px solid transparent;
    border-left-color: ${({ theme }) => theme.colors.lineStrong};
  }
`;

const ShieldShape = styled.div<{ $far?: boolean }>`
  position: absolute;
  left: ${({ $far }) => ($far ? "58%" : "32%")};
  top: 50%;
  width: 3.2rem;
  height: 5.2rem;
  margin-top: -2.6rem;
  border: 1.5px solid ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accentSoft};
  clip-path: polygon(50% 0, 92% 16%, 80% 78%, 50% 100%, 20% 78%, 8% 16%);
  opacity: ${({ $far }) => ($far ? 1 : 0.38)};
`;

const DistLabel = styled.span<{ $x: string; $strong?: boolean }>`
  position: absolute;
  left: ${({ $x }) => $x};
  bottom: 1.15rem;
  font-size: 0.7rem;
  color: ${({ $strong, theme }) =>
    $strong ? theme.colors.accent : theme.colors.muted};
  font-weight: ${({ $strong }) => ($strong ? 600 : 400)};
`;

const AttackArrow = styled.span`
  position: absolute;
  right: 6%;
  top: 44%;
  color: ${({ theme }) => theme.colors.amber};
  font-size: 1.35rem;
  letter-spacing: -0.12em;
`;

const Incoming = styled.span`
  position: absolute;
  right: 6%;
  top: 28%;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.amber};
`;

export function ShieldPassiveIllustration() {
  return (
    <Stage>
      <Tag>Passive defense · IMU pose · distance from Core</Tag>
      <Field>
        <Core>CORE</Core>
        <Axis />
        <ShieldShape />
        <ShieldShape $far />
        <DistLabel $x="30%">near · weak</DistLabel>
        <DistLabel $x="56%" $strong>
          far · stronger
        </DistLabel>
        <Incoming>INCOMING</Incoming>
        <AttackArrow>← ←</AttackArrow>
      </Field>
      <Flow>
        <FlowBox>
          <small>Measures</small>
          <strong>IMU: face orientation + distance to Core</strong>
        </FlowBox>
        <Arrow>→</Arrow>
        <FlowBox>
          <small>Impact</small>
          <strong>Block if facing the hit. Farther = more protection.</strong>
        </FlowBox>
      </Flow>
    </Stage>
  );
}

/* ——— SHIELD BURST ——— */

const BurstScene = styled.div`
  position: relative;
  height: 11.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
  overflow: hidden;
`;

const BurstCore = styled.div`
  flex: 0 0 auto;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.amber};
  color: ${({ theme }) => theme.colors.amber};
  display: grid;
  place-items: center;
  font-size: 0.55rem;
  font-weight: 600;
`;

const DistBar = styled.div`
  flex: 0 0 3.2rem;
  height: 1px;
  margin: 0 0.35rem;
  background: ${({ theme }) => theme.colors.lineStrong};
  position: relative;

  span {
    position: absolute;
    top: 0.35rem;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.62rem;
    color: ${({ theme }) => theme.colors.muted};
  }
`;

const BurstShield = styled.div`
  flex: 0 0 auto;
  width: 2.6rem;
  height: 4.2rem;
  border: 1.5px solid ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accentSoft};
  clip-path: polygon(50% 0, 92% 16%, 80% 78%, 50% 100%, 20% 78%, 8% 16%);
  animation: burstPush 1.6s ease-in-out infinite;
`;

const GapBand = styled.div`
  flex: 0 0 3.4rem;
  margin: 0 0.3rem;
  padding: 0.45rem 0.25rem;
  border: 1px dashed ${({ theme }) => theme.colors.amber};
  color: ${({ theme }) => theme.colors.amber};
  font-size: 0.68rem;
  text-align: center;
  line-height: 1.25;
`;

const Cone = styled.div`
  flex: 1 1 auto;
  min-width: 5rem;
  height: 5.2rem;
  margin-left: 0.2rem;
  transform-origin: left center;
  background: linear-gradient(
    90deg,
    rgba(255, 180, 90, 0.35),
    rgba(255, 180, 90, 0.02)
  );
  clip-path: polygon(0 42%, 100% 0, 100% 100%, 0 58%);
  animation: coneGrow 1.8s ease-in-out infinite;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.amber};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.78rem;
  letter-spacing: 0.06em;
`;

const BurstNotes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;
  margin-top: 0.75rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }

  p {
    margin: 0;
    padding: 0.5rem 0.65rem;
    background: ${({ theme }) => theme.colors.surfaceRaised};
    border-radius: ${({ theme }) => theme.radii.sm};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.muted};
  }

  b {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export function ShieldBurstIllustration() {
  return (
    <Stage>
      <Tag>Burst attack · IMU acceleration · facing direction</Tag>
      <BurstScene>
        <BurstCore>CORE</BurstCore>
        <DistBar>
          <span>distance</span>
        </DistBar>
        <BurstShield />
        <GapBand>
          no hit
          <br />
          &lt; ~3 cm
        </GapBand>
        <Cone>COURT CONE</Cone>
      </BurstScene>
      <Formula>
        damage ≈ distance-from-core × acceleration · range grows with accel
      </Formula>
      <BurstNotes>
        <p>
          <b>Direction</b> — damage only in the shield’s facing cone, not
          around the robot.
        </p>
        <p>
          <b>~3 cm gap</b> — contact and ramming do not count. Hits start
          after a fixed offset.
        </p>
      </BurstNotes>
      <Flow>
        <FlowBox>
          <small>Measures</small>
          <strong>IMU: burst acceleration + shield pose vs Core</strong>
        </FlowBox>
        <Arrow>→</Arrow>
        <FlowBox>
          <small>Impact</small>
          <strong>Harder shove + farther shield = longer, stronger cone</strong>
        </FlowBox>
      </Flow>
    </Stage>
  );
}

/* ——— SWORD ——— */

const SwordSplit = styled.div`
  display: grid;
  gap: 0.65rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SwordCard = styled.div`
  padding: 0.7rem 0.75rem 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surfaceRaised};

  small {
    display: block;
    color: ${({ theme }) => theme.colors.amber};
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.07em;
  }

  > p {
    margin: 0.25rem 0 0;
    font-size: 0.78rem;
    color: ${({ theme }) => theme.colors.muted};
  }
`;

const Arena = styled.div`
  position: relative;
  height: 11.5rem;
  margin-top: 0.55rem;
  overflow: hidden;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 180, 90, 0.05),
    transparent 62%
  );
`;

const Envelope = styled.div<{ $wide?: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10.2rem;
  height: 10.2rem;
  margin: -5.1rem 0 0 -5.1rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    transparent 16%,
    rgba(255, 180, 90, 0.22) 17%,
    rgba(255, 180, 90, 0.1) 84%,
    transparent 85%
  );
  ${({ $wide }) =>
    $wide
      ? ""
      : css`
          mask: conic-gradient(from 40deg, #000 0 70deg, transparent 70deg);
          -webkit-mask: conic-gradient(from 40deg, #000 0 70deg, transparent 70deg);
        `}
`;

const DeadZone = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1.7rem;
  height: 1.7rem;
  margin: -0.85rem 0 0 -0.85rem;
  border: 1px dashed ${({ theme }) => theme.colors.amber};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg};
  z-index: 2;
`;

const Pivot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.45rem;
  height: 0.45rem;
  margin: -0.225rem 0 0 -0.225rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.amber};
  z-index: 3;
`;

const Arm = styled.div<{ $spin?: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4.3rem;
  height: 1.05rem;
  margin-top: -0.525rem;
  transform-origin: 0 50%;
  z-index: 2;
  animation: ${({ $spin }) =>
    $spin
      ? css`swordWide 3.6s linear infinite`
      : css`swordNarrow 0.7s linear infinite alternate`};
`;

const Grip = styled.div`
  position: absolute;
  left: 0;
  top: 0.24rem;
  width: 1.05rem;
  height: 0.55rem;
  background: #232a2f;
  border: 1px solid #556069;
`;

const Blade = styled.div`
  position: absolute;
  left: 0.9rem;
  top: 0.08rem;
  width: 3.35rem;
  height: 0.88rem;
  background: linear-gradient(90deg, #616b72, #b3bcc2, #4b565d);
  clip-path: polygon(0 20%, 85% 20%, 100% 50%, 85% 80%, 0 80%);
`;

const GapNote = styled.div`
  margin-top: 0.7rem;
  padding: 0.45rem 0.65rem;
  border: 1px dashed ${({ theme }) => theme.colors.amber};
  color: ${({ theme }) => theme.colors.amber};
  font-size: 0.75rem;
`;

export function SwordIllustration() {
  return (
    <Stage>
      <Tag>Sword · IMU on the blade · same ~3 cm dead zone</Tag>
      <SwordSplit>
        <SwordCard>
          <small>SLASH · NARROW</small>
          <p>
            Same blade speed, short sector. High accel from start/stop —
            hard punch, small area.
          </p>
          <Arena>
            <Envelope />
            <DeadZone />
            <Pivot />
            <Arm>
              <Grip />
              <Blade />
            </Arm>
          </Arena>
        </SwordCard>
        <SwordCard>
          <small>SPIN · WIDE</small>
          <p>
            Same blade speed, full ring. More time in range — coverage up,
            impact down.
          </p>
          <Arena>
            <Envelope $wide />
            <DeadZone />
            <Pivot />
            <Arm $spin>
              <Grip />
              <Blade />
            </Arm>
          </Arena>
        </SwordCard>
      </SwordSplit>
      <Formula>damage ∝ sword acceleration × time in range</Formula>
      <GapNote>
        Hits only after ~3 cm (inner ring) — contact with the blade does not
        deal real damage.
      </GapNote>
      <Flow>
        <FlowBox>
          <small>Measures</small>
          <strong>IMU: blade acceleration during the swing</strong>
        </FlowBox>
        <Arrow>→</Arrow>
        <FlowBox>
          <small>Impact</small>
          <strong>Spin for area, slash for punch. Server, not the metal.</strong>
        </FlowBox>
      </Flow>
    </Stage>
  );
}

/* ——— LAUNCHER ——— */

const LaunchField = styled.div`
  position: relative;
  height: 14rem;
  background: radial-gradient(
    circle at 82% 72%,
    rgba(167, 139, 250, 0.1),
    transparent 40%
  );
`;

const Launcher = styled.div`
  position: absolute;
  left: 6%;
  bottom: 16%;
  width: 7rem;
  height: 5rem;
`;

const LBase = styled.div`
  position: absolute;
  left: 0.6rem;
  bottom: 0;
  width: 3.6rem;
  height: 1.35rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.bg};
`;

const LArm = styled.div`
  position: absolute;
  left: 1.5rem;
  bottom: 1.2rem;
  width: 3.2rem;
  height: 0.55rem;
  transform: rotate(-22deg);
  background: #1c2329;
  border: 1px solid #56616a;
`;

const LBarrel = styled.div`
  position: absolute;
  left: 3.6rem;
  bottom: 2.35rem;
  width: 4.4rem;
  height: 0.7rem;
  transform: rotate(-22deg);
  border: 1px solid #a78bfa;
  background: rgba(167, 139, 250, 0.08);
`;

const ImuBadge = styled.span`
  position: absolute;
  left: 2.4rem;
  bottom: 3.35rem;
  padding: 0.12rem 0.35rem;
  border: 1px solid #a78bfa;
  color: #a78bfa;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  background: ${({ theme }) => theme.colors.bg};
`;

const Traj = styled.div`
  position: absolute;
  left: 34%;
  top: 24%;
  width: 44%;
  height: 5.8rem;
  transform: rotate(-12deg);
  border-top: 1.5px dashed rgba(167, 139, 250, 0.55);
  border-radius: 50%;

  span {
    position: absolute;
    left: 18%;
    top: -1.35rem;
    font-size: 0.68rem;
    letter-spacing: 0.06em;
    color: #a78bfa;
    transform: rotate(12deg);
  }

  i {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #a78bfa;
    box-shadow: 0 0 8px #a78bfa;
    animation: trajDot 1.6s ease-in-out infinite;
  }

  i:nth-child(1) {
    left: 6%;
    top: -3px;
    animation-delay: 0s;
  }
  i:nth-child(2) {
    left: 32%;
    top: 10px;
    animation-delay: 0.2s;
  }
  i:nth-child(3) {
    left: 60%;
    top: 32px;
    animation-delay: 0.4s;
  }
  i:nth-child(4) {
    left: 88%;
    top: 62px;
    animation-delay: 0.6s;
  }
`;

const Aoe = styled.div`
  position: absolute;
  right: 7%;
  bottom: 12%;
  width: 4.4rem;
  height: 4.4rem;
  display: grid;
  place-items: center;
  border: 1px solid rgba(167, 139, 250, 0.5);
  border-radius: 50%;
  color: #a78bfa;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.95rem;
`;

const PhysNote = styled.p`
  margin: 0;
  position: absolute;
  left: 6%;
  bottom: 0.35rem;
  font-size: 0.68rem;
  color: ${({ theme }) => theme.colors.faint};
`;

export function LauncherIllustration() {
  return (
    <Stage>
      <Tag>Launcher · IMU on the throw · virtual projectile</Tag>
      <LaunchField>
        <Launcher>
          <LBase />
          <LArm />
          <LBarrel />
          <ImuBadge>IMU</ImuBadge>
        </Launcher>
        <Traj>
          <span>SIMULATED TRAJECTORY</span>
          <i />
          <i />
          <i />
          <i />
        </Traj>
        <Aoe>AoE</Aoe>
        <PhysNote>Nothing physical is thrown at another robot.</PhysNote>
      </LaunchField>
      <Caption>
        The actuator must move like a real launcher. Physics is applied to that
        measured kinematics — a fake button-press throw would not produce a
        real launch motion for the IMU.
      </Caption>
      <Flow>
        <FlowBox>
          <small>Measures</small>
          <strong>IMU: launch pose, speed, acceleration</strong>
        </FlowBox>
        <Arrow>→</Arrow>
        <FlowBox>
          <small>Impact</small>
          <strong>Server flies a virtual shot, then projects the hit</strong>
        </FlowBox>
      </Flow>
    </Stage>
  );
}

/* ——— MINES AS MAP ITEMS ——— */

const Map = styled.div`
  position: relative;
  height: 10.5rem;
  border: 1px dashed ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(transparent 23px, ${({ theme }) => theme.colors.line} 24px)
      0 0 / 24px 24px,
    linear-gradient(90deg, transparent 23px, ${({ theme }) => theme.colors.line} 24px)
      0 0 / 24px 24px;
`;

const MapLabel = styled.span`
  position: absolute;
  left: 0.65rem;
  top: 0.5rem;
  font-size: 0.68rem;
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.colors.faint};
`;

const ArtilleryDot = styled.div`
  position: absolute;
  left: 12%;
  bottom: 18%;
  padding: 0.3rem 0.5rem;
  border: 1px solid #a78bfa;
  color: #a78bfa;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  background: ${({ theme }) => theme.colors.bg};
`;

const Mine = styled.div<{ $on?: boolean; $x: string; $y: string }>`
  position: absolute;
  left: ${({ $x }) => $x};
  top: ${({ $y }) => $y};
  width: 3.6rem;
  height: 3.6rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1.5px solid
    ${({ $on, theme }) => ($on ? theme.colors.accent : theme.colors.lineStrong)};
  color: ${({ $on, theme }) => ($on ? theme.colors.accent : theme.colors.faint)};
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-align: center;
  background: ${({ $on, theme }) =>
    $on ? theme.colors.accentSoft : theme.colors.surfaceRaised};
`;

const ArmLine = styled.div`
  position: absolute;
  left: 26%;
  bottom: 32%;
  width: 28%;
  height: 1px;
  background: #a78bfa;
  transform: rotate(-18deg);
  transform-origin: left center;

  &::after {
    content: "arm";
    position: absolute;
    top: -1.05rem;
    right: 0;
    color: #a78bfa;
    font-size: 0.62rem;
    letter-spacing: 0.06em;
    transform: rotate(18deg);
  }
`;

export function MinesIllustration() {
  return (
    <Stage>
      <Tag>Map items · Artillery can activate them</Tag>
      <Map>
        <MapLabel>ARENA MAP</MapLabel>
        <ArtilleryDot>ARTILLERY</ArtilleryDot>
        <ArmLine />
        <Mine $x="18%" $y="12%">
          IDLE
        </Mine>
        <Mine $on $x="48%" $y="28%">
          ARMED
        </Mine>
        <Mine $x="72%" $y="52%">
          IDLE
        </Mine>
      </Map>
      <Caption>
        Mines already sit on the map with their own positions. They are not a
        weapon class. Artillery is the champion that can arm them.
      </Caption>
    </Stage>
  );
}
