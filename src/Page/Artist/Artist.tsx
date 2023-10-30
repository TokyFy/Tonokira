import React, { FunctionComponent, useEffect } from "react";
import { IMAGE_PROXY_URL } from "../../constant";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { GetArtist } from "../../service";
import MusicCards from "../../components/MusicCards";
import ArtistSkeleton from "./ArtistSkeleton";

const Artist: FunctionComponent = (props) => {
  const { id } = useParams();

  const { isLoading, isError, data, error, refetch } = useQuery(
    ["artist", id],
    ({}) => GetArtist(`${id}`),
    {
      staleTime: 5 * (60 * 1000),
      cacheTime: 2.5 * (60 * 1000),
    }
  );


  return (
    <>
      {isLoading ? (
        <ArtistSkeleton />
      ) : (
        <div className={""}>
          <div className={"flex flex-col gap-1 my-6 w-max p-1 rounded-sm border border-neutral-400 border-dashed items-center"}>
            <div className={"w-20 min-w-full aspect-square overflow-hidden"}>
              <img
                  className={"w-full h-auto"}
                src={`${IMAGE_PROXY_URL}${data?.picUrl}`}
                alt={"album cover"}
              />
            </div>
            <p className={"text-neutral-900 font-bold first-letter:uppercase text-center dark:text-neutral-200 "}>{data?.name}</p>
          </div>

          <div className="font-bold text-neutral-500 underline">
            Popular songs :
          </div>

          <div className={"py-2"}>
            {data?.hotSong!.map((song, index) => (
              <MusicCards
                image={song.AlbumArts}
                title={song.title}
                album={song.Album.name}
                artist={song.Artists[0].name}
                key={index}
                songId={song.id}
                ImageId={song.AlbumArtsID}
                ArtistId={song.Artists[0].id}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Artist;
