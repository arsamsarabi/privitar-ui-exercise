import Person, { IPerson } from "./person";

describe("Person Store", () => {
  it("Should initialize correctly", () => {
    const isabelle: IPerson = new Person("Isabelle Ringing", "UK", 32, 0.12);
    expect(isabelle.firstName).toEqual("Isabelle");
    expect(isabelle.lastName).toEqual("Ringing");
    expect(isabelle.fullName).toEqual("Isabelle Ringing");
    expect(isabelle.country).toEqual("UK");
    expect(isabelle.age).toEqual(32);
    expect(isabelle.riskFactor).toEqual(0.12);
    expect(isabelle.riskPercentage).toEqual("12%");
  });
});
