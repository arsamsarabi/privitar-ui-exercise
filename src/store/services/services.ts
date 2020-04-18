import { axios } from "../../utils/axios";

const { REACT_APP_API_URL = "" } = process.env;

export interface IApiPerson {
  id: number;
  first_name: string;
  last_name: string;
  age: number | null;
  nationality: string;
  risk_percentage: number | null;
}

export interface IFetchPeopleResponse {
  data: {
    body: {
      people: IApiPerson[];
    };
  };
}

export const fetchPeople = async (): Promise<IFetchPeopleResponse> =>
  axios.get(REACT_APP_API_URL);

export const postPeople = async (
  newPeople: Omit<IApiPerson, "id">[]
): Promise<IApiPerson[]> => {
  return new Promise((resolve) => {
    const response: IApiPerson[] = newPeople.map((person) => ({
      ...person,
      id: Math.random() * 100 + 1,
    }));
    resolve(response);
  });
};
