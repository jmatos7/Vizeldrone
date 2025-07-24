import { useEffect, useRef } from 'react';
import { GiDeliveryDrone } from 'react-icons/gi';
import { PiDrone, PiDroneFill } from 'react-icons/pi';

const icons = [GiDeliveryDrone, PiDrone, PiDroneFill];
const dronesCount = 7;

type DroneData = {
  x: number;
  y: number;
  baseY: number;
  angle: number;
  angleChange: number;
  speed: number;
  offset: number;
};

export default function DroneBackground() {
  const droneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const droneData = useRef<DroneData[]>([]);

  useEffect(() => {
  const amplitude = 10; // Altura máxima da oscilação
  const frequency = 0.002; // Velocidade da oscilação

  droneData.current = Array.from({ length: dronesCount }).map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    baseY: Math.random() * window.innerHeight, // posição base para flutuar
    angle: Math.random() * Math.PI * 2,
    angleChange: (Math.random() - 0.5) * 0.01,
    speed: 0.2 + Math.random() * 0.3,
    offset: Math.random() * 10000, // desfasamento para a oscilação
  }));

  const animate = (time: number) => {
    droneRefs.current.forEach((drone, idx) => {
      const data = droneData.current[idx];
      if (!drone) return;

      // Campo de visão: só se desvia se o outro estiver mais ou menos à frente
      for (let j = 0; j < dronesCount; j++) {
        if (j === idx) continue;

        const other = droneData.current[j];
        const dx = other.x - data.x;
        const dy = other.y - data.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angleToOther = Math.atan2(dy, dx);
        const angleDiff = Math.abs(angleToOther - data.angle) % (2 * Math.PI);

        const minDist = 100;
        const fov = Math.PI / 1.5; // campo de visão (120°)

        if (dist < minDist && angleDiff < fov / 2) {
          const force = (minDist - dist) / minDist;
          const repelAngle = angleToOther + Math.PI;
          data.x += Math.cos(repelAngle) * force * 1.5;
          data.y += Math.sin(repelAngle) * force * 1.5;
        }
      }

      // Oscilação vertical suave com base em seno
      const oscillation = Math.sin((time + data.offset) * frequency) * amplitude;

      // Movimento principal com curva
      data.angle += data.angleChange;
      data.x += Math.cos(data.angle) * data.speed;
      data.baseY += Math.sin(data.angle) * data.speed;

      // Rebentar nas margens
      if (data.x < -50) data.x = window.innerWidth + 50;
      if (data.x > window.innerWidth + 50) data.x = -50;
      if (data.baseY < -50) data.baseY = window.innerHeight + 50;
      if (data.baseY > window.innerHeight + 50) data.baseY = -50;

      // Aplicar transformações finais
      drone.style.transform = `translate(${data.x}px, ${data.baseY + oscillation}px) rotate(${data.angle}rad)`;
    });

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}, []);


  return (
    <div className="drone-background">
      {Array(dronesCount).fill(null).map((_, idx) => {
        const Icon = icons[idx % icons.length];
        return (
          <div
            key={idx}
            ref={(el) => {
              droneRefs.current[idx] = el;
            }}
            className="drone-icon"
            style={{
              position: 'absolute',
              fontSize: `${2 + (idx % 3)}rem`,
              opacity: 0.3 + (idx % 3) * 0.2,
              transition: 'none',
              willChange: 'transform',
            }}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
}
