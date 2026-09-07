import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  PageIntro,
  Eyebrow,
  Section,
  WideSection,
  Principle,
  Callout,
  Grid,
  Item,
  Lead,
  TextLink,
  PageNav,
} from "../components/ui";

const topics = [
  {
    title: "System",
    to: "/system",
    text: "Champion Interface, Core, and the split between organization hardware and team robots.",
  },
  {
    title: "Game",
    to: "/game",
    text: "3v3 format, physical actions becoming game events, energy, death, and win conditions.",
  },
  {
    title: "Champions",
    to: "/champions",
    text: "Tank/Support, Fighter, and Artillery — three physical problems, not three skins.",
  },
  {
    title: "Arena",
    to: "/arena",
    text: "Lanes, jungle, turrets, objectives, and how the battlefield creates strategy.",
  },
  {
    title: "Server",
    to: "/server",
    text: "Authoritative referee, communication reliability, and what stays open vs closed.",
  },
  {
    title: "Development",
    to: "/development",
    text: "Open interface, team-built test cores, and practice against a public server.",
  },
  {
    title: "Roadmap",
    to: "/roadmap",
    text: "Six-month plan, two-month practice window, and first-edition MVP.",
  },
];

export default function Home() {
  return (
    <Layout>
      <PageIntro>
        <Eyebrow>Competition concept</Eyebrow>
        <h1>Robotics MOBA</h1>
        <p>
          A physical 3v3 competition where custom-built robots play a MOBA.
          Robotics is not decoration — it is how the game is played.
        </p>
      </PageIntro>

      <Section>
        <Principle>
          We define the game. You define the robot.
        </Principle>
        <p>
          The organization designs the rules, the Champion Interface, the
          arena, and the authoritative game server. Teams design the robot:
          chassis, locomotion, actuators, and the mechanisms that execute
          abilities.
        </p>
        <Callout>
          <strong>Central split</strong>
          <p>
            Same standardized interface for every team. Different robots.
            Different engineering solutions.
          </p>
        </Callout>
      </Section>

      <Section>
        <h2>What this is</h2>
        <p>
          Two teams field three champions each inside a physical arena. Each
          champion is a game role (Tank/Support, Fighter, Artillery). Each
          robot is that team’s physical implementation of the role.
        </p>
        <p>
          Mechanical design, electronics, embedded software, control, and
          team strategy all affect the match — not only digital skill.
        </p>
      </Section>

      <WideSection>
        <h2>First edition at a glance</h2>
        <Grid $cols={2}>
          <Item>
            <strong>Format</strong>
            <p>3v3 · three lanes · jungle · Nexus win condition</p>
          </Item>
          <Item>
            <strong>Champions</strong>
            <p>Tank/Support · Fighter · Artillery (flexible deployment)</p>
          </Item>
          <Item>
            <strong>Organization provides</strong>
            <p>Champion Interfaces, Core, arena systems, game server</p>
          </Item>
          <Item>
            <strong>Teams provide</strong>
            <p>Robot hardware, actuators, control software, strategy</p>
          </Item>
        </Grid>
      </WideSection>

      <Section>
        <h2>How to read this site</h2>
        <Lead>
          Each page covers one idea. Start with System if you need the
          architecture; start with Game if you need the match itself.
        </Lead>
      </Section>

      <WideSection>
        <Grid>
          {topics.map((topic) => (
            <Item key={topic.to}>
              <strong>
                <Link to={topic.to}>{topic.title}</Link>
              </strong>
              <p>{topic.text}</p>
              <TextLink to={topic.to}>Open →</TextLink>
            </Item>
          ))}
        </Grid>
      </WideSection>

      <PageNav>
        <Link to="/system">Next: System architecture →</Link>
      </PageNav>
    </Layout>
  );
}
