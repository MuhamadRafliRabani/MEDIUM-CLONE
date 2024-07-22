import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ToolTipType = {
  Trigger: React.ReactNode;
  Content: React.ReactNode;
  tag?: string;
};

const MyToolTip = ({ Trigger, Content, tag }: ToolTipType) => {
  return (
    <TooltipProvider delayDuration={200} skipDelayDuration={100}>
      <Tooltip>
        <TooltipTrigger>{Trigger}</TooltipTrigger>
        <TooltipContent
          className={`${tag ? "bg-primary text-white" : "bg-white text-primary"} tooltipContent border-none`}
        >
          {Content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default MyToolTip;
