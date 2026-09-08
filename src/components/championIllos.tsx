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
  background: radial-gradient(
    circle at 82% 72%,
    rgba(167, 139, 250, 0.1),
    transparent 40%
  );
`;

const LaunchSvg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 680 / 224;
`;

type Pt = { x: number; y: number };

function ballisticPoints(
  muzzle: Pt,
  impact: Pt,
  angleDeg: number,
  samples = 48,
): Pt[] {
  const dx = impact.x - muzzle.x;
  const dy = impact.y - muzzle.y;
  const slope = Math.tan((angleDeg * Math.PI) / 180);
  const a = (dy - slope * dx) / (dx * dx);
  const pts: Pt[] = [];
  for (let i = 0; i <= samples; i++) {
    const x = muzzle.x + (dx * i) / samples;
    const X = x - muzzle.x;
    pts.push({ x, y: muzzle.y + a * X * X + slope * X });
  }
  return pts;
}

function toPath(pts: Pt[]) {
  return pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
}

const LAUNCH = {
  w: 680,
  h: 224,
  joint: { x: 102, y: 168 },
  barrelLen: 92,
  angle: -22,
  impact: { x: 572, y: 176 },
  aoeR: 40,
  dur: "2s",
} as const;

export function LauncherIllustration() {
  const { joint, barrelLen, angle, impact, aoeR, w, h, dur } = LAUNCH;
  const rad = (angle * Math.PI) / 180;
  const muzzle = {
    x: joint.x + barrelLen * Math.cos(rad),
    y: joint.y + barrelLen * Math.sin(rad),
  };
  const pts = ballisticPoints(muzzle, impact, angle);
  const d = toPath(pts);
  const dots = [0.18, 0.38, 0.58, 0.78].map(
    (t) => pts[Math.round(t * (pts.length - 1))],
  );
  const apex = pts.reduce((best, p) => (p.y < best.y ? p : best), pts[0]);

  return (
    <Stage>
      <Tag>Launcher · IMU on the throw · virtual projectile</Tag>
      <LaunchField>
        <LaunchSvg
          viewBox={`0 0 ${w} ${h}`}
          role="img"
          aria-label="IMU on the launcher arm measuring a throw, then a virtual projectile"
        >
          <rect x="48" y="178" width="78" height="22" fill="#0a0c10" stroke="#3ecfff" />

          <g transform={`translate(${joint.x} ${joint.y}) rotate(${angle})`}>
            <line
              x1="-40"
              y1="0"
              x2={barrelLen + 10}
              y2="0"
              stroke="rgba(167,139,250,0.28)"
              strokeWidth="1.2"
              strokeDasharray="4 5"
            />
            <rect
              x="-36"
              y="-8"
              width={barrelLen + 42}
              height="16"
              rx="2"
              fill="#1c2329"
              stroke="#56616a"
            />
            <rect
              x={barrelLen - 8}
              y="-11"
              width="28"
              height="22"
              fill="rgba(167,139,250,0.08)"
              stroke="#a78bfa"
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                dur={dur}
                repeatCount="indefinite"
                calcMode="linear"
                values="28 0; -8 0; -8 0; 48 0; 28 0; 28 0; 28 0"
                keyTimes="0; 0.32; 0.44; 0.52; 0.58; 0.9; 1"
              />
              <g transform="translate(0 -26)">
                <circle
                  r="4"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="1.5"
                  opacity="0"
                >
                  <animate
                    attributeName="r"
                    dur={dur}
                    repeatCount="indefinite"
                    values="6;6;6;20;8;8;6"
                    keyTimes="0; 0.44; 0.48; 0.54; 0.62; 0.9; 1"
                  />
                  <animate
                    attributeName="opacity"
                    dur={dur}
                    repeatCount="indefinite"
                    values="0;0;0.9;0.85;0;0;0"
                    keyTimes="0; 0.44; 0.48; 0.54; 0.62; 0.9; 1"
                  />
                </circle>
                <rect
                  x="-18"
                  y="-9"
                  width="36"
                  height="18"
                  fill="#0a0c10"
                  stroke="#a78bfa"
                >
                  <animate
                    attributeName="stroke"
                    dur={dur}
                    repeatCount="indefinite"
                    values="#a78bfa;#a78bfa;#ffb45a;#ffb45a;#a78bfa;#a78bfa;#a78bfa"
                    keyTimes="0; 0.44; 0.48; 0.56; 0.64; 0.9; 1"
                  />
                </rect>
                <text
                  y="4"
                  textAnchor="middle"
                  fill="#a78bfa"
                  fontSize="9"
                  fontWeight="600"
                  letterSpacing="0.08em"
                >
                  IMU
                  <animate
                    attributeName="fill"
                    dur={dur}
                    repeatCount="indefinite"
                    values="#a78bfa;#a78bfa;#ffb45a;#ffb45a;#a78bfa;#a78bfa;#a78bfa"
                    keyTimes="0; 0.44; 0.48; 0.56; 0.64; 0.9; 1"
                  />
                </text>
              </g>
            </g>
          </g>

          <path
            d={d}
            fill="none"
            stroke="rgba(167,139,250,0.7)"
            strokeWidth="1.6"
            strokeDasharray="7 6"
            strokeLinecap="round"
          />
          {dots.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="4.5"
              fill="#a78bfa"
              style={{
                animation: "trajDot 1.6s ease-in-out infinite",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
          <circle r="4.5" fill="#a78bfa" opacity="0">
            <animate
              attributeName="opacity"
              dur={dur}
              repeatCount="indefinite"
              values="0;0;1;1;0"
              keyTimes="0; 0.51; 0.52; 0.9; 1"
            />
            <animateMotion
              dur={dur}
              repeatCount="indefinite"
              path={d}
              calcMode="linear"
              keyPoints="0;0;1;1"
              keyTimes="0; 0.52; 0.9; 1"
            />
          </circle>
          <text
            x={apex.x}
            y={apex.y - 12}
            textAnchor="middle"
            fill="#a78bfa"
            fontSize="10"
            letterSpacing="0.08em"
          >
            SIMULATED TRAJECTORY
          </text>
          <circle
            cx={impact.x}
            cy={impact.y}
            r={aoeR}
            fill="rgba(167,139,250,0.06)"
            stroke="rgba(167,139,250,0.55)"
          />
          <text
            x={impact.x}
            y={impact.y + 4}
            textAnchor="middle"
            fill="#a78bfa"
            fontSize="14"
            fontFamily="Space Grotesk, sans-serif"
          >
            AoE
          </text>
          <text x="48" y="216" fill="#6b7785" fontSize="11">
            Nothing physical is thrown at another robot.
          </text>
        </LaunchSvg>
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
