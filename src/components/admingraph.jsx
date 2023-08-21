import Image from "next/image"
import dot from "../components/images/dot.png"
import { DatePicker } from "antd"

export default function AdminGrapgh() {
    return (
    
    // title
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
        <div className="bg-slate-50 p-8 lg:pt-3 ">
            <div className="text-gray-800 text-xl 2xl:text-2xl font-normal">Periode</div>


            <div className="flex flex-row mt-2">                        
            <DatePicker.RangePicker  className="w-[35%] 2xl:w-[800px] 2xl:h-[50px] "/>


                <div className="ml-[23px] w-[15%] h-9 2xl:h-[50px] relative flex justify-center items-center">
                    <div className="Rectangle17 w-[100%] h-9 2xl:h-[50px] absolute bg-teal-600 rounded flex items-center justify-center" />
                    <div className="PenggunaanAlat absolute text-center text-white text-base lg:text-sm 2xl:text-xl font-normal">Penggunaan Alat</div>
                </div> 

                <div className="ml-[23px] w-[15%] h-9 2xl:h-[50px] relative flex justify-center items-center">
                    <div className="Rectangle17 w-[100%] h-9 2xl:h-[50px] absolute bg-teal-600 rounded" />
                    <div className="PenggunaanAlat absolute text-center text-white text-base lg:text-sm 2xl:text-xl font-normal  ">Detail Pengunjung</div>
                </div>

            </div>


            <div className="flex flex-row justify-start lg:pt-[25px] pt-[47px]">                        
                
                <div className="Rectangle mr-[42px] lg:w-[374px] lg:h-[349px] xl:w-[474px] xl:h-[449px] 2xl:w-[974px] 2xl:h-[949px] bg-white rounded border border-gray-800" />

                <div className="Rectangle lg:w-[454px] lg:h-[349px] xl:w-[554px] xl:h-[449px] 2xl:w-[1254px] 2xl:h-[949px] bg-white rounded border border-gray-800" />

            </div>



        </div>
    
    
    </div>

    )
}