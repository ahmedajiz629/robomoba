import styled from "styled-components";

const Svg = styled.svg`
  width: 100%;
  min-width: 280px;
  height: auto;
`;

const fontTitle = "Space Grotesk, sans-serif";
const fontBody = "IBM Plex Sans, sans-serif";

export function BoundaryDiagram() {
  return (
    <Svg viewBox="0 0 640 160" role="img" aria-label="Robot to interface to server">
      <rect x="16" y="40" width="160" height="80" rx="10" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="96" y="72" textAnchor="middle" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">Team robot</text>
      <text x="96" y="94" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>chassis · actuators</text>

      <path d="M184 80 H232" stroke="#6b7785" strokeWidth="1.5" />
      <polygon points="232,76 242,80 232,84" fill="#6b7785" />

      <rect x="248" y="40" width="160" height="80" rx="10" fill="rgba(62,207,255,0.12)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="328" y="72" textAnchor="middle" fill="#3ecfff" fontSize="14" fontFamily={fontTitle} fontWeight="600">Interface</text>
      <text x="328" y="94" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Core · sensors</text>

      <path d="M416 80 H464" stroke="#6b7785" strokeWidth="1.5" />
      <polygon points="464,76 474,80 464,84" fill="#6b7785" />

      <rect x="480" y="40" width="144" height="80" rx="10" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="552" y="72" textAnchor="middle" fill="#ffb45a" fontSize="14" fontFamily={fontTitle} fontWeight="600">Server</text>
      <text x="552" y="94" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>official state</text>
    </Svg>
  );
}

/** Nested composition: team robot contains mechanics + official interface */
export function RobotCompositionDiagram() {
  return (
    <Svg viewBox="0 0 620 280" role="img" aria-label="Team robot composition with Champion Interface">
      <rect x="20" y="20" width="580" height="240" rx="14" fill="#12161c" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="40" y="48" fill="#3ecfff" fontSize="14" fontFamily={fontTitle} fontWeight="600">Team robot</text>
      <text x="40" y="68" fill="#6b7785" fontSize="11" fontFamily={fontBody}>Built entirely by the team</text>

      <rect x="40" y="88" width="240" height="152" rx="10" fill="#181e26" stroke="rgba(255,180,90,0.55)" strokeWidth="1.5" />
      <text x="56" y="116" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Team hardware</text>
      {[
        ["Chassis & frame", 140],
        ["Motors & drivetrain", 164],
        ["Actuators & mechanisms", 188],
        ["Control software", 212],
      ].map(([label, y]) => (
        <g key={label}>
          <circle cx="64" cy={Number(y) - 4} r="3" fill="#ffb45a" />
          <text x="78" y={y} fill="#eef2f6" fontSize="12" fontFamily={fontBody}>{label}</text>
        </g>
      ))}

      <rect x="310" y="88" width="270" height="152" rx="10" fill="rgba(62,207,255,0.1)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="326" y="116" fill="#3ecfff" fontSize="13" fontFamily={fontTitle} fontWeight="600">Champion Interface</text>
      <text x="326" y="134" fill="#6b7785" fontSize="11" fontFamily={fontBody}>Organization · sealed</text>
      {[
        ["Core (USB + wireless)", 162],
        ["Weapon sensors / interface", 186],
        ["Photodiode / light beam", 210],
      ].map(([label, y]) => (
        <g key={label}>
          <circle cx="340" cy={Number(y) - 4} r="3" fill="#3ecfff" />
          <text x="354" y={y} fill="#eef2f6" fontSize="12" fontFamily={fontBody}>{label}</text>
        </g>
      ))}
    </Svg>
  );
}

export function OrgTeamDiagram() {
  return (
    <Svg viewBox="0 0 640 200" role="img" aria-label="Organization versus team responsibilities">
      <rect x="20" y="24" width="280" height="152" rx="12" fill="#181e26" stroke="rgba(62,207,255,0.5)" strokeWidth="1.5" />
      <text x="160" y="52" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily={fontTitle} fontWeight="600">Organization</text>
      <text x="160" y="82" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Champion Interface</text>
      <text x="160" y="104" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Core · arena · tracking</text>
      <text x="160" y="126" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Game server · projection</text>
      <text x="160" y="148" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Rules · safety</text>

      <rect x="340" y="24" width="280" height="152" rx="12" fill="#181e26" stroke="rgba(255,180,90,0.55)" strokeWidth="1.5" />
      <text x="480" y="52" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Team</text>
      <text x="480" y="82" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Chassis · drivetrain</text>
      <text x="480" y="104" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Weapon actuators</text>
      <text x="480" y="126" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Control software</text>
      <text x="480" y="148" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Match strategy</text>
    </Svg>
  );
}

export function PhysicalDigitalDiagram() {
  const steps = [
    { label: "Physical action", sub: "robot moves", accent: "#3ecfff" },
    { label: "Sensor measure", sub: "interface", accent: "#3ecfff" },
    { label: "Game server", sub: "rules applied", accent: "#ffb45a" },
    { label: "Projection", sub: "spectators see", accent: "#3ecfff" },
  ];
  return (
    <Svg viewBox="0 0 700 130" role="img" aria-label="Physical action to digital game event">
      {steps.map((step, i) => {
        const x = 16 + i * 172;
        return (
          <g key={step.label}>
            <rect x={x} y="28" width="148" height="74" rx="10" fill={step.accent === "#ffb45a" ? "rgba(255,180,90,0.12)" : "#181e26"} stroke={step.accent} strokeWidth="1.5" />
            <text x={x + 74} y="60" textAnchor="middle" fill="#eef2f6" fontSize="13" fontFamily={fontTitle} fontWeight="600">{step.label}</text>
            <text x={x + 74} y="80" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>{step.sub}</text>
            {i < steps.length - 1 && (
              <>
                <path d={`M${x + 156} 65 H${x + 164}`} stroke="#6b7785" strokeWidth="1.5" />
                <polygon points={`${x + 164},61 ${x + 172},65 ${x + 164},69`} fill="#6b7785" />
              </>
            )}
          </g>
        );
      })}
    </Svg>
  );
}

export function StepChainDiagram({
  steps,
  highlightIndex,
}: {
  steps: string[];
  highlightIndex?: number;
}) {
  const w = Math.max(560, steps.length * 130);
  return (
    <Svg viewBox={`0 0 ${w} 110`} role="img" aria-label={steps.join(" then ")}>
      {steps.map((label, i) => {
        const x = 16 + i * ((w - 32) / steps.length);
        const boxW = (w - 32) / steps.length - 20;
        const hi = highlightIndex === i;
        return (
          <g key={label}>
            <rect
              x={x}
              y="28"
              width={boxW}
              height="56"
              rx="10"
              fill={hi ? "rgba(255,180,90,0.12)" : "#181e26"}
              stroke={hi ? "#ffb45a" : "#3ecfff"}
              strokeWidth="1.5"
            />
            <text
              x={x + boxW / 2}
              y="62"
              textAnchor="middle"
              fill="#eef2f6"
              fontSize="12"
              fontFamily={fontTitle}
              fontWeight="600"
            >
              {label}
            </text>
            {i < steps.length - 1 && (
              <>
                <path d={`M${x + boxW + 2} 56 H${x + boxW + 14}`} stroke="#6b7785" strokeWidth="1.5" />
                <polygon
                  points={`${x + boxW + 14},52 ${x + boxW + 20},56 ${x + boxW + 14},60`}
                  fill="#6b7785"
                />
              </>
            )}
          </g>
        );
      })}
    </Svg>
  );
}

export function ChampionsDiagram() {
  return (
    <Svg viewBox="0 0 680 180" role="img" aria-label="Three champion physical mechanisms">
      <rect x="16" y="28" width="200" height="124" rx="12" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="116" y="58" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily={fontTitle} fontWeight="600">Tank / Support</text>
      <text x="116" y="90" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Heavy shield</text>
      <text x="116" y="112" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Burst · healing beam</text>

      <rect x="240" y="28" width="200" height="124" rx="12" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="340" y="58" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Fighter</text>
      <text x="340" y="90" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Physical sword</text>
      <text x="340" y="112" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>IMU measures swing</text>

      <rect x="464" y="28" width="200" height="124" rx="12" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="564" y="58" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily={fontTitle} fontWeight="600">Artillery</text>
      <text x="564" y="90" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Launcher · mines</text>
      <text x="564" y="112" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Simulated projectile</text>
    </Svg>
  );
}

export function ArenaMapDiagram() {
  return (
    <Svg viewBox="0 0 520 300" role="img" aria-label="Arena lanes jungle and objectives">
      <rect x="20" y="20" width="480" height="260" rx="14" fill="#12161c" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

      <rect x="48" y="48" width="70" height="204" rx="8" fill="rgba(62,207,255,0.08)" stroke="#3ecfff" strokeWidth="1" />
      <text x="83" y="156" textAnchor="middle" fill="#3ecfff" fontSize="12" fontFamily={fontTitle} transform="rotate(-90 83 156)">TOP</text>

      <rect x="225" y="48" width="70" height="204" rx="8" fill="rgba(62,207,255,0.08)" stroke="#3ecfff" strokeWidth="1" />
      <text x="260" y="156" textAnchor="middle" fill="#3ecfff" fontSize="12" fontFamily={fontTitle} transform="rotate(-90 260 156)">MID</text>

      <rect x="402" y="48" width="70" height="204" rx="8" fill="rgba(62,207,255,0.08)" stroke="#3ecfff" strokeWidth="1" />
      <text x="437" y="156" textAnchor="middle" fill="#3ecfff" fontSize="12" fontFamily={fontTitle} transform="rotate(-90 437 156)">BOT</text>

      <rect x="140" y="100" width="240" height="100" rx="10" fill="rgba(255,180,90,0.08)" stroke="#ffb45a" strokeWidth="1" strokeDasharray="4 3" />
      <text x="260" y="145" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Jungle</text>
      <text x="260" y="168" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Dragon · Mana Monsters</text>

      <circle cx="260" cy="150" r="18" fill="rgba(62,207,255,0.2)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="260" y="154" textAnchor="middle" fill="#eef2f6" fontSize="9" fontFamily={fontBody}>CORE</text>

      <rect x="48" y="248" width="52" height="22" rx="4" fill="#181e26" stroke="#ffb45a" />
      <text x="74" y="263" textAnchor="middle" fill="#ffb45a" fontSize="10" fontFamily={fontBody}>Nexus</text>
      <rect x="420" y="248" width="52" height="22" rx="4" fill="#181e26" stroke="#ffb45a" />
      <text x="446" y="263" textAnchor="middle" fill="#ffb45a" fontSize="10" fontFamily={fontBody}>Nexus</text>
    </Svg>
  );
}

export function OpenClosedDiagram() {
  return (
    <Svg viewBox="0 0 640 180" role="img" aria-label="Open interface versus closed server">
      <rect x="20" y="24" width="290" height="132" rx="12" fill="rgba(62,207,255,0.1)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="165" y="54" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily={fontTitle} fontWeight="600">Public</text>
      <text x="165" y="84" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Interface hardware + firmware</text>
      <text x="165" y="106" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>APIs · protocols · docs</text>
      <text x="165" y="128" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>(except competition token)</text>

      <rect x="330" y="24" width="290" height="132" rx="12" fill="rgba(255,180,90,0.1)" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="475" y="54" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Private</text>
      <text x="475" y="84" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Game server implementation</text>
      <text x="475" y="106" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Competition auth token</text>
      <text x="475" y="128" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Infrastructure secrets</text>
    </Svg>
  );
}

export function DevWorkflowDiagram() {
  const steps = ["Spec", "Test Core", "Robot", "Practice server", "Match"];
  return (
    <Svg viewBox="0 0 700 120" role="img" aria-label="Team development workflow">
      {steps.map((label, i) => {
        const x = 20 + i * 136;
        const last = i === steps.length - 1;
        return (
          <g key={label}>
            <rect x={x} y="32" width="112" height="56" rx="10" fill={last ? "rgba(255,180,90,0.12)" : "#181e26"} stroke={last ? "#ffb45a" : "#3ecfff"} strokeWidth="1.5" />
            <text x={x + 56} y="66" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontTitle} fontWeight="600">{label}</text>
            {i < steps.length - 1 && (
              <>
                <path d={`M${x + 118} 60 H${x + 128}`} stroke="#6b7785" strokeWidth="1.5" />
                <polygon points={`${x + 128},56 ${x + 136},60 ${x + 128},64`} fill="#6b7785" />
              </>
            )}
          </g>
        );
      })}
    </Svg>
  );
}
