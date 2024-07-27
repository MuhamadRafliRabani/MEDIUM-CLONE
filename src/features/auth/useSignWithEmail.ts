import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useSignWithEmail = () => {
  return useMutation({
    mutationFn: async (value) => {
      const request = await axiosInstence.post("/auth/signup", value);
      return request;
    },
  });
};
