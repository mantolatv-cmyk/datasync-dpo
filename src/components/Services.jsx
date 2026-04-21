import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, FileSearch, Users, Activity, Briefcase, Database, Zap } from 'lucide-react';

const MagicCard = ({ children, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="glass"
      style={{ 
        padding: '48px', 
        borderRadius: '32px',
        position: 'relative',
        overflow: 'hidden',
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        cursor: 'default'
      }}
    >
      {/* Background Hover Glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), rgba(0, 242, 255, 0.06), transparent 80%)`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.5s ease',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "DPO as a Service",
      icon: <Users size={24} />,
      desc: "Gestão completa do Encarregado com interface direta ANPD, relatórios RIPD e governança contínua.",
      category: "PrivacyOps"
    },
    {
      title: "Data Mapping 2.0",
      icon: <Database size={24} />,
      desc: "Inventário de dados dinâmico e automatizado, integrado à sua stack de tecnologia atual.",
      category: "Engenharia"
    },
    {
      title: "Vendor Risk Audit",
      icon: <Globe size={24} />,
      desc: "Auditoria técnica de terceiros para garantir a integridade da sua cadeia de suprimentos.",
      category: "Cadeia B2B",
      link: "https://datasync-assincrono.vercel.app/"
    },
    {
      title: "M&A Due Diligence",
      icon: <Briefcase size={24} />,
      desc: "Análise profunda de riscos de privacidade para rodadas de investimento e fusões.",
      category: "Estratégico"
    },
    {
      title: "Incident Response",
      icon: <Activity size={24} />,
      desc: "Protocolos executivos e técnicos para gestão de vazamentos e crises reputacionais.",
      category: "Segurança"
    },
    {
      title: "Privacy by Design",
      icon: <Zap size={24} />,
      desc: "Consultoria técnica para desenvolvimento de novos produtos e fluxos de dados seguros.",
      category: "Inovação"
    }
  ];

  return (
    <section id="services" style={{ background: 'linear-gradient(to bottom, var(--bg-deep), #050a0f)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 450px) 1fr', gap: '80px', marginBottom: '80px' }} className="services-header">
           <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}
              >
                Nossas Soluções
              </motion.span>
              <h2 style={{ fontSize: '3.5rem', marginTop: '16px', lineHeight: 1.1 }}>Engenharia de <span className="text-gradient">Conformidade.</span></h2>
           </div>
           <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '500px' }}>
                Atuamos na intersecção entre o rigor jurídico e a eficiência tecnológica para criar operações inabaláveis.
              </p>
           </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
          {services.map((service, index) => (
            <MagicCard key={index} index={index}>
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(0,242,255,0.1), transparent)', 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--accent-cyan)',
                marginBottom: '32px',
                border: '1px solid rgba(0,242,255,0.2)'
              }}>
                {service.icon}
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-green)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', display: 'block' }}>
                {service.category}
              </span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '20px' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '32px' }}>
                {service.desc}
              </p>
              
              <motion.a 
                href={service.link || "#contact"} 
                whileHover={{ x: 10 }}
                style={{ color: '#FFF', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                Explorar Serviço <span style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem' }}>→</span>
              </motion.a>

            </MagicCard>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .services-header { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default Services;
