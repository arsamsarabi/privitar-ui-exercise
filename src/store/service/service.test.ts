import { fetchPeople } from "./service";

describe("fetchPeople()", () => {
  it("should fetch data from API", async (done) => {
    try {
      const response = await fetchPeople();
      expect(response.status).toEqual(200);
      expect(response.statusText).toEqual("OK");
    } catch (err) {
      console.error(err);
      done.fail(new Error(err));
    }
  });
});
