import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Banner: React.FC = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString('pt-BR'));
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-950 via-red-700 to-red-950 text-white text-center py-2.5 px-4 font-bold text-sm md:text-base tracking-wide z-50 relative overflow-hidden border-b border-white/5 shadow-lg">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>
      
      {/* Subtle shine animation overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-100%] animate-shine"></div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="relative z-10 flex items-center justify-center gap-3"
      >
        <span className="bg-white text-red-800 px-2.5 py-0.5 rounded-sm text-[10px] md:text-xs font-black uppercase tracking-wider shadow-sm">Black Friday</span>
        <span className="text-gray-100 drop-shadow-sm">🔥 A oferta só dura até <span className="text-gold-300 underline decoration-gold-400 decoration-2 underline-offset-4">{date}</span>!</span>
      </motion.div>
    </div>
  );
};

export default Banner;