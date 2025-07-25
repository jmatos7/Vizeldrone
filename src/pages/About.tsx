import React from 'react';
import { FaYoutube, FaUsers, FaLightbulb } from 'react-icons/fa';
import './About.scss';

export default function AboutUs() {
  return (
    <section className="about-us" id="sobre">
      <h2>Sobre o Canal</h2>
      <p>
        Bem-vindo ao <strong>VizelDrone</strong>, o canal onde a paixão pelos drones ganha vida em vídeo! Aqui exploramos o mundo fascinante dos drones,
        desde voos espetaculares, reviews de equipamentos, dicas técnicas e muito mais.
      </p>
      <p>
        Somos uma comunidade de entusiastas que adoram descobrir novas perspetivas, partilhar conhecimento e inspirar a todos a olhar o céu com outros olhos.
        Se gostas de tecnologia, aventura e imagens incríveis, este é o teu espaço.
      </p>

      <div className="mission-vision-values">
        <div className="item">
          <FaYoutube size={40} color="#FF0000" />
          <h3>Conteúdo Exclusivo</h3>
          <p>Vídeos originais, tutoriais, e aventuras que só encontras aqui.</p>
        </div>
        <div className="item">
          <FaUsers size={40} color="#00f6ff" />
          <h3>Comunidade</h3>
          <p>Um espaço para todos os apaixonados por drones e tecnologia, com muita interação e partilha.</p>
        </div>
        <div className="item">
          <FaLightbulb size={40} color="#ffcc00" />
          <h3>Inovação</h3>
          <p>Estamos sempre a explorar novas ideias, gadgets e técnicas para trazer-te o melhor conteúdo.</p>
        </div>
      </div>

      <p>
        Junta-te a nós nesta jornada pelo céu e pela tecnologia, e descobre o mundo dos drones como nunca antes.
      </p>

      <div className="call-to-action">
        <p>
          Gostaste? <a href="https://www.youtube.com/@Vizeldrone" target="_blank" rel="noopener noreferrer">Subscreve o canal</a> e ativa as notificações para não perderes nada!
        </p>
      </div>
    </section>
  );
}
