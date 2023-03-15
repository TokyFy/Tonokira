import React, { FunctionComponent, useEffect } from "react";
import style from "./Artist.module.scss";
import { IMAGE_PROXY_URL } from "../../constant";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { GetArtist } from "../../service";
import MusicCards from "../../components/MusicCard/MusicCards";

const Artist: FunctionComponent = (props) => {
  const { id } = useParams();

  const { isLoading, isError, data, error, refetch } = useQuery(
    ["search", id],
    ({}) => GetArtist(`${id}`),
    {
      staleTime: 5 * (60 * 1000),
      cacheTime: 2.5 * (60 * 1000),
    }
  );

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className={style.artist}>
          <div className={style.ArtistHeader}>
            <div className={style.albumCover}>
              <img
                src={`${IMAGE_PROXY_URL}/tr:w-400/${data?.picUrl}`}
                alt={"album cover"}
              />
            </div>
            <p className={style.artistName}>{data?.name}</p>
          </div>

          <div className={style.songs}>
            {data?.hotSong!.map((song, index) => (
              <MusicCards
                image={`${song.AlbumArts}`}
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
