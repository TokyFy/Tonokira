import React, { FunctionComponent } from "react";

const LyricsSkeleton: FunctionComponent = () => {
  return (
    <>
      {/* Header Skeleton */}
      <div className="bg-gradient-to-b from-gray-700 to-gray-900 px-6 pt-16 pb-6">
        <div className="flex items-end gap-6">
          <div className="w-56 h-56 bg-gray-600 rounded-lg animate-pulse"></div>
          <div className="pb-6">
            <div className="h-4 bg-gray-600 rounded w-12 mb-2 animate-pulse"></div>
            <div className="h-16 bg-gray-600 rounded w-80 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-48 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Controls Skeleton */}
      <div className="px-6 py-6 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Lyrics Skeleton */}
      <div className="px-6 pb-6">
        <div className="h-6 bg-gray-600 rounded w-16 mb-6 animate-pulse"></div>
        <div className="bg-gradient-to-b from-gray-900/30 to-black/30 rounded-lg p-6">
          <div className="space-y-4">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="flex gap-4">
                <div className="h-4 bg-gray-600 rounded w-16 animate-pulse"></div>
                <div className={`h-4 bg-gray-700 rounded animate-pulse ${
                  index % 3 === 0 ? 'w-3/4' : index % 3 === 1 ? 'w-1/2' : 'w-2/3'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LyricsSkeleton;