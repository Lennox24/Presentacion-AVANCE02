
import React from 'react';
import { CheckCircle, Users, BarChart, HardDrive } from 'lucide-react';

export const Conclusion: React.FC = () => {
  return (
    <section id="conclusion" className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#1a237e] to-[#283593] text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conclusiones del Avance</h2>
          <p className="text-lg text-[#ffecb3]">
            La fase de recolección y análisis de datos permite extraer hallazgos concretos que guiarán el desarrollo del proyecto.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex items-start space-x-4">
            <CheckCircle className="text-[#4caf50] mt-1 flex-shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold text-[#ffc107]">1. Validación del Problema</h3>
              <p className="text-lg">Se confirma que la gestión manual de consultas es un proceso ineficiente que afecta negativamente a toda la comunidad educativa, generando cuellos de botella y frustración.</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex items-start space-x-4">
            <Users className="text-[#4caf50] mt-1 flex-shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold text-[#ffc107]">2. Alta Aceptación de la Solución</h3>
              <p className="text-lg">Existe una disposición muy favorable (superior al 90% en estudiantes) para adoptar una solución tecnológica como el Asistente Virtual.</p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex items-start space-x-4">
            <BarChart className="text-[#4caf50] mt-1 flex-shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold text-[#ffc107]">3. Prioridad en la Inmediatez y Simplicidad</h3>
              <p className="text-lg">La velocidad de respuesta ("Respuestas inmediatas" 86.7%) y una interfaz intuitiva ("Interfaz sencilla" 66.7%) son los requisitos funcionales más importantes para los usuarios finales.</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg flex items-start space-x-4">
            <HardDrive className="text-[#ffc107] mt-1 flex-shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold text-[#ffc107]">Orientación para el Diseño del Prototipo</h3>
              <p className="text-lg">Se deberá priorizar el desarrollo de una base de conocimiento enfocada en los trámites más consultados (matrículas, costos, horarios y titulación). El diseño de la interfaz se centrará en la simplicidad y la accesibilidad para asegurar una experiencia de usuario positiva.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
