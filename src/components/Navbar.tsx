import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.scss';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo"><img src="/img/LOGO.jpg" alt="drones" />VizelDrone</div>

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
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Sobre
        </NavLink>
        <NavLink
          to="/drones"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Drones
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
