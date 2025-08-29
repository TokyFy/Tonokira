import React, { FunctionComponent } from "react";

const LyricsSkeleton: FunctionComponent = () => {
  return (
    <div>
      {/* Header Skeleton */}
      <div className="flex items-center gap-6 mb-8">
        <div className="w-20 h-20 bg-gray-600 rounded-lg animate-pulse"></div>
        <div>
          <div className="h-4 bg-gray-600 rounded w-12 mb-2 animate-pulse"></div>
          <div className="h-8 bg-gray-600 rounded w-48 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded w-32 animate-pulse"></div>
        </div>
      </div>
      
      {/* Lyrics Title Skeleton */}
      <div className="flex items-center justify-between mb-6">
        <div className="h-6 bg-gray-600 rounded w-32 animate-pulse"></div>
        <div className="h-10 bg-gray-600 rounded w-28 animate-pulse"></div>
      </div>
      
      {/* Lyrics Content Skeleton */}
      <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
        <div className="space-y-4">
          {Array.from({length: 20}).map((_, index) => (
            <div key={index} className="flex gap-4">
              <div className="h-4 bg-gray-600 rounded w-12 animate-pulse"></div>
              <div className={`h-4 bg-gray-700 rounded animate-pulse ${
                index % 3 === 0 ? 'w-3/4' : index % 3 === 1 ? 'w-1/2' : 'w-2/3'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LyricsSkeleton;
