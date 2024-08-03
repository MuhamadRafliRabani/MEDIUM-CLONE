import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useLike = () => {
  return useMutation({
    mutationFn: async (value) => {
      const request = await axiosInstence.patch("/feature/like", value);
      return request;
    },
  });
};
