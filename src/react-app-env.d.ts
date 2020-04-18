/// <reference types="react-scripts" />

type ColourPalette = {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  grey: string;
  white: string;
};

type ResponsiveValue = {
  mobile: string;
  laptop: string;
};

type ThemeSpacing = {
  headerHeight: ResponsiveValue;
  footerHeight: ResponsiveValue;
  padding: ResponsiveValue;
  containerWidth: ResponsiveValue;
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
  spacing: ThemeSpacing;
};

type WithTheme = {
  theme: ThemeType;
};
