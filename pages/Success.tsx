import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark min-h-[80vh]">
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-xl p-10 md:p-16 text-center border border-gray-100 dark:border-gray-800 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="mb-8 rounded-full bg-secondary/10 p-6 inline-flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-6xl">check_circle</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              ¡Solicitud Enviada con Éxito!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-body leading-relaxed mb-10 max-w-lg mx-auto">
              Gracias por contactarnos. Tu información ha sido enviada al equipo de admisiones y nos pondremos en contacto contigo a la brevedad para coordinar tu entrevista.
            </p>
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-secondary hover:bg-[#b09353] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 min-w-[200px]"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;