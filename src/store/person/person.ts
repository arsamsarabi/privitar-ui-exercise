import { observable, computed } from "mobx";

export interface IPerson {
  firstName: string;
  lastName: string;
  country: string;
  age: number | string;
  riskFactor: number;
  riskPercentage: string;
  fullName: string;
}

class Person implements IPerson {
  @observable firstName: string;
  @observable lastName: string;
  @observable country: string;
  @observable age: number | string;
  @observable riskFactor: number;

  constructor(
    name: string,
    country: string,
    age: number | string,
    riskFactor: number
  ) {
    this.firstName = this.getFirstName(name);
    this.lastName = this.getLastNames(name);
    this.country = country;
    this.age = age;
    this.riskFactor = riskFactor;
  }

  @computed
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @computed
  get riskPercentage(): string {
    return `${this.riskFactor * 100}%`;
  }

  protected getFirstName = (name: string): string =>
    name.substr(0, name.indexOf(" "));

  protected getLastNames = (name: string): string =>
    name.substr(name.indexOf(" ") + 1);
}

export default Person;
