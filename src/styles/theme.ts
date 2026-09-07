export const theme = {
  colors: {
    bg: "#f4f5f7",
    surface: "#ffffff",
    text: "#1c2128",
    muted: "#5b6570",
    faint: "#8a949e",
    line: "#dde1e6",
    lineStrong: "#c5ccd4",
    accent: "#0f6e8c",
    accentSoft: "#e8f3f7",
    warn: "#8a4b12",
    warnSoft: "#f7efe6",
  },
  fonts: {
    sans: '"IBM Plex Sans", "Segoe UI", sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace',
  },
  space: {
    pageX: "clamp(1.25rem, 4vw, 3rem)",
    sectionY: "clamp(2.5rem, 6vw, 4.5rem)",
  },
  widths: {
    prose: "42rem",
    content: "68rem",
  },
  radii: {
    sm: "4px",
    md: "8px",
  },
} as const;

export type AppTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
