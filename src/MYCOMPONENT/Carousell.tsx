import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { usesetTopic } from "@/hooks/store/useUser";
import { Topic_list } from "@/data/Topic_list";

const MyCarousel: React.FC = () => {
  const { setTopic } = usesetTopic();

  const handlesetTopic = (
    topic: string,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setTopic(topic);
  };

  return (
    <Carousel className="md:nav relative w-full border-b-2 border-slate-100 pb-2">
      <CarouselContent className="overflow-ellipsis text-center md:container md:-ms-4">
        {Topic_list.map((topic, index) => (
          <CarouselItem
            key={index}
            className="w-fit basis-1/4 truncate md:basis-1/5"
          >
            <button className="w-fit" onClick={(e) => handlesetTopic(topic, e)}>
              {topic}
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
      <CarouselPrevious className="absolute left-0 z-20 border-none bg-slate-50 bg-opacity-50 md:relative md:left-auto md:hidden" />
      <CarouselNext className="absolute right-0 z-20 border-none bg-slate-50 bg-opacity-50 md:relative md:right-auto md:hidden" />
    </Carousel>
  );
};

export default MyCarousel;
