import React from 'react';

const Values: React.FC = () => {
  return (
    <>
      <section className="relative bg-primary/5 py-16 lg:py-24 overflow-hidden dark:bg-black/20">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-surface-dark border border-primary/20 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-gray-300">Nuestros Valores</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary dark:text-white leading-tight mb-6">
                  Ética, Inclusión y <span className="text-secondary relative inline-block">
                      Diversidad
                      <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/40 dark:text-white/20" preserveAspectRatio="none" viewBox="0 0 100 10">
                         <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                      </svg>
                  </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Un compromiso inquebrantable con el respeto a todas las creencias, valores y visiones del mundo. Construimos un espacio seguro fundamentado en el respeto mutuo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold text-base transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                      <span>Conoce nuestra misión</span>
                      <span className="material-symbols-outlined">arrow_downward</span>
                  </button>
                  <button className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium text-base transition-colors">
                      Ver código ético
                  </button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group border-4 border-white dark:border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                    <img alt="Inclusion" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADQf2K3cueogCjrvqz-Zgp7Anlb327oYsimLBnQ4EmYFz42gETsPh70sHD1JSil20mXufv69C_ZfQNQRKq6sumtgakZuUHxYQ3lJ3l_Zh7Q4599lfHUjJIWvXzC_DBaGdaDmOPgyxQ9Sz9pQX1gCOQgG7BuUFAy2M6QkGCPBdZml2zw7N2n3Jfqpuk-T7_aSVkGtf6-6F7_cwlbK0kJ0hSytW2GSfmUqRifWFqvIH2f5y_1MQjfsGzC3M2mt7sBIvY6vhD697R7oU" />
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-secondary">verified</span>
                            <span className="font-bold text-sm tracking-widest uppercase">Espacio Seguro</span>
                        </div>
                        <p className="text-sm opacity-90">Acogemos la diversidad en todas sus formas.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="material-symbols-outlined text-6xl text-secondary mb-6">diversity_3</span>
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-white">Inclusividad Radical</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                Entendemos que la espiritualidad y la visión del mundo son únicas para cada individuo. En nuestro centro, acogemos con el mismo respeto y dignidad a <span className="font-bold text-primary dark:text-secondary">ateos, agnósticos, librepensadores y personas de todas las confesiones religiosas</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {[
                  { icon: 'public', title: 'Sin Juicios', desc: 'Un ambiente libre de prejuicios donde tu identidad es validada.' },
                  { icon: 'favorite', title: 'Respeto Profundo', desc: 'Honramos tus valores personales como parte integral de tu proceso.' },
                  { icon: 'balance', title: 'Enfoque Laico', desc: 'La terapia se basa en la ciencia, respetando siempre tu marco de creencias.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl bg-background-light dark:bg-gray-800 border border-transparent hover:border-secondary/30 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mb-4 shadow-sm group-hover:bg-secondary/10">
                          <span className="material-symbols-outlined text-primary group-hover:text-secondary">{item.icon}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-primary dark:text-white">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-background-light dark:bg-[#161c1c] border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700">
                        <img alt="Ethical commitment" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBYhNvn_T7C1izR_QXBrUS-8FkS0kEwHesjyVHnWmjy5WeARht_iU0u9XUc8Wl9fCaGhlt2XGkFr4HtK1h1YM6e-NBNlzCUjmqmkOIvgJqOMo2UeU8aqCnyLMlkGX1J1C_uwubDRbzzRW7fLBwWPA5D1mkR9skp0MOUra-eemlMDecpoEF1v4zqQ8qfaYRdh0dKk-nAWYM2Lp64f51_pNiJqYFKhS4EZaMqESAdykZIXEeKGTVdmmiaRshhPtJlsv2A550fRPCQkU" />
                        <div className="absolute top-4 right-4 bg-white/95 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-lg shadow-sm border-l-4 border-secondary">
                            <span className="text-xs font-bold text-primary dark:text-white uppercase tracking-wider">Cumplimiento Normativo</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="p-2 bg-primary/10 rounded-lg text-primary">
                            <span className="material-symbols-outlined">policy</span>
                        </span>
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Estándares Profesionales</h2>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">
                        Ética CPSP: Nuestro Norte
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                        Nuestra práctica clínica se rige estrictamente por el <strong className="text-primary dark:text-secondary">Código de Ética y Deontología del Colegio de Psicólogos del Perú (CPSP)</strong>. Esto garantiza que cada intervención se realice con la máxima integridad, competencia y responsabilidad social.
                    </p>
                    <ul className="space-y-4">
                        {[
                          { title: 'Confidencialidad Absoluta', desc: 'Protección rigurosa de tu privacidad y datos personales.' },
                          { title: 'Competencia Profesional', desc: 'Actualización constante y uso de técnicas basadas en evidencia.' },
                          { title: 'Bienestar del Paciente', desc: 'Tu integridad y salud mental son nuestra prioridad absoluta.' }
                        ].map((item, i) => (
                           <li key={i} className="flex items-start gap-3">
                               <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                               <div>
                                   <h4 className="font-bold text-primary dark:text-white">{item.title}</h4>
                                   <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                               </div>
                           </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 bg-primary dark:bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2629&auto=format&fit=crop" className="w-full h-full object-cover opacity-10" alt="background texture" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/80"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tu bienestar en un entorno seguro</h2>
            <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">
                Si buscas un espacio profesional donde tu visión del mundo sea respetada y valorada, estamos aquí para acompañarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg shadow-secondary/20">
                    Agendar primera sesión
                </button>
                <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium py-4 px-8 rounded-lg transition-colors">
                    Contactar por WhatsApp
                </button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Values;