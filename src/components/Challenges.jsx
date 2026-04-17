import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Factory, ShieldCheck } from 'lucide-react';

const Challenges = () => {
  return (
    <section id="challenges" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Desafio B2B Section */}
        <div style={{ marginBottom: '120px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ color: 'var(--accent-green)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}
            >
              <Factory size={18} /> O Cenário Atual
            </motion.div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Sua conformidade é a chave para os seus <span className="text-gradient">maiores contratos.</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
             <div className="glass" style={{ padding: '40px', borderRadius: '20px' }}>
                <AlertCircle color="var(--accent-cyan)" style={{ marginBottom: '20px' }} />
                <h3 style={{ marginBottom: '16px', fontSize: '1.4rem' }}>Pressão na Cadeia de Suprimentos</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Grandes players e cadeias complexas exigem parceiros que provem governança real. A LGPD deixou de ser um check jurídico para se tornar um requisito de Sustentabilidade Digital.
                </p>
             </div>
             <div className="glass" style={{ padding: '40px', borderRadius: '20px' }}>
                <AlertCircle color="var(--accent-cyan)" style={{ marginBottom: '20px' }} />
                <h3 style={{ marginBottom: '16px', fontSize: '1.4rem' }}>Exigência de Governança</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Não é apenas sobre evitar multas, mas sobre manter a confiança de seus clientes e a continuidade dos seus negócios B2B.
                </p>
             </div>
          </div>
        </div>

        {/* Solução DataSync Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="solution-split">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div style={{ background: 'var(--accent-cyan-dim)', color: 'var(--accent-cyan)', padding: '6px 16px', borderRadius: '50px', display: 'inline-block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '24px' }}>
              DPO as a Service
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Inteligência Multidisciplinar <span className="text-gradient">sob Demanda.</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '32px' }}>
              Externalizar a função do Encarregado de Dados (DPO) é uma decisão estratégica. Oferecemos uma célula de Gestão de Riscos que integra o jurídico ao técnico, garantindo independência e eliminando conflitos de interesse.
            </p>
            
            <ul style={{ listStyle: 'none', display: 'grid', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <CheckCircle2 color="var(--accent-green)" size={20} />
                <span>Independência do Encarregado</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <CheckCircle2 color="var(--accent-green)" size={20} />
                <span>Expertise Jurídica e Técnica Integrada</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <CheckCircle2 color="var(--accent-green)" size={20} />
                <span>Agilidade em Auditorias de Terceiros</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="glass-cyan"
             style={{ padding: '60px', borderRadius: '32px', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(0,242,255,0.05) 0%, transparent 100%)' }}
          >
            <ShieldCheck size={80} color="var(--accent-cyan)" style={{ marginBottom: '24px' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Pilares de Atuação</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
               <div style={{ padding: '16px', borderLeft: '3px solid var(--accent-cyan)', background: 'rgba(255,255,255,0.03)' }}>
                 <strong>Governança Jurídica:</strong> Blindagem e Políticas.
               </div>
               <div style={{ padding: '16px', borderLeft: '3px solid var(--accent-cyan)', background: 'rgba(255,255,255,0.03)' }}>
                 <strong>Segurança da Informação:</strong> Diagnóstico e Incidentes.
               </div>
               <div style={{ padding: '16px', borderLeft: '3px solid var(--accent-cyan)', background: 'rgba(255,255,255,0.03)' }}>
                 <strong>Gestão Operacional:</strong> Mapeamento e ANPD.
               </div>
            </div>
          </motion.div>
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .solution-split { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default Challenges;
