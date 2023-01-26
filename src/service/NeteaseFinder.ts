import { ISongs } from "./musicService";
import axios from "axios";

interface IResponse {
  data: {
    Music: ISongs[];
  };
}

export async function search(query: string): Promise<ISongs[]> {
  const res = await axios.get<IResponse>(
    `http://localhost:8010/proxy/${query}`
  );

  return res.data.data.Music.splice(0, 4);
}

// async function song(id: string): Promise<ISongs> {}
//
// async function album(id: string): Promise<IAlbum> {}
//
// async function artist(id: string): Promise<IArtist> {}
//
// async function lyrics(id: string): Promise<ILyrics> {}
