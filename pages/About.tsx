import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <header className="relative bg-surface-light dark:bg-surface-dark py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary dark:text-white mb-6">Nuestra Identidad</h2>
          <div className="w-32 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed font-display italic">
            "Integrando la sabiduría clínica con la profundidad humana."
          </p>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            Somos una institución dedicada a la formación y excelencia en el cuidado espiritual.
          </p>
        </div>
      </header>

      <section className="py-20 lg:py-28 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-sm overflow-hidden relative shadow-2xl border border-gray-100 dark:border-gray-800">
                <img 
                  alt="Historia del centro" 
                  className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUL5As7m8T-RE1iWaHhg-2A4I8zFpB5fdzVvHfvM9wxkxwSJa33kOvU4DaK05tlHukw-sryctvmUq3eTilyVB5-9qtbxOSWOWwlWmQ5sH8SA82m7_z4Zc1Mi0bnl7xKelILxJh7vjxw4kQMwzjHqjUH9XTsa_60MCJVeqe2zIanmZjfeoMLM4oJ_YDogVGkVscstk1S7sXU7bxGXkWahdrjCHug6IU3IBWtt8bB1MBaHnRMnNJvtHXc3SO6MZb66CyFRPbnpQOp0w"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-56 h-auto bg-white dark:bg-surface-dark p-8 rounded-sm shadow-xl border-l-4 border-secondary hidden md:block">
                <p className="font-display text-primary dark:text-secondary text-5xl font-bold">1925</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 uppercase tracking-wide font-bold">El Origen</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Inicio del movimiento CPE con Anton T. Boisen.</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-2 block">Historia</span>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-primary dark:text-white mb-8">Nuestra Historia y Legado</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed font-light">
                La historia del Centro de Espiritualidad Clínica se enraíza en la tradición iniciada por <strong>Anton T. Boisen</strong>, pionero en la educación pastoral clínica. Boisen creía firmemente que el "documento vivo" de la persona humana es tan vital para el estudio teológico como los textos sagrados.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed font-light">
                A lo largo de las décadas, hemos evolucionado para adaptar estos principios fundacionales a las necesidades contemporáneas de América Latina, manteniendo un compromiso inquebrantable con la integración clínica y la excelencia académica.
              </p>
              <a href="#" className="inline-flex items-center text-primary dark:text-secondary font-bold hover:text-secondary dark:hover:text-white transition-colors uppercase tracking-wider text-sm border-b-2 border-secondary pb-1">
                Leer historia completa
                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface-light dark:bg-surface-dark relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="bg-white dark:bg-background-dark p-12 rounded-sm shadow-sm border-t-4 border-secondary hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-8 text-primary dark:text-secondary">
                <span className="material-symbols-outlined text-4xl">flag</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-primary dark:text-white mb-6">Misión</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
                Promover la excelencia en el cuidado pastoral y la psicoterapia pastoral a través de la educación clínica, la certificación de competencias y la acreditación de centros en América Latina, fomentando una práctica ética, reflexiva e integrada.
              </p>
            </div>
            <div className="bg-white dark:bg-background-dark p-12 rounded-sm shadow-sm border-t-4 border-secondary hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-8 text-primary dark:text-secondary">
                <span className="material-symbols-outlined text-4xl">visibility</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-primary dark:text-white mb-6">Visión</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
                Ser el referente líder en América Latina para la integración de la espiritualidad y la clínica, creando una comunidad de profesionales capacitados para responder con compasión y sabiduría a las profundas necesidades humanas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-32 bg-background-light dark:bg-background-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Fundamentos</span>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-primary dark:text-white mb-20">Nuestros Valores Centrales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                {[
                  { icon: 'balance', title: 'Ética Profesional', desc: 'Compromiso inquebrantable con la integridad y el respeto en la práctica clínica.' },
                  { icon: 'diversity_3', title: 'Diversidad Cultural', desc: 'Respeto y valoración de las diversas tradiciones espirituales y contextos culturales.' },
                  { icon: 'psychology', title: 'Excelencia Académica', desc: 'Rigor intelectual en la formación teórica y práctica de nuestros estudiantes.' },
                  { icon: 'favorite', title: 'Inclusión', desc: 'Creación de espacios seguros donde todas las personas son bienvenidas y valoradas.' },
                  { icon: 'school', title: 'Aprendizaje Continuo', desc: 'Fomento del crecimiento personal y profesional a lo largo de toda la vida.' },
                  { icon: 'handshake', title: 'Colegialidad', desc: 'Trabajo colaborativo y apoyo mutuo dentro de la comunidad de práctica.' }
                ].map((val, i) => (
                    <div key={i} className="group text-left p-6 border border-transparent hover:border-gray-100 dark:hover:border-gray-800 transition-colors duration-300 rounded-sm">
                        <div className="mb-6 inline-block text-secondary">
                            <span className="material-symbols-outlined text-5xl group-hover:scale-110 transition-transform duration-300">{val.icon}</span>
                        </div>
                        <h4 className="font-display text-xl font-bold text-primary dark:text-white mb-3">{val.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-12">En afiliación y colaboración con</p>
              <div className="flex flex-wrap justify-center items-center gap-16 md:gap-28">
                  <div className="flex items-center gap-4 group cursor-default">
                      <div className="relative w-14 h-14 transition-transform duration-500 group-hover:rotate-180">
                          <div className="absolute inset-0 rounded-full border-2 border-secondary transform rotate-45 skew-x-12 opacity-80"></div>
                          <div className="absolute inset-0 rounded-full border-2 border-secondary transform -rotate-12 scale-90 opacity-90"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-secondary">
                              <span className="material-symbols-outlined text-2xl">emergency</span>
                          </div>
                      </div>
                      <div className="text-left text-white">
                          <h1 className="font-display text-xl font-bold tracking-wide uppercase leading-none">Centro de</h1>
                          <h1 className="font-display text-xl font-bold tracking-wider uppercase leading-none text-secondary">Espiritualidad</h1>
                      </div>
                  </div>
                  <div className="w-px h-16 bg-white/10 hidden md:block"></div>
                  <div className="flex items-center gap-4 group cursor-default">
                      <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                          <span className="font-display font-bold text-white text-2xl">CP</span>
                      </div>
                      <div className="text-left text-white">
                          <p className="font-display font-bold text-xl leading-none tracking-wide">CPSP</p>
                          <p className="text-xs font-light uppercase tracking-widest opacity-70 mt-1">The College of Pastoral<br/>Supervision & Psychotherapy</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default About;