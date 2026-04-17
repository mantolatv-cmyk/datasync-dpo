import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Cloud, CodeXml, Cpu, Zap } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Decor */}
      <div style={{ 
        position: 'absolute', 
        bottom: '-10%', 
        right: '-5%', 
        width: '500px', 
        height: '500px', 
        background: 'rgba(57, 255, 20, 0.03)', 
        filter: 'blur(120px)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }} className="tech-split">
          
          <div className="glass-cyan" style={{ 
            padding: '40px', 
            borderRadius: '24px', 
            background: 'var(--bg-deep)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            border: '1px solid var(--border-cyan)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }}></div>
              </div>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', fontFamily: 'monospace' }}>privacy-ops-v1.0.js</div>
            </div>

            <div style={{ display: 'grid', gap: '20px' }}>
               <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                 <BarChart3 color="var(--accent-cyan)" size={20} />
                 <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                   <div style={{ width: '75%', height: '100%', background: 'var(--accent-cyan)', borderRadius: '4px' }}></div>
                 </div>
                 <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>75% Compliance</span>
               </div>
               <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                 <Cpu color="var(--accent-green)" size={20} />
                 <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                   <div style={{ width: '92%', height: '100%', background: 'var(--accent-green)', borderRadius: '4px' }}></div>
                 </div>
                 <span style={{ fontSize: '0.8rem', color: 'var(--accent-green)' }}>92% Monitoring</span>
               </div>
               
               <div style={{ marginTop: '20px', fontFamily: 'monospace', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                  <span style={{ color: '#C678DD' }}>const</span> status = <span style={{ color: '#D19A66' }}>'Ready'</span>;<br/>
                  <span style={{ color: '#C678DD' }}>await</span> DataSync.<span style={{ color: '#61AFEF' }}>syncPrivacy</span>();<br/>
                  <span style={{ color: 'var(--accent-green)' }}>// Global Compliance Shield Active</span>
               </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '20px' }}>O Diferencial Tech</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '32px' }}>Privacidade Movida a <span className="text-gradient">Tecnologia.</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '40px' }}>
              Transformamos obrigações em eficiência operacional. Através de nossa metodologia de PrivacyOps, integramos dashboards modernos e automação de workflow aos seus processos.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Cloud color="var(--accent-cyan)" />
                <div>
                  <h4 style={{ marginBottom: '8px' }}>Portal do Cliente</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Transparência total e repositórios estruturados.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Zap color="var(--accent-cyan)" />
                <div>
                  <h4 style={{ marginBottom: '8px' }}>Deploy Ágil</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Integração nativa com infraestruturas em nuvem.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .tech-split { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
};

export default Technology;
