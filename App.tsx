
import React from 'react';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Methodology } from './components/Methodology';
import { FindingsStudents } from './components/FindingsStudents';
import { FindingsStaff } from './components/FindingsStaff';
import { Solution } from './components/Solution';
import { Conclusion } from './components/Conclusion';
import { ArrowDownCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#333]">
      <main>
        <Hero />
        <Introduction />
        <Methodology />
        <FindingsStudents />
        <FindingsStaff />
        <Solution />
        <Conclusion />
      </main>
      <footer className="bg-[#1a237e] text-white text-center p-4">
        <p>&copy; 2025 Grupo de Proyecto ConectAI-JVA. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
