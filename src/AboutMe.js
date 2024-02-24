import React from 'react';
import { motion } from 'framer-motion';
import { light } from '@mui/material/styles/createPalette';

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
        <h1 style={{ color: '#1976d2', fontSize: '35px', textAlign: 'center' }}>
          Thank you for visiting my portfolio
        </h1>
      </motion.div>

      <h1 style={{ fontSize: '22px', lineHeight: '30px' }}>
        白石 悠華（Shiraishi Yuka）
      </h1>
      <p style={{ fontSize: '16px' }}>
        侍エンジニアにてフロントエンドのプログラミングを学習しました。
      </p>
      <li>内容 : HTML, CSS, JavaScript, React, MUI</li>
      <li>期間 : 2023年9月～2024年2月</li>

      <br />
      <h1 style={{ fontSize: '22px', lineHeight: '30px' }}>アプリについて</h1>
      <p
        style={{
          textDecorationLine: 'underline',
        }}
      >
        Calendar
      </p>
      <p>日記としても使えるカレンダーアプリ</p>
      <p
        style={{
          textDecorationLine: 'underline',
        }}
      >
        API
      </p>
      <p>ポケモンAPIを用いた一人で遊べる神経衰弱ゲーム</p>
    </>
  );
}

export default AboutMe;
