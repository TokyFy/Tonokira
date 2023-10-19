import React, { FunctionComponent } from "react";
import style from "./Artist.module.scss";
import { MusicCardSkeleton } from "../../components/MusicCard/MusicCards";

const ArtistSkeleton: FunctionComponent = () => {
  return (
    <>
      <div className={""}>
        <div className={"flex flex-col items-center gap-2 my-6 w-max mx-auto p-2 border border-purple-200 rounded-md"}>
          <div className={"w-24 aspect-square bg-neutral-200"}></div>
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
