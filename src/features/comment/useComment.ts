import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

type Comment = {
  user: string;
  idArticle: string | string[] | undefined;
  comment: string;
  email: string;
  profil_img: string;
};

export const useComment = () => {
  return useMutation({
    mutationFn: async (value: Comment) => {
      const { data } = await axiosInstence.post(
        "/feature/comment/upload",
        value,
      );
      return data;
    },
  });
};
