'use client'
import AdminGraph from "./admingraph"
import AdminList from "./adminlist"
import Sidebar from "./sidebar"
import Image from 'next/image'
import navbararrow from "../components/images/navbararrow.svg"
import navbararrow2 from "../components/images/navbararrow2.svg"
import { useState } from "react"

export default function Layout() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleNav = () => {
        setIsSidebarOpen(!isSidebarOpen);
        // alert(`Kamu ${isSidebarOpen}`);
    }

    return (



        <div className="h-screen overflow-hidden flex flex-row justify-start ">
            <Sidebar isOpen={isSidebarOpen} />

            <div className=" absolute z-20 w-[10%]">

            </div>
            <div type="button" onClick={toggleNav} className={` justify-self-start self-center transition-opacity duration-400 md:hidden ${!isSidebarOpen ? 'hidden  ' : ' absolute '}`}>
                <Image
                    alt="navbararrow"
                    src={isSidebarOpen ? navbararrow : navbararrow2}
                    width={22}
                    height={94}
                />

            </div>
            {/* Content */}

            <AdminGraph isOpen={!isSidebarOpen} toggleNav={toggleNav} />
            {/* <AdminList /> */}


        </div>
    )
}