import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

type image = {
  lastModified: number;
  lastModifiedDate: any;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

type editProfil = {
  name: string;
  pronouns: string;
  short_bio: string;
  image: image;
  email: string;
};

export const useSetProfil = () => {
  return useMutation({
    mutationFn: async (value: FormData) => {
      const request = await axiosInstence.post(
        "/feature/update/profil-user",
        value,
      );
      return request;
    },
  });
};
