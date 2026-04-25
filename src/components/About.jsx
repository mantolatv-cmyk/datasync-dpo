import React from 'react';
import { motion } from 'framer-motion';
import { Users2, Scale, Terminal, Workflow } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Scale size={20} />, label: "Direito Digital" },
    { icon: <Terminal size={20} />, label: "Security Engineering" },
    { icon: <Workflow size={20} />, label: "Gestão de Processos" },
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-surface)' }} className="section-padding">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 400px) 1fr', gap: '80px', alignItems: 'center' }} className="about-split">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="about-image"
            style={{ 
              height: '400px', 
              background: 'linear-gradient(225deg, var(--bg-deep) 0%, #1a2635 100%)', 
              borderRadius: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              border: '1px solid var(--border-glass)'
            }}
          >
            <Users2 size={120} color="var(--accent-cyan)" style={{ opacity: 0.5 }} />
            <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }} className="glass">
               <div style={{ padding: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                 {highlights.map((h, i) => (
                   <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                     {h.icon} {h.label}
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

          <div className="about-text">
             <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>Multidisciplinaridade no <span className="text-gradient">DNA.</span></h2>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '24px' }}>
               A DataSync é fruto da visão compartilhada de seus fundadores: Fernando, especialista em TI e Engenharia de Segurança, e Rafael, jurista especializado em Direito Empresarial e Compliance.
             </p>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '32px' }}>
               Eles uniram forças ao perceberem que o mercado B2B carecia de uma solução que falasse simultaneamente a língua dos servidores e a dos tribunais. Fernando trouxe a precisão técnica da blindagem de dados, enquanto Rafael aportou o rigor estratégico do direito corporativo.
             </p>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px' }}>
               Juntos, transformaram essa intersecção no DNA da DataSync, oferecendo uma governança real que não apenas cumpre a lei, mas viabiliza contratos globais em cadeias de suprimentos complexas.
             </p>
             
             <div style={{ padding: '24px', borderLeft: '4px solid var(--accent-green)', background: 'rgba(57, 255, 20, 0.05)', borderRadius: '0 12px 12px 0' }} className="about-highlight">
               <h4 style={{ color: 'var(--accent-green)', marginBottom: '8px' }}>Sustentabilidade Digital</h4>
               <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>Integridade de dados como pilar do valor comercial da sua empresa.</p>
             </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .about-split { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-text h2 { font-size: 2.2rem !important; }
          .about-image { height: 320px !important; }
        }
        @media (max-width: 640px) {
          .about-text h2 { font-size: 1.8rem !important; }
          .about-text p { font-size: 1rem !important; }
          .about-highlight { padding: 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
