import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ChapterNav from "../components/ChapterNav";
import Figure from "../components/Figure";
import { ArenaMapDiagram, ArenaObjectsDiagram } from "../components/diagrams";
import {
  PageIntro,
  Eyebrow,
  Section,
  WideSection,
  Grid,
  Item,
  Callout,
  PageNav,
  DiagramPanel,
  Takeaway,
} from "../components/ui";

export default function Arena() {
  return (
    <Layout>
      <ChapterNav chapterId="arena" />

      <PageIntro>
        <Eyebrow>Chapter 04 · Battlefield</Eyebrow>
        <h1>Arena</h1>
        <p>
          Same map idea as Wild Rift: two bases in opposite corners, three
          lanes that connect them, jungle in the pockets between. Robots play
          on a real floor; many objectives are real objects, not projections.
        </p>
      </PageIntro>

      <WideSection>
        <Figure
          src="/images/wild-rift-map.jpg"
          alt="Wild Rift Summoner's Rift: two corner bases, three connecting lanes, jungle, river, dragon pit"
          caption="Layout reference: bases in opposite corners. Top, mid, and bot lanes join those bases. Jungle and river sit between the lanes."
          credit="Wild Rift map · oneesports.gg"
          fit="contain"
        />
        <DiagramPanel>
          <ArenaMapDiagram />
          <figcaption>
            Two bases, opposite corners. Three lanes connect them. Jungle
            between the lanes — not three parallel corridors with a Nexus at
            the bottom of each.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <WideSection>
        <h2>Map structure</h2>
        <Grid $cols={2}>
          <Item>
            <strong>Two bases</strong>
            <p>Opposite corners. Each holds a physical Nexus.</p>
          </Item>
          <Item>
            <strong>Three lanes</strong>
            <p>Top, mid, bot — the paths that link the two bases.</p>
          </Item>
          <Item>
            <strong>Jungle</strong>
            <p>The terrain between lanes: camps, rotations, ambush.</p>
          </Item>
          <Item>
            <strong>River</strong>
            <p>Cuts across the square, crossing mid, with major pits.</p>
          </Item>
        </Grid>
      </WideSection>

      <WideSection>
        <h2>Physical objects, not stickers</h2>
        <p>
          Turrets, Nexus, mines, and mana monsters (Dragon included) exist
          on the floor. They have their own lighting. Monsters can move in
          place in their camp — they are not a projected icon.
        </p>
        <DiagramPanel>
          <ArenaObjectsDiagram />
          <figcaption>
            Same class as mines: a real object with a position, light, and
            server state. Projection can enhance them; it does not replace
            them.
          </figcaption>
        </DiagramPanel>
        <Grid $cols={2}>
          <Item>
            <strong>Own lighting</strong>
            <p>HP, camp, and event state read from the object itself.</p>
          </Item>
          <Item>
            <strong>Move in place</strong>
            <p>Idle, face, strike — the body moves; the camp stays put.</p>
          </Item>
        </Grid>
      </WideSection>

      <WideSection>
        <h2>Charge stations</h2>
        <p>
          Consumable pads on the map. A robot uses one, then that station
          goes on cooldown before it can be used again.
        </p>
        <Callout>
          <strong>Charge, not a second weapon</strong>
          <p>
            Stations refill robot movement energy. They are map items with
            a cooldown, like a plant — not a projected pickup with no body.
          </p>
        </Callout>
      </WideSection>

      <Section>
        <h2>Gates and movable objects</h2>
        <p>
          Some passages have <strong>activated gates</strong> — the match
          can open or close them. Some obstacles are <strong>movable</strong>:
          robots can shift them and change a path or a sight line.
        </p>
      </Section>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Corner bases, three connecting lanes, jungle between. Objectives
          you fight over are physical — lit, sometimes moving in place —
          plus charge stations on cooldown, gates, and objects robots can
          move.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/champions">← Champions</Link>
        <Link to="/server">Next: Server →</Link>
      </PageNav>
    </Layout>
  );
}
