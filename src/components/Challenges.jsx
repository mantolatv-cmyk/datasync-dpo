import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Factory, ShieldCheck } from 'lucide-react';

const MagicCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass ${className}`}
      style={{ 
        padding: '60px 48px', 
        borderRadius: '32px',
        position: 'relative',
        overflow: 'hidden',
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), rgba(0, 242, 255, 0.05), transparent 80%)`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

const Challenges = () => {
  return (
    <section id="challenges" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Desafio B2B Section */}
        <div style={{ marginBottom: '160px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ color: 'var(--accent-green)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}
            >
              <Factory size={16} /> O Panorama Global
            </motion.div>
            <h2 style={{ fontSize: '3.5rem', maxWidth: '900px', margin: '0 auto', lineHeight: 1.1 }}>
              Sua conformidade é o diferencial para os <span className="text-gradient">maiores contratos.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
             <MagicCard>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255,95,86,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                  <AlertCircle color="#FF5F56" size={24} />
                </div>
                <h3 style={{ marginBottom: '20px', fontSize: '1.8rem', fontWeight: 700 }}>Riscos de Cadeia B2B</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8' }}>
                  Grandes corporações e players multinacionais estão restringindo parceiros que não demonstram governança de dados auditável. Não se trata de medo de multas, mas de **Sustentabilidade Comercial**.
                </p>
             </MagicCard>
             <MagicCard>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(0,242,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                  <ShieldCheck color="var(--accent-cyan)" size={24} />
                </div>
                <h3 style={{ marginBottom: '20px', fontSize: '1.8rem', fontWeight: 700 }}>Blindagem Contratual</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8' }}>
                  Asseguramos que sua operação esteja tecnicamente e juridicamente protegida contra sanções, vazamentos e rompimentos de SLA por falhas de conformidade.
                </p>
             </MagicCard>
          </div>
        </div>

        {/* Solução DataSync (DPOaaS) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }} className="solution-layout">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           >
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>PrivacyOps Solutions</span>
              <h2 style={{ fontSize: '3.5rem', marginTop: '20px', marginBottom: '32px', lineHeight: 1.1 }}>
                Inteligência <span className="text-gradient">Multidisciplinar.</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '40px', lineHeight: 1.7 }}>
                O modelo **DPO as a Service** da DataSync elimina conflitos de interesse e integra a precisão técnica da segurança da informação ao rigor do direito regulatório.
              </p>
              
              <div style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(57, 255, 20, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle2 color="var(--accent-green)" size={14} />
                  </div>
                  <span style={{ fontWeight: 600 }}>Encarregado Externo Independente</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(57, 255, 20, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle2 color="var(--accent-green)" size={14} />
                  </div>
                  <span style={{ fontWeight: 600 }}>Monitoramento de Conformidade 24/7</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(57, 255, 20, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle2 color="var(--accent-green)" size={14} />
                  </div>
                  <span style={{ fontWeight: 600 }}>Suporte Sênior em Auditorias de Terceiros</span>
                </div>
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="glass"
             style={{ padding: '80px 60px', borderRadius: '40px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', background: 'radial-gradient(circle at center, rgba(0,242,255,0.03) 0%, transparent 100%)' }}
           >
              <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
                <ShieldCheck size={100} color="var(--accent-cyan)" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '32px' }}>Gestão Integrada</h3>
              <div style={{ textAlign: 'left', display: 'grid', gap: '12px' }}>
                 <div className="glass" style={{ padding: '20px', borderRadius: '16px', borderLeft: '4px solid var(--accent-cyan)' }}>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>Governança de Dados</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Políticas, Contratos e Bases Legais.</span>
                 </div>
                 <div className="glass" style={{ padding: '20px', borderRadius: '16px', borderLeft: '4px solid var(--accent-green)' }}>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>Segurança Técnica</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Diagnóstico, Resposta e Proteção.</span>
                 </div>
              </div>
           </motion.div>
        </div>

      </div>
      <style>{`
        @media (max-width: 992px) {
          .solution-layout { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
};

export default Challenges;
