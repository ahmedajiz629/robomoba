import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 1.0625rem;
    line-height: 1.65;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accentSoft};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration-thickness: 1px;
    text-underline-offset: 0.18em;
  }

  a:hover {
    text-decoration-thickness: 2px;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.display};
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.03em;
  }

  p {
    margin: 0 0 1rem;
  }

  ul, ol {
    margin: 0 0 1rem;
    padding-left: 1.25rem;
  }

  li + li {
    margin-top: 0.35rem;
  }

  code, pre {
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  @keyframes riseIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
