import { axiosInstence } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useCheckSubscription = (user: any, author_name: string) => {
  return useQuery({
    queryKey: ["checkSubscription", user?.displayName, author_name],
    queryFn: async () => {
      const { data } = await axiosInstence.get(
        `/feature/${user.displayName}/${author_name}`,
      );
      return data;
    },
    enabled: !!user?.displayName && !!author_name,
  });
};
