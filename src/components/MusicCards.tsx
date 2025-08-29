import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_PROXY_URL } from "../constant";
import { useQuery } from "react-query";
import { GetPictures } from "../service";
import { Play, Music, MoreHorizontal, Heart } from "lucide-react";

interface OwnProps {
  image?: string;
  title: string;
  album: string;
  artist: string;
  songId: string;
  ImageId?: string;
  ArtistId: string;
  index?: number;
}

type Props = OwnProps;

const MusicCards: FunctionComponent<Props> = ({
  image,
  title,
  artist,
  album,
  songId,
  ImageId,
  ArtistId,
  index
}) => {
  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery<{ url: string }>(
    ["Pictures", `${songId || ImageId}`],
    ({}) => {
      if (image)
        return new Promise((resolve, reject) => {
          resolve({
            url: image,
          });
        });

      return GetPictures(`${ImageId}`);
    },
    {
      staleTime: 5 * (60 * 1000),
      cacheTime: 2.5 * (60 * 1000),
    }
  );

  const cardClickHandler = () => {
    navigate(`/lyrics/${songId}`, {
      state: {
        title: title,
        artist: artist,
        image: data?.url,
        album: album,
        ArtistId: ArtistId,
      },
    });
  };

  const ArtistNameClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/artist/${ArtistId}`);
  };

  return (
    <div className="group flex items-center gap-4 p-2 rounded-md hover:bg-gray-800/50 cursor-pointer transition-all">
      {/* Track number */}
      {index !== undefined && (
        <div className="w-4 text-right">
          <span className="text-gray-400 text-sm group-hover:hidden">{index + 1}</span>
          <Play size={14} className="text-white hidden group-hover:block" fill="white" />
        </div>
      )}

      {/* Album Art */}
      <div className="relative">
        <div className="w-10 h-10 bg-gray-700 rounded overflow-hidden flex items-center justify-center">
          {isLoading ? (
            <div className="w-full h-full bg-gray-600 animate-pulse"></div>
          ) : data?.url ? (
            <img
              src={`${IMAGE_PROXY_URL}${data.url}`}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <Music size={16} className="text-gray-400" />
          )}
        </div>
      </div>

      {/* Song Info */}
      <div className="flex-1 min-w-0" onClick={cardClickHandler}>
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium truncate group-hover:text-green-400 transition-colors">
            {title}
          </span>
          <span
            className="text-gray-400 text-xs hover:text-white hover:underline cursor-pointer transition-colors"
            onClick={ArtistNameClickHandler}
          >
            {artist}
          </span>
        </div>
      </div>

      {/* Album Name */}
      <div className="hidden md:block flex-1 min-w-0">
        <span className="text-gray-400 text-sm truncate">{album}</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded-full transition-colors">
          <Heart size={16} className="text-gray-400 hover:text-white" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded-full transition-colors">
          <MoreHorizontal size={16} className="text-gray-400 hover:text-white" />
        </button>
      </div>

      {/* Duration placeholder */}
      <div className="w-12 text-right">
        <span className="text-gray-400 text-sm">3:24</span>
      </div>
    </div>
  );
};

export const MusicCardSkeleton: FunctionComponent = () => {
  return (
    <div className="flex items-center gap-4 p-2 rounded-md">
      <div className="w-4"></div>
      <div className="w-10 h-10 bg-gray-600 rounded animate-pulse"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-600 rounded w-3/4 mb-1 animate-pulse"></div>
        <div className="h-3 bg-gray-700 rounded w-1/2 animate-pulse"></div>
      </div>
      <div className="hidden md:block flex-1">
        <div className="h-3 bg-gray-700 rounded w-2/3 animate-pulse"></div>
      </div>
      <div className="w-12">
        <div className="h-3 bg-gray-700 rounded w-8 ml-auto animate-pulse"></div>
      </div>
    </div>
  );
};

export default MusicCards;