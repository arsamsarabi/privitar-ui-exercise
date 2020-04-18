import React, { FC, ReactElement } from "react";

import { useStore } from "../../store";
import { StyledPeopleList } from "./StyledPeopleList";
import { Collapsible, Loading } from "../../components";

const PeopleList: FC = (): ReactElement => {
  const {
    peopleStore: { people, loading },
  } = useStore();

  if (loading) return <Loading />;

  return (
    <StyledPeopleList>
      {people.map((person) => {
        return (
          <Collapsible
            name={person.fullName}
            age={person.age}
            nationality={person.nationality}
            privacyRisk={person.riskPercentage}
          />
        );
      })}
    </StyledPeopleList>
  );
};

export default PeopleList;
