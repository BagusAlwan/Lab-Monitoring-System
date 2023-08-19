import Sidebar from "./sidebar"
import Image from "next/image"
import dot from "../components/images/dot.png"
import DatePicker from "./datepicker"

export default function Layout() {

    return (
        <div className="h-screen flex flex-row justify-start">
            <Sidebar />


            {/* Content */}

            {/* title */}
            <div className="flex-1 bg-slate-50">
                <div className=" bg-white h-24 p-8 flex flex-row items-center justify-between ">
                    <h1 className="text-3xl font-extrabold text-black">Lab Rekayasa Perangkat Lunak dan Data</h1>
                    <div className="flex flex-row">
                        <Image
                            src={dot}
                            alt="dot"
                            width={20}
                            height={20}
                            className="mr-3"
                        />
                        <div className="text-black">14 Januari 2023</div>
                    </div>
                    
                </div>
                
                {/* content */}
                <div className="bg-slate-50 p-8 ">
                    <div className="text-gray-800 text-xl font-normal">Periode</div>


                    <div className="flex flex-row mt-2">                        
                        
                        {/* <DatePicker/> */}

                        <div className="TopBarBg w-[340px] h-[38px] bg-slate-200 rounded border border-gray-800" />

                        <div className="ml-[23px] w-56 h-9 relative">
                        <div className="Rectangle17 w-56 h-9 left-0 top-0 absolute bg-teal-600 rounded" />
                        <div className="PenggunaanAlat w-40 h-5 left-[30px] top-[7.91px] absolute text-center text-white text-base font-normal">Penggunaan Alat</div>
                        </div>

                        <div className="ml-[23px] w-56 h-9 relative">
                        <div className="Rectangle17 w-56 h-9 left-0 top-0 absolute bg-teal-600 rounded" />
                        <div className="PenggunaanAlat w-40 h-5 left-[30px] top-[7.91px] absolute text-center text-white text-base font-normal">Detail Pengunjung</div>
                        </div>

                    </div>


                    <div className="flex flex-row justify-start pt-[47px]">                        
                        
                    <div className="Rectangle mr-[42px] w-[474px] h-[449px] bg-white rounded border border-gray-800" />

                        <div className="Rectangle w-[554px] h-[449px] bg-white rounded border border-gray-800" />

                    </div>



                </div>
                
                
            </div>
        </div>
    )
}