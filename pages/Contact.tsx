import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from('contact_requests')
        .insert([{
          name: formData.name,
          email: formData.email,
          profession: formData.profession,
          message: formData.message,
          privacy_accepted: formData.privacy
        }]);

      if (dbError) throw dbError;

      await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          profession: formData.profession,
          message: formData.message,
          privacy: formData.privacy
        }
      });

      navigate('/success');
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar tu solicitud. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Contact background"
          className="w-full h-full object-cover opacity-10 dark:opacity-5 filter blur-[2px]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYB8m8eWJb_WtBgKBUZwEGeYPx--Zr18IFdd9fgBSNm_DqmGNzPQfqMefvynxwZtqHUBaFR64xKx6Ni8Hrfe_eTK7OepiKiUvFQtNqMd51Y_AvbRHZIZ1tDASV00gEZqBJ_s3wCVvLcFynYZa63nl13RaPd9-LDIooQFdTNgox5P-MmVHbRUSQMVnHFXt3SHJx6g-gTA8yq5EZEnDfFKyuS5qKHJOQzpSmvVuK5eIc4eEoN8KipMNL0WPyG0nTS4WSGo_kDjp35gk"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-light/50 to-background-light/80 dark:from-background-dark/80 dark:to-background-dark/95"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 dark:border-gray-800 animate-fade-in">

          <div className="w-full lg:w-5/12 p-8 lg:p-12 bg-primary text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full border border-white/10"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 rounded-full bg-secondary/20 blur-2xl"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 leading-tight">Hablemos sobre tu vocación</h2>
                <p className="text-gray-200 text-lg mb-8 leading-relaxed font-light">
                  El primer paso es una entrevista de admisión. Queremos conocerte, entender tu camino y explorar cómo nuestros programas pueden acompañar tu desarrollo espiritual y clínico.
                </p>
                <div className="space-y-6 mt-12">
                  {[
                    { icon: 'mail', title: 'Correo Electrónico', val: 'contacto@espiritualidadclinica.org' },
                    { icon: 'location_on', title: 'Ubicación', val: 'Av. Providencia 1234, Of. 605\nSantiago, Chile' },
                    { icon: 'schedule', title: 'Horario de Atención', val: 'Lunes a Viernes: 09:00 - 18:00' }
                  ].map((info, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="material-symbols-outlined text-secondary">{info.icon}</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">{info.title}</p>
                        <p className="mt-1 text-base text-white whitespace-pre-line">{info.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 lg:mt-0 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 italic">"La escucha profunda es el comienzo de la sanación."</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 p-8 lg:p-12 bg-white dark:bg-surface-dark">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-2">Solicitar Entrevista</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">Por favor completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre Completo</label>
                    <div className="mt-1">
                      <input
                        type="text" name="name" id="name" required
                        value={formData.name} onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-secondary focus:border-secondary border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Correo Electrónico</label>
                    <div className="mt-1">
                      <input
                        type="email" name="email" id="email" required
                        value={formData.email} onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-secondary focus:border-secondary border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md"
                        placeholder="tu@correo.com"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="profession" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Profesión / Ocupación</label>
                    <div className="mt-1">
                      <input
                        type="text" name="profession" id="profession"
                        value={formData.profession} onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-secondary focus:border-secondary border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md"
                        placeholder="Psicólogo, Médico, Consejero, etc."
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje o Motivación</label>
                    <div className="mt-1">
                      <textarea
                        id="message" name="message" rows={4}
                        value={formData.message} onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-secondary focus:border-secondary border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md"
                        placeholder="Cuéntanos brevemente por qué te interesa contactarnos..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2 flex items-center">
                    <input
                      id="privacy" name="privacy" type="checkbox" required
                      // checked={formData.privacy} onChange={handleChange}
                      className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-500 dark:text-gray-400">
                      Acepto ser contactado para coordinar la entrevista.
                    </label>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary hover:bg-[#b09353] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all transform hover:scale-[1.01] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                    {!isSubmitting && <span className="material-symbols-outlined ml-2 text-sm leading-none">send</span>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;