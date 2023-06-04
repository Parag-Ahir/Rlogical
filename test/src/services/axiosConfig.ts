import axios, { AxiosInstance, AxiosResponse } from "axios";

// Create a new Axios instance with interceptors
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add headers, tokens, or perform any other actions before sending the request
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    // Handle response error
    if (error.response) {
      // The request was made and the server responded with an error status code
      // You can handle specific error statuses here
      if (error.response.status === 401) {
        // Handle unauthorized access
        // For example, you can redirect the user to the login page
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);

// Function to make a GET request
export const getRequest = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to make a POST request
export const postRequest = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
