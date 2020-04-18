import React, { FC, ReactElement } from "react";

import { StyledFooter } from "./StyledFooter";

export const Footer: FC = (): ReactElement => {
  return (
    <StyledFooter>
      <p>(c) Privitar 2020</p>
    </StyledFooter>
  );
};
