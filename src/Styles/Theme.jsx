import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    defaultTextColor: '#1F1E1E',
    RedQatar: '#8d1b3d',
    bgColor: '#f4f4f4',
    bgRed: '#fff2f6',
    greyColor: '#3c3939',
    greyColor2: '#adb5bd',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
