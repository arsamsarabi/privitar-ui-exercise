import styled, { css } from "styled-components";

import { devices } from "../../styles";

export const StyledHeader = styled.header<WithTheme>(
  ({ theme: { spacing, palette, typography } }) => {
    return css`
      display: flex;
      align-items: center;
      padding: ${spacing.padding.mobile};
      width: 100vw;
      height: ${spacing.headerHeight.mobile};
      box-shadow: 0 0px 10px 0px ${palette.primary}50;
      z-index: 1;

      & > div {
        &:first-of-type {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 16px;
        }
      }

      img {
        width: 35px;
      }

      h1 {
        font-size: 1.25rem;
        color: ${palette.primary};
      }

      p {
        font-size: 0.9rem;
        span {
          color: ${palette.secondary};
          font-weight: ${typography.weight.bold};
          margin-right: 4px;
        }
      }

      @media ${devices.laptop} {
        height: ${spacing.headerHeight.laptop};
      }
    `;
  }
);
