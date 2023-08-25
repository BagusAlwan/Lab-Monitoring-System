'use client'
import AdminGraph from "./admingraph"
import AdminList from "./adminlist"
import Sidebar from "./sidebar"
import Image from 'next/image'
import navbararrow from "../components/images/navbararrow.svg"
import { useState } from "react"

export default function Layout() {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleNav = () => {
        setIsSidebarOpen(!isSidebarOpen);
        // alert(`Kamu ${isSidebarOpen}`);
    }

    return (

       

        <div className="h-screen flex flex-row justify-start ">
            <Sidebar isOpen={isSidebarOpen} />


            <div type="button" onClick={toggleNav} className=" absolute justify-self-start self-center md:hidden ">
                <Image 
                alt="navbararrow"
                src={navbararrow}
                width={22}
                height={94}
                />

            </div>
            {/* Content */}
            
            <AdminGraph />
            {/* <AdminList /> */}

            
        </div>
    )
}