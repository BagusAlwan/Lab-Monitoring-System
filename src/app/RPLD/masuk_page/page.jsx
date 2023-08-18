'use client';

import Image from 'next/image'
import yellowdots from '../../../components/images/yellowdots.png'
import robot from '../../../components/images/robot.png'

export default function DataPage() {
    return (
        <div className="p-[18px] bg-white h-screen w-screen overflow-hidden">
           
            <Image 
                src={yellowdots}
                alt="Main Screen"
                objectFit='contain'
            />
            <div className='mt-[40%] flex justify-center items-center'>
            <Image 
                src={robot}
                alt="Main Screen"
                width={170}
                height={170}
            />
            </div>

            <div className="mt-[23px] h-8 text-center text-gray-800 text-4xl font-bold leading-10">Selamat Datang!</div>
            
            <div className="mt-[20px] h-6 text-center text-gray-800 text-xl font-normal leading-snug">Mohon mematuhi protokol pemakaian lab.</div>

            
            
            
    
            
            
        </div>
        
    )
}