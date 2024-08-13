import { axiosInstence } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useHandleGet = (URL: string, key: any, keyOptions?: any) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await axiosInstence.get(URL + key);
      return data;
    },
  });
};
