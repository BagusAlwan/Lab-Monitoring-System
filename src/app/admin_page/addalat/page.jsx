"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { set } from "date-fns";
// components/CRUD.js

export default function CRUDAlat() {
  const [items, setItems] = useState([]);
  const [itemAlat, setItemAlat] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLab = searchParams.get("currentlab");
  console.log(currentLab);

  const createItem = async () => {
    if (itemAlat.trim() !== "") {
      setItems([...items, { id: Date.now(), alat: itemAlat }]);
      const res = await fetch("http://10.6.45.100:8080/api/alatData/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          alat: itemAlat,
          lab: currentLab,
        }),
      });
      console.log(res);
    }
  };

  const [alatData, setAlatData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://10.6.45.100:8080/api/alatData/group/${currentLab}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAlatData(data);
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

  const deleteItem = async (id) => {
    try {
      const response = await fetch(`http://10.6.45.100:8080/api/alatData/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // If the deletion was successful, update the state to reflect the changes
        setAlatData((prevData) => prevData.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen h-full w-screen">
      <div className="container mx-auto p-8">
        <button
          onClick={() => router.back()}
          className="bg-teal-600 text-white p-3 rounded"
        >
          Back
        </button>
        <h1 className="text-4xl font-bold mb-8 text-center text-black">
          Input Alat Lab {currentLab}
        </h1>

        <h2 className="text-2xl font-semibold my-4 pt-4 text-black">
          Detail Alat
        </h2>
        <div className="flex items-center mb-4 ">
          <input
            type="text"
            placeholder="Nama Alat"
            value={itemAlat}
            onChange={(e) => setItemAlat(e.target.value)}
            className="p-3 rounded w-3/4 focus:outline-none text-black border-2"
          />
          <button
            onClick={createItem}
            className="bg-teal-600 text-white p-3 rounded ml-4"
          >
            Create
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4 pt-4 text-black">
          Item List
        </h2>
        <div className="bg-white rounded shadow border-2">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left pl-4 text-black">Alat</th>

                  <th className="py-2 text-right pr-4 text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                {alatData.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 pl-4 text-black">{item.alat}</td>

                    <td className="py-3 pr-4 text-right text-black">
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="bg-red-500 text-white p-2 rounded mr-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
