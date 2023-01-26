import { ISongs as isong } from "./musicService";
import axios from "axios";

async function search(query: string): Promise<isong[]> {
  const res = await axios.get<isong[]>("/user", {
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
