import { Inter } from "next/font/google";
import App from "./_app";
import Sidebar from "@/components/Sidebar";
import Center from "@/components/Center";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  );
}
