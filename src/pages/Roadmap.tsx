import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  PageIntro,
  Eyebrow,
  Section,
  WideSection,
  Callout,
  ListPlain,
  Grid,
  Item,
  PageNav,
} from "../components/ui";

const months = [
  {
    title: "Month 1 — Architecture",
    text: "Freeze rules, champions, interface architecture, Core API, comms, game-state model, tracking, arena size, safety.",
  },
  {
    title: "Month 2 — Core infrastructure",
    text: "Core firmware, API, communication, game server basics, tracking, HP/energy, first game events.",
  },
  {
    title: "Month 3 — Physical combat",
    text: "Prototype shield, burst, heal beam, sword, launcher, mines. Validate the physical→digital model.",
  },
  {
    title: "Month 4 — Arena",
    text: "Lanes, jungle, turrets, Nexus, Dragon, Mana Monsters, Power Charges, gates, central objective.",
  },
  {
    title: "Month 5 — Team testing",
    text: "Scale 1v1 → 2v2 → 3v3. Combat, objectives, rotations, balance, match length.",
  },
  {
    title: "Month 6 — Stabilization",
    text: "Reliability, calibration, safety, stress tests, projection, tournament procedures. Features only if stable.",
  },
];

export default function Roadmap() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Delivery</Eyebrow>
        <h1>Roadmap</h1>
        <p>
          About six months to a reliable first edition. Priorities: reliability
          over feature count; gameplay quality over technical complexity.
        </p>
      </PageIntro>

      <Section>
        <Callout>
          <strong>Protected practice</strong>
          <p>
            Server + docs ready no later than two months before the event.
            Final stretch is team integration, not late invention of the
            platform.
          </p>
        </Callout>
      </Section>

      <WideSection>
        <h2>Six-month plan</h2>
        <ListPlain>
          {months.map((month) => (
            <li key={month.title}>
              <strong>{month.title}</strong>
              <span>{month.text}</span>
            </li>
          ))}
        </ListPlain>
      </WideSection>

      <WideSection>
        <h2>First-edition MVP</h2>
        <Grid $cols={2}>
          <Item>
            <strong>Match</strong>
            <p>3v3, flexible deployment, lanes, jungle, turrets, Nexus</p>
          </Item>
          <Item>
            <strong>Champions</strong>
            <p>Tank/Support, Fighter, Artillery with listed physical abilities</p>
          </Item>
          <Item>
            <strong>Objectives</strong>
            <p>Energy, Mana Monsters, Dragon, Power Charges, Power Core</p>
          </Item>
          <Item>
            <strong>Infrastructure</strong>
            <p>Interfaces, Core, USB API, BLE, tracking, server, projection</p>
          </Item>
        </Grid>
      </WideSection>

      <Section>
        <h2>Not in v1</h2>
        <p>
          5v5, extra champions, autonomous minions, advanced arena
          transformations, and broadcast AR are future options — not
          requirements for the first edition.
        </p>
      </Section>

      <Section>
        <h2>What must stay true</h2>
        <p>
          Same game vocabulary as a MOBA, but play is physical: real shields,
          swords, beams, mines, launchers. Two teams with the same champion
          can still field completely different machines.
        </p>
        <p>
          <strong>We define the game. You define the robot.</strong>
        </p>
      </Section>

      <PageNav>
        <Link to="/development">← Development</Link>
        <Link to="/">Back to home</Link>
      </PageNav>
    </Layout>
  );
}
