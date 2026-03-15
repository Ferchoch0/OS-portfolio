import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Layout from './components/Layout/Layout';
import TVNoise from './components/Background/TvNoise';

const Home = lazy(() => import('./pages/Home'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const UpdatesPage = lazy(() => import('./pages/UpdatesPage'));

const FallbackLoader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    background: '#0e0d0d',
  }}>
    <img
      src="/loading.png"
      alt="Cargando..."
      style={{
        width: '128px',
        height: '128px',
        animation: 'spin 1.2s linear infinite',
      }}
    />
    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
  </div>
);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      {/*<TVNoise />*/}
      <Suspense fallback={<FallbackLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="project" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="news" element={<UpdatesPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
