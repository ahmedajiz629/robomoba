interface ChampionPreviewProps {
    index: number;
    role: string;
    name: string;
    description: string;
    abilities: string[];
    accent: "cyan" | "orange" | "purple";
  }
  
  export default function ChampionPreview({
    index,
    role,
    name,
    description,
    abilities,
    accent,
  }: ChampionPreviewProps) {
    return (
      <article className={`champion-card accent-${accent}`}>
        <div className="champion-top">
          <span>0{index + 1}</span>
          <span>{role}</span>
        </div>
  
        <div className="champion-visual">
          <div className="champion-ring ring-outer" />
          <div className="champion-ring ring-inner" />
          <div className="champion-core" />
        </div>
  
        <div className="champion-info">
          <h3>{name}</h3>
          <p>{description}</p>
  
          <div className="ability-list">
            {abilities.map((ability) => (
              <span key={ability}>{ability}</span>
            ))}
          </div>
        </div>
      </article>
    );
  }