import React from "react";
import { shallow, mount } from "enzyme";

import {
  StyledAddPeople,
  StyledTextArea,
  StyledButton,
} from "./StyledAddPeople";
import { AddPeople } from "./AddPeople";
import { theme } from "../../styles";

describe("AddPeople", () => {
  const handleSubmit = jest.fn();
  it("Should render as expected", () => {
    const component = mount(<AddPeople handleSubmit={handleSubmit} />);
  });
});

describe("StyledAddPeople", () => {
  it("Should render as expected", () => {
    const component = shallow(<StyledAddPeople />);
    expect(component).toMatchSnapshot();
  });
});

describe("StyledTextArea", () => {
  it("Should render as expected", () => {
    const component = shallow(<StyledTextArea theme={theme} />);
    expect(component).toMatchSnapshot();
  });
});

describe("StyledButton", () => {
  it("Should render as expected", () => {
    const component = shallow(<StyledButton theme={theme} />);
    expect(component).toMatchSnapshot();
  });
});
