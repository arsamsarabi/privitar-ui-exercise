import styled, { css } from "styled-components";

import { devices } from "../../styles";

export const StyledPeopleList = styled.section<WithTheme>(({ theme }) => {
  return css`
    @media ${devices.tablet} {
      background: hotpink;
    }
  `;
});
