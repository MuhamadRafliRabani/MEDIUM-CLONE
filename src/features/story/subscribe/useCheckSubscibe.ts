import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

type CheckSubscription = {
  userCustom: {
    email: string;
    id: number;
    name: string;
    profil_img: string;
    pronouns: string;
    short_bio: string;
    subscribed_to: string;
  };
};

export const useCheckSubscription = (author_name: string) => {
  return useMutation({
    mutationKey: ["checkSubscription", author_name],
    mutationFn: async (value: CheckSubscription) => {
      const values = {
        subscriber: value.userCustom.email,
        subscribed_to: value.userCustom.subscribed_to,
      };
      const { data } = await axiosInstence.post(
        "/feature/checkisSubscribe",
        values,
      );
      return data;
    },
  });
};
