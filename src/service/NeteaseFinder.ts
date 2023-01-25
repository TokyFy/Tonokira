import { ISongs } from "./musicService";
import axios from "axios";

async function search(query: string): Promise<ISongs[]> {
  const res = await axios.get<ISongs[]>("/user", {
    params: {
      ID: query,
    },
  });
  console.log(res);
  return [];
}

// async function song(id: string): Promise<ISongs> {}
//
// async function album(id: string): Promise<IAlbum> {}
//
// async function artist(id: string): Promise<IArtist> {}
//
// async function lyrics(id: string): Promise<ILyrics> {}

export { search };
