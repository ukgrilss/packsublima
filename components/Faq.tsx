import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  { question: "Quantas artes vêm no pacote?", answer: "O pacote Básico contém 50.000 artes. O pacote Premium (Zeus) contém mais de 1 MILHÃO de arquivos editáveis, cobrindo praticamente todos os nichos do mercado." },
  { question: "Funciona no Photoshop, Corel e Illustrator?", answer: "Sim! Temos arquivos compatíveis com todos os principais softwares: PSD (Photoshop), CDR (CorelDraw), AI (Illustrator) e PNG com fundo transparente para uso universal." },
  { question: "O acesso é imediato após o pagamento?", answer: "Sim! Assim que o pagamento for confirmado, nosso sistema envia automaticamente os dados de acesso para o seu e-mail cadastrado. É instantâneo." },
  { question: "Precisa pagar mensalidade?", answer: "Não! O pagamento é ÚNICO. Você paga uma vez e tem acesso vitalício ao material, incluindo as atualizações futuras do pacote Premium." },
  { question: "E se eu não gostar do material?", answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que não valeu a pena, devolvemos 100% do seu dinheiro. O risco é todo nosso." },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col items-center mb-10">
            <div className="p-3 bg-gray-100 rounded-full mb-6">
                <HelpCircle className="text-gold-500 w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900">Dúvidas <span className="text-gold-500">Frequentes</span></h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className={`border rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'border-gold-400 shadow-md bg-white' : 'bg-gray-50 border-gray-200 hover:border-gray-300'}`}>
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg transition-colors ${activeIndex === index ? 'text-black' : 'text-gray-700'}`}>{item.question}</span>
                <div className={`p-1 rounded-full transition-all ${activeIndex === index ? 'bg-gold-500 text-black rotate-180' : 'bg-gray-200 text-gray-500'}`}>
                     <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 text-base">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;