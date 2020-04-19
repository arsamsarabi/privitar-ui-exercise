import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

jest.mock("../../store", () => ({
  useStore: () => ({
    peopleStore: {
      people: ["1", "2", "3", "4", "5"],
    },
  }),
}));

describe("<Header />", () => {
  it("Should corectly display the number of people protected", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("#protected-count").text()).toEqual("5");
  });
});
