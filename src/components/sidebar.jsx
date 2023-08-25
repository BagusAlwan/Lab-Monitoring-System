export default function Sidebar() {
    return ( 
        <div className="bg-[#1D242E] w-[10%] h-full flex flex-col justify-start content-center absolute ml-[-10%] md:ml-0 md:relative"> {/*bg-[#1D242E] w-[10%] flex flex-col content-stretch absolute ml-[-10%] md:ml-0 md:relative*/}
            <div className="px-6 py-10 text-lg font-semibold leading-normal flex justify-center items-center">
                <h2 className="text-center 2xl:text-2xl">Admin</h2>
                
            </div>
            <div className="bg-[#283342] h-full w-auto flex flex-col justify-between items-stretch content-center">
                <ul className="content-center">
                    <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]"><a href="#" className="text-white">SKJ</a></li>
                    <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]"><a href="#" className="text-white">RPLD</a></li>
                    <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]"><a href="#" className="text-white">MMI</a></li>
                    <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]"><a href="#" className="text-white">SSA</a></li>
                </ul>
                <div className="bg-[#1D242E] h-[5%] text-white text-opacity-70 text-[12px] 2xl:text-base lg:text-[10px] font-normal flex justify-center  text-center items-center">OMAHTI @ 2023</div>
            </div>
        </div>
    )
}