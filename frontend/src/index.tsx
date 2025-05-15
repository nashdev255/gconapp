import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Main from './Main';
import './index.css';
import './reset.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
);
