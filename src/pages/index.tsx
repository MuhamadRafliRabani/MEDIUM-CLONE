import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  BookmarkSimple,
  ChatCircle,
  DotsThree,
  HandsClapping,
  StarFour,
} from "@phosphor-icons/react";
import { MinusCircle, PlusCircle } from "lucide-react";
import { articles } from "@/data/dummy_artikel";
import MyCarousel from "@/MYCOMPONENT/Carousell";
import Card_profil from "@/MYCOMPONENT/card profil";

import StaffContainer from "@/MYCOMPONENT/sidemenu/Staff/StaffContainer";
import MyAvatar from "@/MYCOMPONENT/avatar/MyAvatar";
import MyToolTip from "@/MYCOMPONENT/MyToolTip/MyToolTip";
import MyDropDownMenu from "@/MYCOMPONENT/MyDropDownMenu/MyDropDownMenu";
import CardFeture from "@/MYCOMPONENT/CardFitur/CardFeture";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between md:px-24 px-4 w-svw ${inter.className} main md:container main pt-20 relative`}
    >
      <div className="nav w-4/5 block mx-auto">
        <MyCarousel />
      </div>

      <section className="content container w-full space-y-4 border-e border-slate-100 ">
        {articles.map((article, i) => (
          <div key={i} className="space-y-4 border-b-[0.1px] border-slate-200">
            <div className="profil w-full flex justify-start items-center gap-3 text-sm">
              <MyToolTip
                Content={<Card_profil />}
                Trigger={
                  <MyAvatar size="size-6" img="https://github.com/shadcn.png" />
                }
              />
              <MyToolTip
                Content={<Card_profil />}
                Trigger={
                  <p className="hover:underline">{article.author_name}</p>
                }
              />
            </div>

            <div className="grid grid-cols-[1fr_120px] grid-rows-[1fr] md:grid-cols-[1fr_250px]">
              <div className="flex flex-col gap-2 pe-[0.7rem] md:pe-8">
                <h1 className="text-[1.28rem] font-extrabold text-pretty leading-6 md:text-2xl md:font-extrabold md:leading-8">
                  {article.title}
                </h1>
                <span className="text-base font-normal text-slate-500">
                  {article.description}
                </span>
                <div className="flex justify-between items-center md:py-4">
                  <CardFeture
                    comments={article.comments}
                    date={article.date}
                    likes={article.likes}
                  />

                  <div className="md:flex justify-center items-center gap-2 text-slate-500 hidden">
                    <MyToolTip
                      Content={<p>Show less like this</p>}
                      Trigger={
                        <MinusCircle size={16} className="text-outLineIcon" />
                      }
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

              <div className="flex justify-between flex-col">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={article.image}
                    alt="Image"
                    width={180}
                    height={100}
                    className="rounded-md object-cover block mx-auto"
                  />
                </AspectRatio>
                <div className="w-full flex justify-between -mb-[4.5px] md:hidden">
                  <div className="text-slate-800 font-light">
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
        ))}
      </section>

      <div className="sidebar relative ps-8 w-full h-full pt-6">
        <StaffContainer />
      </div>
    </main>
  );
}
