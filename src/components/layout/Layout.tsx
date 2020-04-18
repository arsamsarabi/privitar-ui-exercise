import React, { FC, ReactElement } from "react";

import { StyledLayout } from "./StyledLayout";

interface LayoutProps {
  children: ReactElement[];
}

export const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return <StyledLayout>{children}</StyledLayout>;
};
