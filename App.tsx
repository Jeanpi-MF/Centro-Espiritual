import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Library from './pages/Library';
import Article from './pages/Article';
import Values from './pages/Values';
import Contact from './pages/Contact';
import Success from './pages/Success';
import CPEProgram from './pages/CPEProgram';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="programas" element={<CPEProgram />} />
          <Route path="equipo" element={<Team />} />
          <Route path="biblioteca" element={<Library />} />
          <Route path="articulo" element={<Article />} />
          <Route path="etica" element={<Values />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;