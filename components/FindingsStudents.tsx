import React from 'react';
import { Card } from './Card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { studentSatisfactionData, studentTimeData, studentMajorData, COLORS } from '../constants';
import { Clock, Frown, BookMarked } from 'lucide-react';

export const FindingsStudents: React.FC = () => {
  return (
    <section id="findings-students" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">Resultados Clave: Estudiantes (30 Respuestas)</h2>
          <p className="text-lg text-[#757575]">Análisis de los principales puntos de dolor y percepciones del alumnado.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            title="Tiempo Invertido por Consulta" 
            question="3. ¿Cuánto tiempo dedica en promedio a cada consulta presencial (incluyendo traslado y espera)?"
            className="lg:col-span-1"
          >
            <div className="flex items-center text-5xl font-bold text-[#283593] mb-4">
              <Clock className="mr-4" size={48} />
              <span>~57%</span>
            </div>
            <p className="text-lg mb-4">De los estudiantes dedica entre <strong>30 y 60 minutos</strong> por consulta presencial.</p>
            <p className="text-lg text-[#f44336] font-semibold">Un 23.3% invierte entre 1 y 2 horas.</p>
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={studentTimeData} layout="vertical" margin={{ top: 5, right: 20, left: 50, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={100} tick={{ fill: '#333' }}/>
                  <Tooltip formatter={(value) => `${value}%`}/>
                  <Bar dataKey="value" fill="#283593" barSize={30} label={{ position: 'right', fill: '#333' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card 
            title="Nivel de Satisfacción Actual" 
            question="5. En una escala del 1 al 5..., ¿Cómo calificaría el actual sistema de información?"
            className="lg:col-span-2"
          >
             <div className="flex items-center text-5xl font-bold text-[#f44336] mb-4">
               <Frown className="mr-4" size={48} />
              <span>90%</span>
            </div>
            <p className="text-lg mb-4">Un <strong>50%</strong> califica el sistema con <strong>2/5</strong> y un <strong>40%</strong> con <strong>3/5</strong>. La insatisfacción es clara.</p>
            <p className="text-lg">Ningún estudiante lo calificó como "muy satisfecho" (5/5).</p>
            <div className="h-64 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={studentSatisfactionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="rating" tickFormatter={(tick) => `${tick} ★`} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" name="Nº de Estudiantes" fill="#ff9800" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
          </Card>
          
          <Card 
            title="Carreras de Estudiantes Encuestados" 
            question="1. ¿A qué carrera pertenece?"
            className="lg:col-span-3"
          >
             <div className="flex items-center text-5xl font-bold text-[#1a237e] mb-4">
               <BookMarked className="mr-4" size={48} />
              <span>73.3%</span>
            </div>
            <p className="text-lg mb-4">La gran mayoría de los estudiantes encuestados (73.3%) pertenecen a <strong>Arquitectura de Plataformas y Servicios de T.I.</strong></p>
            <div className="h-80 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={studentMajorData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
                             {studentMajorData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        {/* FIX: The `value` from the formatter can be a string or number. Cast to Number to perform arithmetic operation. */}
                        <Tooltip formatter={(value, name) => [`${value} (${((Number(value)/30)*100).toFixed(1)}%)`, name]}/>
                        <Legend wrapperStyle={{fontSize: '14px'}}/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};