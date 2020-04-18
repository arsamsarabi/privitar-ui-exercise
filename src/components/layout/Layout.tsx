import React, { FC, ReactElement } from "react";

import { StyledLayout } from "./StyledLayout";
import { Header } from "../header";
import { Footer } from "../footer/Footer";

interface LayoutProps {
  children: ReactElement;
}

export const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};
