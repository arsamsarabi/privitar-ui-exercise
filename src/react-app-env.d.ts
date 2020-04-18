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

type ResponsiveValue<T> = {
  mobile: T;
  tablet: T;
  laptop: T;
  desktop: T;
};

type ThemeSpacing = {
  headerHeight: ResponsiveValue<string>;
  footerHeight: ResponsiveValue<string>;
  padding: ResponsiveValue<string>;
  containerWidth: ResponsiveValue<string>;
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
