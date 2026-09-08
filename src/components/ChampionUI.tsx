import styled from "styled-components";

/** In-page jump links */
export const JumpNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 2rem;

  a {
    padding: 0.4rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.line};
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.82rem;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      border-color: ${({ theme }) => theme.colors.lineStrong};
      text-decoration: none;
    }
  }
`;

/** Compare the three side by side — primary orientation tool */
export const Compare = styled.div`
  display: grid;
  grid-template-columns: 7.5rem repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin: 1rem 0 1.75rem;
  overflow-x: auto;
  background: ${({ theme }) => theme.colors.line};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};

  > * {
    background: ${({ theme }) => theme.colors.surface};
    padding: 0.85rem 0.9rem;
    min-width: 0;
  }

  .corner {
    background: ${({ theme }) => theme.colors.surfaceRaised};
  }

  .label {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background: ${({ theme }) => theme.colors.surfaceRaised};
  }

  .head {
    text-align: center;
  }

  .head strong {
    display: block;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.95rem;
    margin-bottom: 0.2rem;
  }

  .head span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.78rem;
  }

  .cell {
    font-size: 0.88rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.35;
  }

  .cell small {
    display: block;
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.75rem;
  }
`;

export const AccentHead = styled.div<{ $accent: string }>`
  border-top: 3px solid ${({ $accent }) => $accent};

  strong {
    color: ${({ $accent }) => $accent};
  }
`;

/** Single champion dossier — one container, fixed internal order */
export const Dossier = styled.section<{ $accent: string }>`
  margin: 0 0 2rem;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  scroll-margin-top: 5.5rem;

  .banner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.65rem 1.25rem;
    padding: 1rem 1.2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    border-left: 4px solid ${({ $accent }) => $accent};
    background: ${({ theme }) => theme.colors.surfaceRaised};
  }

  .banner .id {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.78rem;
    color: ${({ theme }) => theme.colors.faint};
  }

  .banner h2 {
    margin: 0;
    flex: 1;
    font-size: 1.25rem;
    min-width: 10rem;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .badge {
    padding: 0.28rem 0.55rem;
    border-radius: ${({ theme }) => theme.radii.sm};
    font-size: 0.75rem;
    font-weight: 500;
    background: ${({ theme }) => theme.colors.bg};
    border: 1px solid ${({ theme }) => theme.colors.line};
    color: ${({ theme }) => theme.colors.muted};
  }

  .badge.on {
    border-color: ${({ $accent }) => $accent};
    color: ${({ $accent }) => $accent};
    background: ${({ theme }) => theme.colors.bg};
  }

  .body {
    padding: 1.15rem 1.2rem 1.35rem;
    display: grid;
    gap: 1.15rem;
  }

  @media (min-width: 860px) {
    .body.split {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }
`;

export const AbilityRow = styled.div`
  display: grid;
  gap: 0.75rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const AbilityTile = styled.div<{ $wide?: boolean }>`
  padding: 0.9rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.bg};
  grid-column: ${({ $wide }) => ($wide ? "1 / -1" : "auto")};

  .tag {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.4rem;
  }

  .tag b {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.72rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
  }

  .tag span {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.faint};
  }

  h3 {
    margin: 0 0 0.4rem;
    font-size: 0.98rem;
  }

  p {
    margin: 0;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.muted};
    line-height: 1.45;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.65rem;
  }

  .chips i {
    font-style: normal;
    font-size: 0.72rem;
    padding: 0.25rem 0.45rem;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.surfaceRaised};
    color: ${({ theme }) => theme.colors.muted};
  }
`;

export const Note = styled.aside<{ $tone?: "accent" | "warn" }>`
  margin: 0;
  padding: 0.75rem 0.9rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  border-left: 3px solid
    ${({ theme, $tone }) =>
      $tone === "warn" ? theme.colors.amber : theme.colors.accent};
  background: ${({ theme, $tone }) =>
    $tone === "warn" ? theme.colors.amberSoft : theme.colors.accentSoft};
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.muted};

  strong {
    color: ${({ theme }) => theme.colors.text};
    margin-right: 0.35rem;
  }
`;

export const SectionLabel = styled.h2`
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
`;

export const DossierHint = styled.p`
  margin: 0 0 1.25rem;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
`;

export const SoftRule = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  margin: 2rem 0;
`;

export const TradePair = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-top: 0.75rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;
