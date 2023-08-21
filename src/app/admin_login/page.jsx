'use client';

import Image from 'next/image'
import yellowdots from '../../components/images/yellowdots.png'

export default function AdminLogin() {
    return (
        <div className="bg-sky-700 h-screen w-screen overflow-auto absolute z-0">
           
            <div className="h-[192.09px] relative flex-auto">
                <div className=" h-[147px] absolute z-0 bg-white " />
                    <div className="  h-[34px] pl-[259px] pt-[39px] absolute text-gray-800 text-[50px] font-bold leading-normal">Selamat datang!</div>
                    <div className=" h-[169.09px] pl-[28px] pt-[23px] absolute">
                    <Image
                        src={yellowdots}
                        alt="Decoration"
                        width={158}
                        height={169}
                    />
                </div>
            </div>
            
            
            
           
            
        </div>
        
    )
}