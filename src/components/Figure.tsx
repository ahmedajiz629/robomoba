import styled from "styled-components";

type FigureProps = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
};

const Wrap = styled.figure`
  margin: 1.25rem 0 1.75rem;
  padding: 0;
  max-width: none;
  animation: fadeIn 0.65s ease both;

  img {
    width: 100%;
    max-height: 28rem;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radii.md};
    border: 1px solid ${({ theme }) => theme.colors.line};
    background: ${({ theme }) => theme.colors.surface};
  }

  figcaption {
    margin-top: 0.65rem;
    display: grid;
    gap: 0.15rem;
  }

  strong {
    font-size: 0.92rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.78rem;
  }
`;

export default function Figure({ src, alt, caption, credit }: FigureProps) {
  return (
    <Wrap>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>
        <strong>{caption}</strong>
        <span>{credit}</span>
      </figcaption>
    </Wrap>
  );
}
