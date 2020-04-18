import React, { FC, ReactElement, useState, ChangeEvent } from "react";

import {
  StyledAddPeople,
  StyledTextArea,
  StyledButton,
} from "./StyledAddPeople";

interface IAddPeopleProps {
  handleSubmit(value: string): void;
}

export const AddPeople: FC<IAddPeopleProps> = ({
  handleSubmit,
}): ReactElement => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return (
    <StyledAddPeople>
      <StyledTextArea
        onChange={handleChange}
        placeholder="Name, Country, Age, Risk percentage"
        rows={10}
        value={value}
      />
      <StyledButton
        onClick={() => handleSubmit(value)}
        disabled={!value.length}
      >
        SUBMIT
      </StyledButton>
    </StyledAddPeople>
  );
};
