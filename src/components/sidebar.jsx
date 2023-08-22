export default function Sidebar() {
    return ( 
        <div className="bg-[#1D242E] h-screen w-[10%] flex justify-between flex-col content-stretch absolute -z-10 md:z-10 md:relative">
            <div className="px-6 py-10 text-lg font-semibold leading-normal flex justify-center items-center">
                <h2 className="text-center 2xl:text-2xl">Admin</h2>
                
            </div>
            <div className="bg-[#283342] h-screen w-auto flex justify-between flex-col content-center">
                <ul className="content-center">
                    <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]"><a href="#" className="text-white">SKJ</a></li>
                    <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]"><a href="#" className="text-white">RPLD</a></li>
                    <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]"><a href="#" className="text-white">MMI</a></li>
                    <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]"><a href="#" className="text-white">SSA</a></li>
                </ul>
                <div className="bg-[#1D242E] h-[5%] text-white text-opacity-70 text-[12px] 2xl:text-base lg:text-[10px] font-normal flex justify-center items-center">OMAHTI @ 2023</div>
            </div>
        </div>
    )
}