import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useFeatureRequest = (method: string, endpoint: string) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstence({ method, url: endpoint, data });
      return response;
    },
  });
};
