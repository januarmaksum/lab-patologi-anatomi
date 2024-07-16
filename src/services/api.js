import { instance } from "./axiosInstance";

const ApiService = {
  // GET request
  get: async (endpoint, payload) => {
    try {
      const response = await instance.get(endpoint, payload ? { params: payload } : null);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  // POST request
  post: async (endpoint, payload, headers) => {
    try {
      const response = await instance.post(endpoint, payload, { headers });
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  // PATCH request
  patch: async (endpoint, payload) => {
    try {
      const response = await instance.patch(endpoint, payload);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  // PUT request
  put: async (endpoint, payload) => {
    try {
      const response = await instance.put(endpoint, payload);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  // DELETE request
  delete: async (endpoint, payload) => {
    try {
      const response = await instance.delete(endpoint, payload);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
};

const handleError = (error) => {
  console.error('error api: ', error);
};

export default ApiService;
