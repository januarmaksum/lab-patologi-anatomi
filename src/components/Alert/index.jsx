import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const alert = {
  dismiss() {
    toast.dismiss();
  },
  success(text) {
    toast.success(text);
  },
  info(text) {
    toast.info(text);
  },
  warn(text) {
    toast.warn(text);
  },
  error(text) {
    toast.error(text);
  },
};
