import React from 'react';
import { Shield, Globe, X, Globe2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ padding: '80px 0 40px', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }} className="footer-grid">
          
          <div style={{ gridColumn: 'span 2' }} className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Shield color="var(--accent-cyan)" size={28} />
              <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>DataSync</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', lineHeight: '1.7' }}>
              Sustentabilidade Digital e Governança B2B de alto padrão. Unindo o jurídico à tecnologia.
            </p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '24px' }}>
              <a href="#" style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}><Globe size={20} /></a>
              <a href="#" style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}><X size={20} /></a>
              <a href="#" style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}><Globe2 size={20} /></a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Serviços</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '12px' }}>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>DPO as a Service</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Data Mapping</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Vendor Risk</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>M&A Due Diligence</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Institucional</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '12px' }}>
              <li><a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Sobre Nós</a></li>
              <li><a href="#home" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>PrivacyOps</a></li>
              <li><a href="https://datasync-portaldocliente.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Portal do Cliente</a></li>
              <li><a href="https://datasync-assincrono.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Portal Assíncrono</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '12px' }}>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Política de Privacidade</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Termos de Uso</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Portal do Titular</a></li>
            </ul>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-dim)', fontSize: '0.8rem' }} className="footer-bottom">
           <p>DataSync © 2024. Todos os direitos reservados.</p>
           <p>Feito com precisão para Governança de Dados.</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .footer-brand { grid-column: span 1 !important; }
        }
        @media (max-width: 500px) {
          .footer-bottom { flex-direction: column; gap: 10px; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
