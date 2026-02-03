import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

// AOS 초기화 (메인 화면 스크롤 애니메이션)
AOS.init({
  duration: 600,
  once: true,
  offset: 80,
  easing: 'ease-out-cubic',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
