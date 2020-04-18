import { lighten, darken } from "polished";

const PRIMARY_COLOUR = "#312683";
const SECONDARY_COLOUR = "#af1a63";
const SUCCESS_COLOUR = "#27ae60";
const DANGER_COLOUR = "#e74c3c";

export const theme: ThemeType = {
  typography: {
    family: {
      primary: '"Nunito", Arial, sans-serif',
      secondary: "Sen",
    },
    weight: {
      light: 300,
      normal: 400,
      bold: 700,
    },
  },
  palette: {
    primary: {
      light: lighten(0.25, PRIMARY_COLOUR),
      main: PRIMARY_COLOUR,
      dark: darken(0.25, PRIMARY_COLOUR),
    },
    secondary: {
      light: lighten(0.25, SECONDARY_COLOUR),
      main: SECONDARY_COLOUR,
      dark: darken(0.25, SECONDARY_COLOUR),
    },
    success: {
      light: lighten(0.25, SUCCESS_COLOUR),
      main: SUCCESS_COLOUR,
      dark: darken(0.25, SUCCESS_COLOUR),
    },
    danger: {
      light: lighten(0.25, DANGER_COLOUR),
      main: DANGER_COLOUR,
      dark: darken(0.25, DANGER_COLOUR),
    },
    common: {
      grey: "#575757",
      white: "#ecf0f1",
    },
  },
  config: {
    headerHeight: "48px",
    pagePadding: {
      laptop: {
        v: "24px",
        h: "40px",
      },
    },
    headerPadding: {
      laptop: {
        v: "12px",
        h: "40px",
      },
    },
  },
};
