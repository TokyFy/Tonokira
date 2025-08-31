import React, { FunctionComponent } from "react";

const LyricsSkeleton: FunctionComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black">
      {/* Header Skeleton */}
      <div className="px-6 pt-16 pb-8">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-48 h-48 bg-gray-600 rounded-2xl animate-pulse"></div>
          <div className="flex-1 pt-4">
            <div className="h-12 bg-gray-600 rounded w-3/4 mb-3 animate-pulse"></div>
            <div className="h-6 bg-gray-700 rounded w-1/2 mb-2 animate-pulse"></div>
            <div className="h-5 bg-gray-700 rounded w-1/3 animate-pulse"></div>
          </div>
        </div>
        
        <div className="h-4 bg-gray-700 rounded w-64 mb-8 animate-pulse"></div>
        
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="w-12 h-12 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="w-12 h-12 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="w-12 h-12 bg-gray-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Lyrics Skeleton */}
      <div className="px-6 pb-20">
        <div className="h-8 bg-gray-600 rounded w-20 mb-8 animate-pulse"></div>
        <div className="max-w-4xl space-y-6">
          {Array.from({ length: 15 }).map((_, index) => (
            <div key={index} className="flex items-start gap-6 py-2 px-4">
              <div className="w-16 h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className={`h-8 bg-gray-700 rounded animate-pulse ${
                index % 4 === 0 ? 'w-full' : 
                index % 4 === 1 ? 'w-3/4' : 
                index % 4 === 2 ? 'w-5/6' : 'w-2/3'
              }`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar Skeleton */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gray-800/90 backdrop-blur-md border-t border-gray-700">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-600 rounded-lg animate-pulse"></div>
            <div>
              <div className="h-4 bg-gray-600 rounded w-32 mb-1 animate-pulse"></div>
              <div className="h-3 bg-gray-700 rounded w-24 animate-pulse"></div>
            </div>
          </div>
          <div className="w-10 h-10 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700">
          <div className="h-full w-1/3 bg-gray-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LyricsSkeleton;