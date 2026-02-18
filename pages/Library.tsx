import React from 'react';
import { useNavigate } from 'react-router-dom';

const Library: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-4 tracking-tight">
            Biblioteca de Espiritualidad Clínica
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Recursos académicos, análisis teológicos y herramientas para el cuidado espiritual profesional en América Latina.
        </p>
      </div>

      <section className="mb-16">
        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 text-2xl">search</span>
            </div>
            <input 
              type="text" 
              className="block w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-xl leading-5 bg-gray-50 dark:bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent sm:text-base text-gray-900 dark:text-gray-100 transition-all shadow-inner" 
              placeholder="Buscar recursos, autores o temas..."
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <button className="text-secondary hover:text-secondary-dark font-medium text-sm transition-colors">Búsqueda avanzada</button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
             {['Todos', 'Cine y Teología', 'Artículos Académicos', 'Bienestar del Cuidador', 'Modelo Biopsicosocial'].map((filter, idx) => (
                <button 
                  key={idx}
                  className={`px-5 py-2 rounded-full font-medium transition-all transform hover:-translate-y-0.5 text-sm border ${idx === 0 ? 'bg-secondary text-white border-transparent shadow-md shadow-secondary/20' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-secondary hover:text-secondary'}`}
                >
                    {filter}
                </button>
             ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">star_border</span>
            Recurso Destacado
        </h2>
        <div className="group relative bg-primary dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="absolute top-0 right-0 p-6 z-20">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-secondary text-white uppercase tracking-wider shadow-sm">
                Nuevo Análisis
            </span>
          </div>
          <div className="md:flex h-full min-h-[400px]">
            <div className="md:w-1/2 relative overflow-hidden">
              <img 
                alt="Featured resource" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmE8iBHai0-riV6n5MzoHENmhYrJmGYge7Wq7UzK--E6nl3SrkFxVaXHoFiSEK43hu7D-xgdlxS5RJYOd07fHsSqFyPDVnk6AmlHLXTOhCdqZjWhuNi8Td_Mnm-83ojdLG_1aYL5EgxOM3eu4X_EQKH32AF8VHtL-TkxO835JsvzbJ6oeHZAbPsNgc4hOe4XiBize7ddik-c0eMUcFfP2Flci89rPhp6Z1W25n3dXxD5SNgak-vtt_M1jZ1wOfJRGYs0MIgZP6N8g"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-primary relative z-10">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-transparent to-primary -ml-12 hidden md:block"></div>
              <div className="text-secondary font-bold mb-3 uppercase tracking-widest text-xs">Cine y Teología</div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                  La Mente y el Espíritu: Análisis Cinematográfico
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed font-light">
                  Una exploración profunda de la espiritualidad en la salud mental a través de las lentes de "A Beautiful Mind" y "27 Noches". Descubre cómo la narrativa visual informa la práctica clínica.
              </p>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => navigate('/articulo')}
                  className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2 shadow-lg shadow-secondary/20"
                >
                    Leer Análisis Completo
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    Lectura de 15 min
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">library_books</span>
                Últimas Publicaciones
            </h2>
            <a href="#" className="text-secondary hover:text-secondary-dark font-medium flex items-center gap-1 transition-colors text-sm uppercase tracking-wide">
                Ver todo <span className="material-symbols-outlined text-sm">chevron_right</span>
            </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                    tag: 'Académico', color: 'bg-primary', title: 'Integración Espiritual en el Modelo Biopsicosocial',
                    desc: 'Este artículo revisa cómo la dimensión espiritual completa el modelo de Engel, proporcionando una atención verdaderamente holística al paciente.',
                    author: 'Dr. Ana Martinez', initials: 'AM', date: 'Oct 24, 2023', category: 'Modelo Biopsicosocial',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACKyty4Q5_smXmIsK3-8YO3ThAof6KsRGzUZqtWF9-3G-cMHpfxXCerPNx_gDQao4F3QKiB_1b3kXmYEoqWng41wtXBoLmJbuu6D1AlXLqbbWsNOdRQvYVkpNBQwj_e3PvShVIB6x5H_6BJi1tkXxNbJY-4l0qsKgzhYF59_yQV7AezcYtXV3_HDitpw6AObhq3QH0ePhMKz4fZzUFwSeZp_nY8KSais2GQs0TLBBJieoq9Em1V0p5miWvm1Wx6JwESg5MTWO3wjA'
                },
                {
                    tag: 'Práctico', color: 'bg-green-700', title: 'Fatiga por Compasión: Estrategias de Resiliencia',
                    desc: 'Herramientas prácticas para capellanes y personal clínico para prevenir el agotamiento emocional y mantener una presencia sanadora efectiva.',
                    author: 'Jorge R. López', initials: 'JL', date: 'Sep 12, 2023', category: 'Bienestar del Cuidador',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxppZYmnuIymHc4WPC_n3BavahLcPWtypvfe1dos71Y9b-1BNr1FGgp7KMp0yOjE9MlVd0Rj6EHHZydHiwzLxo4oGsH3aip4LIht3IxRiM_V1y05LTqjLSO3SSiEmZigI-TCQEaE3aqD_yOnSy9F_ZibkjUjUJpZqy0YFqqaqEkF7tqgArDeE9hkwIr3NQGE5uHbHpctxUw-GUoj86yAOXX-Yw8DXc0FARS5vEkjuyOTCV3Juve9usVQp5C6XdqwZz64dMtPGAHqk'
                },
                {
                    tag: 'Investigación', color: 'bg-blue-800', title: 'Evolución del Cuidado Pastoral en Hospitales',
                    desc: 'Un recorrido histórico sobre cómo la figura del capellán se ha transformado desde un rol puramente religioso a un integrante clínico esencial.',
                    author: 'Maria T. Soto', initials: 'MS', date: 'Ago 05, 2023', category: 'Historia Clínica',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6YIQblKBh-jPz32V3hTAZml-LYdHavXp0j6Pid0sfLy13ck_HCW6ivmHonFgSbpq6rhcJtOOkuXeidCuMXkAzThVzFDx4qmGl7C3ZZpprueXV7klE50eI1sObVW8pRuRrgHlZB98z4yTuV1S0tws2PKOohOqF8ilHY3ViOTmNtt_5Te-zsSUaeCRomlVWZMhj1-NMp3i0mnsuTtPNPGjN-sT4qBBO9NbpJT_oMbgJJ_FUOgONysn0cwQ5AgFbnB98jBm8poFe9jw'
                },
                {
                    tag: 'Tendencias', color: 'bg-purple-700', title: 'Inteligencia Artificial y Ética del Cuidado',
                    desc: 'Reflexiones teológicas sobre el uso de la IA en diagnósticos médicos y su impacto en la deshumanización potencial del paciente.',
                    author: 'Equipo Editorial', initials: 'EE', date: 'Jul 20, 2023', category: 'Bioética',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDUaTlehL5eCBy8yy9i1BtugX1FIWdx2N8zSnlBiwU95bMhh9WL4qGWakmdkFEtQQ3rNlLq6I1UFmpIgKvtezqpj-_sW_nT85Q8RIBstmFvHjHq9TV3sBhcVt6codLJeFlKceSw58O_ZpYb_iaqNIWsIEfBZN5IrV05ZsbFg1Qm5Di1wk3jT8LJb7BfJ1DDaAc3Q8yGfFgsKY_82NWdxOBlcJCq6482seHm1wZmMSc69ngIbp3lI1gBSuQFMorUFMiHwne8m6VJno'
                },
                {
                    tag: 'Recurso', color: 'bg-cyan-600', title: 'Guía de Mindfulness para Pacientes Oncológicos',
                    desc: 'Un protocolo paso a paso desarrollado para acompañar a pacientes en tratamiento, integrando espiritualidad y reducción de estrés.',
                    author: 'Centro CPE', initials: 'CP', date: 'Jun 15, 2023', category: 'Prácticas',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLAW1TyQtJukteek5e8nbjwsyuth1BoIIH7FHqTvVB8EvTjvHJtp66peXOlczmJN0_UQagfwFQ5Nevh2I_LP_XSofwOl7zCFjd4jO13-u55lKc17MRbEKcWW1Vde3tXCKtupGagm9RtjoBf9ko1p1-DP9S2FWHunbYiAwI94YeH5Rqp6vfYgRQAIEqDR0SdntvFLDw-A8Jx6mazPQhYE3fsuUzmBWO76nkoikmE0Xu7RdKaPPGHUIAh5xO4sezQtphSQdrMYPqp-o'
                },
                {
                    tag: 'Caso Clínico', color: 'bg-red-600', title: 'Acompañamiento en el Final de la Vida Pediátrico',
                    desc: 'Estudio de caso sobre el abordaje espiritual con familias en la unidad de cuidados intensivos pediátricos.',
                    author: 'Pedro Ramírez', initials: 'PR', date: 'May 28, 2023', category: 'Duelo y Pérdida',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXLIRQ1lSH84eAIGsfD-ILJfWHm_AGgTxQu3Z5ooqjwog7TFbSVV0K68jmY58Bzn_3MZwodJvW6STjUxhnwtOEi05n3r137Qy6uHtZD_katXglsekcEPA2vONEy5fbLIdq9ye7ed0VXdwlSGRuxSY6PLensz6QYEMP6uiBBXnFkBGvESFj54YkpOYikzLTuEXPDfTDOxiFxSXSPt-0eSGX_QLLzoLSPIUFu_tKxnPDrJS7t7hbRJvZBaDnpob9G0lJYKN44Dlvaa8'
                }
            ].map((article, idx) => (
                <article key={idx} onClick={() => navigate('/articulo')} className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group flex flex-col h-full hover:border-secondary/30 cursor-pointer">
                    <div className="relative h-56 overflow-hidden rounded-t-xl">
                        <img alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src={article.img} />
                        <div className="absolute top-4 left-4">
                            <span className={`${article.color}/90 text-white text-[10px] px-2 py-1 rounded-md uppercase tracking-wider font-bold shadow-sm`}>{article.tag}</span>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-2 text-secondary font-bold text-xs uppercase tracking-wide">{article.category}</div>
                        <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-3 leading-tight group-hover:text-secondary transition-colors">
                            {article.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
                            {article.desc}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{article.initials}</div>
                                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{article.author}</span>
                            </div>
                            <span className="text-xs text-gray-400 font-medium">{article.date}</span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
        
        <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-white hover:shadow-sm dark:hover:bg-gray-800 transition-all">
                    <span className="material-symbols-outlined text-base">chevron_left</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium shadow-md shadow-primary/20">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-white hover:text-primary hover:shadow-sm dark:hover:bg-gray-800 transition-all">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-white hover:text-primary hover:shadow-sm dark:hover:bg-gray-800 transition-all">3</button>
                <span className="px-2 text-gray-400">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-white hover:shadow-sm dark:hover:bg-gray-800 transition-all">
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                </button>
            </nav>
        </div>
      </section>
    </div>
  );
};

export default Library;