import { AxiosResponse } from "axios";
import { axios } from "../../utils/axios";

const { API_URL = "" } = process.env;

export const fetchPeople = async (): Promise<AxiosResponse<any>> => {
  return axios.get(API_URL);
};
