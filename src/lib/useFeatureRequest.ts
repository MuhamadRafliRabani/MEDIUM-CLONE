import { axiosInstence } from "./axios";
import { useMutation } from "@tanstack/react-query";

type RequestMethod = "get" | "post" | "patch" | "delete";
type value = {
  id: number | undefined;
};

export const useFeatureRequest = (method: RequestMethod, endpoint: string) => {
  return useMutation({
    mutationKey: ["like"],
    mutationFn: async (value: value) => {
      const response = await axiosInstence[method](endpoint, value);
      return response;
    },
  });
};
