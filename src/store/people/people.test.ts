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

const RAW_INPUT = `
Ramiro    Escobar   GB   23  0.1000
Jennifer Stevens   US   34 1.02
Shreya Khan IN  16/02/1991   0.7
Katherine Hannah  Long FR  10/01/1978 0.1
Willem de    Leeuw Verbeek  NL   44 0.45
Joseane   Silva  MX  12/12/1993 1.2300
Charlie Smith   IE 22 0.005e2
`;

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

    it("Should parse raw data correctly", async () => {
      await peopleStore.addPeople(RAW_INPUT);

      expect(peopleStore.people.length).toBe(7);

      expect(peopleStore.people[0].firstName).toBe("Ramiro");
      expect(peopleStore.people[0].lastName).toBe("Escobar");
      expect(peopleStore.people[0].nationality).toBe("GB");
      expect(peopleStore.people[0].age).toBe(23);
      expect(peopleStore.people[0].riskPercentage).toBe(10);

      expect(peopleStore.people[1].riskPercentage).toBe(undefined);

      expect(peopleStore.people[2].age).toBe(29);

      expect(peopleStore.people[4].fullName).toBe("Willem de Leeuw Verbeek");

      expect(peopleStore.people[6].riskPercentage).toBe(50);

      await peopleStore.addPeople(RAW_INPUT);
      expect(peopleStore.people.length).toBe(14);
    });
  });
});
