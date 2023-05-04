import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLibrary } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { BsArrowCounterclockwise } from "react-icons/bs";
import {
  AiOutlinePlusCircle,
  AiOutlineHeart,
  AiOutlineHome,
} from "react-icons/ai";
import { signOut, useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import { useRecoilState } from "recoil";
import { playlistIdState } from "@/atoms/playlistAtom";

export default function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  console.log(playlistId);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <p>Log out</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <AiOutlineHome className="w-7 h-7" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <IoSearchOutline className="w-7 h-7" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BiLibrary className="w-7 h-7" />
          <p>Library</p>
        </button>
        <hr className="border-t0[0.1px] border-gray-900" />
        <button className="flex items-center space-x-2 hover:text-white">
          <AiOutlinePlusCircle className="w-7 h-7" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <AiOutlineHeart className="w-7 h-7" />
          <p>Favourite Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BsArrowCounterclockwise className="w-7 h-7" />
          <p>Recently Played</p>
        </button>
        <hr className="border-t0[0.1px] border-gray-900" />

        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            className="cursor-pointer hover:text-white"
            onClick={() => setPlaylistId(playlist.id)}
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
}
