import { axiosInstence } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (email: string | undefined | null) => {
  return useQuery({
    queryKey: [],
    queryFn: async () => {
      const { data } = await axiosInstence.get("/feature/getuser/" + email);
      return data;
    },
  });
};
