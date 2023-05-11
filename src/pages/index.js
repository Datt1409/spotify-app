import Sidebar from "@/components/Sidebar";
import SongPlayer from "@/components/SongPlayer";
import { getSession } from "next-auth/react";
import Playlist from "@/components/Playlist";
import { useState } from "react";
import Search from "@/components/Search";
import Library from "@/components/Library";
import Artist from "@/components/Artist";

export default function Home() {
  const [view, setView] = useState("playlist"); // ['home', "playlist", "artists", "library"]

  return (
    <>
      <main className="h-screen overflow-hidden bg-black">
        <div className="flex w-full">
          <Sidebar view={view} setView={setView} />
          {view === "playlist" && <Playlist />}
          {view === "search" && <Search />}
          {view === "library" && <Library />}
          {view === "artist" && <Artist />}
        </div>
      </main>

      <div className="sticky bottom-0">
        <SongPlayer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
