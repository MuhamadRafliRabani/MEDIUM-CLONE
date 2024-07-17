import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between md:px-24 px-4 w-svw ${inter.className} main md:container `}
    >
      <Carousel className="nav w-full overflow-auto border-b-2 border-slate-100 pb-2">
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
        <CarouselPrevious className="absolute left-0 z-20 border-none bg-slate-50 bg-opacity-50" />
        <CarouselNext className="absolute right-0 z-20 border-none bg-slate-50 bg-opacity-50" />
      </Carousel>

      <div className="sidebar  w-full"></div>
      <div className="main space-y-4 w-full">
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
        <div className="grid grid-cols-[1fr_120px] grid-rows-[1fr_50px]">
          <div className="flex flex-col gap-2 pe-[0.7rem]">
            <h1 className="text-[1.35rem] font-extrabold leading-6">
              how you can start a 5 figure side business as software engineer{" "}
            </h1>
            <span className="text-base font-light text-slate-500">
              i`ve started too many failed businesses to count
            </span>
          </div>
          <div className="bg-red-500">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="https://unsplash.com/photos/open-book-lot-Oaqk7qqNh_c"
                alt="Image"
                width={120}
                height={50}
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </main>
  );
}
