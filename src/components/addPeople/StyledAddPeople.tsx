import styled, { css } from "styled-components";

import { devices } from "../../styles";

export const StyledAddPeople = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  @media ${devices.tablet} {
    margin-top: 32px;
  }
`;

export const StyledTextArea = styled.textarea<WithTheme>(
  ({ theme: { palette } }) => {
    return css`
      border: 2px solid ${palette.grey};
      resize: none;
      padding: 8px 8px 0;

      &:focus,
      &:active {
        outline: none;
        border-color: ${palette.primary};
      }

      @media ${devices.tablet} {
        padding: 16px 16px 0;
      }

      @media ${devices.laptop} {
        font-size: 1.125rem;
      }
    `;
  }
);

export const StyledButton = styled.button<WithTheme>(
  ({ theme: { palette } }) => {
    return css`
      width: 100%;
      height: 56px;
      text-align: center;
      background-color: ${palette.primary}DF;
      color: ${palette.white};
      margin-top: 8px;
      box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
      position: relative;
      cursor: pointer;

      &:active {
        top: 0.1rem;
        box-shadow: none;
        outline: none;
      }

      &:disabled {
        background-color: ${palette.grey}DF;
        pointer-events: none;
        opacity: 0.5;
      }

      @media ${devices.tablet} {
        margin-top: 16px;
        font-size: 1.5rem;
      }
    `;
  }
);
