"use client";
import AdminGraph from "./admingraph";
import AdminList from "./adminlist";
import Sidebar from "./sidebar";
import { useState } from "react";

export default function Layout({ auth, title, lab }) {
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
      <Sidebar isOpen={isSidebarOpen} auth={auth} />

      <div className=" absolute z-20 w-[10%]"></div>

      {/* Content */}

      {showAdminGraph ? <AdminGraph title={title} isOpen={!isSidebarOpen} toggleNav={toggleNav} toggleContent={toggleContent} lab={lab} /> : <AdminList title={title} isOpen={!isSidebarOpen} toggleNav={toggleNav} toggleContent={toggleContent} lab={lab} />}

    </div>
  );
}
