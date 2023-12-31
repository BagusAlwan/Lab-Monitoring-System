"use client";

import Image from "next/image";
import yellowdots from "../../../components/images/yellowdots.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ugm from '../../../components/images/Lambang UGM-hitam.png'


export default function NonAnggotaPage() {
  const router = useRouter()
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");

  const date = new Date();

  const handleNamaChange = (e) => {
    const newValue = e.target.value.toLowerCase();
    setNama(newValue);
  };

  const handleNimChange = (e) => {
    const newValue = e.target.value.toLowerCase();
    setNim(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Nama:", nama);
    console.log("NIM:", nim);
    const labValue = "SC";

    try {
      const encodedNIM = encodeURIComponent(nim);

      // Update the URL to match the new verify route
      const verificationResponse = await fetch(`http://10.6.45.100:8080/api/data/verify/${nama}/${encodedNIM}/${labValue}`);

      console.log(encodedNIM);

      if (verificationResponse.ok) {
        // The verification API returned a successful response
        const verificationData = await verificationResponse.json();

        if (verificationData) {
          // The verification was successful, now make the POST request
          const postResponse = await fetch('http://10.6.45.100:8080/api/member', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: nama,
              nim: nim,
              lab: labValue,
            })
          });
          const postData = await postResponse.json();
          if (postData) {
            // The POST request was successful, you can now navigate to the next page
            router.push(`/SC/alat_page?name=${nama}&nim=${nim}&lab=${labValue}`);
          } else {
            console.error('Failed to make POST request:', postResponse.status);
            alert('Failed to make POST request:', postResponse.status);
          }
        } else {
          console.error('Verification failed. The user is not valid.');
          alert('Verification failed. The user is not valid.');
        }
      } else {
        console.error('Failed to verify the user:', verificationResponse.status);
        alert('Failed to verify the user:', verificationResponse.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred:', error);
    }
  };
  return (

    <div className="p-[18px] bg-white h-screen w-screen overflow-auto">
      <Image src={yellowdots} alt="Main Screen" objectFit="contain" />
      <div className='pt-[75px] flex justify-center items-center'>
        <Image
          src={ugm}
          alt="Main Screen"
          width={70}
          height={70}
        />
      </div>
      <div className="mt-[80px] md:mt-0 lg:mt-[80px] h-7 text-center text-gray-800 text-xl font-medium leading-snug drop-shadow-lg">
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
        onClick={handleSubmit}
        style={{ cursor: "pointer" }} className="mt-4  h-12 relative flex justify-center">
        <div className=" w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
        <div className="NonAnggota top-[10px] absolute text-center text-white text-lg font-normal">
          MASUK
        </div>
      </div>

    </div>

  );
}
