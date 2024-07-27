import { axiosInstence } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetArticle = () => {
  return useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const { data } = await axiosInstence.get("/");
      return data;
    },
  });
};
