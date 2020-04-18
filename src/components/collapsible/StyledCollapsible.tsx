import styled, { css } from "styled-components";
import { devices } from "../../styles";

export const StyledCollapsible = styled.div(({ theme: { palette } }) => {
  return css`
    background: ${palette.white};
    border: 2px solid ${palette.grey};
    padding: 8px 16px;
    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  `;
});

export const StyledCollapsibleHeader = styled.button(
  ({ theme: { palette, typography } }) => {
    return css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        color: ${palette.primary};
        font-weight: ${typography.weight.bold};
      }

      span {
        font-family: ${typography.family.secondary};
        font-size: 1.5rem;
        color: ${palette.grey};
      }
    `;
  }
);

export const StyledCollapsibleContent = styled.div(
  ({ theme: { palette, typography } }) => {
    return css`
      display: flex;
      flex-direction: column;
      padding-top: 12px;

      & > div {
        display: flex;
        p {
          min-width: 50%;
          font-size: 0.95rem;
        }
        span {
          color: ${palette.primary};
          font-weight: ${typography.weight.bold};
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        &:not(:last-of-type) {
          margin-bottom: 8px;
        }
      }

      @media ${devices.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        & > * {
          width: 50%;
        }
      }
    `;
  }
);
