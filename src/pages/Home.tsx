import './Home.scss';
import Sobre from './About';
import Drones from './Drones';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <section className="home-container">

        <h1 className="title">
          Bem-vindo ao <span className="highlight">VizelDrone</span>
        </h1>

        {/* Secção do vídeo */}
        <div className="video-section">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/vSOFwULrBL4?si=lt7byU4IRFyz8jII"
              title="Canal VizelDrone"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="description">
            🚀 Junta-te ao nosso canal do YouTube para veres drones em ação, análises, tutoriais e muito mais!
          </p>

          <a
            href="https://www.youtube.com/@Vizeldrone"
            target="_blank"
            rel="noopener noreferrer"
            className="subscribe-button"
          >
            🎯 Subscreve o Canal
          </a>
        </div>

        {/* Secção "O que fazemos" */}
        <section className="why-section">
          <h2>🚁 O que encontras no VizelDrone?</h2>
          <ul>
            <li>📸 Vídeos cinematográficos com drones</li>
            <li>🧪 Testes e análises de modelos</li>
            <li>🌍 Vistas incríveis de Portugal e além</li>
          </ul>
        </section>

        {/* Frase de impacto */}
        <blockquote className="quote">
          "Vem viajar connosco! Vê o mundo por outra perspetiva."
        </blockquote>

        {/* Drone animado */}

      </section>

      <section className='drones-usados'>
        <Drones />
      </section>

      <section className='About'>
        <Sobre />
      </section>

      <section className='Contact'>
        <Contact />
      </section>
    </>
  );
}
