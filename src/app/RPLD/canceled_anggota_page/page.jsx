'use client';

import Image from 'next/image'
import Link from 'next/link'
import yellowdots from '../../../components/images/yellowdots.png'

export default function AnggotaPage() {
    return (
        <div className="p-[18px] bg-white h-screen w-screen overflow-auto">
           
            <Image 
                src={yellowdots}
                alt="Main Screen"
                objectFit='contain'
            />
            <div className="mt-[100px] md:mt-0 lg:mt-[100px] h-7 text-center text-gray-800 text-xl font-medium leading-snug drop-shadow-lg">Pilih nama anggota : </div>
            <div className='pt-[75px] flex justify-center items-center'>
                <select className="w-72 border border-black bg-white text-black text-sm rounded block focus:ring-teal-600 focus:border-teal-600 p-2.5">
                <option selected>Daftar nama</option>
                <option value="">Bagus Alwan</option>
                <option value="">Sahsa Annabel</option>
                <option value="">Maulana Arya</option>
                <option value="">Vian Sebastian</option>
                </select>
            </div>
            
            
            

            
            <div className="mt-[100px] h-12 relative flex justify-center" onClick={() => alert('Kamu MASUK')}>
                <div className="w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
                <div className="Anggota top-[10px] absolute text-center text-white text-lg font-normal">MASUK</div>
            </div>
            
            <Link href="/RPLD/alat_page">
                <div className="mt-4  h-12 relative flex justify-center">
                    <div className=" w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
                    <div className="NonAnggota top-[10px] absolute text-center text-white text-lg font-normal">KELUAR</div>
                </div>
            </Link>
    
            
            
        </div>
        
    )
}