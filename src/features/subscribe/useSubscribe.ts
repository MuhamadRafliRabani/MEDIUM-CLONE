import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useSubscribe = () => {
  return useMutation({
    mutationFn: async (value) => {
      const request = await axiosInstence.post("/feature/subcribe", value);
      return request;
    },
  });
};
