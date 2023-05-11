import { signOut, useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { shuffle } from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "@/atoms/playlistAtom";
import useSpotify from "@/hooks/useSpotify";
import ListSong from "./ListSong";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yelllow-500",
  "from-pink-500",
];

export default function Playlist({ view, setView }) {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const [opacity, setOpacity] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);

  function changeOpacity(scrollPosition) {
    // scrollPosition = 0 -> opacity = 0
    // scrollPosition = 300 -> opacity = 1, textOpacity = 0
    // scrollPosition = 310 -> opacity = 1, textOpacity = 1
    const offset = 300;
    const textOffset = 10;
    if (scrollPosition < offset) {
      const newOpacity = 1 - (offset - scrollPosition) / offset;
      setOpacity(newOpacity);
      setTextOpacity(0);
    } else {
      setOpacity(1);
      const delta = scrollPosition - offset;
      const newTextOpacity = 1 - (textOffset - delta) / textOffset;
      setTextOpacity(newTextOpacity);
    }
  }

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((err) => console.log("Something went wrong", err));
  }, [spotifyApi, playlistId]);

  console.log(playlist);

  return (
    //  overflow-y-scroll scrollbar-hide
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header
        style={{ opacity: opacity }}
        className="text-white sticky top-0 h-20 z-10 text-4xl bg-gray-900 p-8 flex items-center font-bold"
      >
        <div style={{ opacity: textOpacity }} className="flex items-center">
          {playlist && (
            <img className="h-8 w-8 mr-6" src={playlist.images[0].url} />
          )}
          <p className="text-2xl pt-2">{playlist?.name}</p>
        </div>
      </header>
      <div
        onClick={() => signOut()}
        className="absolute z-20 top-5 right-8 flex items-center bg-black bg-opacity-90 text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
      >
        <img
          className="rounded-full w-8 h-8"
          src={session?.user.image}
          alt="profile pic"
        />
        <p className="text-sm">Logout</p>
        <AiOutlineDown className="h-5 w-5" />
      </div>
      <div
        onScroll={(e) => changeOpacity(e.target.scrollTop)}
        className="relative -top-20 h-screen overflow-y-scroll bg-black"
      >
        <section
          className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
        >
          {playlist && (
            <img className="h-44 w-44" src={playlist.images[0].url} />
          )}
          <div>
            <p className="text-sm font-bold">Playlist</p>
            <h1 className="text-3xl pt-2 font-extrabold">
              {playlist?.name}
            </h1>
          </div>
        </section>
        <ListSong />
      </div>
    </div>
  );
}
