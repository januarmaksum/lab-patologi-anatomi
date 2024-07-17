import ApiService from "./api";

export const LabServices = {
  getDataLab(params) {
    return ApiService.get("/service/transaksi/lab-patologi-anatomi/get", params);
  },
};
