import type { DefaultTheme } from 'styled-components';

export type ThemeColors = {
  defaultTextColor: string;
  primary: string;
  bgColor: string;
  primarySoft: string;
  greyColor: string;
  greyColor2: string;
  footerBackground: string;
};

const defaultThemeColors: ThemeColors = {
  defaultTextColor: '#1F1E1E',
  primary: '#8d1b3d',
  bgColor: '#f4f4f4',
  primarySoft: '#fff2f6',
  greyColor: '#3c3939',
  greyColor2: '#adb5bd',
  footerBackground: '#8d1b3d',
};

export const createTheme = (colors: Partial<ThemeColors> = {}): DefaultTheme => ({
  colors: {
    ...defaultThemeColors,
    ...colors,
  },
});

export const theme = createTheme();
