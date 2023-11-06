import Image from "next/image";
import dot from "../components/images/dot.svg";
import { DatePicker } from "antd";
import DateNow from "../components/date";
import { useState, useEffect } from "react";
import navbararrow from "../components/images/navbararrow.svg";
import navbararrow2 from "../components/images/navbararrow2.svg";
import VisitorChart from "./chart";

export default function AdminGrapgh({ isOpen, toggleNav, toggleContent, title, iframevisitorlist, iframevisitordash, lab }) {
  const callParentFunction = () => {
    toggleNav(); // Call the parent's function
  };

  // useEffect(() => {
  //   const iframe = document.getElementById("myIframe");
  //   function reloadIframe() {
  //     iframe.src = iframe.src;
  //   }
  //   const intervalId = setInterval(reloadIframe, 30000);
  //   return () => clearInterval(intervalId);
  // }, []);
  const [visitorData, setVisitorData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/member/group/${lab}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

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


  return (
    <div className=" flex-auto overflow-scroll w-auto bg-slate-50">
      <div className=" bg-white h-[150px] md:h-24 p-8 pt-[50px] md:flex md:flex-row grid grid-rows-2 gap-y-12 items-center justify-between ">
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-extrabold text-black">
          {title}
        </h1>
        <div className="flex flex-row">
          <Image src={dot} alt="dot" width={20} height={20} className="mr-3" />

          <div className="text-black text-sm  md:text-base ">
            <DateNow />
          </div>
        </div>
      </div>

      <div
        type="button"
        onClick={callParentFunction}
        className={` justify-self-start self-center z-20 md:hidden ${!isOpen ? "absolute w-[10%] " : " absolute  "
          }`}
      >
        <Image
          alt="navbararrow"
          src={isOpen ? navbararrow2 : navbararrow}
          width={22}
          height={94}
        />
      </div>

      {/* content */}
      <div className="bg-slate-50 p-8 lg:pt-3 ">
        <div className="flex flex-row  ">
          <div className="flex flex-col">
            <div className="text-gray-800 mb-1 2xl:mb-5 text-base lg:text-xl 2xl:text-2xl 2xl:font-medium font-normal"></div>
            {/* <DatePicker.RangePicker className="w-[200px] md:w-[500px] 2xl:p-3 2xl:w-[900px] 2xl:mt-3  " /> */}
            <div className="w-[200px] md:w-[500px] 2xl:p-3 2xl:w-[900px] text-black font-bold lg:mt-4 2xl:mt-6 text-lg xl:text-2xl ">
              Detail Pengunjung
            </div>
          </div>
          <div className="flex flex-col md:flex-row 2xl:mt-11 pl-3 ">
            <div className=" text-white p-[5px] mb-1 md:mt-6 md:mb-0 md:ml-5 md:px-3 2xl:ml-7 2xl:px-3 bg-teal-600 flex items-center justify-center rounded-md text-center text-xs xl:text-base 2xl:text-lg ">
              Detail Pengunjung
            </div>
            <div
              onClick={toggleContent}
              style={{ cursor: "pointer" }}
              className=" text-white p-[5px] md:mt-6 md:ml-7 md:px-3 2xl:ml-7 2xl:px-3 bg-teal-600 flex items-center justify-center rounded-md text-center text-xs xl:text-base 2xl:text-lg "
            >
              Penggunaan Alat
            </div>
          </div>
        </div>

        {/* sm and above graph */}
        <div className="sm:grid w-full hidden h-[900px] md:h-[390px] lg:h-[410px] xl:h-[580px] 2xl:h-[880px] sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-8 justify-start lg:pt-[25px] pt-[47px]  ">
          {/* <div className="Rectangle bg-sky-300 rounded border border-gray-800" /> */}
          {/* <iframe
            id="myIframe"
            src={iframevisitorlist}
            className="sm:grid w-full hidden h-[900px] md:h-[390px] lg:h-[410px] xl:h-[580px] 2xl:h-[880px] sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-8 justify-start "
          ></iframe>
          <iframe
            id="myIframe"
            src={iframevisitordash}
            className="sm:grid w-full hidden h-[900px] md:h-[390px] lg:h-[410px] xl:h-[580px] 2xl:h-[880px] sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-8 justify-start "
          ></iframe> */}
          <div>

            <VisitorChart chartType="column" data={visitorData} timeRange="Daily" />
            <VisitorChart
              chartType="column"
              data={visitorData}
              timeRange="Weekly"
            />
            <VisitorChart chartType="line" data={visitorData} timeRange="Monthly" />
          </div>
          <div>
            <table
              className="min-w-full table-auto border border-gray-300 text-center text-black space-y-4"
              border="1"
            >
              <thead>
                <tr>

                  <th className="border-y">Name</th>
                  <th className="border-y">NIM</th>

                  <th className="border-y">Time In</th>
                </tr>
              </thead>
              <tbody>
                {visitorData.map((visitor) => (
                  <tr key={visitor.id}>
                    {/* <td  >{visitor.id}</td> */}
                    <td className="py-3">{visitor.name}</td>
                    <td>{visitor.nim}</td>
                    {/* <td>{visitor.lab}</td> */}
                    <td>{visitor.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* sm and below graph */}
        <div className=" mt-[47px sm:hidden grid grid-rows-2 gap-8 pt-8">
          {/* <div className="Rectangle h-[300px] bg-sky-300 rounded border border-gray-800" /> */}
          <iframe
            id="myIframe"
            src={iframevisitorlist}
            className="sm:hidden grid grid-rows-2 Rectangle h-[300px] rounded border border-gray-800"
          ></iframe>
          <iframe
            id="myIframe"
            src={iframevisitordash}
            className="sm:hidden grid grid-rows-2 Rectangle h-[300px] rounded border border-gray-800"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
