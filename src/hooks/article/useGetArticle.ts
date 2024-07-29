import { axiosInstence } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { usesetTopic } from "../store/useUser";

export const useGetArticle = () => {
  const { topic } = usesetTopic();
  console.log(topic);

  return useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const { data } = await axiosInstence.get("/" + topic);
      return data;
    },
  });
};
