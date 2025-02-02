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
    <div className="sticky-animate md:w-article">
      <Carousel className="relative h-8 border-b border-slate-200 md:ps-8">
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
                <span className="relative text-[0.85rem] font-[350] text-black/80 transition-all duration-100 before:opacity-0 hover:text-black peer-checked:text-black peer-checked:before:absolute peer-checked:before:-bottom-[8.5px] peer-checked:before:right-0 peer-checked:before:block peer-checked:before:h-0.5 peer-checked:before:w-full peer-checked:before:rounded-md peer-checked:before:bg-black peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300">
                  {topic}
                </span>
              </label>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 z-50 border-none bg-slate-50 bg-opacity-50 md:-left-5 md:top-1/2" />
        <CarouselNext className="absolute right-0 z-50 border-none bg-slate-50 bg-opacity-50 md:-right-10 md:top-1/2" />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
