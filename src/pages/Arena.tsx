import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  PageIntro,
  Eyebrow,
  Section,
  WideSection,
  Grid,
  Item,
  Callout,
  PageNav,
} from "../components/ui";

export default function Arena() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Battlefield</Eyebrow>
        <h1>Arena</h1>
        <p>
          The arena is not just a floor for robots. It holds the structures
          and resources that create MOBA strategy.
        </p>
      </PageIntro>

      <WideSection>
        <h2>Map structure</h2>
        <Grid $cols={2}>
          <Item>
            <strong>Three lanes</strong>
            <p>Top, mid, bottom — primary paths to pressure the Nexus</p>
          </Item>
          <Item>
            <strong>Jungle</strong>
            <p>Space between lanes for resources, rotation, and ambush</p>
          </Item>
          <Item>
            <strong>Turrets</strong>
            <p>Defensive structures that must be dealt with to advance</p>
          </Item>
          <Item>
            <strong>Nexus</strong>
            <p>Final objective — destroy it to win</p>
          </Item>
        </Grid>
      </WideSection>

      <Section>
        <h2>Objectives and resources</h2>
        <ul>
          <li>
            <strong>Mana Monsters</strong> — jungle resources that feed energy
            economy
          </li>
          <li>
            <strong>Dragon</strong> — contested objective with meaningful
            reward
          </li>
          <li>
            <strong>Power Charges</strong> — collectible power that feeds into
            larger plays
          </li>
          <li>
            <strong>Power Core</strong> — central physical objective that
            rewards territorial control
          </li>
        </ul>
        <Callout>
          <strong>Why the Power Core matters</strong>
          <p>
            It makes territory itself a mechanic, not only lane pressure —
            a deliberate difference from a purely digital MOBA map.
          </p>
        </Callout>
      </Section>

      <Section>
        <h2>Gates and obstacles</h2>
        <p>
          Gates and selected movable obstacles change access and sight lines
          during a match. They exist to force adaptation, not to decorate the
          floor.
        </p>
      </Section>

      <Section>
        <h2>Bases</h2>
        <p>
          Each team has a base that anchors spawn / Nexus defense. Exact
          dimensions and placement belong in the frozen arena specification.
        </p>
      </Section>

      <PageNav>
        <Link to="/champions">← Champions</Link>
        <Link to="/server">Next: Server →</Link>
      </PageNav>
    </Layout>
  );
}
