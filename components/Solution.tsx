
import React from 'react';
import { Card } from './Card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import { willingnessData, essentialFeaturesData, COLORS } from '../constants';

export const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">La Solución: Alta Aceptación y Requisitos Clave</h2>
          <p className="text-lg text-[#757575]">Los datos revelan una alta receptividad hacia una solución tecnológica y definen sus características esenciales.</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Card 
              title="Disposición a Usar Asistente Virtual"
              question="6. ¿Estaría dispuesto a utilizar un asistente virtual institucional que responda consultas las 24 horas?"
            >
              <p className="text-lg mb-4">Un abrumador <strong>93.4%</strong> de los estudiantes está dispuesto a usar un asistente virtual, demostrando una clara necesidad y apertura a la innovación.</p>
              <div className="h-80 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={willingnessData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} label>
                       {willingnessData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <Card 
              title="Características Esenciales Demandadas"
              question="7. ¿Qué características consideraría esenciales en un asistente virtual? (Marque máximo 3)"
            >
              <p className="text-lg mb-4">La velocidad y la simplicidad son los factores críticos que determinarán el éxito y la adopción de la herramienta. La demanda principal es clara:</p>
              <div className="h-96 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={essentialFeaturesData} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                    <XAxis type="number" unit="%" />
                    <YAxis type="category" dataKey="name" width={150} tick={{ fill: '#333' }} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="value" fill="#1a237e" barSize={25} label={{ position: 'right', fill: '#333' }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
