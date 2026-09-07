import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ChapterNav from "../components/ChapterNav";
import Figure from "../components/Figure";
import PhotoStrip from "../components/PhotoStrip";
import { ArenaMapDiagram } from "../components/diagrams";
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
          The arena is not just a floor for robots. It holds the structures
          and resources that create MOBA strategy — and projection that makes
          them legible to a crowd.
        </p>
      </PageIntro>

      <WideSection>
        <Figure
          src="/images/sr-arena-alt.jpg"
          alt="Student Robotics arena with projected markings and audience"
          caption="Projected geometry on a physical floor, with spectators around the edge."
          credit="Student Robotics SR2023"
        />
        <PhotoStrip
          photos={[
            {
              src: "/images/frc-field-2024.jpg",
              alt: "FRC 2024 Crescendo playing field",
              caption: "Large alliance field with clear zones",
              credit: "Wikimedia · FRC 2024 field",
            },
            {
              src: "/images/eurobot-table.jpg",
              alt: "Eurobot competition table close-up",
              caption: "Dense physical objectives on a table arena",
              credit: "Wikimedia · Eurobot ESTEC",
            },
            {
              src: "/images/robocup-arena.jpg",
              alt: "RoboCup Rescue test arena",
              caption: "Structured obstacle arena for robots",
              credit: "Wikimedia · RoboCup Rescue 2008",
            },
          ]}
        />
        <DiagramPanel>
          <ArenaMapDiagram />
          <figcaption>
            Three lanes, jungle between them, central Power Core, Nexus at
            each end.
          </figcaption>
        </DiagramPanel>
      </WideSection>

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
          </li>
          <li>
            <strong>Dragon</strong> — contested objective with meaningful reward
          </li>
          <li>
            <strong>Power Charges</strong> — collectible power for larger plays
          </li>
          <li>
            <strong>Power Core</strong> — central physical objective rewarding
            territorial control
          </li>
        </ul>
        <Callout>
          <strong>Why the Power Core matters</strong>
          <p>
            Territory itself becomes a mechanic — not only lane pressure.
          </p>
        </Callout>
      </Section>

      <Section>
        <h2>Gates and obstacles</h2>
        <p>
          Gates and selected movable obstacles change access and sight lines.
          They force adaptation, not decoration.
        </p>
      </Section>

      <Takeaway>
        <strong>Takeaway</strong>
        <p>
          The arena is a strategic machine: lanes, jungle, objectives, and a
          projected layer spectators can read instantly.
        </p>
      </Takeaway>

      <PageNav>
        <Link to="/champions">← Champions</Link>
        <Link to="/server">Next: Server →</Link>
      </PageNav>
    </Layout>
  );
}
