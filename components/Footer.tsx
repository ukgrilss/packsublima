import React from 'react';
import { Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-950 py-12 border-t border-red-900 relative overflow-hidden">
        {/* Decorative footer glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-800/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid md:grid-cols-3 gap-12 pt-8 text-center md:text-left">
            <div>
                <h5 className="text-white font-display font-bold text-xl mb-4">Coleção Zeus</h5>
                <p className="text-red-200/60 text-sm mb-6">
                    A maior e mais completa biblioteca de recursos gráficos para sublimação do Brasil. Elevando o nível do seu negócio.
                </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
                <h5 className="text-white font-bold mb-4">Links Úteis</h5>
                <div className="flex flex-col gap-2 text-sm text-red-200/60">
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                    <a href="#" className="hover:text-white transition-colors">Suporte</a>
                </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
                <div className="flex items-center gap-2 text-red-200/50 text-xs mb-4">
                    <Lock size={14} /> Site Seguro (SSL)
                </div>
                <p className="text-red-200/40 text-xs">&copy; 2025 Coleção Zeus.<br/>Todos os direitos reservados.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;