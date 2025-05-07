import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card";

interface CharacterProps {
  _id: number;
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

const Home = () => {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://api.disneyapi.dev/character")
      .then((response) => {
        setCharacters(response.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao buscar personagens");
        setLoading(false);
      });
  }, []);

  if (error)
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div
      style={{ backgroundColor: "#040714", color: "white", minHeight: "100vh" }}
    >
      {loading && (
        <p style={{ color: "red", textAlign: "center" }}>
          Carregando personagens...
        </p>
      )}

      <main style={{ padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {characters.map((character) => (
            <Card
              key={character._id}
              _id={character._id}
              name={character.name}
              imageUrl={character.imageUrl}
              sourceUrl={character.sourceUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
