import { useRef } from "react";
import { useRouter } from "next/router";
import {
  Ellipsis,
  MessageCircle,
  PlayCircle,
  Dot,
  Share,
  ThumbsUp,
  Bookmark,
  SendHorizontal,
} from "lucide-react";
import MyAvatar from "@/MYCOMPONENT/avatar/MyAvatar";
import MyToolTip from "@/MYCOMPONENT/MyToolTip/MyToolTip";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Card_profil from "@/MYCOMPONENT/card profil";
import ArticleSkeleton from "@/MYCOMPONENT/article/articleSkeleton";
import Navbar from "@/MYCOMPONENT/navbar/navbar";
import { toast } from "sonner";
import { useUser } from "@/hooks/store/useUser";
import { Button } from "@/components/ui/button";
import type { Comment } from "@/features/comment/comment";
import { useHandleGet } from "@/lib/useGet";
import { formatDate } from "@/lib/date";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Article = ({ parems }: any) => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useUser();
  const Ref = useRef<HTMLInputElement | null>(null);
  const { data: comments } = useHandleGet(`/feature/comment/${id && id}`);

  console.log("🚀 ~ Article ~ comments:", comments);
  const { data, isLoading, isError } = useHandleGet(`/article/${id}`);

  if (isLoading) return <ArticleSkeleton />;

  if (isError) return toast.error("something error!");

  const article = data?.data;

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
                  img={article?.user_image}
                  user_name={article?.user_name}
                />
              }
              Trigger={<MyAvatar size="size-6" img={article?.user_image} />}
            />
            <div className="flex flex-col">
              <h3 className="flex items-center">
                <MyToolTip
                  Content={
                    <Card_profil
                      img={article?.user_image}
                      user_name={article?.user_name}
                    />
                  }
                  Trigger={<p>{article?.user_name}</p>}
                />
                <Dot size={16} strokeWidth={0.5} /> <span>Follow</span>
              </h3>
              <div className="flex items-center text-xs text-icon md:text-sm">
                <span> Published by </span>
                <span className="text-black"> {article?.user_name}</span>
                <Dot size={16} strokeWidth={0.5} />
                <span>8 min read</span>
                <Dot size={16} strokeWidth={0.5} />
                {formatDate(article?.date)}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-y border-slate-200 p-3">
            <div className="flex items-center gap-8 text-sm text-icon">
              <div className="flex items-center gap-1">
                <MyToolTip
                  Content={<p className="bg-primary">{article?.likes} claps</p>}
                  Trigger={
                    <ThumbsUp className="size-5" size={16} strokeWidth={0.5} />
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
                      <MessageCircle className="size-5" strokeWidth={0.5} />
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
                  <Bookmark className="size-5" size={16} strokeWidth={0.5} />
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
                  <Share className="size-5" size={16} strokeWidth={0.5} />
                }
              />
              <MyToolTip
                Content={<p className="bg-primary">Menu</p>}
                Trigger={
                  <Ellipsis className="size-5" size={16} strokeWidth={0.5} />
                }
              />
            </div>
          </div>
          <div className="w-full">
            <AspectRatio ratio={4 / 3}>
              <Image
                width={800}
                height={600}
                src={article?.content_image}
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
          onSubmit={() => {}}
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
            onChange={() => {}}
          />
          <Button type="submit" variant="default" className="ms-auto block">
            <SendHorizontal size={16} strokeWidth={0.5} />
          </Button>
        </form>
        <div className="mx-auto max-w-3xl" id="comment">
          {/* {comments?.data.map((comment: Comment, i: number) => (
            <CardComment
              key={i}
              comment={comment.comment}
              idArticle={id}
              profil_img={comment.profil_img || "/profil.jpg"}
              time={comment.time}
              email={comment.email}
              user={comment.user}
            />
          ))} */}
        </div>
      </section>
    </>
  );
};

export default Article;
