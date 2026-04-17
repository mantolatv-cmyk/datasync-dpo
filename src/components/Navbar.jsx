import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Desafio', href: '#challenges' },
    { name: 'Serviços', href: '#services' },
    { name: 'Tecnologia', href: '#technology' },
    { name: 'Sobre', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'
      }`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <Shield color="#00F2FF" size={32} />
          <span style={{ 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            fontFamily: 'var(--font-heading)',
            color: '#FFF',
          }}>
            DataSync
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none', gap: '32px' }} className="desktop-menu">
           {navLinks.map((link) => (
             <a 
               key={link.name} 
               href={link.href}
               style={{ 
                 color: 'var(--text-secondary)', 
                 textDecoration: 'none',
                 fontWeight: 500,
                 fontSize: '0.95rem',
                 transition: 'color 0.3s ease'
               }}
               onMouseEnter={(e) => e.target.style.color = '#FFF'}
               onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
             >
               {link.name}
             </a>
           ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="#contact" className="btn-outline" style={{ padding: '0.6rem 1.2rem', display: 'none' }} className="desktop-cta">
            Portal Cliente
          </a>
          <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.2rem' }}>
            Agendar Avaliação
          </a>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#FFF', 
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .desktop-cta { display: inline-block !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
