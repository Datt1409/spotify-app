import useSpotify from "@/hooks/useSpotify";
import React, { useEffect } from "react";
import { millisToMinutesAndSeconds } from "../lib/songDuration";
import { useRecoilState } from "recoil";
import { isPlayingState, currentTrackIdState } from "@/atoms/songAtom";

export default function Song({ order, item }) {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playSong = () => {
    setCurrentTrackId(item.track.id);
    setIsPlaying(true);
    spotifyApi.play({
      uris: [item.track.uri],
    });
  };

  return (
    <div
      className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
      onClick={playSong}
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          src={item.track.album.images[0].url}
          alt={item.track.artists[0].name}
          className="w-10 h-10"
        />

        <div>
          <p className="w-36 lg:w-64 text-white truncate pt-1">
            {item.track.name}
          </p>
          <p className="w-40 ">{item.track.artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="w-48 hidden md:inline">{item.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(item.track.duration_ms)}</p>
      </div>
    </div>
  );
}
