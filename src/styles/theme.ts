export const theme = {
  colors: {
    bg: "#0a0c10",
    surface: "#12161c",
    surfaceRaised: "#181e26",
    text: "#eef2f6",
    muted: "#9aa6b2",
    faint: "#6b7785",
    line: "rgba(255, 255, 255, 0.1)",
    lineStrong: "rgba(255, 255, 255, 0.18)",
    accent: "#3ecfff",
    accentSoft: "rgba(62, 207, 255, 0.12)",
    amber: "#ffb45a",
    amberSoft: "rgba(255, 180, 90, 0.12)",
    warn: "#ffb45a",
    warnSoft: "rgba(255, 180, 90, 0.12)",
  },
  fonts: {
    display: '"Space Grotesk", "IBM Plex Sans", sans-serif',
    sans: '"IBM Plex Sans", "Segoe UI", sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace',
  },
  space: {
    pageX: "clamp(1.25rem, 4vw, 3rem)",
    sectionY: "clamp(2.5rem, 6vw, 4.5rem)",
  },
  widths: {
    prose: "42rem",
    content: "72rem",
  },
  radii: {
    sm: "6px",
    md: "12px",
  },
} as const;

export type AppTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
