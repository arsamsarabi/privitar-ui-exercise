import styled, { css } from "styled-components";

import { devices } from "../../styles";

export const StyledHeader = styled.header<WithTheme>(
  ({ theme: { spacing, palette } }) => {
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

      @media ${devices.tablet} {
        padding: ${spacing.padding.laptop};
      }

      @media ${devices.laptop} {
        height: ${spacing.headerHeight.laptop};

        & > div {
          &:first-of-type {
            margin-right: 32px;
          }
        }
      }
    `;
  }
);

export const StyledLogo = styled.img`
  width: 35px;

  @media ${devices.tablet} {
    width: 50px;
  }

  @media ${devices.laptop} {
    width: 75px;
  }
`;

export const StyledAppName = styled.h1<WithTheme>(({ theme: { palette } }) => {
  return css`
    font-size: 1.25rem;
    color: ${palette.primary};

    @media ${devices.tablet} {
      font-size: 1.5rem;
    }

    @media ${devices.laptop} {
      font-size: 2rem;
    }
  `;
});

export const StyledSubTitle = styled.p<WithTheme>(
  ({ theme: { palette, typography } }) => {
    return css`
      font-size: 0.9rem;
      span {
        color: ${palette.secondary};
        font-weight: ${typography.weight.bold};
        margin-right: 4px;
      }

      @media ${devices.tablet} {
        font-size: 1.125rem;
      }

      @media ${devices.laptop} {
        font-size: 1.5rem;
      }
    `;
  }
);
