import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

type SubscribeDataType = {
  subscriber: string;
  subscribed_to: string;
  subscribe_at: string;
};

export const useSubscribe = (URL: string) => {
  return useMutation({
    mutationFn: async (value: SubscribeDataType) => {
      const request = await axiosInstence.post(URL, value);
      return request;
    },
  });
};
