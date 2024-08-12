import { axiosInstence } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetArticle = (topic: string) => {
  console.log(topic);

  return useQuery({
    queryKey: ["article", "like", topic],
    queryFn: async () => {
      const { data } = await axiosInstence.get("/" + topic);
      return data;
    },
  });
};
