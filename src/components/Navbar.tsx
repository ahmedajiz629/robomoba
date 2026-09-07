import { NavLink } from "react-router-dom";

const links = [
  ["System", "/system"],
  ["Game", "/game"],
  ["Champions", "/champions"],
  ["Arena", "/arena"],
  ["Server", "/server"],
  ["Development", "/development"],
  ["Roadmap", "/roadmap"],
];

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <div className="brand-mark">M</div>
        <div>
          <strong>MOBA / ROBOTICS</strong>
          <span>INTERNAL CONCEPT</span>
        </div>
      </NavLink>

      <nav>
        {links.map(([label, path]) => (
          <NavLink key={path} to={path}>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-status">
        <span className="status-dot" />
        CONCEPT PHASE
      </div>
    </header>
  );
}