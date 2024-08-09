import { axiosInstence } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

type StoryData = {
  title: string;
  description: string;
  type: string;
  article: string;
  author_name: string;
  img_user: string;
  likes: string;
  comment: string;
  date: string;
  img_content?: File;
};

export const usePublishStory = () => {
  return useMutation({
    mutationFn: async (value: StoryData) => {
      const request = await axiosInstence.post(
        "/feature/publish/new-story",
        value,
      );
      return request;
    },
  });
};
