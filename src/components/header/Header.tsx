import React, { FC, ReactElement } from "react";

import { useStore } from "../../store";
import { StyledHeader } from "./StyledHeader";

const Header: FC = (): ReactElement => {
  const {
    peopleStore: { people },
  } = useStore();

  return (
    <StyledHeader>
      <h1>Privitar Privacy Protector</h1>
      <p>{`${people.length} people protected`}</p>
    </StyledHeader>
  );
};

export default Header;
