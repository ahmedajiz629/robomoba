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
  padding: ${({ theme }) => theme.space.sectionY} 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  margin-bottom: 2.5rem;

  h1 {
    margin: 0.4rem 0 0.85rem;
    font-size: clamp(1.85rem, 3.2vw, 2.35rem);
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 1.1rem;
  }
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.faint};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
  max-width: ${({ theme }) => theme.widths.prose};

  h2 {
    margin: 0 0 0.75rem;
    font-size: 1.35rem;
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
  padding: 1rem 1.1rem;
  border-left: 3px solid
    ${({ theme, $tone }) =>
      $tone === "warn" ? theme.colors.warn : theme.colors.accent};
  background: ${({ theme, $tone }) =>
    $tone === "warn" ? theme.colors.warnSoft : theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0 ${({ theme }) => theme.radii.sm}
    ${({ theme }) => theme.radii.sm} 0;

  p {
    margin: 0;
  }

  strong {
    display: block;
    margin-bottom: 0.25rem;
  }
`;

export const Principle = styled.blockquote`
  margin: 1.5rem 0;
  padding: 0;
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.4;
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
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.line};

  strong {
    display: block;
    margin-bottom: 0.35rem;
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
`;

export const ListPlain = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;

  li {
    padding: 0.55rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    display: grid;
    gap: 0.15rem;
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
  margin-top: 0.5rem;
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
