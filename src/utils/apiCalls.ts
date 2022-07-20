import axios from "axios";
import type { Collection } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllCollections = (): Promise<Collection[]> => {
  return axios
    .get<Collection[]>("/collection", {
      baseURL: API_URL,
      headers: {},
      params: {}, // query params
      data: {}, // body
    })
    .then((res) => res.data);
};
