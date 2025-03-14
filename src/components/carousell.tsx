import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { usesetTopic } from "@/hooks/store/zustand";
import { Topic_list } from "@/data/Topic_list";
import { Input } from "./ui/input";

const MyCarousel: React.FC = () => {
  const { topic: topicGlobal, setTopic } = usesetTopic();

  return (
    <Carousel className="sticky-animate relative top-0 h-8 border-b border-slate-200 md:w-article md:ps-8">
      <CarouselContent>
        {Topic_list.map((topic, index) => (
          <CarouselItem
            key={index}
            className="grid h-8 w-fit max-w-fit cursor-pointer place-content-center truncate px-4 first:ps-16 md:first:ps-7"
          >
            <label
              htmlFor={`topic-${index}`}
              className="cursor-pointer md:text-sm"
            >
              <Input
                type="radio"
                name="topic"
                id={`topic-${index}`}
                className="peer hidden"
                checked={topic == topicGlobal ? true : false}
                onClick={(e) => setTopic(topic)}
              />
              <span className="checked-effect relative text-[0.85rem] font-[350]">
                {topic}
              </span>
            </label>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 z-50 bg-slate-50 bg-opacity-50 md:-left-5 md:top-1/2" />
      <CarouselNext className="absolute right-0 z-50 bg-slate-50 bg-opacity-50 md:-right-10 md:top-1/2" />
      <div className="absolute left-0 z-50 size-8 -translate-y-1/2 bg-white blur-md md:left-4 md:top-1/2"></div>
      <div className="absolute right-0 z-50 size-8 -translate-y-1/2 bg-white blur-md md:top-1/2"></div>
    </Carousel>
  );
};

export default MyCarousel;
