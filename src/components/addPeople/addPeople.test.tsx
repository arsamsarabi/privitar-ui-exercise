import React from "react";
import { shallow } from "enzyme";

import {
  StyledAddPeople,
  StyledTextArea,
  StyledButton,
} from "./StyledAddPeople";
import { AddPeople } from "./AddPeople";

describe("StyledAddPeople", () => {
  it("Should render as expected", () => {
    const component = shallow(<StyledAddPeople />);
    expect(component).toMatchSnapshot();
  });
});
