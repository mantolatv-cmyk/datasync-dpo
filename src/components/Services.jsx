import React from 'react';
import { motion } from 'framer-motion';
import { Globe, FileSearch, Users, Activity, Briefcase, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "DPO as a Service (DPOaaS)",
      icon: <Users size={24} />,
      desc: "Gestão completa do Encarregado, interface com ANPD e titulares, e manutenção do PVP.",
      category: "Gestão Contínua"
    },
    {
      title: "Data Mapping Automatizado",
      icon: <Database size={24} />,
      desc: "Identificação cirúrgica de fluxos de dados com visualização em tempo real.",
      category: "Engenharia"
    },
    {
      title: "Auditoria de Fornecedores",
      icon: <Globe size={24} />,
      desc: "Avaliação rigorosa de conformidade técnica e jurídica para Vendor Risk Management.",
      category: "B2B Risk"
    },
    {
      title: "Relatórios de Impacto (RIPD)",
      icon: <FileSearch size={24} />,
      desc: "Análise técnica e jurídica profunda para operações de alto risco.",
      category: "Legal Tech"
    },
    {
      title: "Privacy Due Diligence",
      icon: <Briefcase size={24} />,
      desc: "Auditoria focada em privacidade para processos de Fusão e Aquisição (M&A).",
      category: "Estratégico"
    },
    {
      title: "Gestão de Incidentes",
      icon: <Activity size={24} />,
      desc: "Protocolos ágeis de resposta a vazamentos e comunicação oficial.",
      category: "Segurança"
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '24px' }} className="text-gradient">Engenharia de Conformidade</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Soluções modulares desenhadas para a complexidade das operações modernas, integrando o jurídico ao processual.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ translateY: -10 }}
              className="glass"
              style={{ 
                padding: '40px', 
                borderRadius: '24px',
                border: '1px solid var(--border-glass)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                background: 'var(--bg-deep)', 
                width: '50px', 
                height: '50px', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--accent-cyan)',
                marginBottom: '24px',
                border: '1px solid var(--border-cyan)'
              }}>
                {service.icon}
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-green)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', display: 'block' }}>
                {service.category}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                {service.desc}
              </p>
              
              <div style={{ marginTop: '24px' }}>
                 <a href="#contact" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                   Saiba mais <span style={{ color: 'var(--accent-cyan)' }}>→</span>
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
