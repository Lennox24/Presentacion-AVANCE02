
import React from 'react';
import { AlertTriangle, Lightbulb, Target } from 'lucide-react';

export const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">Introducción al Problema</h2>
        <p className="text-lg text-[#757575] mb-12">
          El proceso actual de atención de consultas en el Instituto Juan Velasco Alvarado es ineficiente, consume tiempo valioso y genera insatisfacción en la comunidad educativa.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-[#f44336] mr-3" size={32} />
              <h3 className="text-xl font-bold text-[#1a237e]">El Problema</h3>
            </div>
            <p className="text-[#333]">Estudiantes, docentes y personal administrativo invierten una cantidad excesiva de tiempo en consultas repetitivas sobre trámites, horarios y costos, lo que genera cuellos de botella y frustración.</p>
          </div>
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Lightbulb className="text-[#ffc107] mr-3" size={32} />
              <h3 className="text-xl font-bold text-[#1a237e]">La Propuesta</h3>
            </div>
            <p className="text-[#333]">Implementar "ConectAI-JVA", un Asistente Virtual basado en IA, para automatizar y agilizar la resolución de estas consultas frecuentes, disponible 24/7.</p>
          </div>
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Target className="text-[#4caf50] mr-3" size={32} />
              <h3 className="text-xl font-bold text-[#1a237e]">El Objetivo</h3>
            </div>
            <p className="text-[#333]">Validar la existencia del problema, identificar puntos críticos y obtener información clave de los usuarios finales para orientar el diseño y las funcionalidades del prototipo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
