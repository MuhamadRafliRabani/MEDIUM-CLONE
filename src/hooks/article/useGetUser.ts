import { axiosInstence } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useGetUser = (
  email: string | undefined | null,
  response: AxiosResponse<any, any> | undefined,
) => {
  return useQuery({
    queryKey: [response],
    queryFn: async () => {
      const { data } = await axiosInstence.get("/feature/getuser/" + email);
      return data;
    },
  });
};
