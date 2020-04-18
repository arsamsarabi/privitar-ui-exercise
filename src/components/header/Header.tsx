import React, { FC, ReactElement } from "react";

import { useStore } from "../../store";
import {
  StyledHeader,
  StyledLogo,
  StyledAppName,
  StyledSubTitle,
} from "./StyledHeader";

const Header: FC = (): ReactElement => {
  const {
    peopleStore: { people },
  } = useStore();

  return (
    <StyledHeader>
      <div>
        <StyledLogo src="/images/logo.png" alt="Privitar Logo" />
      </div>
      <div>
        <StyledAppName>Privitar Privacy Protector</StyledAppName>
        <StyledSubTitle>
          <span>{people.length}</span>
          people protected
        </StyledSubTitle>
      </div>
    </StyledHeader>
  );
};

export default Header;
