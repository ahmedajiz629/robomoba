import styled from "styled-components";

const Strip = styled.div`
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
  margin: 1.25rem 0 1.75rem;
`;

const Card = styled.figure`
  margin: 0;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;

  img {
    width: 100%;
    height: 9.5rem;
    object-fit: cover;
    background: ${({ theme }) => theme.colors.surfaceRaised};
  }

  figcaption {
    padding: 0.7rem 0.85rem 0.85rem;
    display: grid;
    gap: 0.15rem;
  }

  strong {
    font-size: 0.88rem;
    font-weight: 500;
  }

  span {
    color: ${({ theme }) => theme.colors.faint};
    font-size: 0.72rem;
  }
`;

export type PhotoItem = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
};

export default function PhotoStrip({ photos }: { photos: PhotoItem[] }) {
  return (
    <Strip>
      {photos.map((photo) => (
        <Card key={photo.src}>
          <img src={photo.src} alt={photo.alt} loading="lazy" />
          <figcaption>
            <strong>{photo.caption}</strong>
            <span>{photo.credit}</span>
          </figcaption>
        </Card>
      ))}
    </Strip>
  );
}
