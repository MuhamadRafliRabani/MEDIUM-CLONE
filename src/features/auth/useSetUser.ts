import { axiosInstence } from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

type user = {
  name: string;
  pronouns: string;
  short_bio: string;
  email: string;
  profil_img: string;
};

export const useSetUser = () => {
  return useMutation({
    mutationFn: async (value: user) => {
      const res = await axiosInstence.post(
        "/feature/profil-user/first-upload",
        value,
      );
      return res;
    },
  });
};
