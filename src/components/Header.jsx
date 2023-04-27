import { Button } from "antd";
import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <div className="w-full h-24 flex flex-row justify-between">
      <div className="flex p-5 relative w-80">
        <input
          className="rounded-3xl h-8  p-5 w-80"
          type="text"
          placeholder="Search for songs,..."
        />
        <FiSearch className="absolute top-8 right-8" />
      </div>

      <div className="flex p-5 ">
        <Button
          className="h-12 w-24 mr-3 rounded-3xl bg-mainColor"
          type="primary"
        >
          Sign Up
        </Button>
        <Button
          className="h-12 w-24 mr-3 rounded-3xl bg-mainColor"
          type="primary"
        >
          Log In
        </Button>
      </div>
    </div>
  );
}
