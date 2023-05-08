import { playlistState } from "@/atoms/playlistAtom";
import React from "react";
import { useRecoilValue } from "recoil";
import Song from "./Song";

export default function ListSong() {
  const playlist = useRecoilValue(playlistState);
  // console.log(playlist);

  return (
    <div className="px-8 flex flex-col space-y-1 pb-28 text-white ">
      {playlist?.tracks.items.map((item, index) => (
        <div className="text-white" key={item.track.id}>
          <Song key={item.track.id} item={item} order={index} />
        </div>
      ))}
    </div>
  );
}
