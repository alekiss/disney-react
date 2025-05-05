interface CardProps {
  _id: number;
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

const Card = ({ _id, name, imageUrl, sourceUrl }: CardProps) => {
  return (
    <div
      key={_id}
      style={{
        backgroundColor: "#1a1a2e",
        borderRadius: 12,
        padding: "1rem",
        width: 200,
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
        transition: "transform 0.2s",
        cursor: "pointer",
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100%", borderRadius: 8 }}
      />
      <h3 style={{ marginTop: "0.5rem", color: "#1f80e0" }}>
        {name}
      </h3>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#b0b0b0",
          textDecoration: "none",
          fontSize: "0.9rem",
        }}
      >
        Mais informações
      </a>
    </div>
  );
};

export default Card;
