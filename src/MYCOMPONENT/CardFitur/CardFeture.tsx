import { ChatCircle, HandsClapping, StarFour } from "@phosphor-icons/react";
import MyToolTip from "../MyToolTip/MyToolTip";

type CardFeture = {
  date: string;
  likes: string;
  comments: number;
};

const CardFeture = (props: CardFeture) => {
  return (
    <div className="flex items-center justify-start gap-4 w-full text-sm pt-4 md:pt-0">
      <div className="flex justify-center items-center gap-2">
        <MyToolTip
          Content={<p className="bg-primary">Member-only story</p>}
          Trigger={
            <StarFour
              size={16}
              weight="fill"
              className="text-yellow-400 outline-none border-none"
            />
          }
          tag="p"
        />
      </div>
      <div className="flex justify-center items-center gap-2">{props.date}</div>
      <div className="flex justify-center items-center gap-2">
        <MyToolTip
          Content={<p className="bg-primary">{props.likes} claps</p>}
          Trigger={
            <HandsClapping
              size={16}
              weight="fill"
              className="text-icon outline-none border-none"
            />
          }
          tag="p"
        />
        {props.likes}
      </div>
      <div className="flex justify-center items-center gap-1">
        <MyToolTip
          Content={<p className="bg-primary ">{props.comments} response</p>}
          Trigger={
            <ChatCircle
              size={16}
              weight="fill"
              className="text-icon outline-none border-none"
            />
          }
          tag="p"
        />{" "}
        {props.comments}
      </div>
    </div>
  );
};

export default CardFeture;
