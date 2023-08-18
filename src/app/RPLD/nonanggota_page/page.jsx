'use client';

import Image from 'next/image'
import yellowdots from '../../../components/images/yellowdots.png'

export default function NonAnggotaPage() {
    return (
        <div className="p-[18px] bg-white h-screen w-screen overflow-hidden">
           
            <Image 
                src={yellowdots}
                alt="Main Screen"
                objectFit='contain'
            />
            <div className="mt-[35%] h-7 text-center text-gray-800 text-xl font-medium leading-snug drop-shadow-lg">Masukan Data Berikut : </div>
            <div className='pt-[45px] flex justify-center items-center'>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Nama</label>
                <input type="text" placeholder="Isi nama lengkap" className="placeholder-gray-400 p-2 text-gray-900 border-b-2 border-gray-300 bg-white palceholder:">
                </input>
                <label className="mt-6 block mb-2 text-sm font-medium text-gray-900">NIM</label>
                <input type="text" placeholder="Isi NIM lengkap" className="placeholder-gray-400 p-2 text-gray-900 border-b-2 border-gray-300 bg-white palceholder:">
                </input>
                </div>
                
                
            </div>
            
            
            

            
            
            

            <div className="mt-[100px] h-12 relative flex justify-center" onClick={() => alert('Kamu MASUK')}>
            <div className="w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
            <div className="Anggota top-[10px] absolute text-center text-white text-lg font-normal">MASUK</div>
            </div>
            <div className="mt-4  h-12 relative flex justify-center" onClick={() => alert('Kamu KELUAR')}>
            <div className=" w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
            <div className="NonAnggota top-[10px] absolute text-center text-white text-lg font-normal">KELUAR</div>
            </div>

    
            
            
        </div>
        
    )
}