import { useRouter } from "next/router";
import {
  Ellipsis,
  MessageCircle,
  PlayCircle,
  Dot,
  Share,
  ThumbsUp,
  Bookmark,
  Star,
} from "lucide-react";
import MyAvatar from "@/MYCOMPONENT/avatar/MyAvatar";
import MyToolTip from "@/MYCOMPONENT/MyToolTip/MyToolTip";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Card_profil from "@/MYCOMPONENT/card profil";
import ArticleSkeleton from "@/MYCOMPONENT/article/articleSkeleton";
import { toast } from "sonner";
import type { Comment } from "@/features/comment/commentFilde";
import { useHandleGet } from "@/lib/useGet";
import { formatDate } from "@/lib/date";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import CommentFilde from "@/features/comment/commentFilde";
import CardComment from "@/MYCOMPONENT/myComment/Mycomment";

const Article = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: likes } = useHandleGet(`/feature/like/${id}`);
  const { data: comments } = useHandleGet(`/feature/comment/73`);
  console.log("🚀 ~ Article ~ comments:", comments);
  const { data, isLoading, isError } = useHandleGet(`/article/${id}`);

  if (isLoading) return <ArticleSkeleton />;

  if (isError) return toast.error("something error!");

  const article = data?.data;

  return (
    <section className="mt-14 space-y-4 px-4">
      <div className="space-y-4 border-b border-primary pt-4 md:mx-auto md:max-w-2xl md:space-y-8 md:py-10">
        {article.member_only && (
          <blockquote className="noto-font flex items-center gap-2 text-[0.9em] text-black/60">
            <Star className="fill-yellow-400 stroke-none" />
            <span>Member-only story</span>
          </blockquote>
        )}
        <h1 className="text-3xl font-extrabold md:text-[42px]/[52px] md:font-bold">
          {article?.title}
        </h1>
        <h3 className="text-2xl/[28px] font-medium text-black/60 md:font-normal">
          {article?.description}
        </h3>

        {/* header article */}
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
          <div className="flex flex-col text-[0.9rem] font-normal capitalize md:text-base/[20px]">
            <h3 className="flex items-center">
              <p>{article?.user_name}</p>
              <Dot size={16} strokeWidth={0.5} />{" "}
              <span className="text-green-400">Follow</span>
            </h3>
            <div className="flex items-center text-[0.907rem] font-normal text-black/60">
              <span>8 min read</span>
              <Dot size={16} strokeWidth={0.5} />
              {formatDate(article?.date)}
            </div>
          </div>
        </div>
        {/* end header article */}

        {/* nav article */}
        <div className="flex items-center justify-between border-y border-slate-200 p-3">
          <div className="flex items-center gap-8 text-sm text-icon">
            <div className="flex items-center gap-1">
              <MyToolTip
                Content={
                  <p className="bg-primary">{likes?.data.length} claps</p>
                }
                Trigger={
                  <ThumbsUp className="size-5" size={16} strokeWidth={0.5} />
                }
              />
              {likes?.data.length}
            </div>
            <div className="flex items-center gap-1">
              <MyToolTip
                Content={
                  <p className="bg-primary">{comments?.data.length} response</p>
                }
                Trigger={
                  <Link href="#comment">
                    <MessageCircle className="size-5" strokeWidth={0.5} />
                  </Link>
                }
              />
              {comments?.data.length}
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
                <PlayCircle size={24} className="size-5 font-thin md:size-6" />
              }
            />
            <MyToolTip
              Content={<p className="bg-primary">Share</p>}
              Trigger={<Share className="size-5" size={16} strokeWidth={0.5} />}
            />
            <MyToolTip
              Content={<p className="bg-primary">Menu</p>}
              Trigger={
                <Ellipsis className="size-5" size={16} strokeWidth={0.5} />
              }
            />
          </div>
        </div>
        {/* end nav article */}

        <blockquote className="noto-font -ms-4 border-s-2 border-black ps-4 font-bold italic text-black/75 md:text-[20px]/[32px]">
          <strong>Read this article for free</strong>
          <Link href="/">
            <strong className="underline"> Here</strong>
          </Link>
        </blockquote>

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
          className="noto-font text-md leading-relaxed text-slate-600 md:text-[20px]/[32px]"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {article?.article}
        </ReactMarkdown>
      </div>
      <CommentFilde id={id} />
      <div className="mx-auto max-w-3xl" id="comment">
        {/* {comments?.data.map((comment: Comment, i: number) => (
          <CardComment
            key={i}
            comment={comment.comment}
            article_id={comment.article_id}
            image={comment.image || "/user.jpg"}
            create_at={comment.create_at}
            user_name={comment.user_name}
          />
        ))} */}
      </div>
    </section>
  );
};

export default Article;
