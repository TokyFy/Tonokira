import { ISongs, ILyrics, IArtist, IPicture } from "./musicService";
import axios from "axios";

interface ISearchResponse {
  data: {
    Music: ISongs[];
  };
}

interface ILyricsResponse {
  data: {
    lyrics: ILyrics;
  };
}

interface IArtistResponse {
  data: {
    artist: {
      name: string;
      id: string;
      picUrl: string;
      hotSong: ISongs[];
    };
  };
}

interface IPictureResponse {
  data: {
    picture: {
      url: string;
    };
  };
}

// const REST_END_POINT = String(import.meta.env.VITE_REST_END_POINT);
const REST_END_POINT = "https://tonokira.vercel.app/api/rest";

export async function searchSongs(query: string): Promise<ISongs[]> {
  const res = await axios.get<ISearchResponse>(
    `${REST_END_POINT}/search/${query}`
  );

  return res.data.data.Music;
}

// async function song(id: string): Promise<ISongs> {}
//
// async function album(id: string): Promise<IAlbum> {}
//
export async function GetArtist(id: string): Promise<IArtist> {
  const res = await axios.get<IArtistResponse>(
    `${REST_END_POINT}/artist/${id}`
  );

  return res.data.data.artist;
}

export async function GetPictures(id: string): Promise<IPicture> {
  const res = await axios.get<IPictureResponse>(
    `${REST_END_POINT}/picture/${id}`
  );

  return res.data.data.picture;
}

export async function GetLyrics(id: string): Promise<ILyrics> {
  const res = await axios.get<ILyricsResponse>(`${REST_END_POINT}/lyric/${id}`);
  return res.data.data.lyrics;
}
