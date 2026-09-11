import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Figure from "../components/Figure";
import { ArenaItemCards } from "../components/arenaItems";
import { LocalizationDiagram } from "../components/diagrams";
import {
  PageIntro,
  Eyebrow,
  WideSection,
  Callout,
  PageNav,
  DiagramPanel,
  Takeaway,
  TextLink,
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

      <WideSection>
        <h2>How the floor is surveyed</h2>
        <p>
          Anything interactable — robots, mines, movable objects — wears
          an upward <strong>dynamic LED pattern</strong> (WS2812-class
          matrix). A <strong>~5 MP global-shutter</strong> camera above
          the arena reads those codes and reports ID, position, and
          heading. Nothing locates itself by dead reckoning.
        </p>
        <DiagramPanel>
          <LocalizationDiagram />
          <figcaption>
            Same pattern on every class of interactable. The camera is
            the surveyor.
          </figcaption>
        </DiagramPanel>
        <TextLink to="/server">How the server uses those poses →</TextLink>
      </WideSection>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          Picture = map idea. Cards = item types. LED + overhead camera =
          where they actually sit.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/champions">← Champions</Link>
        <Link to="/server">Next: Server →</Link>
      </PageNav>
    </Layout>
  );
}
