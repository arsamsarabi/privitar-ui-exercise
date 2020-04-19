import React from "react";
import { shallow } from "enzyme";

import { Layout } from "./Layout";

describe("<Header />", () => {
  it("Should corectly render its children", () => {
    const wrapper = shallow(
      <Layout>
        <p id="child-element">Hello World!</p>
      </Layout>
    );
    expect(wrapper.find("#child-element")).toBeDefined();
    expect(wrapper.find("#child-element").text()).toEqual("Hello World!");
  });
});
