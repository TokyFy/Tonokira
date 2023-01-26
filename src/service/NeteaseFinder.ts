import { ISongs } from "./musicService";
import axios from "axios";

interface IResponse {
  data: {
    Music: ISongs[];
  };
}

const REST_END_POINT = String(import.meta.env.VITE_REST_END_POINT);

export async function search(query: string): Promise<ISongs[]> {
  const res = await axios.get<IResponse>(`${REST_END_POINT}/${query}`);

  return res.data.data.Music.splice(0, 4);
}

// async function song(id: string): Promise<ISongs> {}
//
// async function album(id: string): Promise<IAlbum> {}
//
// async function artist(id: string): Promise<IArtist> {}
//
// async function lyrics(id: string): Promise<ILyrics> {}
