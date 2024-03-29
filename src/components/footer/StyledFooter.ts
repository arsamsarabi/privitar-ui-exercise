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
        color: ${palette.primary};
      }

      @media ${devices.tablet} {
        padding: ${spacing.padding.laptop};
        p {
          font-size: 1.25rem;
        }
      }

      @media ${devices.laptop} {
        height: ${spacing.footerHeight.laptop};
        width: ${spacing.containerWidth.laptop};
        box-shadow: none;
        margin: 0 auto;
        p {
          font-size: 1.5rem;
        }
      }
    `;
  }
);
