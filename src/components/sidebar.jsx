export default function Sidebar() {
    return ( 
        <div className="bg-[#1D242E] h-screen w-[10%] flex justify-between flex-col content-center ">
            <div className="px-6 py-10 text-lg font-semibold leading-normal justify-self-stretch">
                <h2 className="text-center">Admin</h2>
                
            </div>
            <div className="bg-[#283342] h-screen w-auto flex justify-between flex-col content-center">
                <ul className="content-center">
                    <li className="py-5 text-center hover:bg-[#009099]"><a href="#" className="text-white">RPLD</a></li>
                    <li className="py-5 text-center hover:bg-[#009099]"><a href="#" className="text-white">SKJ</a></li>
                    <li className="py-5 text-center hover:bg-[#009099]"><a href="#" className="text-white">MMI</a></li>
                    <li className="py-5 text-center hover:bg-[#009099]"><a href="#" className="text-white">SSA</a></li>
                </ul>
                <div className="bg-[#1D242E] h-[5%] text-white text-opacity-70 text-[11px] font-normal flex justify-center items-center">OMAHTI @ 2023</div>
            </div>
        </div>
    )
}