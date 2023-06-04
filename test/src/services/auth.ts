import { getRequest, postRequest } from "./axiosConfig";

export const signUpUser = async (request: any) => {
  return await postRequest("/auth/signup", request)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

export const loginUser = async (request: any) => {
  return await postRequest("/auth/login", request)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};
