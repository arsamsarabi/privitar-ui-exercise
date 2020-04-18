/// <reference types="react-scripts" />

type ColourFragment = {
  light: string;
  main: string;
  dark: string;
};

type CommonColours = {
  grey: string;
  white: string;
};

type ColourPalette = {
  primary: ColourFragment;
  secondary: ColourFragment;
  success: ColourFragment;
  danger: ColourFragment;
  common: CommonColours;
};

type ThemeConfig = {
  headerHeight: string;
  pagePadding: {
    laptop: {
      v: string;
      h: string;
    };
  };
  headerPadding: {
    laptop: {
      v: string;
      h: string;
    };
  };
};

type Typography = {
  family: {
    primary: string;
    secondary: string;
  };
  weight: {
    light: number;
    normal: number;
    bold: number;
  };
};

type ThemeType = {
  typography: Typography;
  palette: ColourPalette;
  config: ThemeConfig;
};

type WithTheme = {
  theme: ThemeType;
};
