'use client';

import Image from 'next/image';
import yellowdots from '../../../components/images/yellowdots.png';
import { useState } from 'react'; // Import the useState hook
import { useSearchParams, useRouter } from 'next/navigation'

export default function AlatPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
    const nim = searchParams.get('nim')
    const date = searchParams.get('date')



    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmitAlat = async (e) => {
        e.preventDefault();
        console.log("Nama:", name);
        console.log("NIM:", nim);
        const res = await fetch('/api/alatSheet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date, name, nim, selectedOption
            })
        })

        router.push('/RPLD/masuk_page')
    };

    return (
        <div className="p-[18px] bg-white h-screen w-screen overflow-auto">
            <Image
                src={yellowdots}
                alt="Main Screen"
                objectFit='contain'
            />
            <div className="mt-[100px] md:mt-0 lg:mt-[100px]     h-7 text-center text-gray-800 text-xl font-medium leading-snug drop-shadow-lg">Pilih alat yg digunakan : </div>
            <div className='pt-[75px] flex justify-center items-center'>
                <select
                    className="w-72 border border-black bg-white text-black text-sm rounded block focus:ring-teal-600 focus:border-teal-600 p-2.5"
                    onChange={handleSelectChange} // Call handleSelectChange on select change
                    value={selectedOption} // Set the selected value based on the state
                >
                    <option value="">Daftar Alat</option>
                    <option value="Alat 2">Alat 2</option>
                    <option value="Alat 4">Alat 4</option>
                    <option value="Alat 1">Alat 1</option>
                    <option value="Alat 3">Alat 3</option>
                </select>
            </div>

            <div className="mt-[100px]  h-12 relative flex justify-center" onClick={handleSubmitAlat}>
                <div className=" w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
                <div className="NonAnggota top-[10px] absolute text-center text-white text-lg font-normal">MASUK</div>
            </div>
        </div>
    );
}