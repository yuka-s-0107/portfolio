import React from 'react';
import { motion } from 'framer-motion';

function AboutMe() {
  return (
    <>
      <motion.div
        className="figure2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          borderTop: 'solid 1px #1976d2' /*上のボーダー*/,
          borderBottom: 'solid 1px #1976d2' /*下のボーダー*/,
          padding: '0.5em 0 0.5em 1.5em',
        }}
      >
        <h2 style={{ color: '#1976d2', fontSize: '35px', textAlign: 'center' }}>
          Thank you for visiting my portfolio
        </h2>
      </motion.div>

      {/* &nbsp;は半角とほぼ同じ大きさのスペース
      &thinsp;は半角よりやや小さいスペース */}
      <h1 style={{ color: '#1a252f', fontSize: '25px' }}>PLOFILE</h1>
      <p style={{ color: '#1a252f', fontSize: '20px' }}>
        <li>name&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;: Shiraishi Yuka</li>
        <li>birthday : 1999 / 01 / 07</li>
      </p>
    </>
  );
}

export default AboutMe;
