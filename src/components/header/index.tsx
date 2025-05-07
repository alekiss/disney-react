import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#1f80e0",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <img src="logo.png" alt="Disney+ Logo" style={{ width: "100px" }} />

      <nav
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.2rem",
          }}
        >
          Início
        </Link>
        <Link
          to="/sobre"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.2rem",
          }}
        >
          Sobre
        </Link>
        <Link
          to="/contato"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.2rem",
          }}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
};

export default Header;
