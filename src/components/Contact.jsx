import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="glass-cyan contact-card" style={{ 
          padding: '80px 40px', 
          borderRadius: '40px', 
          background: 'linear-gradient(135deg, var(--bg-surface) 0%, #08101a 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Glow */}
          <div style={{ 
            position: 'absolute', 
            top: '-50%', 
            left: '-50%', 
            width: '200%', 
            height: '200%', 
            background: 'radial-gradient(circle, rgba(0,242,255,0.03) 0%, transparent 50%)',
            pointerEvents: 'none'
          }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Pronto para elevar sua <span className="text-gradient">Governança?</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
              Inicie agora uma avaliação de maturidade e blinde seu futuro operacional.
            </p>

            <form style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left', display: 'grid', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                <div style={{ display: 'grid', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase' }}>Nome Corporativo</label>
                  <input type="text" placeholder="Ex: Tech Solutions S.A." style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', padding: '14px', borderRadius: '8px', color: '#FFF', outline: 'none' }} />
                </div>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase' }}>E-mail Corporativo</label>
                  <input type="email" placeholder="executivo@empresa.com.br" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', padding: '14px', borderRadius: '8px', color: '#FFF', outline: 'none' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase' }}>Cargo / Departamento</label>
                <input type="text" placeholder="Ex: Diretor de Compliance / CTO" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', padding: '14px', borderRadius: '8px', color: '#FFF', outline: 'none' }} />
              </div>
              <div style={{ display: 'grid', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase' }}>Mensagem</label>
                <textarea rows="4" placeholder="Como podemos ajudar sua operação hoje?" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', padding: '14px', borderRadius: '8px', color: '#FFF', outline: 'none', resize: 'none' }}></textarea>
              </div>
              
              <motion.button 
                type="button" 
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0, 242, 255, 0.6)' }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  marginTop: '20px', 
                  width: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '12px',
                  background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
                  color: '#000',
                  border: 'none',
                  padding: '20px',
                  borderRadius: '14px',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                Solicitar Contato Executivo <Send size={22} />
              </motion.button>
            </form>

            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <Mail size={16} color="var(--accent-cyan)" /> dpo@datasync.com.br
               </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .contact-card { padding: 60px 32px !important; }
          .contact-card h2 { font-size: 2.5rem !important; }
        }
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          .contact-card h2 { font-size: 1.8rem !important; }
          .contact-card p { font-size: 1rem !important; }
          .contact-card { padding: 40px 20px !important; border-radius: 24px !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
