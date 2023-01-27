import { ISongs, ILyrics } from "./musicService";
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

const REST_END_POINT = String(import.meta.env.VITE_REST_END_POINT);
// const REST_END_POINT = "http://localhost:8010/proxy";

export async function search(query: string): Promise<ISongs[]> {
  const res = await axios.get<ISearchResponse>(
    `${REST_END_POINT}/search/${query}`
  );

  return res.data.data.Music.splice(0, 4);
}

// async function song(id: string): Promise<ISongs> {}
//
// async function album(id: string): Promise<IAlbum> {}
//
// async function artist(id: string): Promise<IArtist> {}
//
export async function Getlyrics(id: string): Promise<ILyrics> {
  const res = await axios.get<ILyricsResponse>(`${REST_END_POINT}/lyric/${id}`);
  return res.data.data.lyrics;
}
