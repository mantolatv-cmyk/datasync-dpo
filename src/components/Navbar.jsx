import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div 
        className={`container ${scrolled ? 'glass' : ''}`} 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: scrolled ? '12px 32px' : '0 48px',
          borderRadius: scrolled ? '20px' : '0',
          transition: 'all 0.5s ease',
          margin: scrolled ? '0 20px' : '0 auto',
          maxWidth: scrolled ? '1200px' : '100%',
          border: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent'
        }}
      >
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Shield color="#00F2FF" size={40} />
          </motion.div>
          <span style={{ 
            fontSize: '1.8rem', 
            fontWeight: 800, 
            fontFamily: 'var(--font-heading)',
            color: '#FFF',
            letterSpacing: '-1px'
          }}>
            DataSync
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none', gap: '56px', marginLeft: '64px' }} className="desktop-menu">
           {navLinks.map((link) => (
             <a 
               key={link.name} 
               href={link.href}
               style={{ 
                 color: '#FFF', 
                 textDecoration: 'none',
                 fontWeight: 600,
                 fontSize: '1.05rem',
                 transition: 'all 0.3s ease',
                 position: 'relative',
                 letterSpacing: '0.02em'
               }}
               className="nav-link"
             >
               {link.name}
             </a>
           ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: 'none', 
              color: '#FFF', 
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'none'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        .nav-link:hover { color: #FFF !important; }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent-cyan);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
