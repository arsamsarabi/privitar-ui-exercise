import styled, { css } from "styled-components";
import { lighten } from "polished";
import { devices } from "../../styles";

export const StyledLayout = styled.div<WithTheme>(
  ({ theme: { spacing, palette } }) => {
    return css`
      display: flex;
      flex-direction: column;
      main {
        background-color: ${lighten(0.6, palette.common.grey)};
        width: 100vw;
        height: calc(
          100vh - ${spacing.headerHeight.mobile} -
            ${spacing.footerHeight.mobile}
        );
        overflow-y: auto;
        padding: ${spacing.padding.mobile};
      }

      @media ${devices.tablet} {
        background: hotpink;
      }
    `;
  }
);
