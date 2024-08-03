import { toast } from "sonner";

export const toastPromise = (promise, data) => {
  toast.promise(promise, {
    loading: "Loading...",
    success: (data) => {
      return `${data} toast has been added`;
    },
    error: "Error",
  });
};
