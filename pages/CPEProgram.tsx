import React from 'react';
import { useNavigate } from 'react-router-dom';

const CPEProgram: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-primary py-24 lg:py-32 overflow-hidden text-white">
         <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=2070&auto=format&fit=crop" 
            alt="CPE Discussion Group" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block py-1 px-3 rounded bg-white/10 backdrop-blur-sm border border-white/20 text-secondary text-xs font-bold tracking-widest uppercase mb-6">
                Accredited by CPSP
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Educación Clínica Pastoral<br />
                <span className="text-secondary">(CPE)</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
                El estándar de oro en la formación de capellanes profesionales. Un proceso transformador de aprendizaje basado en la experiencia práctica y la reflexión teológica profunda.
            </p>
            <button 
                onClick={() => navigate('/contacto')}
                className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3.5 rounded-sm font-bold text-sm uppercase tracking-wide transition-all shadow-lg shadow-secondary/20"
            >
                Postular al Programa
            </button>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">Metodología</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-6">
                        Aprendizaje Experiencial:<br/>Acción - Reflexión - Acción
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6 font-light">
                        El CPE no es una clase teórica tradicional. Es un laboratorio de relaciones humanas donde tu propia persona es la herramienta principal de trabajo.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 font-light">
                        A través del encuentro real con personas en crisis (Acción), documentamos y analizamos lo sucedido bajo supervisión (Reflexión), para volver a la práctica con nuevas competencias y autoconciencia (Nueva Acción).
                    </p>
                    <ul className="space-y-4">
                        {[
                            'Práctica clínica supervisada en instituciones reales.',
                            'Grupo de proceso interpersonal.',
                            'Supervisión individual semanal.',
                            'Didácticas especializadas.'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-secondary mt-1">check</span>
                                <span className="text-primary dark:text-gray-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                     <div className="absolute -inset-4 border-2 border-secondary/20 rounded-lg transform rotate-2"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop" 
                        alt="Students in circle" 
                        className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                     />
                </div>
            </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-4">Estructura de la Unidad</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Una unidad estándar de CPE consta de un mínimo de <strong>400 horas</strong>, diseñadas para integrar teoría y práctica de manera intensiva.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { hours: '300', title: 'Horas Clínicas', desc: 'Visitas directas a pacientes, familias y personal en entornos hospitalarios, comunitarios o parroquiales.', icon: 'clinical_notes' },
                    { hours: '100', title: 'Horas Educativas', desc: 'Seminarios, presentación de verbatims, didácticas y grupos de lectura.', icon: 'school' },
                    { hours: '10+', title: 'Supervisión Grupal', desc: 'Espacio seguro para explorar la dinámica interpersonal y recibir retroalimentación de pares.', icon: 'groups' },
                    { hours: '1:1', title: 'Supervisión Individual', desc: 'Encuentros semanales con un Supervisor Diplomado para trabajar objetivos personales.', icon: 'person_search' }
                ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-lg shadow-sm border-t-4 border-secondary hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-4xl font-bold text-primary dark:text-white font-display">{item.hours}</span>
                            <span className="material-symbols-outlined text-secondary text-2xl">{item.icon}</span>
                        </div>
                        <h3 className="text-lg font-bold text-primary dark:text-gray-200 mb-3">{item.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">Niveles de Certificación</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { level: 'Nivel I', title: 'Unidades Básicas', desc: 'Enfoque en la autoconciencia, la formación de la identidad pastoral y las habilidades básicas de escucha activa.' },
                    { level: 'Nivel II', title: 'Unidades Avanzadas', desc: 'Desarrollo de competencias clínicas complejas, ética biomédica y especialización en áreas como trauma o paliativos.' },
                    { level: 'SIT', title: 'Supervisory Training', desc: 'Para aquellos llamados a enseñar. Formación rigurosa para convertirse en Supervisor Clínico (Diplomate).' }
                ].map((lvl, i) => (
                    <div key={i} className="relative p-8 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-6xl font-bold">{i + 1}</div>
                        <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">{lvl.level}</h4>
                        <h3 className="text-2xl font-bold mb-4">{lvl.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{lvl.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ / Requirements */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-10 text-center">Requisitos de Admisión</h2>
            <div className="bg-background-light dark:bg-background-dark p-8 md:p-12 rounded-2xl border border-gray-100 dark:border-gray-800">
                <ul className="space-y-6">
                    {[
                        'Formulario de solicitud completo.',
                        'Entrevista de admisión con un Supervisor calificado.',
                        'Evaluación teológica o autolimitada (ensayo biográfico).',
                        'Disponibilidad de tiempo para cumplir las 400 horas.',
                        'Compromiso con el proceso de aprendizaje grupal.',
                        'Pago de la matrícula correspondiente.'
                    ].map((req, i) => (
                        <li key={i} className="flex gap-4 items-center">
                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                <span className="material-symbols-outlined text-secondary text-sm">check</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{req}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        ¿Listo para comenzar tu viaje de formación clínica?
                    </p>
                    <button 
                        onClick={() => navigate('/contacto')}
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold transition-colors"
                    >
                        Solicitar Entrevista
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default CPEProgram;