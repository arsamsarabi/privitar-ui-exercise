import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Collapsible, ICollapsibleProps } from "./Collapsible";
import {
  StyledCollapsible,
  StyledCollapsibleHeader,
  StyledCollapsibleContent,
} from "./StyledCollapsible";
import { theme } from "../../styles";

describe("Collapsible", () => {
  let wrapper: ShallowWrapper;
  const MOCK_PROPS: ICollapsibleProps = {
    id: 1,
    name: "Eileen Sideways",
    age: 18,
    nationality: "United States",
    privacyRisk: 50,
    expanded: false,
    setExpanded: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Collapsible {...MOCK_PROPS} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render as expected", () => {
    expect(wrapper.find("#person-name").text()).toBe(MOCK_PROPS.name);
    expect(wrapper.find("#collapse-icon").text()).toBe("+");
  });

  it("Should expand/collapse when header is clicked", () => {
    wrapper.find("#collapse-header").simulate("click");
    expect(MOCK_PROPS.setExpanded).toHaveBeenCalledWith(MOCK_PROPS.id);
    setTimeout(() => {
      expect(wrapper.find("#collapse-icon").text()).toBe("-");
      expect(wrapper.find("#person-age").text()).toBe(MOCK_PROPS.age);
      expect(wrapper.find("#person-nationality").text()).toBe(
        MOCK_PROPS.nationality
      );
      expect(wrapper.find("#person-risk-percentage").text()).toBe(
        MOCK_PROPS.privacyRisk
      );
      wrapper.find("#collapse-header").simulate("click");
      expect(MOCK_PROPS.setExpanded).toHaveBeenCalledWith(false);
    }, 100);
  });

  it("Should display '-' for age if age is undefined and same for privacyRisk", () => {
    const wrapper2 = shallow(
      <Collapsible {...MOCK_PROPS} age={undefined} privacyRisk={undefined} />
    );
    wrapper2.find("#collapse-header").simulate("click");
    setTimeout(() => {
      expect(wrapper.find("#person-age").text()).toBe("-");
      expect(wrapper.find("#person-risk-percentage").text()).toBe("-");
    }, 100);
  });
});

describe("StyledCollapsible", () => {
  it("Should render as expected", () => {
    const wrapper = shallow(<StyledCollapsible theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledCollapsibleHeader", () => {
  it("Should render as expected", () => {
    const wrapper = shallow(<StyledCollapsibleHeader theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledCollapsibleContent", () => {
  it("Should render as expected", () => {
    const wrapper = shallow(<StyledCollapsibleContent theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
