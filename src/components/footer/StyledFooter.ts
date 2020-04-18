import styled, { css } from "styled-components";

import { devices } from "../../styles";

export const StyledFooter = styled.footer<WithTheme>(
  ({ theme: { spacing, palette } }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: ${spacing.containerWidth.mobile};
      height: ${spacing.footerHeight.mobile};
      box-shadow: 0 0px 10px 0px ${palette.primary}50;
      padding: ${spacing.padding.mobile};
      z-index: 1;

      p {
        color: ${palette.primary.main};
      }

      @media ${devices.tablet} {
        background: hotpink;
      }
    `;
  }
);
