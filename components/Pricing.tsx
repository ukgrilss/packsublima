import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CheckCheck, X, Crown, AlertTriangle, ChevronsDown } from 'lucide-react';

const Pricing: React.FC = () => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect ("Pit para descer") when modal opens
  useEffect(() => {
    let animationFrameId: number;

    if (showUpgradeModal && scrollRef.current) {
      const el = scrollRef.current;
      // Reset scroll to top first
      el.scrollTop = 0;

      let currentScroll = 0;
      const targetScroll = 120; // How much pixels to scroll down
      const speed = 0.8; // "Bem devagar"

      const animateScroll = () => {
        if (currentScroll < targetScroll) {
          currentScroll += speed;
          el.scrollTop = currentScroll;
          animationFrameId = requestAnimationFrame(animateScroll);
        }
      };

      // Small delay before starting the scroll to ensure modal is fully rendered
      const timeoutId = setTimeout(() => {
        animationFrameId = requestAnimationFrame(animateScroll);
      }, 500);

      return () => {
        cancelAnimationFrame(animationFrameId);
        clearTimeout(timeoutId);
      };
    }
  }, [showUpgradeModal]);

  // Features for the Main Card (with Bonus badges logic for the card display)
  const allPremiumFeatures = [
    { text: "1 MILHÃO de Arquivos (+950k Bônus)", isBonus: false },
    { text: "Todos os Nichos do Mercado", isBonus: false },
    { text: "Pack Bônus de Mockups Premium", isBonus: false },
    { text: "Acervo Completo de Vetores", isBonus: false },
    { text: "Acesso Vitalício + Atualizações", isBonus: false },
    { text: "Suporte Prioritário VIP", isBonus: false },
    { text: "Pack Profissional para Canecas", isBonus: true },
    { text: "Pack Profissional para Camisetas", isBonus: true },
    { text: "Pack Artes para Almofadas & Chinelos", isBonus: true },
    { text: "100 MIL ARTES DE TODOS OS NICHOS SEPARADOS", isBonus: true },
    { text: "Mega Pack de Fontes Premium", isBonus: true },
    { text: "Gabaritos de Produtos para Sublimação", isBonus: true }
  ];

  // Specific list for the Upsell Modal (Loss Frame) - FULL LIST, NO BONUS BADGES
  const modalLostFeatures = [
    "1 MILHÃO de Arquivos (+950k)",
    "Todos os Nichos do Mercado",
    "Pack de Mockups Premium",
    "Acervo Completo de Vetores",
    "Acesso Vitalício + Atualizações",
    "Suporte Prioritário VIP",
    "Pack Profissional para Canecas",
    "Pack Profissional para Camisetas",
    "Pack Artes para Almofadas & Chinelos",
    "100 Mil Artes de Todos os Nichos Separados",
    "Mega Pack de Fontes Premium",
    "Gabaritos de Produtos para Sublimação"
  ];

  return (
    <section id="pricing" className="py-20 relative bg-gray-50 overflow-hidden">
      {/* Background Glow - Subtle Yellow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-red-600 text-white text-[10px] md:text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest mb-6 inline-block shadow-lg border-2 border-white ring-2 ring-red-200 animate-pulse"
            >
                Oferta Exclusiva Limitada
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gray-900 drop-shadow-sm">Escolha Seu <span className="text-gold-500 relative inline-block">Poder <span className="absolute bottom-0 left-0 w-full h-2 bg-gold-200/50 -z-10 rounded"></span></span></h2>
            <p className="text-xl text-gray-500 font-light">A diferença brutal entre o amador e o profissional.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch mb-16">
            
            {/* Basic Plan */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-3xl p-8 relative flex flex-col hover:border-gold-300 hover:shadow-2xl transition-all duration-300 shadow-lg"
            >
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-500 mb-2">Plano Básico</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-500">R$</span>
                        <span className="text-6xl font-black text-gray-900 tracking-tighter">9,99</span>
                    </div>
                </div>
                
                <div className="h-px w-full bg-gray-100 mb-8"></div>
                
                <ul className="space-y-4 mb-10 text-gray-600 flex-1">
                    <li className="flex items-center gap-3"><div className="p-1 bg-gray-100 rounded-full"><Check className="w-3 h-3 text-green-600" /></div> 50.000 Artes</li>
                    <li className="flex items-center gap-3"><div className="p-1 bg-gray-100 rounded-full"><Check className="w-3 h-3 text-green-600" /></div> Temas Padrão</li>
                    <li className="flex items-center gap-3"><div className="p-1 bg-gray-100 rounded-full"><Check className="w-3 h-3 text-green-600" /></div> Mockups Básicos</li>
                    <li className="flex items-center gap-3 opacity-50"><X className="w-5 h-5" /> Sem atualizações</li>
                    <li className="flex items-center gap-3 opacity-50"><X className="w-5 h-5" /> Suporte Standard</li>
                </ul>

                <button 
                    onClick={() => setShowUpgradeModal(true)}
                    className="block w-full py-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-600 text-center font-bold hover:bg-gray-100 hover:text-black hover:border-gray-300 transition-all duration-300 cursor-pointer"
                >
                    Quero o Básico (50k)
                </button>
            </motion.div>

            {/* Premium Plan - Red/Dark Theme for Contrast */}
            <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-red-900 to-red-950 border-[3px] border-gold-500 rounded-3xl p-1 relative shadow-[0_20px_50px_-10px_rgba(220,38,38,0.5)] group"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-black text-sm px-8 py-2.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2 z-20 ring-4 ring-white animate-pulse-slow">
                    <Crown size={16} fill="black" /> Recomendado
                </div>

                <div className="bg-transparent rounded-[20px] p-8 h-full flex flex-col relative overflow-hidden">
                    {/* Inner Shine */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-500/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>

                    <div className="mb-8 relative z-10">
                        <h3 className="text-3xl font-bold text-gold-400 mb-2 font-display tracking-tight flex items-center gap-2">ZEUS PREMIUM <Crown size={24} className="text-gold-500" /></h3>
                        <div className="flex items-end gap-3">
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg text-gold-500/80 font-bold">R$</span>
                                <span className="text-7xl font-black text-white tracking-tighter drop-shadow-md">27,90</span>
                            </div>
                            <div className="text-red-300 line-through mb-3 text-2xl font-medium decoration-2 opacity-70">R$ 297</div>
                        </div>
                    </div>
                    
                    <ul className="space-y-5 mb-10 relative z-10 flex-1">
                        {allPremiumFeatures.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white font-medium">
                                <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-1 rounded-full text-black shadow-sm shrink-0">
                                    <CheckCheck className="w-4 h-4" strokeWidth={3} />
                                </div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-lg leading-tight">{item.text}</span>
                                    {item.isBonus && (
                                        <span className="bg-white text-red-700 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider shadow-sm animate-pulse">
                                            BÔNUS
                                        </span>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="bg-black/40 text-gold-300 text-center text-sm py-6 px-4 rounded-xl mb-6 border border-gold-500/30 font-semibold relative z-10 backdrop-blur-sm">
                        🚀 Leve <span className="text-white font-black text-base border-b-2 border-gold-500">2.000% mais conteúdo</span> por uma pequena diferença!
                    </div>

                    <motion.a 
                        href="https://www.ggcheckout.com/checkout/v3/aJDTWMOZdDyAo1OPYA45"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255, 215, 0, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        animate={{ boxShadow: ["0 0 0px rgba(255,215,0,0)", "0 0 20px rgba(255,215,0,0.5)", "0 0 0px rgba(255,215,0,0)"] }}
                        transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                        className="relative z-10 block w-full py-6 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-black font-black text-lg md:text-xl text-center shadow-lg uppercase tracking-wide overflow-hidden group-hover:after:translate-x-full border-2 border-gold-300"
                    >
                         {/* Button Shine effect */}
                        <span className="absolute inset-0 bg-white/30 skew-x-12 -translate-x-full transition-transform duration-1000 ease-in-out group-hover:after:translate-x-full"></span>
                        QUERO O PACOTE COMPLETO
                    </motion.a>
                </div>
            </motion.div>

        </div>
        
        <div className="text-center mb-12">
             {/* Changed to button to trigger modal as well, just in case user clicks the link below columns */}
            <button onClick={() => setShowUpgradeModal(true)} className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors max-w-md mx-auto block leading-relaxed opacity-60 hover:opacity-100 cursor-pointer bg-transparent border-none">
                Não, obrigado. Prefiro pagar R$ 9,99 e levar apenas 1/4 do conteúdo, mesmo sabendo que estou deixando de ganhar muito mais dinheiro com o pacote completo.
            </button>
        </div>

        {/* Guarantee Badge - Custom Image Highlighted */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-12 bg-gradient-to-br from-white via-gold-50/50 to-white border-2 border-gold-200 rounded-3xl max-w-4xl mx-auto shadow-[0_20px_60px_-15px_rgba(255,193,7,0.3)] relative overflow-hidden group hover:border-gold-400 transition-colors duration-500">
            {/* Shine effect */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-400/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>

            <motion.div 
                whileHover={{ scale: 1.05 }}
                className="shrink-0 relative z-10"
            >
                <img 
                    src="https://i.postimg.cc/0N1Lys5b/10002431-Photoroom.png" 
                    alt="Garantia de 7 Dias" 
                    className="w-48 md:w-64 h-auto object-contain drop-shadow-2xl"
                />
            </motion.div>
            
            <div className="text-center md:text-left z-10">
                <h4 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">Garantia Incondicional de 7 Dias</h4>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    Você não corre risco nenhum. Se o conteúdo não for o que você esperava, devolvemos <strong className="text-red-600 bg-red-50 px-1 rounded">100% do seu dinheiro</strong> na hora. Sem perguntas, sem burocracia.
                </p>
            </div>
        </div>

      </div>

      {/* UPGRADE MODAL */}
      <AnimatePresence>
        {showUpgradeModal && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={() => setShowUpgradeModal(false)}
            >
                <motion.div 
                    initial={{ scale: 0.95, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 10 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white border-4 border-red-600 rounded-3xl w-full max-w-2xl shadow-2xl relative flex flex-col max-h-[90vh]"
                >
                    <button 
                        onClick={() => setShowUpgradeModal(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors z-20 bg-gray-100 rounded-full p-2 hover:bg-red-100 hover:text-red-600"
                    >
                        <X size={24} />
                    </button>

                    {/* Header Fixed */}
                    <div className="p-6 md:p-8 pb-4 text-center shrink-0 bg-gradient-to-b from-red-50 to-white rounded-t-2xl">
                        {/* 2000% Badge */}
                        <div className="inline-block bg-gold-400 text-black text-xs md:text-sm font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-md animate-pulse border border-gold-200">
                            VOCÊ ESTÁ REJEITANDO 2.000% A MAIS DE CONTEÚDO
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 text-red-600 text-sm font-bold uppercase tracking-widest mb-2">
                            <AlertTriangle size={16} /> Espere! Atenção
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">
                            Você tem certeza que quer <span className="text-red-600 decoration-red-600 underline underline-offset-4 decoration-4">perder tudo isso?</span>
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg">
                            Por apenas <strong className="text-green-600 font-bold bg-green-50 px-1 rounded">R$ 17,91 a mais</strong>, você desbloqueia o universo inteiro da Coleção Zeus.
                        </p>
                    </div>

                    {/* Content Area */}
                    <div className="px-4 md:px-8 flex-1 min-h-0 flex flex-col overflow-hidden">
                        <div className="bg-gray-50 rounded-2xl border-2 border-gray-200 h-full relative flex flex-col overflow-hidden shadow-inner">
                            <h4 className="text-xs md:text-sm font-bold text-red-600 uppercase tracking-widest p-4 text-center border-b border-gray-200 bg-red-50/50 shrink-0">
                                ITENS QUE SERÃO REMOVIDOS DA SUA CONTA:
                            </h4>
                            
                            {/* Scrollable list with auto-scroll ref */}
                            <div 
                                ref={scrollRef}
                                className="overflow-y-auto px-6 py-5 pb-20 custom-scrollbar flex-1 relative z-0"
                            >
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {modalLostFeatures.map((text, i) => (
                                        <li key={i} className="flex items-center gap-3 w-full opacity-60">
                                            {/* Fixed dimensions, shrink-0, and centered alignment */}
                                            <div className="bg-red-100 w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] flex items-center justify-center rounded-full shrink-0 border border-red-200 grayscale">
                                                <X className="text-red-600 w-3.5 h-3.5" strokeWidth={3} />
                                            </div>
                                            <span className="text-sm text-gray-500 font-medium leading-snug flex-1 break-words">
                                                <span className="line-through decoration-red-400 decoration-2">{text}</span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 text-center md:col-span-2">
                                    <span className="text-xs text-red-500 font-mono uppercase tracking-widest border border-red-200 px-2 py-1 rounded bg-red-50">... e o acesso a novas atualizações</span>
                                </div>
                            </div>

                             {/* Visual Scroll Indicator Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent pointer-events-none flex flex-col items-center justify-end pb-4 z-10">
                                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-1 animate-pulse">Role para ver tudo</span>
                                <ChevronsDown size={20} className="text-gold-500 animate-bounce" />
                            </div>
                        </div>
                    </div>

                    {/* Footer Fixed - Evident & Flashy */}
                    <div className="p-6 md:p-8 flex flex-col gap-4 shrink-0 relative z-20 rounded-b-3xl bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                        <a 
                            href="https://www.ggcheckout.com/checkout/v3/aJDTWMOZdDyAo1OPYA45"
                            className="block w-full py-5 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-black font-black text-xl text-center shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 animate-pulse-slow ring-4 ring-gold-400/30 ring-offset-2 ring-offset-white border border-gold-300"
                        >
                            <Crown size={24} fill="black" />
                            QUERO GARANTIR MEUS 2.000%
                        </a>

                        <a 
                            href="https://www.ggcheckout.com/checkout/v3/QljX6DLGHc1oiHVlFMqn"
                            className="text-center text-xs text-gray-400 hover:text-red-600 underline underline-offset-2 transition-colors opacity-80 hover:opacity-100 font-medium"
                        >
                            Não, obrigado. Quero apenas o pacote básico (50k) por R$ 9,99 e abrir mão do resto.
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Pricing;