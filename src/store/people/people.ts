import { observable, action } from "mobx";
import to from "await-to-js";

import Person, { IPersonStore } from "../person/person";
import * as services from "../services/services";

export interface IPeopleStore {
  people: IPersonStore[];
  loading: boolean;
  fetchPeople(): Promise<void>;
  addPeople(raw: string): void;
}

class People implements IPeopleStore {
  @observable people: IPersonStore[];
  @observable loading: boolean;
  @observable peopleTextArea: string;

  constructor() {
    this.people = [];
    this.loading = false;
    this.peopleTextArea = "";
    this.fetchPeople();
  }

  @action
  fetchPeople = async (): Promise<void> => {
    this.loading = true;

    // const [error, response] = await to<services.IFetchPeopleResponse>(
    //   services.fetchPeople()
    // );

    // if (error) {
    //   console.error(error);
    //   this.loading = false;
    // }

    const response = {
      data: {
        body: {
          people: [
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
          ],
        },
      },
    };

    if (response) {
      this.people = [
        ...this.people,
        ...this.peopleFromApiResponse(response.data.body.people),
      ];
      this.loading = false;
    }
  };

  @action
  addPeople = async (raw: string): Promise<void> => {
    const newPeople: Omit<services.IApiPerson, "id">[] = this.parseRawInput(
      raw
    );

    this.loading = true;

    const [error, response] = await to<services.IApiPerson[]>(
      services.postPeople(newPeople)
    );

    if (error) {
      console.error(error);
      this.loading = false;
    } else if (response) {
      this.people = [...this.people, ...this.peopleFromApiResponse(response)];
      this.loading = false;
    }
  };

  protected peopleFromApiResponse = (
    people: services.IApiPerson[]
  ): IPersonStore[] => {
    const result: IPersonStore[] = [];
    people.forEach((person: services.IApiPerson) => {
      result.push(
        new Person({
          id: person.id,
          firstName: person.first_name,
          lastName: person.last_name,
          age: person.age || undefined,
          nationality: person.nationality,
          riskPercentage: person.risk_percentage || undefined,
        })
      );
    });
    return result;
  };

  protected parseRawInput = (
    raw: string
  ): Omit<services.IApiPerson, "id">[] => {
    const result: Omit<services.IApiPerson, "id">[] = [];

    raw.split("\n").forEach((line: string) => {
      const rawPersonData = line.split(" ");
      const risk_percentage = this.parseRiskPercentage(rawPersonData.pop());
      const age = this.parseAge(rawPersonData.pop());
      const nationality = String(rawPersonData.pop());
      const first_name = String(rawPersonData.shift());
      const last_name = rawPersonData.join(" ");
      result.push({
        first_name,
        last_name,
        nationality,
        age,
        risk_percentage,
      });
    });
    return result;
  };

  protected parseAge = (age?: string): number | null => {
    if (age && age.indexOf("/") === -1) {
      return parseInt(age);
    } else if (age) {
      return this.calculateAge(age);
    }
    return null;
  };

  protected parseRiskPercentage = (risk?: string): number | null => {
    if (risk && parseFloat(risk) * 100 < 100) {
      return parseFloat(risk) * 100;
    }
    return null;
  };

  protected calculateAge = (dob: string): number => {
    const [day, month, year] = dob.split("/");
    const birthday = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

export default People;
