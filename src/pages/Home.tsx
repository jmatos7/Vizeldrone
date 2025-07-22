import { useState } from 'react';
import './Home.scss';

export default function Home() {
  return (
    <section className="home-container">
      <h1 className="title">Bem-vindo ao VizelDrone</h1>
      <div className="drone-wrapper">
        <div className="drone">
          <div className="propeller top-left"></div>
          <div className="propeller top-right"></div>
          <div className="propeller bottom-left"></div>
          <div className="propeller bottom-right"></div>
          <div className="body"></div>
        </div>
      </div>
      <p className="description">
        Explore o futuro dos drones com efeitos suaves e tecnologia de ponta.
      </p>
    </section>
  );
}