const SkeletonCard: React.FC = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((__, i) => (
        <div key={i} className="w-full max-w-full rounded-md border p-4">
          <div className="flex animate-pulse space-x-2">
            <div className="flex-1">
              <div className="space-y-3">
                <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                <div className="space-y-4">
                  <div className="h-4 w-1/2 rounded bg-gray-200"></div>
                  <div className="h-4 w-4/5 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
            <div className="mb-4 h-[120px] w-[180px] rounded-md bg-gray-200"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonCard;
