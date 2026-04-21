import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/images/hero.png';
import Magnetic from './Magnetic';
import RefinedButton from './RefinedButton';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        paddingTop: '100px',
        overflow: 'hidden',
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`
      }}
    >
      {/* Dynamic Background Spotlight */}
      <div 
        className="spotlight-mask"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0, 242, 255, 0.12) 0%, transparent 80%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 0.8fr', 
          gap: '80px', 
          alignItems: 'center' 
        }}>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y1 }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 16px',
                background: 'rgba(0, 242, 255, 0.05)',
                border: '1px solid rgba(0, 242, 255, 0.15)',
                borderRadius: '100px',
                color: 'var(--accent-cyan)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '32px'
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }} />
              PrivacyOps & Digital Sustainability
            </motion.div>
            
            <h1 className="hero-title" style={{ fontSize: '4.8rem', lineHeight: 1.05, marginBottom: '32px', fontWeight: 800 }}>
              Orquestrando o <span className="text-gradient">Futuro</span> da <br />
              <span style={{ position: 'relative' }}>
                Privacidade.
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1.5 }}
                  style={{ position: 'absolute', bottom: '10px', left: 0, height: '4px', background: 'var(--accent-cyan)', opacity: 0.3, borderRadius: '2px' }}
                />
              </span>
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '48px', maxWidth: '600px', lineHeight: 1.7 }}>
              Blindamos operações B2B complexas com engenharia jurídica sênior e automação de última geração. Sua conformidade como ativo estratégico.
            </p>
            
            <div style={{ display: 'flex', gap: '24px' }} className="hero-btns">
              <Magnetic>
                <RefinedButton variant="primary" className="hero-btn">
                  Agendar Avaliação <ChevronRight size={18} />
                </RefinedButton>
              </Magnetic>
              <Magnetic>
                <RefinedButton 
                  variant="outline" 
                  className="hero-btn"
                  onClick={() => window.open('https://datasync-portaldocliente.vercel.app/', '_blank')}
                >
                  Ver Plataforma
                </RefinedButton>
              </Magnetic>
            </div>

            <div style={{ marginTop: '80px', display: 'flex', gap: '60px' }}>
               <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>100+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>Operações Blindadas</div>
               </div>
               <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
               <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Privacy<span style={{ color: 'var(--accent-cyan)' }}>Ops</span></div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>Metodologia Própria</div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div 
              className="border-beam"
              style={{ 
                borderRadius: '32px', 
                overflow: 'hidden',
                boxShadow: '0 50px 100px -20px rgba(0,0,0,0.7)',
                position: 'relative',
                zIndex: 1
              }}
            >
              <img 
                src={heroImage} 
                alt="Interface conceitual da plataforma DataSync PrivacyOps, exibindo métricas de conformidade e segurança." 
                style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.01)' }} 
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, var(--bg-deep) 0%, transparent 40%)',
                opacity: 0.8
              }} />
            </div>

            {/* Floatings */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              style={{ 
                position: 'absolute', 
                top: '-20px', 
                right: '-20px', 
                padding: '16px 24px', 
                borderRadius: '16px',
                zIndex: 2
              }}
              className="glass"
            >
              <div style={{ color: 'var(--accent-green)', fontSize: '0.8rem', fontWeight: 800 }}>✓ COMPLIANT</div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-title { font-size: 3rem !important; }
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid p { margin-left: auto; margin-right: auto; }
          .hero-grid div { justify-content: center; }
          .hero-btns { flex-direction: column !important; width: 100%; max-width: 400px; margin: 0 auto; }
          .hero-btn { width: 100% !important; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 2.8rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
