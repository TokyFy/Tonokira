import React, { FunctionComponent } from "react";
import { IMAGE_PROXY_URL } from "../../constant";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { GetArtist } from "../../service";
import MusicCards from "../../components/MusicCards";
import ArtistSkeleton from "./ArtistSkeleton";
import { User, Play, MoreHorizontal, UserPlus } from "lucide-react";

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
    <div>
      {isLoading ? (
        <ArtistSkeleton />
      ) : (
        <>
          {/* Artist Header */}
          <div className="relative">
            <div className="bg-gradient-to-b from-gray-600 to-gray-900 px-6 pt-16 pb-6">
              <div className="flex items-end gap-6">
                <div className="w-56 h-56 bg-gray-700 rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
                  {data?.picUrl ? (
                    <img
                      className="w-full h-full object-cover"
                      src={`${IMAGE_PROXY_URL}${data.picUrl}`}
                      alt={data.name}
                    />
                  ) : (
                    <User size={80} className="text-gray-400" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-sm font-bold text-white mb-2">Artist</p>
                  <h1 className="text-6xl font-black text-white mb-6">{data?.name}</h1>
                  <p className="text-gray-300">
                    {data?.hotSong?.length || 0} popular songs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Songs */}
          <div className="px-6 pb-6">
            <h2 className="text-xl font-bold text-white mb-4">Popular</h2>
            <div className="space-y-1">
              {data?.hotSong!.map((song, index) => (
                <MusicCards
                  image={song.AlbumArts}
                  title={song.title}
                  album={song.Album.name}
                  artist={song.Artists[0].name}
                  key={index}
                  index={index}
                  songId={song.id}
                  ImageId={song.AlbumArtsID}
                  ArtistId={song.Artists[0].id}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Artist;