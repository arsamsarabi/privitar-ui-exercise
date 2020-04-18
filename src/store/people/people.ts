import { observable, action } from "mobx";
import to from "await-to-js";

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

    const [error, response] = await to<services.IFetchPeopleResponse>(
      services.fetchPeople()
    );

    if (error) {
      console.error(error);
      this.loading = false;
    }

    if (response) {
      this.people = [
        ...this.people,
        ...this.peopleFromApiResponse(response.data.body.people),
      ];
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
