import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Figure from "../components/Figure";
import {
  BoundaryDiagram,
  PhysicalDigitalDiagram,
} from "../components/diagrams";
import { chapters } from "../data/chapters";
import {
  HeroBleed,
  HeroCopy,
  Eyebrow,
  Section,
  WideSection,
  Principle,
  Callout,
  Grid,
  Item,
  TextLink,
  DiagramPanel,
  PageNav,
} from "../components/ui";

export default function Home() {
  const hero = (
    <HeroBleed>
      <img
        src="/images/arena-projection.jpg"
        alt="Projected robotics competition arena with crowd"
      />
      <HeroCopy>
        <Eyebrow>Physical esport · Concept</Eyebrow>
        <h1>A MOBA played with robots</h1>
        <p>
          Custom machines. Shared rules. An arena where projection makes the
          digital layer visible on the floor.
        </p>
      </HeroCopy>
    </HeroBleed>
  );

  return (
    <Layout hero={hero}>
      <Section>
        <Principle>We define the game. You define the robot.</Principle>
        <p>
          The organization owns the Champion Interface, the arena systems, and
          the authoritative game server. Teams engineer the robot — chassis,
          actuators, control, strategy — around that boundary.
        </p>
        <Callout>
          <strong>Why it matters</strong>
          <p>
            Same standardized interface for every team. Completely different
            machines. Mechanical design changes how the game is played.
          </p>
        </Callout>
      </Section>

      <WideSection>
        <h2>The competition boundary</h2>
        <DiagramPanel>
          <BoundaryDiagram />
          <figcaption>
            Robots act physically. The interface measures. The server decides
            official state.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <WideSection>
        <h2>Projection is the game layer</h2>
        <Figure
          src="/images/xr-projection.jpg"
          alt="Floor projection showing player zones and luminous game effects"
          caption="Digital effects live on the physical floor — trajectories, zones, events — while robots remain real."
          credit="Reference: Alfa5 XR Sports / Digital AV Magazine"
        />
        <DiagramPanel>
          <PhysicalDigitalDiagram />
          <figcaption>
            Physical action → sensor → server rules → projection for
            spectators.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <WideSection>
        <h2>Read this in order</h2>
        <p>
          Seven short chapters. Each answers one question. Follow the path and
          you will not get lost.
        </p>
        <Grid>
          {chapters.map((chapter) => (
            <Item key={chapter.path}>
              <strong>
                {chapter.number} ·{" "}
                <Link to={chapter.path}>{chapter.title}</Link>
              </strong>
              <p>{chapter.promise}</p>
              <TextLink to={chapter.path}>Open chapter →</TextLink>
            </Item>
          ))}
        </Grid>
      </WideSection>

      <PageNav>
        <Link to="/system">Start with System →</Link>
      </PageNav>
    </Layout>
  );
}
