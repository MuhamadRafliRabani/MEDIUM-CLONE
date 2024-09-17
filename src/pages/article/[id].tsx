import React, { useEffect, useRef } from "react";
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
  PaperPlaneRight,
} from "@phosphor-icons/react";
import ArticleSkeleton from "@/MYCOMPONENT/article/articleSkeleton";
import Navbar from "@/MYCOMPONENT/navbar/navbar";
import { useFormik } from "formik";
import { validationSchema } from "@/features/comment/comment";
import { toast } from "sonner";
import { useUser, useUserCustom } from "@/hooks/store/useUser";
import { Button } from "@/components/ui/button";
import { useHandlePost } from "@/lib/useHandlePost";
import type { Comment } from "@/features/comment/comment";
import CardComment from "@/MYCOMPONENT/myComment/Mycomment";
import { useHandleGet } from "@/lib/useGet";
import { formatDate } from "@/lib/date";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Article = () => {
  const router = useRouter();
  const id = router.query?.id;
  const { user } = useUser();
  const { user: userCustom } = useUserCustom();
  const Ref = useRef<HTMLInputElement | null>(null);
  const { mutate } = useHandlePost<Comment>("/feature/comment/upload");
  const { data } = useHandleGet("/feature/comment/", id);

  const {
    data: article,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const { data } = await axiosInstence.get("/article/" + id);
      return data;
    },
  });

  const Date = formatDate(article?.date);

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = {
        user: (userCustom[0].name as string) || user?.displayName,
        idArticle: id,
        comment: values.comment,
        email: (userCustom[0].email as string) || user?.email,
        profil_img:
          (userCustom[0].profil_img as string) ||
          user?.photoURL ||
          "/profil.jpg",
      };
      mutate(data, {
        onSuccess: () => {
          toast.success("comment sended");
        },
        onError: () => {
          toast.error("comment not sended");
        },
      });
    },
  });

  useEffect(() => {
    if (Ref.current) {
      Ref.current.style.height = "auto";
      Ref.current.style.height = `${Ref.current?.scrollHeight}px`;
    }
  }, [formik.values.comment]);

  if (isLoading) return <ArticleSkeleton />;

  if (isError) return toast.error("something error!");

  console.log(article.img_user);

  return (
    <>
      <Navbar />
      <section className="space-y-4 px-4 md:container md:px-0">
        <div className="space-y-4 border-b border-primary pt-4 md:mx-auto md:w-1/2 md:space-y-8 md:pb-10 md:pt-20">
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
                {Date}
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
                {article?.likes}
              </div>
              <div className="flex items-center gap-1">
                <MyToolTip
                  Content={
                    <p className="bg-primary">{article?.comments} response</p>
                  }
                  Trigger={
                    <Link href="#comment">
                      <ChatCircle size={16} className="size-5 border-none" />
                    </Link>
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
          <div className="w-full">
            <AspectRatio ratio={4 / 3}>
              <Image
                width={800}
                height={600}
                src={article?.img_content}
                alt=""
                className="h-full rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <ReactMarkdown
            className="prose lg:prose-xl"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {article?.article}
          </ReactMarkdown>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto my-4 w-full max-w-2xl space-y-1 rounded-lg p-4"
        >
          <label htmlFor="comment" className="font-semibold">
            Type a Comment
          </label>
          <input
            type="text"
            name="comment"
            placeholder="your comment..."
            className="max-h-20 w-full rounded-t-lg border-b border-slate-300 bg-white p-2 shadow-sm outline-none focus:ring-0"
            ref={Ref}
            onChange={formik.handleChange}
          />
          <Button type="submit" variant="default" className="ms-auto block">
            <PaperPlaneRight size={20} weight="light" />
          </Button>
        </form>
        <div className="mx-auto max-w-3xl" id="comment">
          {data?.data.map((comment: Comment, i: number) => (
            <CardComment
              key={i}
              comment={comment.comment}
              idArticle={id}
              profil_img={comment.profil_img || "/profil.jpg"}
              time={comment.time}
              email={comment.email}
              user={comment.user}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Article;
