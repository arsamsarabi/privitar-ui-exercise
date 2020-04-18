import styled, { css } from "styled-components";

export const StyledCollapsible = styled.div(({ theme: { palette } }) => {
  return css`
    background: ${palette.common.white};
    border: 2px solid ${palette.common.grey};
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
        color: ${palette.primary.main};
        font-weight: ${typography.weight.bold};
      }

      span {
        font-family: ${typography.family.secondary};
        font-size: 1.5rem;
        color: ${palette.common.grey};
      }
    `;
  }
);

type StyledCollapsibleContentProps = WithTheme & {
  open: boolean;
};

export const StyledCollapsibleContent = styled.div<
  StyledCollapsibleContentProps
>(({ open, theme: { palette } }) => {
  return css`
    height: ${open ? "auto" : 0};
    overflow: hidden;
  `;
});
