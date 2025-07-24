import { useLocation, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import DroneBackground from './DroneBackground';
import Home from './pages/Home';
import About from './pages/About';
import DRONES from './pages/Drones';
import Navbar from './components/Navbar';
import PageTransition from './pages/PageTransition';
import './main.scss';

export default function App() {
  const location = useLocation();

  return (
    <>
      <div className="app-container">
        <Navbar />
        <DroneBackground />
        <AnimatePresence mode="wait">

          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/drones"
              element={
                <PageTransition>
                  <DRONES />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}
