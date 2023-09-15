"use client";
import AdminGraph from "./admingraph";
import AdminList from "./adminlist";
import Sidebar from "./sidebar";
import { useState } from "react";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleNav = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // alert(`Kamu ${isSidebarOpen}`);
  };

  const [showAdminGraph, setShowAdminGraph] = useState(true);

  const toggleContent = () => {
    setShowAdminGraph(!showAdminGraph);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-row justify-start ">
      <Sidebar isOpen={isSidebarOpen} />

      <div className=" absolute z-20 w-[10%]"></div>

      {/* Content */}

      {showAdminGraph ? <AdminGraph isOpen={!isSidebarOpen} toggleNav={toggleNav} toggleContent={toggleContent} /> : <AdminList isOpen={!isSidebarOpen} toggleNav={toggleNav} toggleContent={toggleContent} />}
    </div>
  );
}
