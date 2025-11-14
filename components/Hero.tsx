
import React from 'react';
import { Sparkles, Users, BookOpen, GraduationCap, Calendar, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#1a237e] to-[#283593] text-white p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 z-0"></div>
      <div className="text-center z-10 animate-fade-in-up">
        <div className="inline-block bg-[#ffc107] text-[#1a237e] p-3 rounded-full mb-6 shadow-lg">
          <Sparkles size={48} />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">ConectAI-JVA</h1>
        <p className="text-xl md:text-2xl text-[#ffecb3] mb-8 max-w-3xl mx-auto">
          Propuesta de Implementación de un Asistente Virtual de IA para la Atención de Consultas sobre Trámites en el Instituto Juan Velasco Alvarado
        </p>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#ffc107] mb-4">Detalles del Proyecto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-lg">
            <div className="flex items-center space-x-3">
              <GraduationCap className="text-[#ffc107]" />
              <span><span className="font-bold">Carrera:</span> Arquitectura de Plataformas y Servicios de T.I.</span>
            </div>
            <div className="flex items-center space-x-3">
              <BookOpen className="text-[#ffc107]" />
              <span><span className="font-bold">U.D.:</span> Actualización y Tecnología</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="text-[#ffc107]" />
              <span><span className="font-bold">Ciclo:</span> VI</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-[#ffc107]" />
              <span><span className="font-bold">Turno:</span> Nocturno</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-[#ffc107]">Presentado por:</h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>Abigail Fajardo</span>
            <span>Raul Huillca</span>
            <span>Diego Lozano</span>
            <span>Lisset Ramos</span>
            <span>Callupe Delgado</span>
          </div>
          <p className="mt-4"><span className="font-bold text-[#ffc107]">Docente:</span> Anthony Francisco Chuan Garcia</p>
        </div>
      </div>
      <div className="absolute bottom-8 text-white z-10 animate-bounce">
        <a href="#introduction" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
        </a>
      </div>
    </section>
  );
};
