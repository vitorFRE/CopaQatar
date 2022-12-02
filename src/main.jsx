import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesPages from './Routes/Routes';
import GlobalStyle from './Styles/Global';
import Theme from './Styles/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <RoutesPages />
    </Theme>
  </React.StrictMode>,
);
