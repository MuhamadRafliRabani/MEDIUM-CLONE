import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Topic_list } from "@/data/Topic_list";

const MyCarousel = () => {
  return (
    <Carousel className="nav w-full border-b-2 border-slate-100 pb-2 relative">
      <CarouselContent className="md:container whitespace-nowrap text-center">
        {Topic_list.map((topic, index) => (
          <CarouselItem key={index} className="basis-1/4 md:basis-1/5">
            {topic}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
      <CarouselPrevious className="md:hidden absolute left-0 z-20 border-none bg-slate-50 bg-opacity-50 md:relative md:left-auto" />
      <CarouselNext className="md:hidden absolute right-0 z-20 border-none bg-slate-50 bg-opacity-50 md:relative md:right-auto" />
    </Carousel>
  );
};

export default MyCarousel;
