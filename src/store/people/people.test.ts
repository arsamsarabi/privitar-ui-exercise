import People, { IPeople } from "./people";

describe("People Store", () => {
  let peopleStore: IPeople;

  beforeEach(() => {
    peopleStore = new People();
  });

  it("Should initialize with an empty array of people", () => {
    expect(peopleStore.people).toEqual([]);
  });
});
