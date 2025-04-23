import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

const TechCard = ({ title, description, Icon, color }) => {
  return (
    <div className="w-full md:w-80 h-auto aspect-[3/4] bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-6 flex flex-col justify-between text-white shadow-lg transition-all duration-300 hover:bg-white/15 hover:scale-105">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-full ${color} bg-opacity-20`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <p className="text-white/90 leading-relaxed flex-grow mb-4">
        {description}
      </p>

      <div className="flex justify-end">
        <span className="text-xs uppercase tracking-wider opacity-60">Learn more</span>
      </div>
    </div>
  );
};

export default TechCard;
