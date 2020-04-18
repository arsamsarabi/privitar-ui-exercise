import { observable, action } from "mobx";

import Person, { IPersonStore } from "../person/person";
import * as services from "../services/services";

export interface IPeopleStore {
  people: IPersonStore[];
  loading: boolean;
  fetchPeople(): Promise<void>;
}

class People implements IPeopleStore {
  @observable people: IPersonStore[];
  @observable loading: boolean;

  constructor() {
    this.people = [];
    this.loading = false;
  }

  @action
  fetchPeople = async (): Promise<void> => {
    this.loading = true;
    try {
      const response = await services.fetchPeople();
      this.people = [
        ...this.people,
        ...this.peopleFromApiResponse(response.data.body.people),
      ];
      this.loading = false;
    } catch (error) {
      console.error(error);
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
          age: person.age,
          nationality: person.nationality,
          riskPercentage: person.risk_percentage,
        })
      );
    });
    return result;
  };
}

export default People;
