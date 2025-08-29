import React, { FunctionComponent, useEffect } from "react";
import { IMAGE_PROXY_URL } from "../../constant";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { GetArtist } from "../../service";
import MusicCards from "../../components/MusicCards";
import ArtistSkeleton from "./ArtistSkeleton";
import {User, Music} from "lucide-react";

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
    <div className="p-8">
      {isLoading ? (
        <ArtistSkeleton />
      ) : (
        <div>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-32 h-32 bg-gray-700 rounded-full overflow-hidden flex items-center justify-center">
              {data?.picUrl ? (
                <img
                  className="w-full h-full object-cover"
                  src={`${IMAGE_PROXY_URL}${data.picUrl}`}
                  alt={data.name}
                />
              ) : (
                <User size={48} className="text-gray-400" />
              )}
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium mb-2">ARTIST</p>
              <h1 className="text-4xl font-bold text-white mb-4">{data?.name}</h1>
              <div className="flex items-center gap-4 text-gray-400">
                <span>{data?.hotSong?.length || 0} popular songs</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Music size={20} className="text-green-400" />
              Popular Songs
            </h2>
          </div>

          <div className="space-y-2">
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
    </div>
  );
};
export default Artist;
