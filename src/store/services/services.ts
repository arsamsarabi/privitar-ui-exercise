import { axios } from "../../utils/axios";

const { REACT_APP_API_URL = "" } = process.env;

export interface IApiPerson {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  nationality: string;
  risk_percentage: number;
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
