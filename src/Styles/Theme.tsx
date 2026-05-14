import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { createTheme, type ThemeColors } from './themeTokens';

type ThemeProps = {
  children: ReactNode;
  colors?: Partial<ThemeColors>;
};

const Theme = ({ children, colors }: ThemeProps) => (
  <ThemeProvider theme={createTheme(colors)}>{children}</ThemeProvider>
);

export default Theme;
