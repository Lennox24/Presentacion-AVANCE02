
import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  question?: string;
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, question, children, className }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col ${className}`}>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-[#1a237e] mb-2 border-b-2 border-[#ffc107] pb-2">{title}</h3>
        {question && <p className="text-sm text-[#757575] italic mt-1 mb-3">{question}</p>}
        <div className="text-[#333] flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};
