import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Alert = {
  dismiss() {
    toast.dismiss();
  },
  success(messages) {
    toast.success(messages);
  },
  info(messages) {
    toast.info(messages);
  },
  warn(messages) {
    toast.warn(messages);
  },
  error(messages) {
    toast.error(messages);
  },
};
