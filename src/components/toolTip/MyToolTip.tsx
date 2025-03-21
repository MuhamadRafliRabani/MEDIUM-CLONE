import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ToolTipType } from "@/lib";

const ToolTips = ({ Trigger, Content, primary = false }: ToolTipType) => {
  return (
    <TooltipProvider delayDuration={200} skipDelayDuration={100}>
      <Tooltip>
        <TooltipTrigger>{Trigger}</TooltipTrigger>
        <TooltipContent
          className={`${primary ? "bg-primary text-white" : "bg-white text-primary"} tooltipContent border-none`}
        >
          {Content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolTips;
