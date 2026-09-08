import type { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Site = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.pageX}
    ${({ theme }) => theme.space.sectionY};
`;

export const PageIntro = styled.header`
  max-width: ${({ theme }) => theme.widths.prose};
  padding: 2rem 0 1.75rem;
  margin-bottom: 2rem;
  animation: riseIn 0.55s ease both;

  h1 {
    margin: 0.35rem 0 0.75rem;
    font-size: clamp(2rem, 4vw, 2.75rem);
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 1.12rem;
  }
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Section = styled.section`
  margin-bottom: 2.75rem;
  max-width: ${({ theme }) => theme.widths.prose};
  animation: riseIn 0.6s ease both;

  h2 {
    margin: 0 0 0.75rem;
    font-size: 1.4rem;
  }

  h3 {
    margin: 1.5rem 0 0.5rem;
    font-size: 1.05rem;
  }
`;

export const WideSection = styled(Section)`
  max-width: none;
`;

export const Lead = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.05rem;
`;

export const Callout = styled.aside<{ $tone?: "accent" | "warn" }>`
  margin: 1.25rem 0;
  padding: 1rem 1.15rem;
  border-left: 3px solid
    ${({ theme, $tone }) =>
      $tone === "warn" ? theme.colors.amber : theme.colors.accent};
  background: ${({ theme, $tone }) =>
    $tone === "warn" ? theme.colors.amberSoft : theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0 ${({ theme }) => theme.radii.sm}
    ${({ theme }) => theme.radii.sm} 0;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
  }

  strong {
    display: block;
    margin-bottom: 0.3rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Principle = styled.blockquote`
  margin: 1.25rem 0 1.5rem;
  padding: 0;
  border: none;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text};
`;

export const Grid = styled.div<{ $cols?: number }>`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, ${({ $cols }) => ($cols === 2 ? "16rem" : "14rem")}), 1fr)
  );
  max-width: none;
`;

export const Item = styled.div`
  padding: 1.1rem 1.15rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};

  strong {
    display: block;
    margin-bottom: 0.4rem;
    font-size: 0.98rem;
  }

  p,
  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.95rem;
  }

  p {
    margin: 0;
  }

  ul {
    margin: 0.7rem 0 0;
    padding-left: 1.05rem;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.86rem;
  }

  li + li {
    margin-top: 0.25rem;
  }

  &:is(a) {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const ListPlain = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;

  li {
    padding: 0.7rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    display: grid;
    gap: 0.2rem;
  }

  strong {
    font-size: 0.98rem;
  }

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.92rem;
  }
`;

export const Flow = styled.pre`
  margin: 1rem 0 1.25rem;
  padding: 1rem 1.1rem;
  overflow-x: auto;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.85rem;
  line-height: 1.45;
`;

export const TextLink = styled(Link)`
  display: inline-block;
  margin-top: 0.55rem;
  font-weight: 500;
`;

export const PageNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  max-width: ${({ theme }) => theme.widths.prose};

  a {
    font-weight: 500;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 1.25rem ${({ theme }) => theme.space.pageX};
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.faint};
  font-size: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  justify-content: space-between;

  strong {
    color: ${({ theme }) => theme.colors.muted};
    font-weight: 600;
  }
`;

export const TwoCol = styled.div`
  display: grid;
  gap: 1.5rem 2.5rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const DiagramPanel = styled.div`
  margin: 1.25rem 0 1.75rem;
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};
  animation: fadeIn 0.7s ease both;
  overflow-x: auto;

  figcaption {
    margin-top: 0.9rem;
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.82rem;
  }
`;

export const Takeaway = styled.aside`
  margin: 2rem 0 0;
  padding: 1.15rem 1.25rem;
  max-width: ${({ theme }) => theme.widths.prose};
  background: ${({ theme }) => theme.colors.surfaceRaised};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  border-radius: ${({ theme }) => theme.radii.md};

  strong {
    display: block;
    margin-bottom: 0.35rem;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 0.78rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
  }
`;

/** Home opening: copy + framed reference image (not a raw full-bleed photo) */
export const HomeHero = styled.section`
  display: grid;
  gap: 2rem 2.75rem;
  align-items: center;
  margin: 2rem 0 3rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  animation: riseIn 0.55s ease both;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: 3rem;
    margin-top: 2.5rem;
  }
`;

export const HomeHeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
  max-width: 34rem;

  h1 {
    margin: 0.35rem 0 0.15rem;
    font-size: clamp(2rem, 4.2vw, 2.85rem);
    letter-spacing: -0.035em;
  }

  > p {
    margin: 0.35rem 0 0.5rem;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 1.08rem;
    line-height: 1.55;
  }
`;

export const HomeHeroBrand = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`;

export const HomeHeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.1rem;
  align-items: center;
  margin-top: 0.75rem;

  a.primary {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.65rem 1rem;
    background: ${({ theme }) => theme.colors.accentSoft};
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.radii.sm};
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
    font-size: 0.92rem;
    text-decoration: none;

    &:hover {
      background: rgba(62, 207, 255, 0.2);
      text-decoration: none;
    }
  }

  a.secondary {
    color: ${({ theme }) => theme.colors.muted};
    font-weight: 500;
    font-size: 0.92rem;
  }
`;

export const HomeHeroMedia = styled.figure`
  margin: 0;
  position: relative;

  .frame {
    position: relative;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.md};
    border: 1px solid ${({ theme }) => theme.colors.lineStrong};
    background: ${({ theme }) => theme.colors.surface};
    aspect-ratio: 16 / 10;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .frame::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      transparent 55%,
      rgba(10, 12, 16, 0.55) 100%
    );
  }

  figcaption {
    margin-top: 0.7rem;
    display: grid;
    gap: 0.15rem;
  }

  figcaption strong {
    font-size: 0.88rem;
    font-weight: 500;
  }

  figcaption span {
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.75rem;
  }
`;

const TourStepWrap = styled.section`
  margin: 0 0 3.25rem;
  padding-top: 0.35rem;
  scroll-margin-top: 7rem;
  animation: riseIn 0.6s ease both;

  > h2 {
    margin: 0.35rem 0 0.85rem;
    font-size: clamp(1.35rem, 2.4vw, 1.75rem);
    max-width: ${({ theme }) => theme.widths.prose};
  }

  > p {
    max-width: ${({ theme }) => theme.widths.prose};
    color: ${({ theme }) => theme.colors.muted};
  }

  > h3 {
    margin: 1.75rem 0 0.5rem;
    font-size: 1.05rem;
    max-width: ${({ theme }) => theme.widths.prose};
  }
`;

export const TourClose = styled.p`
  margin: 1.5rem 0 0;
  max-width: none;
  color: ${({ theme }) => theme.colors.faint};
  font-size: 0.88rem;
  line-height: 1.7;

  a {
    font-weight: 500;
  }
`;

const TourNum = styled.span`
  display: block;
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

type TourStepProps = {
  id?: string;
  n: string;
  question: string;
  more?: { to: string; label: string };
  children: ReactNode;
};

export function TourStep({ id, n, question, more, children }: TourStepProps) {
  return (
    <TourStepWrap id={id}>
      <TourNum>{n}</TourNum>
      <h2>{question}</h2>
      {children}
      {more && <TextLink to={more.to}>{more.label}</TextLink>}
    </TourStepWrap>
  );
}

