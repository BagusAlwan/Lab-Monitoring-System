import Image from "next/image"
import dot from "../components/images/dot.png"
import filter from "../components/images/filter.png"
import { DatePicker } from "antd"

export default function AdminList() {
    return (

        // title
        <div className="flex-1 bg-slate-50">
            <div className=" bg-white h-[150px] md:h-24 p-8 pt-[50px] md:flex md:flex-row grid grid-rows-2 gap-y-12 items-center justify-between ">
                <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-extrabold text-black">Lab Rekayasa Perangkat Lunak dan Data</h1>
                <div className="flex flex-row">
                    <Image
                        src={dot}
                        alt="dot"
                        width={21}
                        height={20}
                        className="mr-3"
                    />
                    <div className="text-black">14 Januari 2023</div>
                </div>

            </div>

            {/* content */}
            <div className="bg-slate-50 p-8 lg:pt-3 ">
                <div className="text-gray-800 text-xl 2xl:text-2xl font-normal">Tanggal</div>


                <div className="flex flex-row justify-between mt-2">
                    <div className="flex flex-row w-full ">
                        <DatePicker.RangePicker className="w-[35%] 2xl:w-[800px] 2xl:h-[50px] " />


                        <div className="ml-[23px] w-[20%] h-9 2xl:h-[50px] relative flex justify-center items-center">
                            <div className="Rectangle17 w-[100%] h-9 2xl:h-[50px] absolute bg-teal-600 rounded flex items-center justify-center" />
                            <div className="PenggunaanAlat absolute text-center text-white text-base lg:text-sm 2xl:text-xl font-normal">Grafik Utama</div>
                        </div>

                        <div className="ml-[23px] w-[20%] h-9 2xl:h-[50px] relative flex justify-center items-center">
                            <div className="Rectangle17 w-[100%] h-9 2xl:h-[50px] absolute bg-teal-600 rounded" />
                            <div className="PenggunaanAlat absolute text-center text-white text-base lg:text-sm 2xl:text-xl font-normal  ">Penggunaan Alat</div>
                        </div>
                    </div>


                    <div className="flex flex-row  2xl:mr-[90px] ">
                        <div className="flex justify-center items-center px-2">
                            <Image
                                src={filter}
                                alt="filter"
                                objectFit="contain"
                                width={55}
                                height={55}

                            />
                        </div>

                        <select className=" border border-black bg-white text-black text-sm 2xl:text-xl rounded block focus:ring-teal-600 focus:border-teal-600 p-2.5">
                            <option selected>-Pilih Filter-</option>
                            <option value="">Bagus Alwan</option>
                            <option value="">Sahsa Annabel</option>
                            <option value="">Maulana Arya</option>
                            <option value="">Vian Sebastian</option>
                        </select>
                    </div>



                </div>


                {/* List */}

                <div className="lg:pt-[25px] pt-[47px] mt-9 lg:w-full lg:h-[349px]  xl:h-[449px]  2xl:h-[949px] bg-white rounded border border-gray-800" />





            </div>


        </div>

    )
}