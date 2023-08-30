'use client';

import Image from 'next/image'
import yellowdots from '../../../components/images/yellowdots.png'

export default function AlatPage() {
    return (
        <div className="p-[18px] bg-white h-screen w-screen overflow-auto">
           
            <Image 
                src={yellowdots}
                alt="Main Screen"
                objectFit='contain'
            />
            <div className="mt-[35%] h-7 text-center text-gray-800 text-xl font-medium leading-snug drop-shadow-lg">Pilih alat yg digunakan : </div>
            <div className='pt-[75px] flex justify-center items-center'>
                <select className="w-72 border border-black bg-white text-black text-sm rounded block focus:ring-teal-600 focus:border-teal-600 p-2.5">
                <option selected>Daftar Alat</option>
                <option value="">Alat 2</option>
                <option value="">Alat 4</option>
                <option value="">Alat 1</option>
                <option value="">Alat 3</option>
                </select>
            </div>
            
            
            

            <div className="mt-[100px]  h-12 relative flex justify-center" onClick={() => alert('Kamu KELUAR')}>
            <div className=" w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
            <div className="NonAnggota top-[10px] absolute text-center text-white text-lg font-normal">KELUAR</div>
            </div>

    
            
            
        </div>
        
    )
}