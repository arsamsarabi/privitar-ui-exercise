import { observable, action } from "mobx";
import to from "await-to-js";
import dayjs from "dayjs";

import Person, { IPersonStore } from "../person/person";
import Settings, { ISettingsStore } from "../settings/settings";
import * as services from "../services/services";

export interface IPeopleStore {
  people: IPersonStore[];
  settings: ISettingsStore;
  loading: boolean;
  fetchPeople(): Promise<void>;
  addPeople(raw: string): void;
}

class People implements IPeopleStore {
  @observable people: IPersonStore[];
  @observable settings: ISettingsStore;
  @observable loading: boolean;
  @observable peopleTextArea: string;

  constructor() {
    this.people = [];
    this.settings = new Settings({ dobDateFormat: "DD/MM/YYYY" });
    this.loading = false;
    this.peopleTextArea = "";
    this.fetchPeople();
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
    raw
      .split("\n")
      .filter((line) => line.length)
      .forEach((line: string) => {
        const rawPersonData = line.split(" ").filter((el) => el.length);
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
    const dayjsDob = dayjs(dob, this.settings.dobDateFormat);
    const today = dayjs(new Date(), this.settings.dobDateFormat);
    const age = today.diff(dayjsDob, "year");

    return age;
  };
}

export default People;
