import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Image, PenTool, Palette, Gamepad2, Tv, Trophy, Sparkles } from 'lucide-react';

const software = [
  { name: 'Photoshop', icon: <Layers className="w-7 h-7" />, ext: 'PSD', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-100' },
  { name: 'CorelDraw', icon: <PenTool className="w-7 h-7" />, ext: 'CDR', color: 'text-green-700', bg: 'bg-green-50 border-green-100' },
  { name: 'Illustrator', icon: <Palette className="w-7 h-7" />, ext: 'AI', color: 'text-orange-700', bg: 'bg-orange-50 border-orange-100' },
  { name: 'PNG (Sem Fundo)', icon: <Image className="w-7 h-7" />, ext: 'PNG', color: 'text-purple-700', bg: 'bg-purple-50 border-purple-100' },
];

const categories = [
  { name: 'Artes Cristãs', icon: <Sparkles size={28} /> },
  { name: 'Heróis & Vilões', icon: <Gamepad2 size={28} /> },
  { name: 'Futebol', icon: <Trophy size={28} /> },
  { name: 'Filmes & Séries', icon: <Tv size={28} /> },
  { name: 'Infantil', icon: <Palette size={28} /> },
  { name: 'Streetwear', icon: <Layers size={28} /> },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Texture - Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_0%,#f3f4f6_100%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Software Compatibility Strip */}
        <div className="mb-24">
            <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-px w-16 bg-gray-300"></div>
                <h3 className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold">Compatibilidade Total</h3>
                <div className="h-px w-16 bg-gray-300"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
                {software.map((soft, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group flex items-center gap-5 px-6 py-6 bg-white border border-gray-200 rounded-2xl hover:border-gold-400 hover:ring-2 hover:ring-gold-100 hover:shadow-xl transition-all duration-300 w-full md:w-[280px] shadow-[0_5px_20px_-10px_rgba(0,0,0,0.1)]"
                    >
                        <div className={`p-4 rounded-xl border ${soft.bg} ${soft.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-sm`}>
                            {soft.icon}
                        </div>
                        <div>
                            <div className="font-bold text-gray-900 text-xl group-hover:text-gold-600 transition-colors">{soft.name}</div>
                            <div className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-0.5 rounded inline-block mt-1 border border-gray-200 font-bold">{soft.ext}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Main Categories */}
        <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gray-900 drop-shadow-sm">Tudo em <span className="text-gradient-gold">Um Só Lugar</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">Não perca mais tempo procurando. Cubra todos os nichos mais <strong className="text-black bg-gold-200/50 px-1">lucrativos</strong> do mercado.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {categories.map((cat, idx) => (
                <motion.div
                    key={idx}
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="aspect-[4/5] relative group overflow-hidden rounded-2xl border-2 border-gray-100 bg-white hover:border-gold-400 hover:shadow-[0_10px_30px_-10px_rgba(255,193,7,0.3)] transition-all duration-300 cursor-default flex flex-col items-center justify-center p-6 shadow-sm"
                >
                    <motion.div 
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                        className="p-6 bg-gradient-to-br from-gold-50 to-white rounded-full mb-5 text-gold-600 border border-gold-200 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-400 transition-colors shadow-inner"
                    >
                        {cat.icon}
                    </motion.div>
                    <span className="font-bold text-sm md:text-base text-gray-700 tracking-wide group-hover:text-black transition-colors text-center uppercase">{cat.name}</span>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Features;