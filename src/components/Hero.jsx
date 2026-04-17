import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero.png';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      paddingTop: '120px',
      overflow: 'hidden'
    }}>
      {/* Background Glows */}
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        left: '5%', 
        width: '400px', 
        height: '400px', 
        background: 'rgba(0, 242, 255, 0.05)', 
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '60px', 
          alignItems: 'center' 
        }} className="hero-grid">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ 
                color: 'var(--accent-cyan)', 
                fontWeight: 600, 
                letterSpacing: '0.1em', 
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                marginBottom: '16px',
                display: 'block'
              }}
            >
              PrivacyOps & Governança Sênior
            </motion.span>
            
            <h1 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '24px' }} className="hero-title">
              Orquestrando a <span className="text-gradient">Privacidade.</span><br />
              Impulsionando seus <span className="text-gradient">Negócios B2B.</span>
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '540px' }}>
              A DataSync une expertise jurídica sênior à automação de **PrivacyOps** para blindar sua operação e garantir conformidade contínua com a LGPD.
            </p>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <button className="btn-primary">Agende uma Avaliação</button>
              <button className="btn-outline">Conheça Nossas Soluções</button>
            </div>

            <div style={{ marginTop: '60px', display: 'flex', gap: '40px', alignItems: 'center' }}>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                Governança para operações de <span style={{ color: '#FFF' }}>Alto Padrão.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            style={{ position: 'relative' }}
          >
            <div className="glass-cyan" style={{ 
              borderRadius: '24px', 
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={heroImage} 
                alt="DataSync Concept" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, var(--bg-deep), transparent)' 
              }} />
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-title { fontSize: 3rem !important; }
          .hero-grid { gridTemplateColumns: 1fr !important; textAlign: center; }
          .hero-grid p { margin: 0 auto 40px !important; }
          .hero-grid div { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
