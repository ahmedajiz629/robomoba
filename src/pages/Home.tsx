import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Figure from "../components/Figure";
import PhotoStrip from "../components/PhotoStrip";
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

const inspirationPhotos = [
  {
    src: "/images/frc-field-2025.jpg",
    alt: "FIRST Robotics Competition playing field with robots",
    caption: "Large-scale robotics field with live robots",
    credit: "Wikimedia Commons · FRC field 2025",
  },
  {
    src: "/images/eurobot-arena.jpg",
    alt: "Eurobot competition table arena",
    caption: "Table-top robotics arena, dense physical play",
    credit: "Wikimedia Commons · Eurobot at ESTEC",
  },
  {
    src: "/images/interactive-floor.jpg",
    alt: "Portable interactive floor projection setup",
    caption: "Floor projection as an interactive game surface",
    credit: "LumoPlay · portable interactive floor",
  },
  {
    src: "/images/sr-arena-alt.jpg",
    alt: "Student Robotics arena with projected markings",
    caption: "Projected markings + physical robots + crowd",
    credit: "Student Robotics SR2023",
  },
];

export default function Home() {
  const hero = (
    <HeroBleed>
      <img
        src="/images/wild-rift-ref.jpg"
        alt="League of Legends Wild Rift — MOBA gameplay reference"
      />
      <HeroCopy>
        <Eyebrow>Competition concept</Eyebrow>
        <h1>A MOBA — played by robots</h1>
        <p>
          Think League of Legends or Wild Rift: lanes, jungle, team fights,
          destroy the Nexus. Here the champions are physical machines on a
          real arena.
        </p>
      </HeroCopy>
    </HeroBleed>
  );

  return (
    <Layout hero={hero}>
      <Section>
        <h2>What is this?</h2>
        <p>
          The Robotics MOBA is a <strong>physical esport</strong>: two teams
          of three custom-built robots compete in a 3v3 match inspired by
          Multiplayer Online Battle Arenas.
        </p>
        <p>
          You do not watch RC cars drive in circles. You watch shields block,
          swords swing, healing beams connect allies, mines get placed, and
          virtual projectiles arc across the floor as projection. The match
          ends when one team’s <strong>Nexus</strong> falls — after a lane is
          cleared, like in Wild Rift.
        </p>
        <Callout>
          <strong>The idea in one line</strong>
          <p>
            Robotics is not decoration around a video game — it is the medium
            through which the game is played.
          </p>
        </Callout>
      </Section>

      <WideSection>
        <h2>What you see in a match</h2>
        <Grid $cols={2}>
          <Item>
            <strong>3v3</strong>
            <p>Three champions per team on one shared arena</p>
          </Item>
          <Item>
            <strong>Three roles</strong>
            <p>Tank / Support · Fighter · Artillery — flexible deployment</p>
          </Item>
          <Item>
            <strong>MOBA map</strong>
            <p>Lanes, jungle, turrets, objectives, Nexus</p>
          </Item>
          <Item>
            <strong>Physical + projected</strong>
            <p>Real robots and weapons; digital effects on the floor</p>
          </Item>
        </Grid>
        <Figure
          src="/images/xr-projection.jpg"
          alt="Floor projection showing player zones and luminous game effects"
          caption="Projection turns the floor into a readable game layer — trajectories, zones, events — while the machines stay real."
          credit="Reference: Alfa5 XR Sports / Digital AV Magazine"
        />
      </WideSection>

      <WideSection>
        <h2>How a hit becomes a game event</h2>
        <p>
          A robot performs a physical action. Sensors measure it. The game
          server applies the rules. Projection shows the result to everyone
          watching.
        </p>
        <DiagramPanel>
          <PhysicalDigitalDiagram />
          <figcaption>
            Physical action → measurement → server → projection. Fairness stays
            digital; play stays physical.
          </figcaption>
        </DiagramPanel>
      </WideSection>

      <WideSection>
        <h2>Where the idea comes from</h2>
        <p>
          Inspiration from robotics competitions and projected play spaces —
          not our final map, but the energy of a live arena.
        </p>
        <PhotoStrip photos={inspirationPhotos} />
      </WideSection>

      <WideSection>
        <h2>Who builds what</h2>
        <p>
          Once you get the match, the next question is the split between the
          organizers and the teams.
        </p>
        <Principle>We define the game. You define the robot.</Principle>
        <p>
          The organization owns the Champion Interface, the arena systems, and
          the authoritative game server. Teams engineer the robot — chassis,
          actuators, control, strategy — around that boundary. Same measurement
          for everyone; different machines.
        </p>
        <DiagramPanel>
          <BoundaryDiagram />
          <figcaption>
            Team robot → official interface → game server.
          </figcaption>
        </DiagramPanel>
        <TextLink to="/system">See robot structure in detail →</TextLink>
      </WideSection>

      <WideSection>
        <h2>Read the concept in order</h2>
        <p>
          Seven short chapters. Start at the top if you are new — each one
          answers one question.
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
        <Link to="/game">New here? Start with how the match works →</Link>
      </PageNav>
    </Layout>
  );
}
