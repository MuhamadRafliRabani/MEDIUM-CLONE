import { axiosInstence } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useHandleGet = (URL: string, key?: any, keyOptions?: any) => {
  return useQuery({
    queryKey: [key, URL, keyOptions],
    queryFn: async () => {
      const { data } = await axiosInstence.get(URL);
      return data;
    },
  });
};
