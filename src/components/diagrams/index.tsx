import styled from "styled-components";

const Svg = styled.svg`
  width: 100%;
  min-width: 320px;
  height: auto;
`;

export function BoundaryDiagram() {
  return (
    <Svg viewBox="0 0 640 160" role="img" aria-label="Robot to interface to server">
      <rect x="16" y="40" width="160" height="80" rx="10" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="96" y="72" textAnchor="middle" fill="#eef2f6" fontSize="14" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Team robot</text>
      <text x="96" y="94" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily="IBM Plex Sans, sans-serif">chassis · actuators</text>

      <path d="M184 80 H232" stroke="#6b7785" strokeWidth="1.5" markerEnd="url(#arrow)" />

      <rect x="240" y="40" width="160" height="80" rx="10" fill="rgba(62,207,255,0.12)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="320" y="72" textAnchor="middle" fill="#3ecfff" fontSize="14" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Interface</text>
      <text x="320" y="94" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily="IBM Plex Sans, sans-serif">Core · sensors</text>

      <path d="M408 80 H456" stroke="#6b7785" strokeWidth="1.5" />

      <rect x="464" y="40" width="160" height="80" rx="10" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="544" y="72" textAnchor="middle" fill="#ffb45a" fontSize="14" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Game server</text>
      <text x="544" y="94" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily="IBM Plex Sans, sans-serif">authoritative state</text>

      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#6b7785" />
        </marker>
      </defs>
    </Svg>
  );
}

export function OrgTeamDiagram() {
  return (
    <Svg viewBox="0 0 640 200" role="img" aria-label="Organization versus team responsibilities">
      <rect x="20" y="24" width="280" height="152" rx="12" fill="#181e26" stroke="rgba(62,207,255,0.5)" strokeWidth="1.5" />
      <text x="160" y="52" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Organization</text>
      <text x="160" y="82" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Champion Interface</text>
      <text x="160" y="104" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Core · arena · tracking</text>
      <text x="160" y="126" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Game server · projection</text>
      <text x="160" y="148" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Rules · safety</text>

      <rect x="340" y="24" width="280" height="152" rx="12" fill="#181e26" stroke="rgba(255,180,90,0.55)" strokeWidth="1.5" />
      <text x="480" y="52" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Team</text>
      <text x="480" y="82" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Chassis · drivetrain</text>
      <text x="480" y="104" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Weapon actuators</text>
      <text x="480" y="126" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Control software</text>
      <text x="480" y="148" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Match strategy</text>
    </Svg>
  );
}

export function PhysicalDigitalDiagram() {
  return (
    <Svg viewBox="0 0 680 140" role="img" aria-label="Physical action to digital game event">
      {[
        ["Physical action", "16"],
        ["Sensor measure", "186"],
        ["Game server", "356"],
        ["Projection", "526"],
      ].map(([label, x], i) => (
        <g key={label}>
          <rect x={x} y="36" width="140" height="68" rx="10" fill={i === 2 ? "rgba(255,180,90,0.12)" : "#181e26"} stroke={i === 2 ? "#ffb45a" : "#3ecfff"} strokeWidth="1.5" />
          <text x={Number(x) + 70} y="76" textAnchor="middle" fill="#eef2f6" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="600">{label}</text>
          {i < 3 && (
            <path d={`M${Number(x) + 148} 70 H${Number(x) + 178}`} stroke="#6b7785" strokeWidth="1.5" />
          )}
        </g>
      ))}
    </Svg>
  );
}

export function ChampionsDiagram() {
  return (
    <Svg viewBox="0 0 680 180" role="img" aria-label="Three champion physical mechanisms">
      <rect x="16" y="28" width="200" height="124" rx="12" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="116" y="58" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Tank / Support</text>
      <text x="116" y="90" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Heavy shield</text>
      <text x="116" y="112" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Burst · healing beam</text>

      <rect x="240" y="28" width="200" height="124" rx="12" fill="#181e26" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="340" y="58" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Fighter</text>
      <text x="340" y="90" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Physical sword</text>
      <text x="340" y="112" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">IMU measures swing</text>

      <rect x="464" y="28" width="200" height="124" rx="12" fill="#181e26" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="564" y="58" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Artillery</text>
      <text x="564" y="90" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Launcher · mines</text>
      <text x="564" y="112" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Simulated projectile</text>
    </Svg>
  );
}

export function ArenaMapDiagram() {
  return (
    <Svg viewBox="0 0 520 300" role="img" aria-label="Arena lanes jungle and objectives">
      <rect x="20" y="20" width="480" height="260" rx="14" fill="#12161c" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

      <rect x="48" y="48" width="70" height="204" rx="8" fill="rgba(62,207,255,0.08)" stroke="#3ecfff" strokeWidth="1" />
      <text x="83" y="156" textAnchor="middle" fill="#3ecfff" fontSize="12" fontFamily="Space Grotesk, sans-serif" transform="rotate(-90 83 156)">TOP</text>

      <rect x="225" y="48" width="70" height="204" rx="8" fill="rgba(62,207,255,0.08)" stroke="#3ecfff" strokeWidth="1" />
      <text x="260" y="156" textAnchor="middle" fill="#3ecfff" fontSize="12" fontFamily="Space Grotesk, sans-serif" transform="rotate(-90 260 156)">MID</text>

      <rect x="402" y="48" width="70" height="204" rx="8" fill="rgba(62,207,255,0.08)" stroke="#3ecfff" strokeWidth="1" />
      <text x="437" y="156" textAnchor="middle" fill="#3ecfff" fontSize="12" fontFamily="Space Grotesk, sans-serif" transform="rotate(-90 437 156)">BOT</text>

      <rect x="140" y="100" width="240" height="100" rx="10" fill="rgba(255,180,90,0.08)" stroke="#ffb45a" strokeWidth="1" strokeDasharray="4 3" />
      <text x="260" y="145" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Jungle</text>
      <text x="260" y="168" textAnchor="middle" fill="#9aa6b2" fontSize="11" fontFamily="IBM Plex Sans, sans-serif">Dragon · Mana Monsters</text>

      <circle cx="260" cy="150" r="18" fill="rgba(62,207,255,0.2)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="260" y="154" textAnchor="middle" fill="#eef2f6" fontSize="9" fontFamily="IBM Plex Sans, sans-serif">CORE</text>

      <rect x="48" y="248" width="52" height="22" rx="4" fill="#181e26" stroke="#ffb45a" />
      <text x="74" y="263" textAnchor="middle" fill="#ffb45a" fontSize="10" fontFamily="IBM Plex Sans, sans-serif">Nexus</text>
      <rect x="420" y="248" width="52" height="22" rx="4" fill="#181e26" stroke="#ffb45a" />
      <text x="446" y="263" textAnchor="middle" fill="#ffb45a" fontSize="10" fontFamily="IBM Plex Sans, sans-serif">Nexus</text>
    </Svg>
  );
}

export function OpenClosedDiagram() {
  return (
    <Svg viewBox="0 0 640 180" role="img" aria-label="Open interface versus closed server">
      <rect x="20" y="24" width="290" height="132" rx="12" fill="rgba(62,207,255,0.1)" stroke="#3ecfff" strokeWidth="1.5" />
      <text x="165" y="54" textAnchor="middle" fill="#3ecfff" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Public</text>
      <text x="165" y="84" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Interface hardware + firmware</text>
      <text x="165" y="106" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">APIs · protocols · docs</text>
      <text x="165" y="128" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">(except competition token)</text>

      <rect x="330" y="24" width="290" height="132" rx="12" fill="rgba(255,180,90,0.1)" stroke="#ffb45a" strokeWidth="1.5" />
      <text x="475" y="54" textAnchor="middle" fill="#ffb45a" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Private</text>
      <text x="475" y="84" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Game server implementation</text>
      <text x="475" y="106" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Competition auth token</text>
      <text x="475" y="128" textAnchor="middle" fill="#9aa6b2" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">Infrastructure secrets</text>
    </Svg>
  );
}

export function DevWorkflowDiagram() {
  const steps = [
    "Spec",
    "Test Core",
    "Robot",
    "Practice server",
    "Match",
  ];
  return (
    <Svg viewBox="0 0 700 120" role="img" aria-label="Team development workflow">
      {steps.map((label, i) => {
        const x = 20 + i * 136;
        return (
          <g key={label}>
            <rect x={x} y="32" width="112" height="56" rx="10" fill={i === steps.length - 1 ? "rgba(255,180,90,0.12)" : "#181e26"} stroke={i === steps.length - 1 ? "#ffb45a" : "#3ecfff"} strokeWidth="1.5" />
            <text x={x + 56} y="66" textAnchor="middle" fill="#eef2f6" fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="600">{label}</text>
            {i < steps.length - 1 && (
              <path d={`M${x + 118} 60 H${x + 130}`} stroke="#6b7785" strokeWidth="1.5" />
            )}
          </g>
        );
      })}
    </Svg>
  );
}
