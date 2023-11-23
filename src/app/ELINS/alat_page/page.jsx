"use client";

import Image from "next/image";
import yellowdots from "../../../components/images/yellowdots.png";
import { useState } from "react"; // Import the useState hook
import { useSearchParams, useRouter } from "next/navigation";

export default function AlatPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const nim = searchParams.get("nim");
  const lab = searchParams.get("lab");
  const xhr = new XMLHttpRequest();

  const [selectedOption, setSelectedOption] = useState("Alat Pribadi");
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmitAlat = async (e) => {
    e.preventDefault();
    if (selectedOption === "null") {
      return;
    }
    console.log("Nama:", name);
    console.log("NIM:", nim);


    const res = await fetch("http://10.6.45.100:8080/api/alat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        nim: nim,
        lab: lab,
        alat: selectedOption
      }),
    });
    const resData = await res.json()
    if (resData) {
      xhr.open("GET", "http://10.6.4.100/?open");
      xhr.send();
      router.push("/ELINS/masuk_page");
    } else {
      console.error("POST request failed");
    }
  };

  const [visitorData, setVisitorData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://10.6.45.100:8080/api/alatData/group/${lab}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setVisitorData(data);
        console.log("Fetched Data:", data); // Log the fetched data
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  return (
    <div className="p-[18px] bg-white h-screen w-screen overflow-auto">
      <Image src={yellowdots} alt="Main Screen" objectFit="contain" />
      <div className="mt-[100px] md:mt-0 lg:mt-[100px]     h-7 text-center text-gray-800 text-xl font-medium leading-snug drop-shadow-lg">
        Pilih alat yg digunakan :
      </div>
      <div className="pt-[75px] flex justify-center items-center">
        <select
          className="w-72 border border-black bg-white text-black text-sm rounded block focus:ring-teal-600 focus:border-teal-600 p-2.5"
          onChange={handleSelectChange} // Call handleSelectChange on select change
          value={selectedOption} // Set the selected value based on the state
        >
          {visitorData.map((item) => (
            <option key={item.id} value={item.alat}>
              {item.alat}
            </option>
          ))}
        </select>
      </div>

      <div
        className="mt-[100px]  h-12 relative flex justify-center"
        onClick={handleSubmitAlat}
        style={{ cursor: "pointer" }}
      >
        <div className=" w-60 h-12 left-0 top-0 bg-teal-600 rounded-3xl" />
        <div className="NonAnggota top-[10px] absolute text-center text-white text-lg font-normal">
          MASUK
        </div>
      </div>
    </div>
  );
}
