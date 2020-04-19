import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import {
  StyledAddPeople,
  StyledTextArea,
  StyledButton,
} from "./StyledAddPeople";
import { AddPeople } from "./AddPeople";
import { theme } from "../../styles";

describe("AddPeople", () => {
  let wrapper: ShallowWrapper;
  const handleSubmit = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<AddPeople handleSubmit={handleSubmit} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render as expected", () => {
    expect(wrapper.find("textarea")).toBeDefined();
    expect(wrapper.find("button")).toBeDefined();
  });

  it("Should fire handleSubmit correclty", () => {
    const MOCK_VALUE = "Hello World! 👋🏻🌎";
    wrapper.find("#textarea").simulate("change", {
      preventDefault: jest.fn(),
      target: { value: MOCK_VALUE },
    });
    expect(wrapper.find("#textarea").prop("value")).toEqual(MOCK_VALUE);
    wrapper.find("#submit-button").simulate("click");
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(MOCK_VALUE);
  });
});

describe("StyledAddPeople", () => {
  it("Should render as expected", () => {
    const wrapper = shallow(<StyledAddPeople />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledTextArea", () => {
  it("Should render as expected", () => {
    const wrapper = shallow(<StyledTextArea theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledButton", () => {
  it("Should render as expected", () => {
    const wrapper = shallow(<StyledButton theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
