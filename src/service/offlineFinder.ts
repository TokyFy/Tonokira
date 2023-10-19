import { ISongs, ILyrics, IArtist, IPicture } from "./musicService";

import offlineMusicData from "./data"

export async function searchSongs(query: string): Promise<ISongs[]> {
   return offlineMusicData;
}

export async function GetArtist(id: string): Promise<IArtist> {

    console.log(id)

    const music = offlineMusicData[Number(id)]

    return {
        id : music.Artists[0].id,
        name : music.Artists[0].name,
        picUrl: `/dummy/00${Number(id) + 1}.jpg`,
        hotSong : offlineMusicData
    }
}

export async function GetPictures(id: string): Promise<IPicture> {
    console.log(id)

    return {
        url : `/dummy/00${Number(id)}.jpg`
    }
}

export async function GetLyrics(id: string): Promise<ILyrics> {
    const music = offlineMusicData[Number(id)];

    return {
        lyric : music.lyric,
        version : 404
    }
}
