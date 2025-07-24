import { useState } from 'react';
import './Drones.scss'; // estilo opcional

interface Drone {
  id: number;
  nome: string;
  imagem: string;
  modelo: string;
  funcao: string;
}

const drones: Drone[] = [
  {
    id: 1,
    nome: ' Dji Neo',
    imagem: './src/img/djineo.jpg',
    modelo: 'DJI Phantom 4',
    funcao: 'Inspeção aérea',
  },
  {
    id: 2,
    nome: 'Dji Mini 3 Pro',
    imagem: './src/img/djimini3pro.jpg',
    modelo: 'DJI Mavic Air 2',
    funcao: 'Filmagem cinematográfica',
  },
  {
    id: 3,
    nome: 'Hubsan Zino 2 Plus',
    imagem: './src/img/hubsan-zino-2-plus.jpg',
    modelo: 'Parrot Anafi',
    funcao: 'Vigilância e patrulha',
  },
  {
    id: 4,
    nome: 'Hubsan Pro',
    imagem: './src/img/hubsanpro.jpg',
    modelo: 'Parrot Anafi',
    funcao: 'Vigilância e patrulha',
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
                <p><strong>Modelo:</strong> {drone.modelo}</p>
                <p><strong>Função:</strong> {drone.funcao}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
