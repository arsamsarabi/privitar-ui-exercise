import styled, { css } from "styled-components";

import { devices } from "../../styles";

export const StyledAddPeople = styled.section<WithTheme>(
  ({ theme: { spacing, palette, typography } }) => {
    return css`
      display: flex;
      flex-direction: column;
      margin-top: 24px;

      textarea {
        border: 2px solid ${palette.grey};
        resize: none;
        padding: 8px;
      }

      button {
        width: 100%;
        height: 56px;
        text-align: center;
        background-color: ${palette.primary}DF;
        color: ${palette.white};
        margin-top: 8px;
        box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
        position: relative;

        &:active {
          top: 0.1rem;
          box-shadow: none;
        }
      }
    `;
  }
);
