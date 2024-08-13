import { axiosInstence } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useHandlePatch = <T>(URL: string, handleLike: () => void) => {
  return useQuery({
    queryKey: [URL, handleLike],
    queryFn: async () => {
      const request = await axiosInstence.patch(URL);
      return request;
    },
  });
};
