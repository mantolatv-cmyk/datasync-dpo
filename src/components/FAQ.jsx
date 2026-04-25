import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Shield, Zap, Clock, Users } from 'lucide-react';

const faqData = [
  {
    question: "O que define o DPOaaS da DataSync?",
    answer: "É um serviço de altíssima qualidade técnica e estratégica focado exclusivamente no ecossistema SaaS. Entregamos um Encarregado de Dados (DPO) que fala a língua do seu produto, garantindo que a conformidade seja um acelerador, não um gargalo.",
    icon: <Users className="text-accent-cyan" size={20} />
  },
  {
    question: "Como é garantida a independência nas auditorias?",
    answer: "Atuamos como um parceiro externo especializado. Essa independência é vital para garantir que as auditorias sejam imparciais, eliminando conflitos de interesse internos e aumentando a confiança perante investidores e grandes clientes B2B.",
    icon: <Shield className="text-accent-cyan" size={20} />
  },
  {
    question: "Privacidade gera lucro ou é apenas um custo?",
    answer: "Privacidade gera lucro real. Ao estruturarmos o seu PrivacyOps, agilizamos os processos de Due Diligence e fechamento de grandes contratos. Em um mercado competitivo, tempo é dinheiro, e nossa agilidade técnica encurta o ciclo de vendas.",
    icon: <Zap className="text-accent-cyan" size={20} />
  },
  {
    question: "Como funciona o monitoramento 24/7?",
    answer: "Nosso sistema de monitoramento opera ininterruptamente. Vigilância contínua sobre o fluxo de dados e vulnerabilidades, permitindo detecção e resposta imediata a qualquer incidente, garantindo a sustentabilidade digital da sua operação.",
    icon: <Clock className="text-accent-cyan" size={20} />
  },
  {
    question: "A DataSync substitui o departamento jurídico interno?",
    answer: "Não. Atuamos em simbiose com seu jurídico. Enquanto seu time foca nos aspectos contratuais e societários amplos, nós fornecemos a engenharia dedicada e o suporte técnico-regulatório especializado em proteção de dados que sua escala exige.",
    icon: <HelpCircle className="text-accent-cyan" size={20} />
  }
];

const FAQItem = ({ question, answer, icon, isOpen, onClick }) => {
  return (
    <div 
      className={`glass transition-all duration-500 ${isOpen ? 'active-faq-card' : ''}`}
      style={{ 
        marginBottom: '16px', 
        borderRadius: '20px', 
        overflow: 'hidden',
        border: isOpen ? '1px solid var(--accent-cyan)' : '1px solid var(--border-glass)',
        background: isOpen ? 'rgba(0, 242, 255, 0.03)' : 'var(--bg-panel)'
      }}
    >
      <button
        onClick={onClick}
        className="faq-item-btn"
        style={{
          width: '100%',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          color: 'var(--text-primary)'
        }}
      >
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '12px', 
            background: 'rgba(0, 242, 255, 0.05)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: '1px solid rgba(0, 242, 255, 0.1)'
          }}>
            {icon}
          </div>
          <span 
            className="faq-item-title"
            style={{ 
              fontSize: '1.25rem', 
              fontWeight: 600, 
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em'
            }}
          >
            {question}
          </span>
        </div>
        <div style={{ color: isOpen ? 'var(--accent-cyan)' : 'var(--text-dim)' }}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div 
              className="faq-item-content"
              style={{ 
                padding: '0 32px 32px 92px', 
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: '1.7'
              }}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" style={{ position: 'relative' }} className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="faq-header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              color: 'var(--accent-cyan)', 
              fontWeight: 800, 
              fontSize: '0.8rem', 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              marginBottom: '20px'
            }}
          >
            Esclarecimentos Estratégicos
          </motion.div>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
            Alta Performance em <span className="text-gradient">Privacidade</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Sanamos as dúvidas técnicas e comerciais para que sua operação B2B avance com total segurança jurídica e tecnológica.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              {...item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>

      {/* Subtle background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, transparent 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
      <style>{`
        @media (max-width: 1024px) {
          .faq-header h2 { font-size: 2.8rem !important; }
        }
        @media (max-width: 640px) {
          .faq-header h2 { font-size: 2.2rem !important; }
          .faq-header p { font-size: 1.1rem !important; }
          /* FAQ Item internal padding */
          .faq-item-btn { padding: 20px 24px !important; }
          .faq-item-content { padding: 0 24px 24px 24px !important; }
          .faq-item-title { font-size: 1.1rem !important; }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
