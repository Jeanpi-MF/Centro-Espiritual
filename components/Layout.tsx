import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-secondary border-b-2 border-secondary' : 'text-primary dark:text-gray-300 hover:text-secondary transition-colors';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programa CPE', path: '/programas' },
    { name: 'Equipo', path: '/equipo' },
    { name: 'Biblioteca', path: '/biblioteca' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Ética', path: '/etica' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background-light dark:bg-background-dark text-text-light dark:text-gray-200">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <img
                alt="Centro de Espiritualidad Clínica"
                className="h-20 w-auto object-contain"
                src="/icons/Logo.png"
              />
            </div>

            <div className="hidden lg:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wide px-1 py-1 ${isActive(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => navigate('/contacto')}
                className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-secondary/20 text-sm uppercase tracking-wide"
              >
                Agendar Entrevista
              </button>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"
              >
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/contacto');
                }}
                className="w-full text-left px-3 py-3 text-base font-bold text-secondary uppercase"
              >
                Agendar Entrevista
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary dark:bg-black text-white py-16 border-t border-primary-light dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 text-secondary flex items-center justify-center border-2 border-secondary rounded-full">
                  <span className="material-symbols-outlined text-xl">star</span>
                </div>
                <span className="font-display font-bold text-2xl tracking-tight">CEC</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Comprometidos con la excelencia en el cuidado espiritual clínico y la formación de profesionales en toda América Latina. Integrando fe, ciencia y salud.
              </p>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-secondary mb-6 uppercase tracking-widest text-xs">Recursos</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link to="/programas" className="hover:text-secondary transition-colors">CPE América Latina</Link></li>
                <li><Link to="/programas" className="hover:text-secondary transition-colors">Formación Clínica</Link></li>
                <li><Link to="/biblioteca" className="hover:text-secondary transition-colors">Biblioteca Virtual</Link></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Webinars y Eventos</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-secondary mb-6 uppercase tracking-widest text-xs">Categorías</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-secondary transition-colors">Teología Práctica</a></li>
                <li><Link to="/etica" className="hover:text-secondary transition-colors">Bioética Clínica</Link></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Psicología Pastoral</a></li>
                <li><Link to="/articulo" className="hover:text-secondary transition-colors">Cine y Espiritualidad</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold text-secondary mb-6 uppercase tracking-widest text-xs">Contacto</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">mail</span>
                  <a href="mailto:info@espiritualidadclinica.org" className="hover:text-white transition-colors cursor-pointer">info@espiritualidadclinica.org</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">location_on</span>
                  <span>Ciudad de México, MX<br />Av. Reforma 222</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-light/30 dark:border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
              <p>© 2023 Centro de Espiritualidad Clínica. Todos los derechos reservados.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-secondary transition-colors">Privacidad</a>
                <a href="#" className="hover:text-secondary transition-colors">Términos de Uso</a>
                <a href="#" className="hover:text-secondary transition-colors">Mapa del Sitio</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;