import React from "react";

const ArticleSkeleton = () => {
  return (
    <section className="container animate-pulse">
      <div className="mx-auto w-1/2 space-y-8 pt-20">
        <div className="flex items-center gap-4">
          <div className="h-4 w-4 rounded-full bg-gray-300" />
          <div className="h-4 w-32 bg-gray-300" />
        </div>
        <div className="h-10 w-3/4 rounded-md bg-gray-300" />
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gray-300" />
          <div className="flex flex-col space-y-2">
            <div className="h-4 w-32 rounded-md bg-gray-300" />
            <div className="h-4 w-24 rounded-md bg-gray-300" />
          </div>
        </div>
        <div className="flex items-center justify-between border-y border-slate-200 p-3">
          <div className="flex items-center gap-8 text-sm text-icon">
            <div className="h-4 w-16 rounded-md bg-gray-300" />
            <div className="h-4 w-16 rounded-md bg-gray-300" />
          </div>
          <div className="flex items-center gap-8 text-sm text-icon">
            <div className="h-4 w-16 rounded-md bg-gray-300" />
            <div className="h-4 w-16 rounded-md bg-gray-300" />
            <div className="h-4 w-16 rounded-md bg-gray-300" />
            <div className="h-4 w-16 rounded-md bg-gray-300" />
          </div>
        </div>
        <div className="w-full p-4">
          <div className="h-60 rounded-md bg-gray-300" />
        </div>
        <div className="space-y-4">
          <div className="h-4 w-full rounded-md bg-gray-300" />
          <div className="h-4 w-5/6 rounded-md bg-gray-300" />
          <div className="h-4 w-3/4 rounded-md bg-gray-300" />
          <div className="h-4 w-2/3 rounded-md bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default ArticleSkeleton;
