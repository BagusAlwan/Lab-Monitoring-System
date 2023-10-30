import Image from "next/image";
import dot from "../components/images/dot.svg";
import { DatePicker } from "antd";
import DateNow from "../components/date";
import { useState, useEffect } from "react";
import navbararrow from "../components/images/navbararrow.svg";
import navbararrow2 from "../components/images/navbararrow2.svg";

export default function AdminList({ isOpen, toggleNav, toggleContent, title, iframetoolslist, iframetoolsdash }) {
  const callParentFunction = () => {
    toggleNav(); // Call the parent's function
  };

  useEffect(() => {
    const iframe = document.getElementById("myIframe");

    function reloadIframe() {
      iframe.src = iframe.src;
    }
    const intervalId = setInterval(reloadIframe, 30000);
    return () => clearInterval(intervalId);
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
        className={` justify-self-start self-center z-20 md:hidden ${
          !isOpen ? "absolute w-[10%] " : " absolute  "
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
            <div className="w-[200px] md:w-[500px] 2xl:p-3 2xl:w-[900px] text-black font-bold lg:mt-4 2xl:mt-6 text-lg xl:text-2xl ">
              Detail Penggunaan Alat
            </div>
          </div>
          <div className="flex flex-col md:flex-row 2xl:mt-11 pl-3 ">
            <div
              onClick={toggleContent}
              style={{ cursor: "pointer" }}
              className=" text-white p-[5px] mb-1 md:mt-6 md:mb-0 md:ml-5 md:px-3 2xl:ml-7 2xl:px-3 bg-teal-600 flex items-center justify-center rounded-md text-center text-xs xl:text-base 2xl:text-lg "
            >
              Detail Pengunjung
            </div>
            <div className=" text-white p-[5px] md:mt-6 md:ml-7 md:px-3 2xl:ml-7 2xl:px-3 bg-teal-600 flex items-center justify-center rounded-md text-center text-xs xl:text-base 2xl:text-lg ">
              Penggunaan Alat
            </div>
          </div>
        </div>

        {/* sm and above graph */}
        <div className="sm:grid w-full hidden h-[900px] md:h-[390px] lg:h-[410px] xl:h-[580px] 2xl:h-[880px] sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-8 justify-start lg:pt-[25px] pt-[47px]  ">
          <iframe
            id="myIframe"
            src={iframetoolslist}
            className="sm:grid w-full hidden h-[900px] md:h-[390px] lg:h-[410px] xl:h-[580px] 2xl:h-[880px] sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-8 justify-start   "
          ></iframe>
          <iframe
            id="myIframe"
            src={iframetoolsdash}
            className="sm:grid w-full hidden h-[900px] md:h-[390px] lg:h-[410px] xl:h-[580px] 2xl:h-[880px] sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-8 justify-start "
          ></iframe>
        </div>

        {/* sm and below graph */}
        <div className=" mt-[47px] sm:hidden grid grid-rows-2 gap-8 pt-8">
          <iframe
            src={iframetoolslist}
            className="Rectangle h-[300px] rounded border border-gray-800"
          ></iframe>
          <iframe
            src={iframetoolsdash}
            className="Rectangle h-[300px] rounded border border-gray-800"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
