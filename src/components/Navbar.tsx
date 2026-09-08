import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { chapters, getChapter } from "../data/chapters";

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

const Sub = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`;

const SubInner = styled.div`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 0.55rem ${({ theme }) => theme.space.pageX};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem 1rem;
`;

const Current = styled.div`
  margin-right: auto;
  display: flex;
  align-items: baseline;
  gap: 0.55rem;
  font-family: ${({ theme }) => theme.fonts.display};

  span {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 0.8rem;
    font-weight: 600;
  }

  strong {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const SubLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.1rem;
  font-size: 0.84rem;

  a {
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .disabled {
    color: ${({ theme }) => theme.colors.faint};
  }
`;

export default function Navbar() {
  const { pathname } = useLocation();
  const chapter = chapters.find((c) => c.path === pathname);
  const { prev, next } = chapter ? getChapter(chapter.id) : { prev: null, next: null };

  return (
    <Header>
      <Inner>
        <Brand to="/">
          <strong>Robotics MOBA</strong>
          <span>Competition concept</span>
        </Brand>
        <Nav>
          {chapters.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.title}
            </NavLink>
          ))}
        </Nav>
      </Inner>
      {chapter && (
        <Sub>
          <SubInner>
            <Current>
              <span>{chapter.number}</span>
              <strong>{chapter.title}</strong>
            </Current>
            <SubLinks>
              {prev ? (
                <Link to={prev.path}>← {prev.title}</Link>
              ) : (
                <Link to="/">← Home</Link>
              )}
              {next ? (
                <Link to={next.path}>{next.title} →</Link>
              ) : (
                <span className="disabled">End of path</span>
              )}
            </SubLinks>
          </SubInner>
        </Sub>
      )}
    </Header>
  );
}
