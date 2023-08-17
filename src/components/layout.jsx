import Sidebar from "./sidebar"

export default function Layout() {

    return (
        <div className="h-screen flex flex-row justify-start">
            <Sidebar />
            <div className="flex-1 p-8 border border-1 bg-white">

            </div>
        </div>
    )
}