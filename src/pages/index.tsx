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
import StaffMedium from "@/MYCOMPONENT/sidemenu/Staff/staff";
import StaffContainer from "@/MYCOMPONENT/sidemenu/Staff/StaffContainer";

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
        {articles.map((article,i) => (
          <div key={i} className="space-y-4 border-b-[0.1px] border-slate-200">
            <div className="profil w-full flex justify-start items-center gap-3 text-sm">
              <TooltipProvider delayDuration={200} skipDelayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <Avatar className="size-6">
                      <AvatarImage
                        className="object-fill"
                        src="https://github.com/shadcn.png"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent className="border-none" side="bottom">
                    <Card_profil />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={200} skipDelayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="hover:underline">{article.author_name}</p>
                  </TooltipTrigger>
                  <TooltipContent className="border-none" side="bottom">
                    <Card_profil />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="grid grid-cols-[1fr_120px] grid-rows-[1fr] md:grid-cols-[1fr_250px]">
              <div className="flex flex-col gap-2 pe-[0.7rem] md:pe-8">
                <h1 className="text-[1.35rem] font-extrabold leading-6 md:text-2xl md:font-extrabold md:leading-8">
                  {article.title}
                </h1>
                <span className="text-base font-normal text-slate-500">
                  {article.description}
                </span>
                <div className="flex justify-between items-center md:py-4">
                  <div className="flex items-center justify-start gap-4 w-full text-sm pt-4 md:pt-0">
                    <div className="flex justify-center items-center gap-2">
                      <StarFour size={16} />
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      {article.date}
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <HandsClapping size={16} /> {article.likes}
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <ChatCircle size={16} /> {article.comments}
                    </div>
                  </div>

                  <div className="md:flex justify-center items-center gap-2 text-slate-500 hidden">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <MinusCircle size={28} color="#0a0a0a" weight="thin" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Show less like this</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <BookmarkSimple size={16} className="size-6" weight="thin" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Save</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <DotsThree size={20} className="size-6" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>More</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[250px] bg-white shadow-lg border-none font-light">
                        <DropdownMenuLabel className="py-4 flex items-center gap-2 border-b-[0.3px] border-slate-100">
                          <BookmarkSimple size={16} /> Save
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex flex-col gap-1">
                          <h1 className="flex items-center w-full gap-2">
                            <PlusCircle size={16} /> Show more
                          </h1>
                          <span className="text-sm text-slate-700 ps-6">
                            Recommend more stories like this to me.
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-col gap-1">
                          <h1 className="flex items-center w-full gap-2">
                            <MinusCircle size={16} /> Show less
                          </h1>
                          <span className="text-sm text-slate-700 ps-6">
                            Recommend fewer stories like this to me.
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="border-y-[0.3px] border-slate-100 py-4">
                          Follow author
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Mute author</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400">
                          Report story
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <MinusCircle size={20} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Show less like this</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <DotsThree size={20} />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>More</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[250px] bg-white shadow-lg border-none font-light">
                        <DropdownMenuLabel className="py-4 flex items-center gap-2 border-b-[0.3px] border-slate-100">
                          <BookmarkSimple fill="fill" size={16} /> Save
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex flex-col gap-1">
                          <h1 className="flex items-center w-full gap-2">
                            <PlusCircle size={16} /> Show more
                          </h1>
                          <span className="text-sm text-slate-700 ps-6">
                            Recommend more stories like this to me.
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-col gap-1">
                          <h1 className="flex items-center w-full gap-2">
                            <MinusCircle size={16} /> Show less
                          </h1>
                          <span className="text-sm text-slate-700 ps-6">
                            Recommend fewer stories like this to me.
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="border-y-[0.3px] border-slate-100 py-4">
                          Follow author
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Mute author</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400">
                          Report story
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="sidebar ps-8">
    <StaffContainer />
  </div>
    </main>
  );
}
