import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

const droneVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.2,
    y: -1000,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    y: -1000,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};


export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={droneVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  );
}
