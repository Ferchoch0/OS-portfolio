import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import TVNoise from './components/Background/TvNoise';

const Home = lazy(() => import('./pages/Home'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const UpdatesPage = lazy(() => import('./pages/UpdatesPage'));

const FallbackLoader = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', background: 'var(--bg)', color: 'var(--text)' }}>
    <span style={{ fontSize: '1rem', opacity: 0.5 }}>Cargando...</span>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <TVNoise />
      <Suspense fallback={<FallbackLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="project" element={<ProjectsPage />} />
            <Route path="updates" element={<UpdatesPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
