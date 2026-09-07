import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { chapters } from "../data/chapters";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(10, 12, 16, 0.92);
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  backdrop-filter: blur(12px);
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 0.8rem ${({ theme }) => theme.space.pageX};
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
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  span {
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.72rem;
    font-weight: 500;
  }

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.95rem;

  a {
    color: ${({ theme }) => theme.colors.muted};
    text-decoration: none;
    font-size: 0.84rem;
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
          {chapters.map((chapter) => (
            <NavLink key={chapter.path} to={chapter.path}>
              {chapter.title}
            </NavLink>
          ))}
        </Nav>
      </Inner>
    </Header>
  );
}
