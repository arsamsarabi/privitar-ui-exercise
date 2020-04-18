import { observable, computed } from "mobx";

export interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
  nationality: string;
  age?: number;
  riskPercentage?: number;
}

export interface IPersonStore extends IPerson {
  fullName: string;
}

class Person implements IPersonStore {
  @observable id: number;
  @observable firstName: string;
  @observable lastName: string;
  @observable nationality: string;
  @observable age?: number;
  @observable riskPercentage?: number;

  constructor(args: IPerson) {
    this.id = args.id || 999;
    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.nationality = args.nationality;
    this.age = args.age;
    this.riskPercentage = args.riskPercentage;
  }

  @computed
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default Person;
