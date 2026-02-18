import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary min-h-[600px] lg:h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
            alt="Medical team background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="inline-block py-1 px-3 rounded bg-primary-light border border-gray-600 text-gray-300 text-xs font-bold tracking-widest uppercase mb-6">
            Estándares CPSP Internacional
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Centro de<br />
            <span className="text-secondary">Espiritualidad Clínica</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed">
            Integramos el modelo biopsicosocial y la espiritualidad profunda para formar capellanes clínicos competentes. Un espacio académico donde la ciencia y el alma convergen.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-secondary hover:bg-secondary-dark text-primary font-bold px-8 py-3 rounded text-sm uppercase tracking-wide flex items-center gap-2 transition-colors">
              Ver Programa CPE
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <button 
              onClick={() => navigate('/equipo')}
              className="bg-transparent border border-gray-500 hover:border-white text-white px-8 py-3 rounded text-sm uppercase tracking-wide transition-colors"
            >
              Conocer al Equipo
            </button>
          </div>
          
          <div className="mt-16 flex gap-12 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-display font-bold text-white">400</p>
              <p className="text-[10px] text-secondary uppercase tracking-widest font-bold">Horas por unidad</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white">100%</p>
              <p className="text-[10px] text-secondary uppercase tracking-widest font-bold">Acreditado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Nuestra Audiencia</span>
            <h2 className="text-4xl font-display font-bold text-primary dark:text-white mt-3 mb-4">A Quién Servimos</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Formación especializada diseñada para líderes que buscan integrar la espiritualidad en el cuidado integral de la salud.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'stethoscope', title: 'Profesionales de Salud', desc: 'Médicos, enfermeras y terapeutas que desean integrar herramientas espirituales en su práctica clínica diaria.' },
              { icon: 'diversity_3', title: 'Consejeros Espirituales', desc: 'Líderes religiosos y pastores que buscan profesionalizar su vocación mediante estándares clínicos rigurosos.' },
              { icon: 'volunteer_activism', title: 'Cuidadores', desc: 'Personas dedicadas al cuidado paliativo o de largo plazo, buscando resiliencia y técnicas de acompañamiento.' },
              { icon: 'school', title: 'Estudiantes', desc: 'Seminaristas y estudiantes de teología que requieren completar sus horas de práctica clínica supervisada.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-surface-dark p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 text-primary dark:text-white">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-primary dark:text-white mb-3 font-display">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#161c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-display font-bold text-primary dark:text-white mb-4">Competencias Fundamentales</h2>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                Nuestro currículo se basa en pilares esenciales para el desarrollo de una identidad pastoral clínica robusta y ética.
              </p>
            </div>
            <div className="hidden lg:block w-32 h-px bg-gray-200 dark:bg-gray-700 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: 'public', title: 'Humildad Cultural', desc: 'Capacidad para relacionarse efectivamente con personas de diversas culturas y trasfondos de fe.' },
               { icon: 'psychology', title: 'Modelo Biopsicosocial', desc: 'Integración de factores biológicos, psicológicos y sociales en la evaluación espiritual.' },
               { icon: 'medical_services', title: 'Competencia Clínica', desc: 'Dominio de la ética clínica, documentación profesional y colaboración interdisciplinaria.' },
               { icon: 'favorite', title: 'Atención Centrada', desc: 'Enfoque terapéutico centrado en la persona, priorizando sus valores y necesidades únicas.' }
             ].map((comp, i) => (
               <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 bg-primary/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-primary dark:text-secondary">
                    <span className="material-symbols-outlined text-xl">{comp.icon}</span>
                  </div>
                  <h3 className="font-bold text-primary dark:text-white mb-2">{comp.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{comp.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Academic Program Dark Section */}
      <section className="py-24 bg-primary dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block py-1 px-3 bg-white/10 rounded text-[10px] font-bold tracking-widest uppercase mb-4 text-secondary">Programa Académico</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Educación Clínica Pastoral (CPE)</h2>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                Nuestro programa está diseñado bajo los estándares rigurosos del <span className="text-secondary">College of Pastoral Supervision and Psychotherapy (CPSP)</span>. 
                Cada unidad ofrece una inmersión profunda en la práctica clínica supervisada.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  { title: '400 Horas Totales', desc: 'Divididas en práctica clínica, didácticas y supervisión grupal e individual.', icon: 'check_circle' },
                  { title: 'Supervisión Clínica', desc: 'Reflexión teológica profunda sobre los encuentros clínicos reales.', icon: 'groups' },
                  { title: 'Certificación Progresiva', desc: 'Unidades 1, 2, 3 y 4 disponibles para avanzar hacia la certificación de Board.', icon: 'verified' }
                ].map((feat, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-sm">{feat.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{feat.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{feat.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button className="bg-secondary hover:bg-secondary-dark text-primary font-bold px-8 py-3 rounded text-sm uppercase tracking-wide">
                Descargar Plan de Estudios
              </button>
            </div>

            <div className="bg-primary-dark/50 p-8 lg:p-12 rounded-2xl border border-white/5">
               <h3 className="text-2xl font-display font-bold mb-8">Próximas Fechas</h3>
               
               <div className="space-y-6">
                  <div className="flex gap-4 items-center p-4 bg-white/5 rounded-lg border border-white/5 hover:border-secondary/30 transition-colors cursor-pointer">
                    <div className="w-14 h-14 bg-primary-dark rounded flex flex-col items-center justify-center border border-white/10">
                      <span className="text-[10px] uppercase tracking-wider text-secondary">Sep</span>
                      <span className="text-xl font-bold">15</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Unidad de Otoño - Intensivo</h4>
                      <p className="text-xs text-gray-400">Modalidad Híbrida • 12 Semanas</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center p-4 bg-white/5 rounded-lg border border-white/5 hover:border-secondary/30 transition-colors cursor-pointer">
                    <div className="w-14 h-14 bg-primary-dark rounded flex flex-col items-center justify-center border border-white/10">
                      <span className="text-[10px] uppercase tracking-wider text-secondary">Ene</span>
                      <span className="text-xl font-bold">10</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Unidad de Primavera</h4>
                      <p className="text-xs text-gray-400">Modalidad Online • 20 Semanas</p>
                    </div>
                  </div>
               </div>

               <div className="mt-8 pt-8 border-t border-white/5 text-center">
                 <p className="text-secondary italic font-serif text-sm">"La educación clínica no se trata solo de aprender habilidades, sino de transformar el ser."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-primary dark:text-white mb-4">Nuestro Cuerpo Docente</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 font-light">
            Supervisores diplomados y clínicos con décadas de experiencia en el acompañamiento espiritual y la psicoterapia.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                name: 'Salvador Morin', 
                role: 'Diplomate Supervisor, CPSP', 
                desc: 'Especialista en trauma y resiliencia espiritual con más de 20 años de experiencia clínica.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCriKaZpQoaXoYy77aFKTikLLPEeM8ptNe4W8H3zonVt0GYifBntqCdKegrBVrxyQfXf8uRRJhtjnZYMf3vzP767H77g4288e_1ey2H_gjTztphuX3DTnDP-aiY_sdYd7Sfk0kQxXjRbVdsZoOCx9v7r7jC0niSYV-9FlzRMK94p3wgGqP9eDJ-gkVKAFOLS87VjkyHklXuwDCX-4vzzjDz0de-iYX0mYWW3dyxydQYw7TxNhdFo9Xpl1Aq9Y7477Hmgtd-8ihd9FA' 
              },
              { 
                name: 'Dr. Esteban Montilla', 
                role: 'Director Ejecutivo, CPSP', 
                desc: 'Autor y conferencista internacional sobre la integración de la psicología y la teología.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC10DYfQxaH9y8TrKAHgNv8VKHlEfeEdN19YHQFLiL78XLtvjERGfk-tXRv20nP0DrfCkNr7WEOjqcYIz3jGwJKoxJQpAQyeNREjnsW21naU1A59fL_GJo9N3KlAlh5BwfMfyD-UcfdyWFMMWH2idKOFs-5b4_Q49zZnZ5HBq8cy9Po77s72jAsYqQk-Z3lTOMgSDiCkfTA46VzIfWclL2EgFqjKLtLBoXrue10T6T4TnNBVDL8HF7VT2bLgzXUDJj-FqKN6gNjp7k' 
              },
              { 
                name: 'Dra. Maria Elena', 
                role: 'Coordinadora Clínica', 
                desc: 'Experta en cuidados paliativos y ética biomédica aplicada a la capellanía.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAn0rsvPrGXgBN22OblIAIHREkwCHWMBTkzKWTdhje_MfCOV3dZjtL64viWswQj1a9NpF0xi50vka2b5fhIniIYPu2nRT9uZkgfRwJWPCDXjGgnoylIELIJrWF5BcmDI6VNqFhkeekt5skYCB094caWJ6vubciZkgI0vAacKXrzunM-ttGiEubm9mBi2EU_1npNPjxQbNXMtAfeNxVWgIesdez1-2Cr6RS1mdc3bzT_bjh8oTaJS8pGGxMXf0g43_gv2gXdl_J5nw' 
              }
            ].map((prof, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                  <img src={prof.img} alt={prof.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-1">{prof.name}</h3>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-3">{prof.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs">{prof.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;