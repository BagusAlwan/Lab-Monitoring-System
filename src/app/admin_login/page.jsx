'use client';

import Image from 'next/image'
import yellowdots from '../../components/images/yellowdots.png'
import robot from '../../components/images/robot.png'
import Link from 'next/link'
import { initFirebase } from '../firebase/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


export default function DataPage() {
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth); 
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // harusnya function ini tinggal di call aja ke button or smth?? 
    
    const signIn = async () => {
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user);
    }

    if (loading) {
        return <div>LOADING...</div>
    }

    


    if (user) {
        router.push("/admin_page/RPLD")
        
    }
    

    return (
        <div className="p-[18px] bg-white h-screen w-screen overflow-auto">
           
            <Image 
                src={yellowdots}
                alt="Main Screen"
                objectFit='contain'
            />

            
            <div className=' pt-10 2xl:pt-52 flex flex-col justify-center items-center'>
                <Image 
                    src={robot}
                    alt="Main Screen"
                    width={170}
                    height={170}
                />
                <div className="mt-[23px] h-8 text-center text-gray-800 text-4xl 2xl:text-5xl font-bold leading-10">Selamat Datang!</div>
            
                <div className="mt-[20px] 2xl:mt-[30px] h-6 text-center text-gray-800 text-xl 2xl:text-2xl font-normal leading-snug">Masukan kunci</div>


                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="bg-gray-50 border max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-4" placeholder="johndoe@gmail.com" required>
                </input>

                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="bg-gray-50 border max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-4" placeholder="•••••••••" required>
                </input>

                {/* <Link href="/admin_page">|
                <div className="mt-10 h-12 relative flex justify-center" onClick={() => alert('Kamu MASUK')}>
                <div className="w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
                <div className="Anggota top-[10px] absolute text-center text-white text-lg font-normal">MASUK</div>
                </div>
                </Link> */}
                <div className="mt-10 h-12 relative flex justify-center" onClick={signIn} style={{ cursor: "pointer" }} >
                <div className="w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
                <div className="Anggota top-[10px] absolute text-center text-white text-lg font-normal">MASUK</div>
                </div>
            
            
            </div>

 
             
    
            
            
        </div>
        
    )
}