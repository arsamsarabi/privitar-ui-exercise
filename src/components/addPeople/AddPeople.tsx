import React, { FC, ReactElement } from "react";

import { useStore } from "../../store";
import { StyledAddPeople } from "./StyledAddPeople";

const AddPeople: FC = (): ReactElement => {
  const {
    peopleStore: { people },
  } = useStore();

  return (
    <StyledAddPeople>
      <textarea placeholder="name nationality age risk" rows={10} />
      <button onClick={() => console.log("Click")}>SUBMIT</button>
    </StyledAddPeople>
  );
};

export default AddPeople;
