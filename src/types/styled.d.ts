import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      defaultTextColor: string;
      primary: string;
      bgColor: string;
      primarySoft: string;
      greyColor: string;
      greyColor2: string;
      footerBackground: string;
    };
  }
}
