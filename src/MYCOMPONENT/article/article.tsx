import Link from "next/link";
import MyAvatar from "../avatar/MyAvatar";
import Card_profil from "../card profil";
import MyToolTip from "../MyToolTip/MyToolTip";
import CardFeture from "../CardFitur/CardFeture";
import { BookmarkSimple, MinusCircle, Smiley } from "@phosphor-icons/react";
import MyDropDownMenu from "../MyDropDownMenu/MyDropDownMenu";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { article } from "@/pages";

const CardArticle = ({ dataArticle }) => {
  if (dataArticle.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center space-y-4 border-b-[0.1px] border-slate-200 pb-4 md:w-[1036px] md:pb-0">
        <Smiley size={40} />
        <h1 className="text-2xl text-primary">no article in this topic</h1>
      </div>
    );
  }

  return dataArticle?.map((article: article, i: number) => (
    <div
      key={i}
      className="w-full space-y-4 border-b-[0.1px] border-slate-200 pb-4 md:pb-0"
    >
      <div className="profil flex w-full items-center justify-start gap-3 text-sm">
        <MyToolTip
          Content={
            <Card_profil
              img={article.img_user}
              author_name={article.author_name}
            />
          }
          Trigger={<MyAvatar size="size-6" img={article.img_user} />}
        />
        <MyToolTip
          Content={
            <Card_profil
              img={article.img_user}
              author_name={article.author_name}
            />
          }
          Trigger={<p className="hover:underline">{article.author_name}</p>}
        />
      </div>

      <div className="grid grid-cols-[1fr_120px] grid-rows-[1fr] md:grid-cols-[1fr_250px]">
        <div className="flex flex-col gap-2 pe-[0.7rem] md:pe-8">
          <Link href={"/article/" + article.id}>
            <h1 className="text-lg font-extrabold leading-6 md:text-pretty md:text-2xl md:font-extrabold md:leading-8">
              {article.title}
            </h1>
          </Link>
          <span className="w-4/5 whitespace-break-spaces text-base text-slate-500">
            {article.description}
          </span>
          <div className="flex items-center justify-between md:py-4">
            <CardFeture
              id={article.id}
              comments={article.comments}
              date={article.date}
              likes={article.likes}
            />

            <div className="hidden items-center justify-center gap-2 text-slate-500 md:flex">
              <MyToolTip
                Content={<p>Show less like this</p>}
                Trigger={<MinusCircle size={16} className="text-outLineIcon" />}
                tag="p"
              />
              <MyToolTip
                Content={<p>Save</p>}
                Trigger={
                  <BookmarkSimple
                    size={16}
                    className="size-6 text-icon"
                    weight="thin"
                  />
                }
                tag="p"
              />
              <MyDropDownMenu />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={article.img_content}
              alt="Image"
              width={180}
              height={100}
              className="mx-auto block h-[120px] rounded-md object-cover"
            />
          </AspectRatio>
          <div className="-mb-[13px] flex w-full items-center justify-between md:-mb-[4.5px] md:hidden">
            <div className="font-light text-slate-800">
              <MyToolTip
                Content={<p>Show less like this</p>}
                Trigger={<MinusCircle size={16} className="text-icon" />}
              />
            </div>
            <div>
              <MyDropDownMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};
export default CardArticle;
