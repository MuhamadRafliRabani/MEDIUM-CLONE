import { axiosInstence } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Endpoint } from ".";

export const useHandleGet = ({ url, key }: Endpoint) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await axiosInstence.get(url);
      return data;
    },
    enabled: !!url,
  });
};
