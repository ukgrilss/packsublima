import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, ShieldCheck, Star } from 'lucide-react';

const Hero3D: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tilt effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 40, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 40, damping: 25 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const dragX = (event.clientX - rect.left) - width / 2;
    const dragY = (event.clientY - rect.top) - height / 2;
    x.set(dragX);
    y.set(dragY);
  }

  const rotateX = useTransform(mouseY, [-400, 400], [8, -8]);
  const rotateY = useTransform(mouseX, [-400, 400], [-8, 8]);

  // Função de Scroll Manual Controlado (Cinematográfico) - 3 Segundos
  const scrollToPlans = () => {
    const target = document.getElementById("pricing");
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY - 40;
    const distance = targetY - startY;

    // Duração fixa de 3 segundos
    const duration = 3000; 

    let startTime: number | null = null;
    let isCancelled = false;

    const cancelScroll = () => {
      isCancelled = true;
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchstart", cancelScroll);
      window.removeEventListener("keydown", cancelScroll);
      window.removeEventListener("mousedown", cancelScroll);
    };

    window.addEventListener("wheel", cancelScroll, { passive: true });
    window.addEventListener("touchstart", cancelScroll, { passive: true });
    window.addEventListener("keydown", cancelScroll);
    window.addEventListener("mousedown", cancelScroll);

    const animateScroll = (currentTime: number) => {
      if (isCancelled) return;

      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        cancelScroll();
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white" onMouseMove={handleMouseMove} ref={ref}>
      {/* Background Ambience (Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Yellow/Gold Blob */}
        <div className="absolute top-[-10%] left-[10%] w-[800px] h-[800px] bg-gold-400/20 rounded-full blur-[100px] animate-pulse-slow" />
        {/* Red Blob */}
        <div className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[100px]" />
        
        {/* Grid pattern (Subtle gray for light mode) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mb-8 relative z-20"
        >
          {/* Badge */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-gold-400 bg-gold-50 shadow-[0_0_20px_rgba(255,193,7,0.3)] transition-all hover:scale-105"
          >
            <Star className="w-4 h-4 text-gold-600 fill-gold-600 animate-pulse" />
            <span className="text-gold-700 text-xs md:text-sm font-bold tracking-widest uppercase">Acesso Vitalício • Downloads Ilimitados</span>
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1] mb-6 tracking-tight drop-shadow-2xl text-gray-900">
            Coleção <span className="text-gradient-gold relative inline-block drop-shadow-sm">
              Zeus 2025
              {/* Decorative underline */}
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-gold-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            O Maior Pacote de <strong className="text-black font-extrabold bg-gold-100 px-1 rounded">Artes para Sublimação</strong> do Brasil. 
            <br className="hidden md:block"/> 
            
            <span className="inline-flex items-center gap-3 mt-4 md:mt-0">
               <span className="line-through text-gray-400 decoration-red-500 decoration-2 text-xl">R$ 97,00</span>
               <span className="text-lg text-gray-500">por apenas</span>
               {/* Sticker Effect Price */}
               <span className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <span className="absolute inset-0 bg-gold-400 blur-sm rounded-lg opacity-50"></span>
                  <span className="relative bg-gradient-to-br from-gold-300 to-gold-500 text-red-900 font-black text-4xl md:text-5xl px-4 py-1 rounded-lg shadow-lg border-2 border-white block">
                    R$ 9,99
                  </span>
               </span>
            </span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.button
              type="button"
              onClick={scrollToPlans}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 193, 7, 0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative z-30 px-12 py-6 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-full font-black text-black text-xl md:text-2xl flex items-center gap-3 overflow-hidden shadow-[0_10px_30px_rgba(255,160,0,0.4)] border-2 border-gold-300 cursor-pointer ring-4 ring-gold-100 ring-opacity-50"
            >
              <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 ease-out"></div>
              <span className="relative z-10 tracking-tight drop-shadow-sm">QUERO BAIXAR AGORA</span>
              <Download className="w-7 h-7 animate-bounce relative z-10 stroke-[3px]" />
            </motion.button>
            
            <div className="flex items-center gap-2 text-gray-700 text-sm font-bold bg-white/80 px-5 py-3 rounded-xl border border-gray-200 backdrop-blur-sm shadow-md">
              <ShieldCheck className="w-5 h-5 text-green-600 fill-green-100" />
              <span>Compra 100% Segura</span>
            </div>
          </div>
        </motion.div>

        {/* 3D Product Mockup */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1200 }}
          className="relative w-full max-w-5xl flex items-center justify-center pt-8 z-10"
        >
           {/* Centerpiece: Single Hero Image */}
           <motion.div 
             className="relative z-20 w-full max-w-[900px] rounded-2xl overflow-hidden"
             initial={{ opacity: 0, scale: 0.8, y: 50 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             style={{ 
               transformStyle: "preserve-3d",
               z: 50
             }}
           >
             <img 
              src="https://i.postimg.cc/SNf0FGZp/Generated-Image-December-16-2025-3-36PM.jpg" 
              alt="Coleção Zeus Bundle" 
              className="w-full h-auto object-cover rounded-2xl border-[6px] border-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.4),0_0_20px_rgba(255,193,7,0.2)]" 
             />
           </motion.div>

            {/* Background Rings - Adapted for Light Mode */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border-[2px] border-gold-400/30 rounded-full animate-[spin_60s_linear_infinite]" style={{ transform: 'translate(-50%, -50%) rotateX(70deg)' }}></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] border-[2px] border-red-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'translate(-50%, -50%) rotateX(70deg)' }}></div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;