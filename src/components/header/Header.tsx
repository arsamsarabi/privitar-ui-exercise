import React, { FC, ReactElement } from "react";

import { useStore } from "../../store";
import { StyledHeader } from "./StyledHeader";

const Header: FC = (): ReactElement => {
  const {
    peopleStore: { people },
  } = useStore();

  return (
    <StyledHeader>
      <div>
        <img src="/images/logo_square.png" alt="Privitar Logo" />
      </div>
      <div>
        <h1>Privitar Privacy Protector</h1>
        <p>
          <span>{people.length}</span>
          people protected
        </p>
      </div>
    </StyledHeader>
  );
};

export default Header;
