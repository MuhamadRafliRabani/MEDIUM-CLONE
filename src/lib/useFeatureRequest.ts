import { axiosInstence } from "./axios";
import { useMutation } from "@tanstack/react-query";

type RequestMethod = "get" | "post" | "patch" | "delete";

export const useFeatureRequest = (method: RequestMethod, endpoint: string) => {
  return useMutation({
    mutationKey: ["like"],
    mutationFn: async (value: number | undefined) => {
      const response = await axiosInstence[method](endpoint, value);
      return response;
    },
  });
};
