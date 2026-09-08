import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 17.5rem), 1fr));
`;

const Card = styled.article<{ $accent: string }>`
  display: grid;
  grid-template-columns: 3.4rem 1fr;
  gap: 0.85rem 1rem;
  padding: 1rem 1.05rem 1.1rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-top: 3px solid ${({ $accent }) => $accent};
  border-radius: ${({ theme }) => theme.radii.md};

  h3 {
    margin: 0 0 0.25rem;
    font-size: 1.08rem;
  }

  > div > p {
    margin: 0 0 0.7rem;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.88rem;
    line-height: 1.45;
  }
`;

const IconWell = styled.div<{ $accent: string }>`
  width: 3.4rem;
  height: 3.4rem;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ $accent }) => $accent}22;
  color: ${({ $accent }) => $accent};

  svg {
    width: 1.85rem;
    height: 1.85rem;
  }
`;

const Kind = styled.span<{ $accent: string }>`
  display: block;
  margin-bottom: 0.35rem;
  color: ${({ $accent }) => $accent};
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Rows = styled.dl`
  margin: 0;
  display: grid;
  gap: 0.4rem;

  div {
    display: grid;
    grid-template-columns: 4.2rem 1fr;
    gap: 0.55rem;
    align-items: start;
  }

  dt {
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding-top: 0.12rem;
  }

  dd {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.84rem;
    line-height: 1.4;
  }
`;

function IconNexus() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M16 4 L26 12 L22 28 H10 L6 12 Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="3.2" fill="currentColor" />
    </svg>
  );
}

function IconTurret() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="12" y="4" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 14 H24 L22 28 H10 Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="8.5" r="1.6" fill="currentColor" />
    </svg>
  );
}

function IconMine() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16 5 V9 M16 23 V27 M5 16 H9 M23 16 H27 M8.2 8.2 L11 11 M21 21 L23.8 23.8 M23.8 8.2 L21 11 M11 21 L8.2 23.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="2.4" fill="currentColor" />
    </svg>
  );
}

function IconMonster() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M8 22 C8 13 12 8 16 8 C20 8 24 13 24 22"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M10 8 L8 4 M22 8 L24 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12.5" cy="16" r="1.5" fill="currentColor" />
      <circle cx="19.5" cy="16" r="1.5" fill="currentColor" />
      <path d="M8 22 H24 L22 28 H10 Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconCharge() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="5" y="10" width="22" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <rect x="24" y="14" width="3" height="6" rx="0.8" fill="currentColor" />
      <path d="M14 13 L18 16.5 H14.5 L18 21" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function IconGate() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M6 28 V8 L16 4 L26 8 V28" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 4 V28" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="13" cy="18" r="1.4" fill="currentColor" />
      <circle cx="19" cy="18" r="1.4" fill="currentColor" />
    </svg>
  );
}

function IconCrate() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M6 12 L16 7 L26 12 L16 17 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 12 V22 L16 27 V17 M26 12 V22 L16 27" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M11 9.5 L21 14.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

const ITEMS = [
  {
    name: "Nexus",
    kind: "Win condition",
    accent: "#ffb45a",
    Icon: IconNexus,
    lead: "Destroy the enemy one to win.",
    rows: [
      ["Does", "Takes damage only after at least one lane is cleared."],
      ["Body", "A real structure in the base — not a floor projection."],
      ["Light", "HP is shown on the object itself."],
    ],
  },
  {
    name: "Turret",
    kind: "Lane defense",
    accent: "#3ecfff",
    Icon: IconTurret,
    lead: "You cannot walk a lane to the Nexus while it stands.",
    rows: [
      ["Does", "Holds the lane. Must be broken to push."],
      ["Body", "Physical tower on the path."],
      ["Light", "Its own LEDs show remaining HP."],
    ],
  },
  {
    name: "Mine",
    kind: "Map item",
    accent: "#3ecfff",
    Icon: IconMine,
    lead: "Already on the map. Artillery is the one that can arm it.",
    rows: [
      ["Does", "Idle until armed, then it is a threat at that spot."],
      ["How", "Artillery drives onto it, can relocate it, then arms it."],
      ["Not", "A champion weapon. No fourth weapon class."],
    ],
  },
  {
    name: "Mana monster",
    kind: "Jungle camp · includes Dragon",
    accent: "#ffb45a",
    Icon: IconMonster,
    lead: "A body you fight, not a hologram on the floor.",
    rows: [
      ["Does", "Reward mana / a major buff when the camp is taken."],
      ["Body", "Physical object with its own lighting."],
      ["Motion", "Can idle-move in the camp. It does not roam the map."],
    ],
  },
  {
    name: "Charge station",
    kind: "Consumable pad",
    accent: "#3ecfff",
    Icon: IconCharge,
    lead: "Refills Charge — the energy that moves the robot.",
    rows: [
      ["Does", "One robot uses it, then the pad is dead until cooldown ends."],
      ["Not", "Mana. This does not pay for attacks."],
    ],
  },
  {
    name: "Gate",
    kind: "Passage",
    accent: "#a78bfa",
    Icon: IconGate,
    lead: "A real door the match can open or close.",
    rows: [
      ["Does", "Cuts or opens a path while the game is running."],
      ["Who", "The server / match event — not a painted wall."],
    ],
  },
  {
    name: "Movable object",
    kind: "Obstacle",
    accent: "#ffb45a",
    Icon: IconCrate,
    lead: "Robots can push it during the match.",
    rows: [
      ["Does", "Changes a corridor or a sight line after it is moved."],
      ["Who", "The robots, not the projection."],
    ],
  },
];

export function ArenaItemCards() {
  return (
    <Grid>
      {ITEMS.map((item) => (
        <Card key={item.name} $accent={item.accent}>
          <IconWell $accent={item.accent}>
            <item.Icon />
          </IconWell>
          <div>
            <Kind $accent={item.accent}>{item.kind}</Kind>
            <h3>{item.name}</h3>
            <p>{item.lead}</p>
            <Rows>
              {item.rows.map(([label, text]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </Rows>
          </div>
        </Card>
      ))}
    </Grid>
  );
}
