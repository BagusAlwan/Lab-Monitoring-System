"use client";

import Image from "next/image";
import Link from "next/link";
import yellowdots from "../../../components/images/yellowdots.png";
import { useState } from "react";


export default function NonAnggotaPage() {
    const [nama, setNama] = useState("");
    const [nim, setNim] = useState("");

    const date = new Date();

    const handleNamaChange = (e) => {
        setNama(e.target.value);
    };

    const handleNimChange = (e) => {
        setNim(e.target.value);
    };


    const handleSubmitIn = async (e) => {
        e.preventDefault();
        console.log("Nama:", nama);
        console.log("NIM:", nim);
        const action = "IN";
        const time = new Date().toLocaleTimeString();
        const date = new Date().toLocaleDateString();


        const res = await fetch('/api/sheets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date, nama, nim, action, time
            })
        })
    };

    const handleSubmitOut = async (e) => {
        e.preventDefault();
        console.log("Nama:", nama);
        console.log("NIM:", nim);
        const action = "OUT";
        const time = new Date().toLocaleTimeString();
        const date = new Date().toLocaleDateString();


        const res = await fetch('/api/sheets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date, nama, nim, action, time
            })
        })
    };

    return (
        <div className="p-[18px] bg-white h-screen w-screen overflow-auto">
            <Image src={yellowdots} alt="Main Screen" objectFit="contain" />
            <div className="mt-[35%] h-7 text-center text-gray-800 text-xl font-medium leading-snug drop-shadow-lg">
                Masukan Data Berikut :{" "}
            </div>
            <div className="pt-[45px] flex justify-center items-center">
                <form>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Nama
                        </label>
                        <input
                            type="text"
                            placeholder="Jane doe"
                            value={nama}
                            onChange={handleNamaChange}
                            className="placeholder-gray-400 p-2 text-gray-900 border-b-2 border-gray-300 bg-white palceholder:"
                        ></input>
                        <label className="mt-6 block mb-2 text-sm font-medium text-gray-900">
                            NIM
                        </label>
                        <input
                            type="text"
                            placeholder="2X/XXXXX/XX/XXXXXXX"
                            value={nim}
                            onChange={handleNimChange}
                            className="placeholder-gray-400 p-2 text-gray-900 border-b-2 border-gray-300 bg-white palceholder:"
                        ></input>
                    </div>
                </form>
            </div>

            <div
                className="mt-[100px] h-12 relative flex justify-center "
                // onClick={() => }
                onClick={handleSubmitIn}
                style={{ cursor: "pointer" }}
            >
                <div className="w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
                <div className="Anggota top-[10px] absolute text-center text-white text-lg font-normal">
                    MASUK
                </div>
            </div>


            <div
                onClick={handleSubmitOut}
                style={{ cursor: "pointer" }} className="mt-4  h-12 relative flex justify-center">
                <div className=" w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
                <div className="NonAnggota top-[10px] absolute text-center text-white text-lg font-normal">
                    KELUAR
                </div>
            </div>

        </div>
    );
}
