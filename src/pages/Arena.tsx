import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Figure from "../components/Figure";
import { ArenaItemCards } from "../components/arenaItems";
import {
  PageIntro,
  Eyebrow,
  WideSection,
  Callout,
  PageNav,
  Takeaway,
} from "../components/ui";

export default function Arena() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Chapter 04 · Battlefield</Eyebrow>
        <h1>Arena</h1>
        <p>
          Wild Rift layout as a picture. Items below are physical. Where
          they sit on the floor is still open.
        </p>
      </PageIntro>

      <WideSection>
        <Figure
          src="/images/wild-rift-map.jpg"
          alt="Wild Rift Summoner's Rift: two corner bases, three connecting lanes, jungle, river, dragon pit"
          caption="Layout reference only. Placement of our objects comes later."
          credit="Wild Rift map · oneesports.gg"
          fit="contain"
        />
      </WideSection>

      <WideSection>
        <h2>Map items</h2>
        <ArenaItemCards />
        <Callout>
          <strong>Not projections</strong>
          <p>
            Light on the object is real. Projection can decorate. It does not
            stand in for the body.
          </p>
        </Callout>
      </WideSection>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Picture = map idea. Cards = item types. Spots on the floor = later.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/champions">← Champions</Link>
        <Link to="/server">Next: Server →</Link>
      </PageNav>
    </Layout>
  );
}
