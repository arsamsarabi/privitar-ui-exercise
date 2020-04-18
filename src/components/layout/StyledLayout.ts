import styled, { css } from "styled-components";
import { devices } from "../../styles";

export const StyledLayout = styled.div<WithTheme>(
  ({ theme: { spacing, palette } }) => {
    return css`
      display: flex;
      flex-direction: column;
      main {
        background-color: ${palette.grey}25;
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
