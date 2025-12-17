import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const videos = [
  { id: 'j86rfonyn0' } // Single Video
];

// Component to handle individual Wistia video loading and rendering
const WistiaVideoCard = ({ id }: { id: string }) => {
  useEffect(() => {
    // Check if script already exists to avoid duplicates
    const scriptId = `wistia-script-${id}`;
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `https://fast.wistia.com/embed/${id}.js`;
        script.async = true;
        script.type = "module";
        document.body.appendChild(script);
    }
  }, [id]);

  return (
    <div className="w-full h-full relative rounded-xl overflow-hidden shadow-xl bg-gray-100 border border-gray-200 hover:border-gold-400 transition-colors group">
      <style>{`
        wistia-player[media-id='${id}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${id}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 177.78%;
        }
      `}</style>
      <div 
        className="w-full h-full"
        dangerouslySetInnerHTML={{ __html: `<wistia-player media-id="${id}" aspect="0.5625"></wistia-player>` }} 
      />
    </div>
  );
};

const Testimonials: React.FC = () => {
  // Load the main Wistia Player.js only once
  useEffect(() => {
    if (!document.querySelector('script[src*="player.js"]')) {
      const script = document.createElement('script');
      script.src = "https://fast.wistia.com/player.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden relative" id="video-depoimentos">
        {/* Background ambience */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 uppercase text-gray-900">Depoimentos <span className="text-gold-500">Reais</span> de Clientes</h2>
          <p className="text-gray-500 text-lg">Veja o resultado de quem já está lucrando com a Coleção Zeus.</p>
        </div>

        {/* Layout updated to center the single video */}
        <div className="flex justify-center max-w-6xl mx-auto">
            {videos.map((video, idx) => (
                <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                    className="w-full max-w-[320px] aspect-[9/16]"
                >
                    <WistiaVideoCard id={video.id} />
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;