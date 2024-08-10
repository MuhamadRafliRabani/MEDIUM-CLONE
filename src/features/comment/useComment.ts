import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useComment = () => {
    return useMutation({
      mutationFn: async (value) => {
        const {data} = await axiosInstence.post("/feature/comment/upload", value);
      return data
      },
    });
  }