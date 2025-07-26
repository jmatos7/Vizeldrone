import { useState } from 'react';
import './Drones.scss'; // estilo opcional

interface Drone {
  id: number;
  nome: string;
  imagem: string;
  link: string;
  funcao: string;
  especificacoes: {
    camara: string;
    sensores: string;
    autonomia: string;
    alcance: string;
    gps: string;
  };
}

const drones: Drone[] = [
  {
    id: 1,
    nome: ' Dji Neo',
    imagem: '/img/djineo.jpg',
    link: 'https://store.dji.com/pt/product/dji-neo?utm_source%5B%5D=google&utm_source%5B%5D=google&utm_medium%5B%5D=cpc&utm_medium%5B%5D=cpc&utm_campaign=EU-EN-SEM-drone-product-djineo-2024&gad_source=1&gad_campaignid=21653815864&gbraid=0AAAAADO_H_dzSb9NYnWXm3VorUqEZ8fNn&gclid=Cj0KCQjw-ZHEBhCxARIsAGGN96IvFVmIIXiRgpLPfy3LuJLQFo8DEZ52_6UJbta-FAsAQ4gfloAH0WoaAi24EALw_wcB&vid=169761',
    funcao: 'Inspeção aérea',
    especificacoes: {
      camara: 'Câmara 4K a 60fps, sensor CMOS de 1 polegada',
      sensores: 'Sensores de obstáculos em 5 direções',
      autonomia: 'Até 30 minutos de voo',
      alcance: '7 km (com Lightbridge HD)',
      gps: 'GPS + GLONASS',
    },
  },
  {
    id: 2,
    nome: 'Dji Mini 3 Pro',
    imagem: '/img/djimini3pro.jpg',
    link: 'https://djiportugal.pt/drones/mini/dji-mini-3-pro-2/',
    funcao: 'Filmagem cinematográfica',
    especificacoes: {
      camara: 'Câmara 4K a 60fps, sensor CMOS de 1/1.3 polegadas',
      sensores: 'Sensores triplos (frontal, traseiro e inferior)',
      autonomia: '34 a 47 minutos (com bateria Plus)',
      alcance: '12 km (OcuSync 3.0)',
      gps: 'GPS + Galileo + BeiDou',
    },
  },
  {
    id: 3,
    nome: 'Hubsan Zino 2 Plus',
    imagem: '/img/hubsan-zino-2-plus.jpg',
    link: 'https://www.hubsan.com/na/index.php?main_page=product_info&products_id=1054',
    funcao: 'Vigilância e patrulha',
    especificacoes: {
      camara: 'Câmara 4K a 60fps com gimbal de 3 eixos',
      sensores: 'Sensor óptico de posicionamento inferior',
      autonomia: '33 minutos de voo',
      alcance: '8 km FPV',
      gps: 'GPS + GLONASS',
    },
  },
  {
    id: 4,
    nome: 'Hubsan Zino Pro',
    imagem: '/img/hubsanpro.jpg',
    link: 'https://www.hubsan.com/eur/index.php?main_page=product_info&products_id=733',
    funcao: 'Vigilância e patrulha',
    especificacoes: {
      camara: 'Câmara 4K a 30fps com gimbal de 3 eixos',
      sensores: 'Sensor óptico de posicionamento inferior',
      autonomia: '23 minutos de voo',
      alcance: '4 km FPV',
      gps: 'GPS + GLONASS',
    },
  },
];


export default function Drones() {
  const [droneAtivo, setDroneAtivo] = useState<number | null>(null);
  return (
    <div className="drones-page">
      <h1>Drones Utilizados</h1>
      <div className="drone-list">
        {drones.map((drone) => (
          <div key={drone.id}
            className={`drone-card ${droneAtivo === drone.id ? 'ativo' : ''}`}
            onClick={() => setDroneAtivo(droneAtivo === drone.id ? null : drone.id)}>
            <img src={drone.imagem} alt={drone.nome} />
            <h2>{drone.nome}</h2>

            {droneAtivo === drone.id && (
              <div className="drone-detalhes">
                <p><strong>Função:</strong> {drone.funcao}</p>
                <p><strong>Câmara:</strong> {drone.especificacoes.camara}</p>
                <p><strong>Sensores:</strong> {drone.especificacoes.sensores}</p>
                <p><strong>Autonomia:</strong> {drone.especificacoes.autonomia}</p>
                <p><strong>Alcance:</strong> {drone.especificacoes.alcance}</p>
                <p><strong>GPS:</strong> {drone.especificacoes.gps}</p>
                <p>
                  <strong>Mais info:</strong>{' '}
                  <a href={drone.link} target="_blank" rel="noopener noreferrer">
                    Ver site oficial
                  </a>
                </p>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
