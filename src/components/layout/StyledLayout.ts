import styled, { css } from "styled-components";

import { devices } from "../../styles";

export const StyledLayout = styled.div<WithTheme>(({ theme }) => {
  return css`
    display: flex;
    flex-direction: column;
    main {
      height: calc(
        100vh - ${theme.spacing.headerHeight.mobile} -
          ${theme.spacing.footerHeight.mobile}
      );
      overflow-y: auto;
      padding: ${theme.spacing.padding.mobile};
    }
  `;
});
