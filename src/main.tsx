import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RoutesPages from './Routes/Routes';
import GlobalStyle from './Styles/Global';
import Theme from './Styles/Theme';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found');
}

createRoot(rootEl).render(
  <StrictMode>
    <Theme>
      <GlobalStyle />
      <RoutesPages />
    </Theme>
  </StrictMode>,
);
