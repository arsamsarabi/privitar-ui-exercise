import * as moxios from "moxios";

import { axios } from "../../utils/axios";
import People, { IPeopleStore } from "./people";

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

describe("People Store", () => {
  let peopleStore: IPeopleStore;

  beforeEach(() => {
    peopleStore = new People();
  });

  describe("fetchPeople()", () => {
    beforeEach(() => {
      moxios.install(axios);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it("fetchPeople() should populate the people array correctly", async () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            body: { people: MOCK_PEOPLE },
          },
        });
      });

      const lengthBefore = peopleStore.people.length;

      await peopleStore.fetchPeople();

      expect(peopleStore.people.length).toEqual(lengthBefore + 3);
      expect(peopleStore.people[peopleStore.people.length - 3].firstName).toBe(
        "Olive"
      );
      expect(peopleStore.people[peopleStore.people.length - 2].fullName).toBe(
        "Isabelle Ringing"
      );
      expect(
        peopleStore.people[peopleStore.people.length - 1].nationality
      ).toBe("United States");
    });
  });
});
