import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { IoAlbumsOutline, IoPersonOutline } from "react-icons/io5";
import { BsFillPersonFill, BsArrowCounterclockwise } from "react-icons/bs";
import {
  AiOutlinePlusCircle,
  AiOutlineHeart,
  AiOutlineHome,
} from "react-icons/ai";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-1/6 bg-white text-center">
      {/* Logo  */}
      <div className="p-5 mb-5">
        <Image src="/img/Spotify_logo.png" alt="Logo" width={130} height={40} />
      </div>

      {/* center content */}
      <div className="flex flex-col justify-evenly h-48 pl-5 ">
        <Link href="/Home">
          <div className="flex items-center font-medium capitalize">
            <AiOutlineHome className="text-2xl text-gray-600 mr-3" />
            <p className="font-bold text-sm">home</p>
          </div>
        </Link>

        <Link href="/Album">
          <div className="flex items-center font-medium capitalize">
            <IoAlbumsOutline className="text-2xl text-gray-500 mr-3" />
            <p className="font-bold text-sm">albums</p>
          </div>
        </Link>

        <Link href="/Artist">
          <div className="flex items-center font-medium capitalize">
            <IoPersonOutline className="text-2xl text-gray-500 mr-3" />
            <p className="font-bold text-sm">artists</p>
          </div>
        </Link>
      </div>

      {/* bottom content */}
      <div className="flex flex-col justify-evenly h-48 pl-5">
        <Link href="/CreatePlaylist">
          <div className="flex items-center font-medium capitalize">
            <AiOutlinePlusCircle className="text-2xl text-gray-500 mr-3" />
            <p className="font-bold text-sm">Create Playlist</p>
          </div>
        </Link>

        <Link href="/RecentlyPlayed">
          <div className="flex items-center font-medium capitalize">
            <BsArrowCounterclockwise className="text-2xl text-gray-500 mr-3" />
            <p className="font-bold text-sm">recently played</p>
          </div>
        </Link>

        <Link href="/FavouriteSongs">
          <div className="flex items-center font-medium capitalize">
            <AiOutlineHeart className="text-2xl text-gray-500 mr-3" />
            <p className="font-bold text-sm">favourite songs</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
