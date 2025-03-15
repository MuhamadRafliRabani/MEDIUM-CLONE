import { useRouter } from "next/router";
import { MessageCircle, PlayCircle, Dot, Share, Bookmark } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useHandleGet } from "@/lib/useGet";
import { formatDate } from "@/lib/date";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useUser } from "@/hooks/store/zustand";
import ArticleSkeleton from "@/components/article/articleSkeleton";
import BlockquoteMember from "@/components/blockquoteMember";
import ToolTips from "@/components/toolTip/MyToolTip";
import Card_profil from "@/components/card profil";
import MyAvatar from "@/components/avatar/MyAvatar";
import { Like } from "@/features/like/handleLike";
import MyDropDownMenu from "@/components/dropDown/MyDropDownMenu";
import Comment from "@/features/comment/comment";

const Article = () => {
  const { query } = useRouter();
  const { user } = useUser();

  const { data, isLoading, isError } = useHandleGet({
    url: `/article/${query.q}`,
    key: query,
  });

  const { data: comments } = useHandleGet({
    url: `/feature/comment/${query.q}`,
    key: query?.q,
  });

  if (isLoading) return <ArticleSkeleton />;

  if (isError) return toast.error("something error!");

  const article = data?.data;

  return (
    <section className="sohne mt-4 space-y-4 overflow-hidden px-2">
      <div className="space-y-4 border-b border-primary pt-4 md:mx-auto md:max-w-[680px] md:space-y-7 md:py-10">
        <BlockquoteMember member_only={article.member_only} />

        <h1
          className={`Segoe-font mx-auto w-[95%] text-pretty text-[2rem]/[2.3rem] font-extrabold sm:text-[2.65rem]/[2.7rem] md:w-full md:text-5xl`}
        >
          {article?.title}
        </h1>
        <h3 className="mx-auto w-[95%] text-2xl/[2.1rem] text-black/65 md:mx-0">
          {article?.description}
        </h3>

        {/* header article */}
        <div className="mx-auto flex w-full items-center gap-3 font-medium">
          <ToolTips
            Content={
              <Card_profil
                img={article?.user_image}
                user_name={article?.user_name}
              />
            }
            Trigger={<MyAvatar size="size-12" img={article?.user_image} />}
          />
          <div className="flex flex-col gap-1 text-[0.9rem] font-normal capitalize md:text-base/[1.25rem]">
            <div className="flex items-center">
              <p>{article?.user_name}</p>
              <Dot size={16} strokeWidth={0.5} />{" "}
              <span className="text-green-400">Follow</span>
            </div>
            <div className="flex items-center text-black/60 md:text-[0.88rem]">
              <span>8 min read</span>
              <Dot size={16} strokeWidth={0.5} />
              {formatDate(article?.date)}
            </div>
          </div>
        </div>
        {/* end header article */}

        {/* nav article */}
        <div className="flex items-center justify-between border-y border-slate-200 px-3 py-1.5">
          <div className="flex items-center gap-8 text-sm text-icon">
            <div className="flex items-center gap-1">
              <Like article_id={query?.q} user_id={user ? user.id : null} />
            </div>
            <div className="flex items-center gap-1">
              <ToolTips
                Content={<p>{comments?.data.length} response</p>}
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
            <ToolTips
              Content={<p>Save</p>}
              Trigger={
                <Bookmark className="size-5" size={16} strokeWidth={0.5} />
              }
            />
            <ToolTips
              Content={<p>Play</p>}
              Trigger={
                <PlayCircle
                  strokeWidth={0.5}
                  size={24}
                  className="size-5 font-thin md:size-6"
                />
              }
            />
            <ToolTips
              Content={<p>Share</p>}
              Trigger={<Share className="size-5" size={16} strokeWidth={0.5} />}
            />
            <MyDropDownMenu />
          </div>
        </div>
        {/* end nav article */}

        <blockquote className="noto-font -ms-4 border-s-2 border-black ps-4 font-bold italic text-black/75 md:text-[1.25rem]/[2rem]">
          <strong>Read this article for free</strong>
          <Link href="/">
            <strong className="underline"> Here</strong>
          </Link>
        </blockquote>

        <div className="w-full">
          <Image
            width={800}
            height={400}
            src={article?.content_image}
            alt=""
            className="h-[250px] w-full rounded-md object-cover md:h-[450px]"
          />
        </div>

        <ReactMarkdown
          className="article-paragraft sohne text-md leading-relaxed md:text-[1.25rem]/[2rem]"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {article?.article}
        </ReactMarkdown>
      </div>
      <Comment id={query.q} />
    </section>
  );
};

export default Article;
