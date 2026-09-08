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

/** Full robot structure: team shell + sealed interface inside */
export function RobotStructureDiagram() {
  return (
    <Svg viewBox="0 0 680 320" role="img" aria-label="Robot structure with team hardware and Champion Interface">
      <rect x="16" y="16" width="648" height="288" rx="14" fill="#12161c" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
      <text x="36" y="44" fill="#eef2f6" fontSize="15" fontFamily={fontTitle} fontWeight="600">Robot structure</text>
      <text x="36" y="64" fill="#6b7785" fontSize="11" fontFamily={fontBody}>One machine · two ownership zones</text>

      <rect x="36" y="84" width="280" height="200" rx="12" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="52" y="112" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Team-owned</text>
      <text x="52" y="130" fill="#6b7785" fontSize="11" fontFamily={fontBody}>You build this</text>
      {[
        ["Chassis & frame", 158],
        ["Motors & drivetrain", 182],
        ["Weapon actuator", 206],
        ["Mechanisms & control SW", 230],
      ].map(([label, y]) => (
        <g key={label}>
          <rect x="52" y={Number(y) - 14} width="248" height="26" rx="6" fill="rgba(255,180,90,0.1)" />
          <text x="64" y={y} fill="#eef2f6" fontSize="12" fontFamily={fontBody}>{label}</text>
        </g>
      ))}

      <rect x="344" y="84" width="300" height="200" rx="12" fill="rgba(62,207,255,0.08)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="360" y="112" fill="#3ecfff" fontSize="13" fontFamily={fontTitle} fontWeight="600">Champion Interface</text>
      <text x="360" y="130" fill="#6b7785" fontSize="11" fontFamily={fontBody}>Organization · sealed unit</text>
      {[
        ["Core", 158],
        ["Weapon internal sensors", 182],
        ["Photodiode / light beam", 206],
        ["Protected internal wiring", 230],
      ].map(([label, y]) => (
        <g key={label}>
          <rect x="360" y={Number(y) - 14} width="268" height="26" rx="6" fill="rgba(62,207,255,0.1)" />
          <text x="372" y={y} fill="#eef2f6" fontSize="12" fontFamily={fontBody}>{label}</text>
        </g>
      ))}
    </Svg>
  );
}

export function RobotCompositionDiagram() {
  return <RobotStructureDiagram />;
}

/** Sealed interface internals: Core hard-wired to weapon sensors and optics */
export function InterfaceCompositionDiagram() {
  return (
    <Svg viewBox="0 0 640 260" role="img" aria-label="Champion Interface composition and sealed wiring">
      <text x="20" y="28" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">Interface composition</text>
      <text x="20" y="48" fill="#6b7785" fontSize="11" fontFamily={fontBody}>Hard-wired by the organization · must not be opened</text>

      <rect x="220" y="72" width="200" height="64" rx="12" fill="rgba(62,207,255,0.14)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="320" y="100" textAnchor="middle" fill="#3ecfff" fontSize="15" fontFamily={fontTitle} fontWeight="600">Core</text>
      <text x="320" y="120" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>USB · BLE · API</text>

      <path d="M320 136 V160" stroke="#3ecfff" strokeWidth="2" />
      <text x="332" y="154" fill="#6b7785" fontSize="10" fontFamily={fontBody}>sealed wiring</text>
      <path d="M160 160 H480" stroke="#3ecfff" strokeWidth="2" />
      <path d="M160 160 V176" stroke="#3ecfff" strokeWidth="2" />
      <path d="M480 160 V176" stroke="#3ecfff" strokeWidth="2" />

      <rect x="60" y="176" width="200" height="64" rx="12" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="160" y="204" textAnchor="middle" fill="#eef2f6" fontSize="13" fontFamily={fontTitle} fontWeight="600">Weapon sensors</text>
      <text x="160" y="224" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>IMU / launch params / …</text>

      <rect x="380" y="176" width="200" height="64" rx="12" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="480" y="204" textAnchor="middle" fill="#eef2f6" fontSize="13" fontFamily={fontTitle} fontWeight="600">Optics</text>
      <text x="480" y="224" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Photodiode / light beam</text>
    </Svg>
  );
}

/** Critical split: team moves the weapon; org measures it */
export function ActuatorVsSensorDiagram() {
  return (
    <Svg viewBox="0 0 680 300" role="img" aria-label="Weapon actuator owned by team versus weapon sensor owned by organization">
      <text x="20" y="28" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">Same weapon · two owners</text>
      <text x="20" y="48" fill="#6b7785" fontSize="11" fontFamily={fontBody}>You move it. We measure it.</text>

      <rect x="20" y="72" width="300" height="200" rx="14" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="40" y="100" fill="#ffb45a" fontSize="12" fontFamily={fontTitle} fontWeight="600">TEAM</text>
      <rect x="40" y="118" width="260" height="56" rx="10" fill="rgba(255,180,90,0.12)" stroke="#ffb45a" strokeWidth="1" />
      <text x="170" y="142" textAnchor="middle" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">Weapon actuator</text>
      <text x="170" y="162" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>servo · linkage · mechanism</text>
      <text x="40" y="204" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Builds how the sword / shield /</text>
      <text x="40" y="222" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>launcher physically moves</text>
      <text x="40" y="248" fill="#ffb45a" fontSize="12" fontFamily={fontTitle} fontWeight="600">Physical action</text>

      <rect x="360" y="72" width="300" height="200" rx="14" fill="rgba(62,207,255,0.08)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="380" y="100" fill="#3ecfff" fontSize="12" fontFamily={fontTitle} fontWeight="600">ORGANIZATION</text>
      <rect x="380" y="118" width="260" height="56" rx="10" fill="rgba(62,207,255,0.12)" stroke="#3ecfff" strokeWidth="1" />
      <text x="510" y="142" textAnchor="middle" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">Weapon sensor</text>
      <text x="510" y="162" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>IMU · launch sensing · …</text>
      <text x="380" y="204" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>Inside the sealed interface —</text>
      <text x="380" y="222" fill="#9aa6b2" fontSize="12" fontFamily={fontBody}>measures motion for the server</text>
      <text x="380" y="248" fill="#3ecfff" fontSize="12" fontFamily={fontTitle} fontWeight="600">Official measurement</text>

      <path d="M320 146 H360" stroke="#6b7785" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="340" y="138" textAnchor="middle" fill="#6b7785" fontSize="10" fontFamily={fontBody}>couples</text>
    </Svg>
  );
}

/** How power/data/radio are wired around the Core */
export function RobotWiringDiagram() {
  return (
    <Svg viewBox="0 0 680 280" role="img" aria-label="How the robot is wired through the Core">
      <text x="20" y="28" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">How it is wired</text>

      <rect x="40" y="100" width="140" height="70" rx="10" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="110" y="130" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Team robot</text>
      <text x="110" y="150" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>computer · power</text>

      <path d="M180 135 H230" stroke="#ffb45a" strokeWidth="2" />
      <text x="205" y="124" textAnchor="middle" fill="#ffb45a" fontSize="10" fontFamily={fontBody}>USB</text>
      <polygon points="230,131 240,135 230,139" fill="#ffb45a" />

      <rect x="248" y="88" width="180" height="100" rx="12" fill="rgba(62,207,255,0.12)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="338" y="120" textAnchor="middle" fill="#3ecfff" fontSize="14" fontFamily={fontTitle} fontWeight="600">Core</text>
      <text x="338" y="140" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>power + data API</text>
      <text x="338" y="158" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>to sealed parts</text>

      <path d="M338 188 V210" stroke="#3ecfff" strokeWidth="2" />
      <text x="350" y="204" fill="#6b7785" fontSize="10" fontFamily={fontBody}>hard-wired</text>

      <rect x="220" y="210" width="110" height="48" rx="8" fill="#181e26" stroke="#3ecfff" strokeWidth="1" />
      <text x="275" y="238" textAnchor="middle" fill="#eef2f6" fontSize="11" fontFamily={fontBody}>Weapon sensors</text>

      <rect x="346" y="210" width="110" height="48" rx="8" fill="#181e26" stroke="#3ecfff" strokeWidth="1" />
      <text x="401" y="238" textAnchor="middle" fill="#eef2f6" fontSize="11" fontFamily={fontBody}>Optics</text>

      <path d="M428 120 H500" stroke="#ffb45a" strokeWidth="2" strokeDasharray="5 3" />
      <text x="464" y="110" textAnchor="middle" fill="#ffb45a" fontSize="10" fontFamily={fontBody}>BLE</text>
      <polygon points="500,116 510,120 500,124" fill="#ffb45a" />

      <rect x="518" y="95" width="140" height="70" rx="10" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="588" y="125" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Game server</text>
      <text x="588" y="145" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>authoritative state</text>

      <text x="40" y="60" fill="#6b7785" fontSize="11" fontFamily={fontBody}>Teams talk to the Core only — never to sealed internal wiring</text>
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
    <Svg viewBox="0 0 680 220" role="img" aria-label="Three champions each with weapon and optic role">
      <text x="20" y="24" fill="#eef2f6" fontSize="13" fontFamily={fontTitle} fontWeight="600">Every champion interface</text>
      <text x="20" y="44" fill="#6b7785" fontSize="11" fontFamily={fontBody}>Weapon sensing + one optical role</text>

      <rect x="16" y="60" width="200" height="140" rx="12" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="116" y="90" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily={fontTitle} fontWeight="600">Tank / Support</text>
      <text x="116" y="118" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Weapon: heavy shield</text>
      <text x="116" y="142" textAnchor="middle" fill="#ffb45a" fontSize="12" fontFamily={fontBody}>Optics: light beam</text>
      <text x="116" y="166" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>(emitter · heals allies)</text>

      <rect x="240" y="60" width="200" height="140" rx="12" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="340" y="90" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Fighter</text>
      <text x="340" y="118" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Weapon: sword</text>
      <text x="340" y="142" textAnchor="middle" fill="#3ecfff" fontSize="12" fontFamily={fontBody}>Optics: photodiode</text>
      <text x="340" y="166" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>(can receive heal)</text>

      <rect x="464" y="60" width="200" height="140" rx="12" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="564" y="90" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily={fontTitle} fontWeight="600">Artillery</text>
      <text x="564" y="118" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Weapon: launcher</text>
      <text x="564" y="142" textAnchor="middle" fill="#3ecfff" fontSize="12" fontFamily={fontBody}>Optics: photodiode</text>
      <text x="564" y="166" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>(can receive heal)</text>
    </Svg>
  );
}

/** Shared combat pipeline for all three champions */
export function SharedCombatPipelineDiagram() {
  const steps = [
    { label: "Physical", sub: "action" },
    { label: "Measure", sub: "interface" },
    { label: "Virtual", sub: "action" },
    { label: "Server", sub: "rules" },
    { label: "Simulate", sub: "interactive" },
    { label: "Project", sub: "continuous" },
  ];
  return (
    <Svg viewBox="0 0 720 130" role="img" aria-label="Shared combat pipeline for all champions">
      {steps.map((step, i) => {
        const x = 12 + i * 118;
        const hi = i === 3 || i === 4;
        return (
          <g key={step.label}>
            <rect
              x={x}
              y="28"
              width="104"
              height="74"
              rx="10"
              fill={hi ? "rgba(255,180,90,0.12)" : "#181e26"}
              stroke={hi ? "#ffb45a" : "#3ecfff"}
              strokeWidth="1.5"
            />
            <text x={x + 52} y="60" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontTitle} fontWeight="600">{step.label}</text>
            <text x={x + 52} y="80" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>{step.sub}</text>
            {i < steps.length - 1 && (
              <>
                <path d={`M${x + 110} 65 H${x + 114}`} stroke="#6b7785" strokeWidth="1.5" />
                <polygon points={`${x + 114},61 ${x + 118},65 ${x + 114},69`} fill="#6b7785" />
              </>
            )}
          </g>
        );
      })}
    </Svg>
  );
}

/** Healing: two champions, both talk to server */
export function HealingLinkDiagram() {
  return (
    <Svg viewBox="0 0 680 260" role="img" aria-label="Healing beam between Tank and ally via server">
      <text x="20" y="28" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">Healing link</text>
      <text x="20" y="48" fill="#6b7785" fontSize="11" fontFamily={fontBody}>Beam and photodiode live on different champions — both report to the server</text>

      <rect x="20" y="72" width="200" height="100" rx="12" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="120" y="104" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily={fontTitle} fontWeight="600">Tank</text>
      <text x="120" y="126" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Light beam emitter</text>
      <text x="120" y="148" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Core → server</text>

      <path d="M220 122 H280" stroke="#ffb45a" strokeWidth="2" strokeDasharray="5 3" />
      <text x="250" y="112" textAnchor="middle" fill="#ffb45a" fontSize="10" fontFamily={fontBody}>light</text>

      <rect x="280" y="72" width="200" height="100" rx="12" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="380" y="104" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Ally</text>
      <text x="380" y="126" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Photodiode</text>
      <text x="380" y="148" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Core → server</text>

      <path d="M120 172 V200" stroke="#6b7785" strokeWidth="1.5" />
      <path d="M380 172 V200" stroke="#6b7785" strokeWidth="1.5" />
      <path d="M120 200 H380" stroke="#6b7785" strokeWidth="1.5" />
      <path d="M250 200 V214" stroke="#6b7785" strokeWidth="1.5" />

      <rect x="170" y="214" width="160" height="36" rx="8" fill="rgba(255,180,90,0.12)" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="250" y="237" textAnchor="middle" fill="#ffb45a" fontSize="12" fontFamily={fontTitle} fontWeight="600">Server · HP update</text>
    </Svg>
  );
}

export function ChampionInterfaceCard({
  title,
  role,
  teamParts,
  interfaceParts,
  accent = "#3ecfff",
}: {
  title: string;
  role: string;
  teamParts: string[];
  interfaceParts: string[];
  accent?: string;
}) {
  return (
    <Svg viewBox="0 0 640 210" role="img" aria-label={`${title} interface and weapons`}>
      <text x="20" y="28" fill={accent} fontSize="14" fontFamily={fontTitle} fontWeight="600">{title}</text>
      <text x="20" y="48" fill="#6b7785" fontSize="11" fontFamily={fontBody}>{role}</text>

      <rect x="20" y="64" width="290" height="128" rx="12" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="36" y="92" fill="#ffb45a" fontSize="12" fontFamily={fontTitle} fontWeight="600">Team robot · actuators</text>
      {teamParts.map((label, i) => (
        <text key={label} x="36" y={118 + i * 22} fill="#eef2f6" fontSize="12" fontFamily={fontBody}>· {label}</text>
      ))}

      <rect x="330" y="64" width="290" height="128" rx="12" fill="rgba(62,207,255,0.08)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="346" y="92" fill="#3ecfff" fontSize="12" fontFamily={fontTitle} fontWeight="600">Champion Interface</text>
      {interfaceParts.map((label, i) => (
        <text key={label} x="346" y={118 + i * 22} fill="#eef2f6" fontSize="12" fontFamily={fontBody}>· {label}</text>
      ))}
    </Svg>
  );
}

/** Mines are physical world objects with their own position */
export function MinesVsProjectileDiagram() {
  return (
    <Svg viewBox="0 0 680 250" role="img" aria-label="Physical mines versus virtual projectiles">
      <text x="20" y="28" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">Same pipeline · different duration</text>

      <rect x="20" y="56" width="300" height="170" rx="12" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="170" y="88" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Launcher projectile</text>
      <text x="170" y="116" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Virtual after measurement</text>
      <text x="170" y="142" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Simulation is not instant</text>
      <text x="170" y="162" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Flight continues over time</text>
      <text x="170" y="182" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Projection tracks the path</text>
      <text x="170" y="206" textAnchor="middle" fill="#6b7785" fontSize="10" fontFamily={fontBody}>Same principle as other attacks</text>

      <rect x="360" y="56" width="300" height="170" rx="12" fill="rgba(62,207,255,0.1)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="510" y="88" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily={fontTitle} fontWeight="600">Mine</text>
      <text x="510" y="116" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Physically exists</text>
      <text x="510" y="142" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Own position on the map</text>
      <text x="510" y="162" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Deployed / moved in reality</text>
      <text x="510" y="182" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Stays until triggered</text>
      <text x="510" y="206" textAnchor="middle" fill="#6b7785" fontSize="10" fontFamily={fontBody}>Not a virtual projectile</text>
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

/** Three champion resources: HP, Mana, Charge */
export function ResourceTriadDiagram() {
  return (
    <Svg viewBox="0 0 680 240" role="img" aria-label="HP Mana and Charge resources">
      <text x="20" y="28" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">Three resources</text>
      <text x="20" y="48" fill="#6b7785" fontSize="11" fontFamily={fontBody}>Different jobs — do not mix them up</text>

      <rect x="20" y="68" width="200" height="150" rx="12" fill="rgba(62,207,255,0.1)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="120" y="100" textAnchor="middle" fill="#3ecfff" fontSize="16" fontFamily={fontTitle} fontWeight="600">HP</text>
      <text x="120" y="124" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Game · vitality</text>
      <text x="120" y="152" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Weapons stay active</text>
      <text x="120" y="172" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>only while HP &gt; 0</text>
      <text x="120" y="198" textAnchor="middle" fill="#6b7785" fontSize="10" fontFamily={fontBody}>HP ≤ 0 → dead</text>

      <rect x="240" y="68" width="200" height="150" rx="12" fill="rgba(255,180,90,0.1)" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="340" y="100" textAnchor="middle" fill="#ffb45a" fontSize="16" fontFamily={fontTitle} fontWeight="600">Mana</text>
      <text x="340" y="124" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Game · combat fuel</text>
      <text x="340" y="152" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Consumed by attacks</text>
      <text x="340" y="172" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>and abilities</text>
      <text x="340" y="198" textAnchor="middle" fill="#6b7785" fontSize="10" fontFamily={fontBody}>No Mana → no spend</text>

      <rect x="460" y="68" width="200" height="150" rx="12" fill="#181e26" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <text x="560" y="100" textAnchor="middle" fill="#eef2f6" fontSize="16" fontFamily={fontTitle} fontWeight="600">Charge</text>
      <text x="560" y="124" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Robot · energy</text>
      <text x="560" y="152" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>Needed to move the</text>
      <text x="560" y="172" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>physical robot</text>
      <text x="560" y="198" textAnchor="middle" fill="#6b7785" fontSize="10" fontFamily={fontBody}>No Charge → stuck</text>
    </Svg>
  );
}

export function AttackGateDiagram() {
  return (
    <Svg viewBox="0 0 680 200" role="img" aria-label="Conditions for a valid attack">
      <text x="20" y="28" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">Attack gate</text>
      <text x="20" y="48" fill="#6b7785" fontSize="11" fontFamily={fontBody}>All must be true for the server to accept an attack</text>

      {[
        { x: 20, label: "HP > 0", sub: "weapons active" },
        { x: 180, label: "Mana enough", sub: "pay the cost" },
        { x: 340, label: "Cooldown ready", sub: "timer elapsed" },
        { x: 500, label: "Attack fires", sub: "server applies" },
      ].map((step, i) => (
        <g key={step.label}>
          <rect
            x={step.x}
            y="72"
            width="140"
            height="88"
            rx="10"
            fill={i === 3 ? "rgba(255,180,90,0.12)" : "#181e26"}
            stroke={i === 3 ? "#ffb45a" : "#3ecfff"}
            strokeWidth="1.5"
          />
          <text x={step.x + 70} y="110" textAnchor="middle" fill="#eef2f6" fontSize="13" fontFamily={fontTitle} fontWeight="600">{step.label}</text>
          <text x={step.x + 70} y="132" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>{step.sub}</text>
          {i < 3 && (
            <>
              <path d={`M${step.x + 148} 116 H${step.x + 172}`} stroke="#6b7785" strokeWidth="1.5" />
              <polygon points={`${step.x + 172},112 ${step.x + 180},116 ${step.x + 172},120`} fill="#6b7785" />
            </>
          )}
        </g>
      ))}
    </Svg>
  );
}

export function SpawnLogicDiagram() {
  return (
    <Svg viewBox="0 0 680 260" role="img" aria-label="Death and continuous base spawn timer">
      <text x="20" y="28" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">Spawn logic</text>
      <text x="20" y="48" fill="#6b7785" fontSize="11" fontFamily={fontBody}>Revive requires continuous presence in base</text>

      <rect x="20" y="72" width="140" height="70" rx="10" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="90" y="102" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">HP ≤ 0</text>
      <text x="90" y="122" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>champion dead</text>

      <path d="M160 107 H200" stroke="#6b7785" strokeWidth="1.5" />
      <polygon points="200,103 208,107 200,111" fill="#6b7785" />

      <rect x="208" y="72" width="160" height="70" rx="10" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="288" y="102" textAnchor="middle" fill="#eef2f6" fontSize="13" fontFamily={fontTitle} fontWeight="600">Weapons off</text>
      <text x="288" y="122" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>return to base</text>

      <path d="M368 107 H408" stroke="#6b7785" strokeWidth="1.5" />
      <polygon points="408,103 416,107 408,111" fill="#6b7785" />

      <rect x="416" y="60" width="244" height="94" rx="12" fill="rgba(62,207,255,0.1)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="538" y="92" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily={fontTitle} fontWeight="600">Continuous spawn time</text>
      <text x="538" y="114" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>must stay in base</text>
      <text x="538" y="134" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>leave → timer resets</text>

      <path d="M538 154 V178" stroke="#6b7785" strokeWidth="1.5" />
      <polygon points="534,178 538,186 542,178" fill="#6b7785" />

      <rect x="416" y="190" width="244" height="50" rx="10" fill="rgba(255,180,90,0.12)" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="538" y="220" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Alive again · HP restored</text>
    </Svg>
  );
}

export function NexusLaneDiagram() {
  return (
    <Svg viewBox="0 0 680 280" role="img" aria-label="Nexus only vulnerable when a lane is cleared">
      <text x="20" y="28" fill="#eef2f6" fontSize="14" fontFamily={fontTitle} fontWeight="600">Win condition · Wild Rift logic</text>
      <text x="20" y="48" fill="#6b7785" fontSize="11" fontFamily={fontBody}>Clear a lane before the Nexus can take damage</text>

      <rect x="40" y="80" width="120" height="48" rx="8" fill="#181e26" stroke="#3ecfff" strokeWidth="1" />
      <text x="100" y="108" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Outer turret</text>
      <path d="M160 104 H190" stroke="#6b7785" strokeWidth="1.5" />
      <polygon points="190,100 198,104 190,108" fill="#6b7785" />

      <rect x="198" y="80" width="120" height="48" rx="8" fill="#181e26" stroke="#3ecfff" strokeWidth="1" />
      <text x="258" y="108" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Inner turret</text>
      <path d="M318 104 H348" stroke="#6b7785" strokeWidth="1.5" />
      <polygon points="348,100 356,104 348,108" fill="#6b7785" />

      <rect x="356" y="80" width="120" height="48" rx="8" fill="#181e26" stroke="#3ecfff" strokeWidth="1" />
      <text x="416" y="108" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily={fontBody}>Inhibitor</text>
      <path d="M476 104 H506" stroke="#6b7785" strokeWidth="1.5" />
      <polygon points="506,100 514,104 506,108" fill="#6b7785" />

      <rect x="514" y="72" width="140" height="64" rx="10" fill="rgba(255,180,90,0.12)" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="584" y="100" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Lane cleared</text>
      <text x="584" y="120" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>that path opens</text>

      <rect x="40" y="170" width="280" height="80" rx="12" fill="#181e26" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      <text x="180" y="204" textAnchor="middle" fill="#9aa6b2" fontSize="13" fontFamily={fontTitle} fontWeight="600">Nexus invulnerable</text>
      <text x="180" y="226" textAnchor="middle" fill="#6b7785" fontSize="11" fontFamily={fontBody}>no lane cleared yet</text>

      <path d="M320 210 H380" stroke="#6b7785" strokeWidth="1.5" />
      <polygon points="380,206 388,210 380,214" fill="#6b7785" />

      <rect x="388" y="170" width="266" height="80" rx="12" fill="rgba(255,180,90,0.12)" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="521" y="204" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily={fontTitle} fontWeight="600">Nexus can take damage</text>
      <text x="521" y="226" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily={fontBody}>at least one lane cleared</text>
    </Svg>
  );
}
