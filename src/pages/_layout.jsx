import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { Children, Component } from "react";

export default function Layout({ children }) {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="w-screen">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
