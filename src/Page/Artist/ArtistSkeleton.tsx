import React, { FunctionComponent } from "react";
import { MusicCardSkeleton } from "../../components/MusicCards";

const ArtistSkeleton: FunctionComponent = () => {
  return (
    <>
      <div className={""}>
        <div className={"flex flex-col gap-2 my-6 w-max p-2 rounded-sm border border-neutral-400 border-dashed"}>
          <div className={"w-32 aspect-square bg-neutral-200"}></div>
          <div className={"h-4 bg-neutral-200 w-full"}></div>
        </div>

        <div className="font-bold text-neutral-500 underline">
          Hot songs :
        </div>

        <div className={""}>
          <MusicCardSkeleton />
          <MusicCardSkeleton />
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
