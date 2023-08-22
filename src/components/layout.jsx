'use client'
import AdminGraph from "./admingraph"
import AdminList from "./adminlist"
import Sidebar from "./sidebar"

export default function Layout() {
    return (
        <div className="h-screen flex flex-row justify-start ">
            <Sidebar />


            {/* Content */}
            <AdminGraph />
            {/* <AdminList /> */}

            
        </div>
    )
}