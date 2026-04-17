import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="glass-cyan" style={{ 
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
              
              <button type="button" className="btn-primary" style={{ marginTop: '10px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                Solicitar Contato Executivo <Send size={18} />
              </button>
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
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
