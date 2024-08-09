import { axiosInstence } from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useSetUser = () => {
  return useMutation({
    mutationFn: async (value) => {
      const res = await axiosInstence.post(
        "/feature/upload/profil-user",
        value,
      );
      return res;
    },
  });
};
