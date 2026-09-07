import { Link } from "react-router-dom";
import styled from "styled-components";
import { getChapter } from "../data/chapters";

type ChapterNavProps = {
  chapterId: string;
};

const Bar = styled.div`
  position: sticky;
  top: 56px;
  z-index: 15;
  margin: 0 0 1.5rem;
  padding: 0.7rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem 1rem;
  background: rgba(10, 12, 16, 0.94);
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  backdrop-filter: blur(10px);
`;const Current = styled.div`
  margin-right: auto;
  display: flex;
  align-items: baseline;
  gap: 0.55rem;
  font-family: ${({ theme }) => theme.fonts.display};

  span {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 0.85rem;
    font-weight: 600;
  }

  strong {
    font-size: 0.95rem;
    font-weight: 600;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.1rem;
  font-size: 0.88rem;

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

export default function ChapterNav({ chapterId }: ChapterNavProps) {
  const { current, prev, next } = getChapter(chapterId);

  if (!current) return null;

  return (
    <Bar>
      <Current>
        <span>{current.number}</span>
        <strong>{current.title}</strong>
      </Current>
      <NavLinks>
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
      </NavLinks>
    </Bar>
  );
}
