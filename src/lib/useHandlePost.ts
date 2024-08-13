import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useHandlePost = <T>(URL: string) => {
  return useMutation({
    mutationFn: async (value: T) => {
      const request = await axiosInstence.post(URL, value);
      return request;
    },
  });
};
