import React, { FC, ReactElement, useState } from "react";

import { useStore } from "../../store";
import { StyledPeopleList } from "./StyledPeopleList";
import { Collapsible, Loading } from "../../components";

const PeopleList: FC = (): ReactElement => {
  const {
    peopleStore: { people, loading },
  } = useStore();

  const [expanded, setExpanded] = useState<false | number>(false);

  if (loading) return <Loading />;

  return (
    <StyledPeopleList>
      {people.map((person) => {
        return (
          <Collapsible
            key={person.id}
            id={person.id}
            name={person.fullName}
            age={person.age}
            nationality={person.nationality}
            privacyRisk={person.riskPercentage}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        );
      })}
    </StyledPeopleList>
  );
};

export default PeopleList;
