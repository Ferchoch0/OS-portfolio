import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import UpdatesPage from './pages/UpdatesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<ProjectsPage />} />
          <Route path="updates" element={<UpdatesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
