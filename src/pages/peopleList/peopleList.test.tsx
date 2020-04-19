import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import PeopleList from "./PeopleList";

const MOCK_PEOPLE = [
  {
    id: 1,
    first_name: "Olive",
    last_name: "Hue",
    age: 27,
    nationality: "Thaiwan",
    risk_percentage: 35,
  },
  {
    id: 2,
    first_name: "Isabelle",
    last_name: "Ringing",
    age: 32,
    nationality: "Spain",
    risk_percentage: 81,
  },
  {
    id: 3,
    first_name: "Paige",
    last_name: "Turner",
    age: 24,
    nationality: "United States",
    risk_percentage: 44,
  },
];

jest.mock("../../store", () => ({
  useStore: () => ({
    peopleStore: {
      people: MOCK_PEOPLE,
      loading: false,
      addPeople: jest.fn(),
    },
  }),
}));

describe("<PeopleList />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<PeopleList />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render as expected", () => {
    expect(wrapper.find("collapsible-1")).toBeDefined();
    expect(wrapper.find("collapsible-2")).toBeDefined();
    expect(wrapper.find("collapsible-3")).toBeDefined();
    expect(wrapper.find("addPeople")).toBeDefined();
  });
});
