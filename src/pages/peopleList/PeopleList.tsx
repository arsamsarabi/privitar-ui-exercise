import React, { FC, ReactElement } from "react";

import { useStore } from "../../store";
import StyledPeopleList from "./StyledPeopleList";

const PeopleList: FC = (): ReactElement => {
  const {
    peopleStore: { people },
  } = useStore();

  return <StyledPeopleList>PeopleList</StyledPeopleList>;
};

export default PeopleList;
