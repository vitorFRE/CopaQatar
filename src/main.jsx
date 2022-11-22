import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import GlobalStyle from './Styles/Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
);
