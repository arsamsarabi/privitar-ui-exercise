import React, { FC, ReactElement, useState } from "react";

import {
  StyledCollapsible,
  StyledCollapsibleHeader,
  StyledCollapsibleContent,
} from "./StyledCollapsible";

interface ICollapsibleProps {
  name: string;
  age: number;
  nationality: string;
  privacyRisk: number;
}

export const Collapsible: FC<ICollapsibleProps> = ({
  name,
  age,
  nationality,
  privacyRisk,
}): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <StyledCollapsible>
      <StyledCollapsibleHeader>
        <p>{name}</p>
        <button onClick={() => setOpen(!open)}>{open ? "-" : "+"}</button>
      </StyledCollapsibleHeader>
      <StyledCollapsibleContent open={open}>
        <p>
          Age: <span>{age}</span>
        </p>
        <div />
        <p>
          Nationality: <span>{nationality}</span>
        </p>
        <p>
          Privacy Risk: <span>{privacyRisk}%</span>
        </p>
      </StyledCollapsibleContent>
    </StyledCollapsible>
  );
};
