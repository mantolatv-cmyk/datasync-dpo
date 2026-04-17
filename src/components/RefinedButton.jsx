import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const RefinedButton = ({ children, variant = 'primary', style = {}, className = '', ...props }) => {
  const ref = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const magneticX = useSpring(mouseX, springConfig);
  const magneticY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isPrimary = variant === 'primary';

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        x: magneticX,
        y: magneticY,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.9rem 2rem',
        borderRadius: '12px',
        border: isPrimary ? 'none' : '1px solid rgba(255,255,255,0.1)',
        background: isPrimary ? '#FFF' : 'rgba(255,255,255,0.03)',
        color: isPrimary ? '#000' : '#FFF',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '0.9rem',
        cursor: 'pointer',
        overflow: 'hidden',
        backdropFilter: isPrimary ? 'none' : 'blur(10px)',
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`btn-refined ${className}`}
      {...props}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          x: '-100%',
        }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
        {children}
      </span>

      {isPrimary && (
        <div style={{
          position: 'absolute',
          inset: 0,
          boxShadow: 'inset 0 0 10px rgba(0,242,255,0.1)',
          pointerEvents: 'none'
        }} />
      )}
    </motion.button>
  );
};

export default RefinedButton;
