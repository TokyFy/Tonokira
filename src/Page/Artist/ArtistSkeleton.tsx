import React, { FunctionComponent } from "react";
import { MusicCardSkeleton } from "../../components/MusicCards";

const ArtistSkeleton: FunctionComponent = () => {
  return (
    <>
    <div className="p-8">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-32 h-32 bg-gray-600 rounded-full animate-pulse"></div>
        <div>
          <div className="h-4 bg-gray-600 rounded w-16 mb-2 animate-pulse"></div>
          <div className="h-8 bg-gray-600 rounded w-48 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded w-32 animate-pulse"></div>
        </div>
      </div>

      <div className="mb-6">
        <div className="h-6 bg-gray-600 rounded w-40 animate-pulse"></div>
      </div>

      <div className="space-y-2">
        <MusicCardSkeleton />
        <MusicCardSkeleton />
        <MusicCardSkeleton />
        <MusicCardSkeleton />
        <MusicCardSkeleton />
        <MusicCardSkeleton />
      </div>
    </div>

    </>
  );
};

export default ArtistSkeleton;
