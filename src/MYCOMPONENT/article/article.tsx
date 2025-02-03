import React from "react";
import Link from "next/link";
import MyAvatar from "../avatar/MyAvatar";
import Card_profil from "../card profil";
import MyToolTip from "../MyToolTip/MyToolTip";
import CardFeture from "../CardFitur/CardFeture";
import { BookmarkSimple, MinusCircle, Smiley } from "@phosphor-icons/react";
import MyDropDownMenu from "../MyDropDownMenu/MyDropDownMenu";
import Image from "next/image";
import { Article } from "@/pages";

type CardArticleProps = {
  articles: Article[];
};

const CardArticle: React.FC<CardArticleProps> = ({ articles }) => {
  if (articles?.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center space-y-4 border-b border-slate-200 pb-4 md:w-[1036px] md:pb-0">
        <Smiley size={40} />
        <h1 className="text-2xl text-primary">No articles in this topic</h1>
      </div>
    );
  }

  return (
    <>
      {articles.map((article, i) => (
        <article key={i} className="w-full space-y-4 pb-4 md:w-article md:pb-0">
          {/* Profil Section */}
          <div className="flex items-center gap-3 text-sm">
            <MyToolTip
              Content={
                <Card_profil
                  img={article.user_image}
                  user_name={article.user_name}
                />
              }
              Trigger={<MyAvatar size="size-6" img={article.user_image} />}
            />
            <p className="hover:underline">{article.user_name}</p>
          </div>

          {/* Article Content */}
          <div className="grid grid-cols-[1fr_90px] border-b border-slate-200 sm:grid-cols-[1fr_150px] md:grid-cols-[1fr_170px]">
            {/* Text Content */}
            <div className="flex w-full flex-col gap-2 pr-2 md:pr-0">
              <Link href={`/article/${article.article_id}`}>
                <h1 className="line-clamp-3 w-[95%] text-pretty text-lg font-extrabold leading-6 sm:line-clamp-3 md:text-2xl md:leading-7">
                  {article.title}
                </h1>
              </Link>
              <p className="line-clamp-2 w-4/5 text-pretty text-base text-slate-500 sm:line-clamp-2 md:line-clamp-5">
                {article.description}
              </p>
              <div className="flex w-11/12 items-center justify-evenly py-2 md:py-4">
                <CardFeture id={article.article_id} date={article.date} />
                {/* Desktop Actions */}
                <div className="hidden items-center gap-2 text-slate-500 md:flex">
                  <MyToolTip
                    Content="Show less like this"
                    Trigger={
                      <MinusCircle size={16} className="text-outLineIcon" />
                    }
                  />
                  <MyToolTip
                    Content="Save"
                    Trigger={
                      <BookmarkSimple
                        size={16}
                        className="text-icon"
                        weight="thin"
                      />
                    }
                  />
                  <MyDropDownMenu />
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex flex-col justify-between py-2">
              <Image
                src={article.content_image}
                alt="Article Image"
                width={180}
                height={100}
                className="h-[65px] w-full rounded-sm object-cover sm:h-[95px] md:h-[120px]"
              />
              {/* Mobile Actions */}
              <div className="-mb-3 flex items-center justify-between md:hidden">
                <MyToolTip
                  Content="Show less like this"
                  Trigger={<MinusCircle size={16} className="text-icon" />}
                />
                <MyDropDownMenu />
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default CardArticle;
