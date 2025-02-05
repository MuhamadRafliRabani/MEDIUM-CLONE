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

  return (
    <div className="sticky-animate relative top-0 md:w-article">
      <Carousel className="h-8 border-b border-slate-200 md:ps-8">
        <CarouselContent>
          {Topic_list.map((topic, index) => (
            <CarouselItem
              key={index}
              className="grid h-8 w-fit max-w-fit cursor-pointer place-content-center truncate px-4 text-sm"
            >
              <label htmlFor={`topic-${index}`} className="cursor-pointer">
                <input
                  type="radio"
                  name="topic"
                  id={`topic-${index}`}
                  className="peer hidden"
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
      </Carousel>
    </div>
  );
};

export default MyCarousel;
