import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { PlayCircle } from "lucide-react";
import MyAvatar from "@/MYCOMPONENT/avatar/MyAvatar";
import MyToolTip from "@/MYCOMPONENT/MyToolTip/MyToolTip";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { axiosInstence } from "@/lib/axios";
import Card_profil from "@/MYCOMPONENT/card profil";
import {
  ChatCircle,
  Dot,
  DotsThree,
  Export,
  HandsClapping,
  MedalMilitary,
  StarFour,
} from "@phosphor-icons/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ArticleSkeleton from "@/MYCOMPONENT/articleSkeleton";
import Navbar from "@/MYCOMPONENT/navbar/navbar";

const Article = () => {
  const router = useRouter();
  const id = router.query?.id;

  const {
    data: dataArticle,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const { data } = await axiosInstence.get("/article/" + id);
      return data;
    },
  });

  const article = dataArticle;
  console.log(article);

  if (isLoading) return <ArticleSkeleton />;

  if (isError) return <div>Error loading data</div>;

  return (
    <>
      <Navbar />
      <section className="px-4 md:container md:px-0">
        <div className="space-y-4 pt-4 md:mx-auto md:w-1/2 md:space-y-8 md:pt-20">
          <div className="flex items-center gap-4">
            <MyToolTip
              Content={<p className="bg-primary">Member-only story</p>}
              Trigger={<StarFour size={16} className="text-yellow-400" />}
            />
            <p>Member-only story</p>
          </div>
          <h1 className="text-2xl font-extrabold leading-7 md:text-4xl md:leading-[3rem]">
            {article?.title}
          </h1>
          <div className="flex items-center gap-3 font-medium">
            <MyToolTip
              Content={
                <Card_profil
                  img={article?.img_user}
                  author_name={article?.author_name}
                />
              }
              Trigger={<MyAvatar size="size-6" img={article?.img_user} />}
            />
            <div className="flex flex-col">
              <h3 className="flex items-center">
                <MyToolTip
                  Content={
                    <Card_profil
                      img={article?.img_user}
                      author_name={article?.author_name}
                    />
                  }
                  Trigger={<p>{article?.author_name}</p>}
                />
                <Dot size={24} /> <span>Follow</span>
              </h3>
              <div className="flex items-center text-xs text-icon md:text-sm">
                <span> Published by </span>
                <span className="text-black"> {article?.author_name}</span>
                <Dot size={24} />
                <span>8 min read</span>
                <Dot size={24} />
                {article?.date}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-y border-slate-200 p-3">
            <div className="flex items-center gap-8 text-sm text-icon">
              <div className="flex items-center gap-1">
                <MyToolTip
                  Content={<p className="bg-primary">{article?.likes} claps</p>}
                  Trigger={
                    <HandsClapping size={16} className="size-5 border-none" />
                  }
                />
                {article?.likes}K
              </div>
              <div className="flex items-center gap-1">
                <MyToolTip
                  Content={
                    <p className="bg-primary">{article?.comments} response</p>
                  }
                  Trigger={
                    <ChatCircle size={16} className="size-5 border-none" />
                  }
                />
                {article?.comments}
              </div>
            </div>
            <div className="flex items-center gap-8 text-sm text-icon">
              <MyToolTip
                Content={<p className="bg-primary">Save</p>}
                Trigger={
                  <MedalMilitary
                    size={24}
                    weight="thin"
                    className="size-5 border-none md:size-6"
                  />
                }
              />
              <MyToolTip
                Content={<p className="bg-primary">Play</p>}
                Trigger={
                  <PlayCircle
                    size={24}
                    className="size-5 font-thin md:size-6"
                  />
                }
              />
              <MyToolTip
                Content={<p className="bg-primary">Share</p>}
                Trigger={
                  <Export
                    size={24}
                    weight="thin"
                    className="size-5 md:size-6"
                  />
                }
              />
              <MyToolTip
                Content={<p className="bg-primary">Menu</p>}
                Trigger={
                  <DotsThree
                    size={24}
                    weight="thin"
                    className="size-5 md:size-6"
                  />
                }
              />
            </div>
          </div>
          <div className="w-full p-4">
            <AspectRatio ratio={4 / 3}>
              <Image
                width={800}
                height={600}
                src={article?.img_url}
                alt=""
                className="h-full rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <ReactMarkdown
            className="prose lg:prose-xl"
            remarkPlugins={[remarkGfm]}
          >
            {article?.article}
          </ReactMarkdown>
        </div>
      </section>
    </>
  );
};

export default Article;
