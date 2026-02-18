import React from 'react';

const Team: React.FC = () => {
  const faculty = [
    {
      name: 'Salvador Morin, BCC',
      title: 'Director de Educación',
      desc: 'Especialista en cuidado espiritual intercultural con más de 15 años de experiencia liderando programas de CPE en entornos hospitalarios de alta complejidad.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCriKaZpQoaXoYy77aFKTikLLPEeM8ptNe4W8H3zonVt0GYifBntqCdKegrBVrxyQfXf8uRRJhtjnZYMf3vzP767H77g4288e_1ey2H_gjTztphuX3DTnDP-aiY_sdYd7Sfk0kQxXjRbVdsZoOCx9v7r7jC0niSYV-9FlzRMK94p3wgGqP9eDJ-gkVKAFOLS87VjkyHklXuwDCX-4vzzjDz0de-iYX0mYWW3dyxydQYw7TxNhdFo9Xpl1Aq9Y7477Hmgtd-8ihd9FA',
      cred: 'BCC - Board Certified Chaplain',
      icon: 'school'
    },
    {
      name: 'Rev. Jorge Espinel, M.Div.',
      title: 'Supervisor Clínico',
      desc: 'Teólogo y educador apasionado por la integración de la psicología y la espiritualidad en la práctica clínica pastoral moderna.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuZ71zX_XSlTYe_IM5F-a_0hIKiaaJH0oirXqKotf-xHb3SU2H3d-oD9NsrTDAU-qvp6hNRl3MN0tBQ5So5bIQeRYyMzytbif4wwedoAvKrDOePuow8pDDlNcECCE9PvNmbmT9L1BjikCrqIKgeyxXi4z56gJYQR5fmTUoRlHnJdBmigPIe9IawZHqAZX7ALNtX1oZDh1XjO6R1o7vo59IzhA3yGpOAlAWJVN_N-Sprt7tyAJhfgcpDxItEgj60j-DX6bmIuQHAco',
      cred: 'M.Div. - Master of Divinity',
      icon: 'psychology'
    },
    {
      name: 'Dr. Esteban Montilla',
      title: 'Profesor Titular',
      desc: 'Autor reconocido en el campo de la consejería familiar y espiritualidad, aportando una perspectiva académica rigurosa a nuestro centro.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC10DYfQxaH9y8TrKAHgNv8VKHlEfeEdN19YHQFLiL78XLtvjERGfk-tXRv20nP0DrfCkNr7WEOjqcYIz3jGwJKoxJQpAQyeNREjnsW21naU1A59fL_GJo9N3KlAlh5BwfMfyD-UcfdyWFMMWH2idKOFs-5b4_Q49zZnZ5HBq8cy9Po77s72jAsYqQk-Z3lTOMgSDiCkfTA46VzIfWclL2EgFqjKLtLBoXrue10T6T4TnNBVDL8HF7VT2bLgzXUDJj-FqKN6gNjp7k',
      cred: 'PhD in Counseling Psychology',
      icon: 'menu_book'
    },
    {
      name: 'Rev. Patricia Berrón',
      title: 'Coordinadora de Programas',
      desc: 'Pionera en el desarrollo de programas de cuidado espiritual para comunidades hispanas, con un enfoque en la justicia social y el empoderamiento.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAn0rsvPrGXgBN22OblIAIHREkwCHWMBTkzKWTdhje_MfCOV3dZjtL64viWswQj1a9NpF0xi50vka2b5fhIniIYPu2nRT9uZkgfRwJWPCDXjGgnoylIELIJrWF5BcmDI6VNqFhkeekt5skYCB094caWJ6vubciZkgI0vAacKXrzunM-ttGiEubm9mBi2EU_1npNPjxQbNXMtAfeNxVWgIesdez1-2Cr6RS1mdc3bzT_bjh8oTaJS8pGGxMXf0g43_gv2gXdl_J5nw',
      cred: 'Certified Educator',
      icon: 'diversity_3'
    }
  ];

  return (
    <>
      <div className="flex flex-col items-center text-center mb-20 pt-12 animate-fade-in-up">
        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4">Excelencia Académica</span>
        <h2 className="text-primary dark:text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">Nuestro Equipo Docente</h2>
        <div className="w-16 h-1 bg-secondary mb-8"></div>
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl font-light leading-relaxed px-4">
          Conozca a los líderes en educación clínica pastoral que guían nuestra misión. Un grupo de expertos dedicados a formar la próxima generación de líderes espirituales con rigor académico y compasión humana.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <div key={index} className="group bg-white dark:bg-surface-dark rounded-none overflow-hidden shadow-soft hover:shadow-lg hover:shadow-secondary/20 transition-all duration-500 border-t-4 border-secondary flex flex-col h-full hover:-translate-y-1">
              <div className="relative overflow-hidden aspect-[3/4] bg-slate-100">
                <img 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter saturate-[0.85] group-hover:saturate-100" 
                  src={member.img} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-1">Credenciales</span>
                  <span className="text-white text-sm font-medium">{member.cred}</span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white dark:bg-surface-dark relative">
                <div className="absolute top-0 right-0 w-10 h-10 bg-gray-50 dark:bg-gray-800 flex items-center justify-center -mt-5 mr-6 border border-gray-100 dark:border-gray-700 shadow-sm z-10 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary dark:text-white group-hover:text-white text-xl">{member.icon}</span>
                </div>
                <div className="mb-4 mt-2">
                  <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-1 group-hover:text-secondary transition-colors">{member.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-medium text-xs uppercase tracking-widest">{member.title}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4 mb-6 flex-grow font-light">
                  {member.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary dark:text-white hover:text-secondary transition-all group/link mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  Ver Trayectoria
                  <span className="material-symbols-outlined text-secondary text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 relative overflow-hidden bg-primary text-white shadow-2xl">
          <div className="relative z-10 grid md:grid-cols-5 items-center">
            <div className="md:col-span-3 p-10 lg:p-16 border-b md:border-b-0 md:border-r border-white/10">
              <h3 className="text-3xl font-display font-bold mb-4">¿Interesado en aprender con nosotros?</h3>
              <p className="text-white/80 text-lg font-light max-w-xl mb-8">
                Nuestros programas de CPE están diseñados para transformar su vocación. Únase a nuestra comunidad de aprendizaje.
              </p>
              <button className="bg-secondary hover:bg-white text-primary font-bold py-3 px-8 rounded-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 uppercase text-xs tracking-widest">
                Ver Programas
              </button>
            </div>
            <div className="md:col-span-2 p-10 lg:p-16 flex flex-col items-center justify-center bg-primary-dark/50">
              <span className="material-symbols-outlined text-secondary text-5xl mb-4">mail_outline</span>
              <p className="text-center text-sm text-white/70 mb-6">¿Tiene preguntas específicas sobre el proceso de admisión?</p>
              <button className="border border-white/30 text-white hover:border-secondary hover:text-secondary font-bold py-3 px-8 rounded-sm transition-colors uppercase text-xs tracking-widest">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;