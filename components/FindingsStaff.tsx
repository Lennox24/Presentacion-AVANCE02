import React from 'react';
import { Card } from './Card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { teacherTimeData, adminTimeData, teacherRoleData, teacherMajorData, COLORS } from '../constants';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize="14">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export const FindingsStaff: React.FC = () => {
  return (
    <section id="findings-staff" className="py-20 px-4 md:px-8 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">Resultados Clave: Docentes y Administradores</h2>
          <p className="text-lg text-[#757575]">La carga administrativa representa un desvío significativo de sus funciones principales.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <Card 
              title="Rol Principal de Docentes/Coordinadores"
              question="1. Por favor, indique su rol principal en el instituto:"
            >
              <p className="text-lg mb-4">La muestra de 7 docentes y coordinadores está diversificada, incluyendo roles de gestión y diferentes tipos de contratos.</p>
              <div className="h-80 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                          <Pie 
                            data={teacherRoleData} 
                            dataKey="value" 
                            nameKey="name" 
                            cx="50%" 
                            cy="50%" 
                            outerRadius={110} 
                            label={renderCustomizedLabel}
                            labelLine={false}
                          >
                               {teacherRoleData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                          </Pie>
                          {/* FIX: The `value` from the formatter can be a string or number. Cast to Number to perform arithmetic operation. */}
                          <Tooltip formatter={(value, name) => [`${value} (${((Number(value)/7)*100).toFixed(1)}%)`, name]}/>
                          <Legend />
                      </PieChart>
                  </ResponsiveContainer>
              </div>
            </Card>
             <Card 
                title="Áreas Académicas de Docentes"
                question="2. ¿A qué carrera o carreras pertenece? (Seleccione solo las que lleva)"
             >
                <p className="text-lg mb-4">La mayoría de los docentes encuestados están vinculados a la carrera de <strong>Arq. de Plataformas y Servicios de T.I.</strong>, lo que es coherente con el enfoque del proyecto.</p>
                <div className="h-80 mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={teacherMajorData} layout="vertical" margin={{ top: 5, right: 20, left: 150, bottom: 5 }}>
                            <XAxis type="number" hide />
                            <YAxis type="category" dataKey="name" width={150} tick={{ fill: '#333' }} />
                            <Tooltip formatter={(value) => `${value} menciones`}/>
                            <Bar dataKey="value" name="Nº de Docentes" fill="#283593" barSize={30} label={{ position: 'right', fill: '#333' }} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Card>
            <Card 
              title="Docentes: Tiempo Semanal en Consultas"
              question="3. ...¿Cuánto tiempo le consume esto a la semana?"
            >
                <p className="text-lg mb-4">El <strong>42.9%</strong> dedica entre <strong>1 y 2 horas a la semana</strong> a responder preguntas no pedagógicas, tiempo que podría dedicarse a la enseñanza.</p>
                <div className="h-80 mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={teacherTimeData}>
                            <XAxis dataKey="name" />
                            <YAxis unit="%" />
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Legend />
                            <Bar dataKey="value" name="% de Docentes" fill="#4caf50" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Card>
            <Card 
              title="Administrativos: Tiempo Diario en Consultas"
              question="1. ¿Cuánto tiempo de su jornada laboral estima que dedica a responder consultas básicas...?"
            >
                <p className="text-lg mb-4">El <strong>66.7%</strong> del personal administrativo dedica entre <strong>1 y 2 horas diarias</strong> a responder las mismas consultas básicas, creando un cuello de botella.</p>
                <div className="h-80 mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={adminTimeData}>
                            <XAxis dataKey="name" />
                            <YAxis unit="%" />
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Legend />
                            <Bar dataKey="value" name="% de Admin." fill="#ffc107" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Card>
        </div>
      </div>
    </section>
  );
};