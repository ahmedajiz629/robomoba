import { NavLink } from "react-router-dom";
import styled from "styled-components";

const links = [
  ["System", "/system"],
  ["Game", "/game"],
  ["Champions", "/champions"],
  ["Arena", "/arena"],
  ["Server", "/server"],
  ["Development", "/development"],
  ["Roadmap", "/roadmap"],
] as const;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(244, 245, 247, 0.92);
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  backdrop-filter: blur(10px);
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 0.85rem ${({ theme }) => theme.space.pageX};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.5rem;
`;

const Brand = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin-right: auto;

  strong {
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  span {
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.72rem;
    font-weight: 500;
  }

  &:hover {
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 1rem;

  a {
    color: ${({ theme }) => theme.colors.muted};
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 500;

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: underline;
      text-underline-offset: 0.22em;
    }
  }
`;

export default function Navbar() {
  return (
    <Header>
      <Inner>
        <Brand to="/">
          <strong>Robotics MOBA</strong>
          <span>Competition concept</span>
        </Brand>
        <Nav>
          {links.map(([label, path]) => (
            <NavLink key={path} to={path}>
              {label}
            </NavLink>
          ))}
        </Nav>
      </Inner>
    </Header>
  );
}
