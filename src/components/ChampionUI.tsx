import styled from "styled-components";

export const ChampionOverviewGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  margin: 1.25rem 0 1.75rem;
`;

export const ChampionCard = styled.article<{ $accent: string }>`
  padding: 1.1rem 1.15rem 1.2rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-top: 3px solid ${({ $accent }) => $accent};
  border-radius: ${({ theme }) => theme.radii.md};

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.75rem;
    margin-bottom: 0.55rem;
  }

  header span {
    color: ${({ $accent }) => $accent};
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.85rem;
    font-weight: 600;
  }

  header small {
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0 0 0.75rem;
    font-size: 1.15rem;
  }
`;

export const MechList = styled.div`
  display: grid;
  gap: 0.35rem;

  > span {
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    padding: 0.4rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const ChampionBlock = styled.section<{ $accent: string }>`
  margin: 0 0 3rem;
  padding: 1.5rem 0 0;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  animation: riseIn 0.6s ease both;

  > header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.5rem 1rem;
    margin-bottom: 1rem;
  }

  > header span {
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.06em;
  }

  > header strong {
    color: ${({ $accent }) => $accent};
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.05rem;
    font-weight: 600;
  }

  > h2 {
    margin: 0 0 0.75rem;
    font-size: clamp(1.5rem, 3vw, 2rem);
    max-width: 20rem;
    line-height: 1.15;
  }

  > h2 em {
    font-style: normal;
    color: ${({ $accent }) => $accent};
  }
`;

export const Ability = styled.div`
  margin: 1rem 0;
  padding: 1rem 1.1rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 0.85rem;
    align-items: center;
    margin-bottom: 0.35rem;
  }

  .num {
    color: ${({ theme }) => theme.colors.accent};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.78rem;
    font-weight: 500;
  }

  .kind {
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0 0 0.65rem;
    font-size: 1.05rem;
  }

  p {
    margin: 0 0 0.5rem;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.92rem;
  }

  /* Nested panels stay tight */
  > div {
    margin-bottom: 0.5rem;
  }
`;

export const Equation = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem 0.55rem;
  margin-top: 0.85rem;
  padding-top: 0.85rem;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  font-size: 0.82rem;

  span {
    padding: 0.35rem 0.55rem;
    background: ${({ theme }) => theme.colors.surfaceRaised};
    border-radius: ${({ theme }) => theme.radii.sm};
    color: ${({ theme }) => theme.colors.muted};
  }

  i {
    font-style: normal;
    color: ${({ theme }) => theme.colors.faint};
  }

  strong {
    padding: 0.35rem 0.55rem;
    background: ${({ theme }) => theme.colors.accentSoft};
    border-radius: ${({ theme }) => theme.radii.sm};
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
  }
`;

export const TradeoffGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
  margin-top: 1rem;
`;

export const Tradeoff = styled.div<{ $accent?: string }>`
  padding: 1.1rem 1.15rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};

  span {
    display: block;
    margin-bottom: 0.35rem;
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0 0 0.55rem;
    font-size: 1rem;
    color: ${({ $accent, theme }) => $accent || theme.colors.text};
  }

  .bar {
    height: 4px;
    margin-bottom: 0.75rem;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.lineStrong};
    overflow: hidden;
  }

  .bar i {
    display: block;
    height: 100%;
    background: ${({ $accent, theme }) => $accent || theme.colors.accent};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.92rem;
  }
`;

export const TwoColDetail = styled.div`
  display: grid;
  gap: 1.25rem 2rem;
  margin-bottom: 1.25rem;

  @media (min-width: 800px) {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: start;
  }

  > p {
    margin: 0 0 0.75rem;
    color: ${({ theme }) => theme.colors.muted};
  }
`;
