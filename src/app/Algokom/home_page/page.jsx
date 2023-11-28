'use client';

import Image from 'next/image'
import yellowdots from '../../../components/images/yellowdots.png'
import logo from '../../../components/images/logo.png'
import Link from 'next/link'
import ugm from '../../../components/images/Lambang UGM-hitam.png'

export default function HomePage() {
    return (
        <div className="p-[18px] bg-white h-screen w-screen overflow-auto">

            <Image
                src={yellowdots}
                alt="Main Screen"
                objectFit='contain'
            />
            <div className='pt-[75px] flex justify-center items-center'>
                <Image
                    src={ugm}
                    alt="Main Screen"
                    width={70}
                    height={70}
                />
            </div>
            <div className="mt-[15px] h-7 text-center text-gray-800 text-xl font-medium leading-snug drop-shadow-lg">Halo! <br />Kamu berada di</div>
            <div className='pt-[75px] flex justify-center items-center'>
                <Image
                    src={logo}
                    alt="Main Screen"
                    width={170}
                    height={170}
                />
            </div>
            <div className="h-10 pt-[24px] text-center text-gray-800 text-2xl font-extrabold leading-10 drop-shadow-xl">Lab Algoritma Komputasi</div>



            <Link href="/Algokom/pendatang_page">
                <div className="mt-[100px] h-12 relative flex justify-center">
                    <div className=" w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
                    <div className="NonAnggota top-[10px] absolute text-center text-white text-lg font-normal">Pendatang</div>
                </div>
            </Link>


        </div>

    )
}