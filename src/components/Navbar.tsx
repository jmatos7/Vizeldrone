import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.scss';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">VizelDrone</div>

      <button
        aria-label="Abrir menu"
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
          Sobre
        </NavLink>
        <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
          Galeria
        </NavLink>
      </div>
    </nav>
  );
}
