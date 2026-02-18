import React from 'react';

const Article: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1.5 z-50 pointer-events-none">
        <div className="h-full bg-secondary w-[35%] rounded-r-full"></div>
      </div>
      
      <section className="pt-20 pb-12 px-4 sm:px-6 relative overflow-hidden bg-white dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 dark:bg-white/10 text-secondary-dark dark:text-secondary text-xs font-bold uppercase tracking-widest mb-8 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Teología y Cine
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary dark:text-white leading-[1.1] mb-8 tracking-tight font-display">
                Análisis de Cine y Teología:<br/> <span className="text-secondary italic font-medium">A Beautiful Mind</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-secondary p-0.5">
                        <img 
                          alt="Author" 
                          className="object-cover w-full h-full rounded-full" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYO2qgveC13Tm94FPnVKGyeev5qruuuHeaIeO-0OfiMLA00Efgb6vA16zJUhxOzQkxwjsC8kjzMh1VyNQ3VvoYgl9Xn44hoIPMFapuT7rvpHSBooJex_NUlWw4PQxbGlUABqsXveW3nD6buvC2Wo0A5m9ZgheQBZSqumFHUC_FWaOrxJh7LHre6-ek7NlYJARIs9sGPSd9ZzitCdIt8WWT-FPL9JmE7qvVDiCx8XtpmZaOVpQCLww-7nM0yYxmaRkgBQrSOu6xIws"
                        />
                    </div>
                    <div className="text-left font-sans">
                        <p className="text-sm font-bold text-primary dark:text-white leading-none mb-1">Dr. Alejandro Rossi</p>
                        <p className="text-xs text-secondary uppercase tracking-wider">Teólogo Senior</p>
                    </div>
                </div>
                <span className="hidden sm:block w-px h-10 bg-gray-200 dark:bg-gray-700"></span>
                <div className="flex items-center gap-6 font-sans text-sm font-medium">
                    <div className="flex items-center gap-2 text-primary dark:text-white">
                        <span className="material-symbols-outlined text-secondary text-lg">calendar_today</span>
                        <span>14 de Octubre, 2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary dark:text-white">
                        <span className="material-symbols-outlined text-secondary text-lg">schedule</span>
                        <span>12 min de lectura</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 bg-white dark:bg-surface-dark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <aside className="hidden lg:block lg:col-span-1 pt-4">
                <div className="sticky top-32 flex flex-col gap-6 items-center">
                    {['share', 'bookmark', 'print', 'text_fields'].map((icon, i) => (
                        <button key={i} className="p-3 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-primary hover:text-white text-primary dark:text-white transition-colors group relative shadow-sm border border-gray-100 dark:border-gray-700" title="Action">
                            <span className="material-symbols-outlined">{icon}</span>
                        </button>
                    ))}
                </div>
            </aside>
            <article className="col-span-1 lg:col-span-7">
                <figure className="mb-14 rounded-sm overflow-hidden shadow-md">
                    <img 
                        alt="Cinema Light" 
                        className="w-full h-[450px] object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JduqSJ_rZDVvheUAazFVk2R9ByVjzLEsTZUPM_Li2ialqf_pCsDdWw2JkPog0Kiatq3I0-HYKBSk_NVDoq62wQhorR8Ft53GzsIiUNicFptjExIVAgE93NUlSO9AqsEGeO4ZpFevIyPe8RI895pIMn3ci8_m0-2R8aB8IKTQH18cdRgrXXbYmg-CeajHz_3FToz2bj1_2tQX6pv-a5iYsTAhocjpMNWs9xEnzHZN5cyPK-NSL2tQCNVwJOyQgHhznztu5sJpzPU"
                    />
                    <figcaption className="mt-4 text-center text-sm text-gray-500 italic font-serif">
                        Representación de la mente y la percepción en el cine contemporáneo.
                    </figcaption>
                </figure>
                <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:text-primary dark:prose-headings:text-white prose-p:text-primary/90 dark:prose-p:text-gray-300 prose-p:font-serif max-w-none">
                    <p className="first-letter:text-5xl first-letter:float-left first-letter:pr-3 first-letter:text-secondary first-letter:font-serif first-letter:font-bold text-xl leading-relaxed mb-8">
                        En este artículo exploramos las profundas implicaciones teológicas detrás de la aclamada película 'A Beautiful Mind'. La historia de John Nash no es solo una de lucha contra la enfermedad mental, sino también una alegoría de la redención a través del amor incondicional. Al examinar los matices de su narrativa, descubrimos paralelismos sorprendentes con textos antiguos.
                    </p>
                    <h2 className="text-3xl font-bold mt-12 mb-6">La Dualidad de la Mente Humana</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        La película nos invita a cuestionar la naturaleza de nuestra realidad. <span className="bg-secondary/10 px-1 rounded cursor-help border-b border-secondary text-primary dark:text-white font-medium" title="Nash, J. (1994). Essays on Game Theory.">Como Nash sugirió en sus primeros escritos</span>, la percepción es a menudo una construcción frágil. Teológicamente, esto resuena con la idea de la "ceguera espiritual", donde la verdad objetiva está oscurecida por nuestras propias limitaciones internas.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        Es crucial entender que el sufrimiento retratado no es gratuito. Sirve como un crisol para el carácter. La redención no llega a través de la eliminación del dolor, sino a través de la integración del mismo en una narrativa de vida más amplia y significativa.
                    </p>
                    <div className="my-12 pl-8 border-l-4 border-secondary bg-primary/5 dark:bg-white/5 py-8 pr-8 rounded-r-md">
                        <p className="text-2xl italic font-serif text-primary dark:text-white mb-4 leading-relaxed">
                            "La lógica te lleva de A a B. La imaginación te lleva a cualquier parte, pero el amor te da una razón para quedarte."
                        </p>
                        <cite className="text-sm font-bold text-secondary uppercase tracking-widest font-sans not-italic block">— Dr. Alejandro Rossi, Reflexiones sobre Cine</cite>
                    </div>
                    <h2 className="text-3xl font-bold mt-12 mb-6">Redención y Comunidad</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        A diferencia del mito del genio solitario, la recuperación de Nash es profundamente comunitaria. Es el apoyo inquebrantable de su esposa lo que actúa como un ancla a la realidad. Esto refleja la doctrina eclesiológica de que la salvación, aunque personal, se vive y se sostiene en comunidad.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        Podemos trazar tres pilares fundamentales en esta transformación:
                    </p>
                    <ul className="list-none space-y-4 mb-8 pl-4">
                        <li className="flex items-start gap-4">
                            <span className="mt-2 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
                            <span className="text-lg"><strong>Aceptación de la debilidad:</strong> Reconocer la propia fragilidad es el primer paso hacia la gracia.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="mt-2 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
                            <span className="text-lg"><strong>Interdependencia:</strong> La admisión de que necesitamos al "otro" para estar completos.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="mt-2 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
                            <span className="text-lg"><strong>Persistencia en el amor:</strong> El amor como una acción volitiva continua, no solo un sentimiento.</span>
                        </li>
                    </ul>
                </div>
            </article>
            <aside className="col-span-1 lg:col-span-4 space-y-10 pt-4">
                <div className="bg-primary text-white p-8 rounded-sm shadow-xl sticky top-32">
                    <div className="flex items-center gap-3 mb-6 text-secondary">
                        <span className="material-symbols-outlined">lightbulb</span>
                        <h3 className="text-xs font-bold uppercase tracking-widest font-sans">Puntos Clave</h3>
                    </div>
                    <h4 className="text-2xl font-bold mb-6 leading-tight font-display">Key Takeaways</h4>
                    <div className="space-y-6">
                        {[
                           {id: '01', text: 'El sufrimiento mental como alegoría de la ceguera espiritual y la búsqueda de la verdad objetiva.'},
                           {id: '02', text: 'La importancia teológica de la comunidad y el matrimonio como anclas de la realidad.'},
                           {id: '03', text: 'Diferenciación entre ver y percibir en el contexto de la fe y la razón.'}
                        ].map((item) => (
                           <div key={item.id}>
                               <div className="flex gap-4">
                                   <span className="text-secondary font-bold font-sans text-lg">{item.id}</span>
                                   <p className="text-sm text-gray-300 leading-relaxed font-sans">{item.text}</p>
                               </div>
                               {item.id !== '03' && <div className="w-full h-px bg-white/10 my-6"></div>}
                           </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 bg-secondary text-white hover:bg-white hover:text-primary py-3.5 rounded-sm font-bold text-sm uppercase tracking-wide transition-colors flex items-center justify-center gap-2 font-sans">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Descargar PDF Completo
                    </button>
                </div>
                <div className="pl-2 border-l border-gray-100 dark:border-gray-800">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 pl-4">Citaciones Relacionadas</h3>
                    <div className="space-y-6 pl-4">
                        {[
                          { title: 'Teología del Cuerpo y Cine', source: 'Journal of Religion & Film • 2021' },
                          { title: 'La Mente Matemática de Dios', source: 'Augustine Press • 2019' },
                          { title: 'Psicología y Gracia', source: 'Dr. Sarah Miller • 2022' }
                        ].map((cit, i) => (
                          <a key={i} href="#" className="block group">
                              <p className="text-primary dark:text-white font-semibold group-hover:text-secondary transition-colors leading-snug mb-1 font-display text-lg">{cit.title}</p>
                              <p className="text-xs text-gray-500 font-sans uppercase tracking-wide">{cit.source}</p>
                          </a>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
      </div>
      
      <section className="bg-gray-50 dark:bg-black/20 border-t border-gray-200 dark:border-gray-800 py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                <div>
                    <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block font-sans">Siguiente Lectura</span>
                    <h3 className="text-4xl font-bold text-primary dark:text-white font-display">Continuar Explorando</h3>
                </div>
                <a href="#" className="text-sm font-bold text-primary dark:text-white hover:text-secondary transition-colors flex items-center gap-2 font-sans uppercase tracking-wide">
                    Ver todo el archivo
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { 
                    tag: 'Serie Especial', 
                    title: '27 Noches: Un Viaje a Través del Silencio', 
                    desc: 'Una colección de ensayos sobre la soledad y la contemplación en el mundo moderno.', 
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCurhw9icQ_OAKwqpAHmX5Jo0Y6y-Vkxof4CxP5cL4jkwqbsWgG3A_4ag9Y452S7jO4QZuLb7glkRvr8C2n2mZLyU71QR02TopDEu6UpTyR3aAZkR78LMoltfDtWwwAPp6Tbh-2lUe1ckpuwExoaNcjsknzXds6h-tnv-49sshk03SVEQTOnQGANHFO1Z6dOxpQlgbWRyK0M9s7VG7AbWow19KuGwi6HmntrlM8AIUS9EUcx3g5Sb2dFCVofm-0iCKJ5kVwFctwFD0' 
                  },
                  { 
                    tag: 'Ética', 
                    title: 'El Dilema de la Inteligencia Artificial', 
                    desc: '¿Puede una máquina tener alma? Explorando los límites de la creación humana.', 
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKRJW0vVTb-cbixq4MRZs9aUMvuhIG1YRI94L7o_npKAhAvyiCeURN4H4UQBgoFcmGRt8iF3mT1qp9HH07xAcS0Rg3a9taHKlcQWmeCGbnxp9sn6JTwwJjSrxDY6biYmlCK58Lzr-jW1QQcR4FT0-qZrblaXzIPkjsWKm9Z0QW9J5LGWhuaeUglxkcxEaoex2eWVjrrkjjXwR3VQGVu1eEp3NADNxreiOpx4KV1qj-tOFcI82qzbd-qe9KAsXy4A_EhhJH52hUmzI' 
                  },
                  { 
                    tag: 'Cine', 
                    title: 'Simbolismo en el Cine de Tarkovsky', 
                    desc: 'Análisis visual de El Espejo y sus referencias bíblicas.', 
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_9XYLOqSB77zWNRFtAFpSZ1DrvLySwF0ExoWkBZqxXlmMp_MlZRctCVxR4oCeLg7t1F55qq61ClCj1GDePC1A6rmq0Ji278nccXLDIZNSlOUAkCc46hVKo-HdfOt2HQzNJSZX_I-MzS358boh63uRwpuZu8SEklFBBa7Ex2v-k11909K-BkqCa7bqR1v2PjITTePE_qM9tsHGTjLpnjjQxwXVCykwY7JC8jlRzlMsJrezFlLI67970d9PlC66dtSls20UlwNb04' 
                  }
                ].map((item, idx) => (
                   <a key={idx} href="#" className="group flex flex-col gap-4">
                       <div className="aspect-[4/3] rounded-sm overflow-hidden bg-gray-200 relative shadow-sm">
                           <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                           <img alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src={item.img} />
                       </div>
                       <div className="flex flex-col gap-2">
                           <span className="text-xs font-bold text-secondary uppercase tracking-widest font-sans">{item.tag}</span>
                           <h4 className="text-xl font-bold text-primary dark:text-white leading-snug group-hover:text-secondary transition-colors font-display">{item.title}</h4>
                           <p className="text-sm text-gray-500 font-serif line-clamp-2">{item.desc}</p>
                       </div>
                   </a>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default Article;