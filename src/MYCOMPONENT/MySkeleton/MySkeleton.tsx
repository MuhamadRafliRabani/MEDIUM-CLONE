import { Skeleton } from "@/components/ui/skeleton";

const MySkeleton = () => {
  return (
    <div key={i} className="space-y-4 border-b-[0.1px] border-slate-200">
      <div className="profil flex w-full items-center justify-start gap-3 text-sm">
        <Skeleton className="size-6 rounded-full" />

        <Skeleton className="h-4 w-full rounded-full" />
      </div>

      <div className="grid grid-cols-[1fr_120px] grid-rows-[1fr] md:grid-cols-[1fr_250px]">
        <div className="flex flex-col gap-2 pe-[0.7rem] md:pe-8">
          <Skeleton className="h-5 w-full rounded-full" />
          <Skeleton className="h-5 w-full rounded-full" />
          <Skeleton className="h-5 w-full rounded-full" />

          <Skeleton className="h-2 w-full rounded-full" />

          <div className="flex items-center justify-between md:py-4">
            <Skeleton className="h-5 w-full rounded-full" />

            <div className="hidden items-center justify-center gap-2 text-slate-500 md:flex">
              <Skeleton className="h-5 w-full rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <Skeleton className="h-[100px] w-[180px] rounded-full" />

          <div className="-mb-[4.5px] flex w-full justify-between md:hidden">
            <Skeleton className="h-5 w-full rounded-full" />

            <Skeleton className="h-4 w-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkeleton;
