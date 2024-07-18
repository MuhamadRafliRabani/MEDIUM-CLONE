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
  ChatCircle,
  DotsThree,
  HandsClapping,
  PaperclipHorizontal,
  StarFour,
} from "@phosphor-icons/react";
import { MinusCircle, PlusCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between md:px-24 px-4 w-svw ${inter.className} main md:container `}
    >
      {/* <Carousel className="nav w-full overflow-auto border-b-2 border-slate-100 pb-2 md:overflow-hidden relative md:static">
        <CarouselContent className="md:container whitespace-nowrap text-center ">
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Coding
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Software
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            JavaScript
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">Cafes</CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Animal
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Python
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Web Development
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            React.js
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Wildlife
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className=" absolute left-0 z-20 border-none bg-slate-50 bg-opacity-50 md:relative md:left-auto" />
        <CarouselNext className=" absolute right-0 z-20 border-none bg-slate-50 bg-opacity-50 md:relative md:right-auto" />
      </Carousel> */}

      <Carousel className="nav w-full border-b-2 border-slate-100 pb-2 relative">
        <CarouselContent className="md:container whitespace-nowrap text-center ">
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Coding
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Software
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            JavaScript
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">Cafes</CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Animal
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Python
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Web Development
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            React.js
          </CarouselItem>
          <CarouselItem className="basis-1/4 md:basis-1/5 ">
            Wildlife
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
        <CarouselPrevious className="md:hidden absolute left-0 z-20 border-none bg-slate-50 bg-opacity-50 md:relative md:left-auto" />
        <CarouselNext className="md:hidden absolute right-0 z-20 border-none bg-slate-50 bg-opacity-50 md:relative md:right-auto" />
      </Carousel>

      <div className="sidebar w-full"></div>
      <div className="main space-y-4 w-full border-b-[0.1px] border-slate-200">
        <div className="profil w-full flex justify-start items-center gap-3 text-sm">
          <Avatar className="size-6">
            <AvatarImage
              className="object-fill"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>will smith</p>
        </div>
        <div className="grid grid-cols-[1fr_120px] grid-rows-[1fr_50px] ">
          <div className="flex flex-col gap-2 pe-[0.7rem]">
            <h1 className="text-[1.35rem] font-extrabold leading-6">
              how you can start a 5 figure side business as software engineer{" "}
            </h1>
            <span className="text-base font-normal text-slate-500">
              i`ve started too many failed businesses to count
            </span>
            <div className="flex items-center justify-start gap-4 w-full text-sm pt-4">
              <div className="flex justify-center items-center gap-2">
                <StarFour size={16} />
              </div>{" "}
              <div className="flex justify-center items-center gap-2">
                jun 16
              </div>{" "}
              <div className="flex justify-center items-center gap-2">
                <HandsClapping size={16} /> 2.3k
              </div>{" "}
              <div className="flex justify-center items-center gap-2">
                <ChatCircle size={16} /> 63
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col ">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="https://unsplash.com/photos/open-book-lot-Oaqk7qqNh_c"
                alt="Image"
                width={120}
                height={50}
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <div className="w-full flex justify-between -mb-[4.5px]">
              <div className="text-slate-800 font-light ">
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
              <div className="">
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
                      <PaperclipHorizontal size={16} /> Save
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-col gap-1">
                      <h1 className="flex items-center w-full gap-2">
                        <PlusCircle size={16} /> Show more
                      </h1>
                      <span className="text-sm text-slate-700 ps-6">
                        Rekommend more stories like this to me.
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col gap-1">
                      <h1 className="flex items-center w-full gap-2">
                        <MinusCircle size={16} /> Show less
                      </h1>
                      <span className="text-sm text-slate-700 ps-6">
                        Rekommend fewer stories like this to me.
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="border-y-[0.3px] border-slate-100 py-4 ">
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
    </main>
  );
}
