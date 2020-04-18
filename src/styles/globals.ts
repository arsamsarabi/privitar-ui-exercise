import { createGlobalStyle, css } from "styled-components";
import { resetCss } from "./reset";

interface GlobalStyleProps {
  theme: ThemeType;
}

export const GlobalStyles = createGlobalStyle<GlobalStyleProps>(({ theme }) => {
  return css`
    ${resetCss}
    body {
      font-family: ${theme.typography.family.primary};
      font-size: 18px;
      font-weight: ${theme.typography.weight.normal};
      color: ${theme.palette.common.grey};
    }
    #root {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }
  `;
});
