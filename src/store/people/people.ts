import { observable } from "mobx";

import Person, { IPerson } from "../person/person";

export interface IPeople {
  people: IPerson[];
}

class People implements IPeople {
  @observable people: IPerson[];

  constructor() {
    this.people = [];
  }
}

export default People;
