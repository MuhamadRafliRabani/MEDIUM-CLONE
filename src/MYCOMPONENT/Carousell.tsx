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
    <Carousel className="relative w-4/5 max-w-screen-md border-b-2 border-slate-100 pb-2">
      <CarouselContent>
        {Topic_list.map((topic, index) => (
          <CarouselItem
            key={index}
            className="w-fit max-w-fit truncate overflow-ellipsis bg-yellow-400 px-4 text-[0.9rem]"
            onClick={(e) => handlesetTopic(topic, e)}
          >
            {topic}
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
