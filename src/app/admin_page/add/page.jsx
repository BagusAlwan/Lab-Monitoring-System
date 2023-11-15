"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { set } from "date-fns";
// components/CRUD.js

export default function CRUD() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemNIM, setItemNIM] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLab = searchParams.get("currentlab");
  console.log(currentLab);

  const createItem = async () => {
    if (itemName.trim() !== "" && itemNIM.trim() !== "") {
      setItems([...items, { id: Date.now(), name: itemName, nim: itemNIM }]);
      setItemName("");
      setItemNIM("");
      const res = await fetch("http://10.6.43.100:8080/api/data/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: itemName,
          nim: itemNIM,
          lab: currentLab,
        }),
      });
      console.log(res);
    }
  };

  const [visitorData, setVisitorData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://10.6.43.100:8080/api/data/group/${currentLab}`,
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
      const response = await fetch(
        `http://10.6.43.100:8080/api/data/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.ok) {
        // If the deletion was successful, update the state to reflect the changes
        setVisitorData((prevData) =>
          prevData.filter((item) => item.id !== id)
        );
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
          Lab {currentLab} Member Input
        </h1>

        <h2 className="text-2xl font-semibold my-4 pt-4 text-black">
          Student Detail
        </h2>
        <div className="flex items-center mb-4 ">
          <input
            type="text"
            placeholder="Enter Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value.toLowerCase())}
            className="p-3 rounded w-3/4 focus:outline-none text-black border-2"
          />
        </div>
        <div className="flex items-center mb-4 ">
          <input
            type="text"
            placeholder="Enter NIM"
            value={itemNIM}
            onChange={(e) => setItemNIM(e.target.value.toLowerCase())}
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
                  <th className="py-2 text-left pl-4 text-black">Name</th>
                  <th className="py-2 text-left pl-4 text-black">NIM</th>
                  <th className="py-2 text-right pr-4 text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visitorData.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 pl-4 text-black">{item.name}</td>
                    <td className="py-3 pl-4 text-black">{item.nim}</td>
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
