import ApiService from "./api";

export const AuthServices = {
  signin(payload, headers) {
    return ApiService.post("/auth/sign-in", payload, headers);
  },
};
