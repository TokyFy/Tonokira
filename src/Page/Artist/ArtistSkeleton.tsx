import React, { FunctionComponent } from "react";
import { MusicCardSkeleton } from "../../components/MusicCards";

const ArtistSkeleton: FunctionComponent = () => {
  return (
    <>
      {/* Header Skeleton */}
      <div className="bg-gradient-to-b from-gray-600 to-gray-900 px-6 pt-16 pb-6">
        <div className="flex items-end gap-6">
          <div className="w-56 h-56 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="pb-6">
            <div className="h-4 bg-gray-600 rounded w-16 mb-2 animate-pulse"></div>
            <div className="h-16 bg-gray-600 rounded w-80 mb-6 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-32 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Controls Skeleton */}
      <div className="px-6 py-6 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Songs List Skeleton */}
      <div className="px-6 pb-6">
        <div className="h-6 bg-gray-600 rounded w-24 mb-4 animate-pulse"></div>
        <div className="space-y-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <MusicCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtistSkeleton;