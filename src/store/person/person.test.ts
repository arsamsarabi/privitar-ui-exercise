import Person, { IPersonStore } from "./person";

describe("Person Store", () => {
  it("Should initialize correctly", () => {
    const isabelle: IPersonStore = new Person({
      firstName: "Isabelle",
      lastName: "Ringing",
      nationality: "UK",
      age: 32,
      riskPercentage: 42,
    });
    expect(isabelle.firstName).toEqual("Isabelle");
    expect(isabelle.lastName).toEqual("Ringing");
    expect(isabelle.fullName).toEqual("Isabelle Ringing");
    expect(isabelle.nationality).toEqual("UK");
    expect(isabelle.age).toEqual(32);
    expect(isabelle.riskPercentage).toEqual(42);
  });
});
