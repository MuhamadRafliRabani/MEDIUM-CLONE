import { axiosInstence } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useCheckSubscription = (
  subscriber: string,
  subscribed_to: string,
) => {
  return useQuery({
    queryKey: ["subscriptionStatus"],
    queryFn: async () => {
      const { data } = await axiosInstence.post("/feature/check-subscription", {
        subscriber,
        subscribed_to,
      });
      return data;
    },
  });
};
