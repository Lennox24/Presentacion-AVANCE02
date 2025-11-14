import React from 'react';
import { FileText, Users, BarChart } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { roleData, COLORS } from '../constants';
import { Card } from './Card';

const RADIAN = Math.PI / 180;
// FIX: The type for recharts custom label props can be complex. Using `any` to avoid type errors and simplify the code.
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-20 px-4 md:px-8 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">Metodología de Investigación</h2>
          <p className="text-lg text-[#757575]">
            Para la recolección de datos se utilizó una herramienta digital que permitió obtener información cuantitativa y cualitativa.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#1a237e] text-white p-3 rounded-full"><FileText /></div>
              <div>
                <h3 className="text-xl font-bold text-[#283593]">Tipo de Instrumento</h3>
                <p className="text-[#333]">Se aplicó una <strong>encuesta en línea</strong> a través de Google Forms, segmentada con preguntas específicas para cada perfil de usuario.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#1a237e] text-white p-3 rounded-full"><Users /></div>
              <div>
                <h3 className="text-xl font-bold text-[#283593]">Número de Participantes</h3>
                <p className="text-[#333]">Se recolectaron un total de <strong>40 respuestas</strong> de la comunidad institucional.</p>
              </div>
            </div>
             <div className="flex items-start space-x-4">
              <div className="bg-[#1a237e] text-white p-3 rounded-full"><BarChart /></div>
              <div>
                <h3 className="text-xl font-bold text-[#283593]">Perfil de los Encuestados</h3>
                <p className="text-[#333]">La muestra estuvo compuesta por los tres grupos principales de la comunidad: Estudiantes, Docentes/Coordinadores y Personal Administrativo.</p>
              </div>
            </div>
          </div>
          <Card title="Distribución de Participantes">
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={roleData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {roleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} respuestas`}/>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};