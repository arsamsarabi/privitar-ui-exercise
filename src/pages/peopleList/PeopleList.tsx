import React, { FC, ReactElement, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import { Collapsible, Loading, AddPeople } from "../../components";

const PeopleList: FC = (): ReactElement => {
  const {
    peopleStore: { people, loading, addPeople },
  } = useStore();

  const [expanded, setExpanded] = useState<false | number>(false);

  if (loading) return <Loading />;

  return (
    <Fragment>
      <Link to="/settings">Settings</Link>
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

      <AddPeople handleSubmit={addPeople} />
    </Fragment>
  );
};

export default PeopleList;
