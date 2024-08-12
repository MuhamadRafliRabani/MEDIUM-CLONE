import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

type user = {
  name: string;
  pronouns: string;
  short_bio: string;
  email: string | null | undefined;
  profil_img: string | null | undefined;
};

export const useSetUser = () => {
  return useMutation({
    mutationFn: async (value: user) => {
      const res = await axiosInstence.post(
        "/feature/upload/profil-user",
        value,
      );
      return res;
    },
  });
};
