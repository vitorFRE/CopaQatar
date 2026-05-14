import { createContext, useContext, useEffect, type ReactNode } from 'react';
import Theme from '../Styles/Theme';
import type { EditionConfig } from './editionConfig';

const EditionContext = createContext<EditionConfig | null>(null);

type EditionProviderProps = {
  config: EditionConfig;
  children: ReactNode;
};

export const EditionProvider = ({ config, children }: EditionProviderProps) => {
  useEffect(() => {
    document.title = config.documentTitle;
  }, [config.documentTitle]);

  return (
    <EditionContext.Provider value={config}>
      <Theme colors={config.themeColors}>{children}</Theme>
    </EditionContext.Provider>
  );
};

export const useEdition = () => {
  const context = useContext(EditionContext);

  if (!context) {
    throw new Error('useEdition must be used within EditionProvider');
  }

  return context;
};
