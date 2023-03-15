export interface ISongs {
  title: string;
  id: string;
  Album: { id: string; name: string };
  Artists: Array<{ id: string; name: string }>;
  AlbumArts?: string;
  AlbumArtsID?: string;
  RealiseTime?: number;
}

export interface IArtist {
  name: string;
  id: string;
  picUrl: string;
  musicSize?: number;
  albumSize?: number;
  hotSong?: Array<ISongs>;
}

export interface IAlbum {
  title: string;
  id: string;
  songs: Array<ISongs>;
  AlbumArts: string;
  artists: Array<IArtist>;
  company: string;
}

export interface ILyrics {
  version: number;
  lyric: string;
}

export interface IPicture {
  url: string;
}

export * from "./NeteaseFinder";

export interface IMusicFinder {
  search: (query: string) => Promise<ISongs[]>;
  song?: (id: string) => Promise<ISongs>;
  album?: (id: string) => Promise<IAlbum>;
  artist?: (id: string) => Promise<IArtist>;
  lyrics?: (id: string) => Promise<ILyrics>;
}
