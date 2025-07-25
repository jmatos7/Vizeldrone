import { FaYoutube, FaInstagram, FaFacebook} from 'react-icons/fa';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="brand">
          <div className='logo'>
            <img src="/img/LOGO.jpg" alt="drones" />
            <h2>VizelDrone</h2>
          </div>
          <p>Explora o céu com precisão e tecnologia.</p>
        </div>

        <div className="links">
          <a href="/">Home</a>
          <a href="/drones">Drones</a>
          <a href="/sobre">Sobre Nós</a>
          <a href="/contactos">Contactos</a>
        </div>

        <div className="socials">
          <h2>Siga-nos</h2>
          <a href="https://www.youtube.com/@Vizeldrone" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/vizeldrone/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/1B2vkddbsp" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} VizelDrone. Todos os direitos reservados.
      </div>
    </footer>
  );
}
