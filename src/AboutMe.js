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
      <h1 style={{ color: '#1a252f', fontSize: '22px', lineHeight: '30px' }}>
        AAA 白石 悠華（Shiraishi Yuka）
      </h1>
      <p style={{ color: '#1a252f', fontSize: '16px' }}>
        <li> 1999年01月07日 生まれ（25歳）</li>
        <li>
          2023年9月4日～2024年2月18日まで侍エンジニアにてフロントエンドのプログラミングを学習しました。
        </li>
      </p>

      <br />
      <h1 style={{ color: '#1a252f', fontSize: '22px', lineHeight: '30px' }}>
        アプリについて
      </h1>
      <p
        style={{
          color: '#1a252f',
          fontSize: '16px',
          textDecorationLine: 'underline',
        }}
      >
        Calendar
      </p>
      <p>
        fullCalendarを用いて作成しました。
        <br />
        私自身が日記として使いたかったこともあり、textareaで長文記入を可能にし、年間の一覧表示ができるよう設定しました。
        <br />
        <p
          style={{
            color: '#1a252f',
            fontSize: '16px',
            textDecorationLine: 'underline',
          }}
        >
          API
        </p>
        <p>
          ポケモンAPIを用いて神経衰弱を作成しました。
          <br />
        </p>
        <p
          style={{
            color: '#1a252f',
            fontSize: '16px',
            textDecorationLine: 'underline',
          }}
        >
          使用技術
        </p>
        <p>
          フロントエンド
          <br />
          （HTML, css, JavaScript, React, MUI）
        </p>
      </p>
    </>
  );
}

export default AboutMe;
