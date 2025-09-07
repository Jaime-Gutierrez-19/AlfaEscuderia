import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ padding: "10px", background: "#111", color: "#fff" }}>
      <Link to="/" style={{ margin: "10px", color: "#fff" }}>Inicio</Link>
      <Link to="/about" style={{ margin: "10px", color: "#fff" }}>Quiénes somos</Link>
      <Link to="/projects" style={{ margin: "10px", color: "#fff" }}>Proyectos</Link>
      <Link to="/join" style={{ margin: "10px", color: "#fff" }}>Únete</Link>
    </nav>
  );
}

export default NavBar;
