import Image from "next/image";
import dot from "../components/images/dot.svg";
import { DatePicker } from "antd";
import DateNow from "../components/date";
import { useState, useEffect, useRef } from "react";
import navbararrow from "../components/images/navbararrow.svg";
import navbararrow2 from "../components/images/navbararrow2.svg";
import VisitorChart from "./visitorchart";
import { useRouter } from "next/navigation";
import moment from 'moment';
import ugm from '../components/images/Lambang UGM-hitam.png'


export default function AdminGrapgh({
  isOpen,
  toggleNav,
  toggleContent,
  title,
  lab,
}) {
  const callParentFunction = () => {
    toggleNav(); // Call the parent's function
  };

  const router = useRouter();

  const handleButtonClick = () => {
    if (typeof lab === "string") {
      router.push(`/admin_page/add?currentlab=${lab}`);
    } else {
      console.error("Lab is not a valid string:", lab);
      // Handle the error or provide a default value as needed
    }
  };

  const { RangePicker } = DatePicker;
  const initialDateRange = useRef({
    startDate: moment('2023-01-01'),
    endDate: moment(),
  });

  const [selectedRange, setSelectedRange] = useState({
    startDate: initialDateRange.current.startDate,
    endDate: initialDateRange.current.endDate,
  });

  const handleDateChange = (dates, dateStrings) => {
    setSelectedRange({
      startDate: dates[0],
      endDate: dates[1],
    });
    initialDateRange.current = {
      startDate: dates[0],
      endDate: dates[1],
    };
    console.log('Selected Range:', dateStrings);
  };

  const [visitorData, setVisitorData] = useState([]);
  const fetchDataWithDateRange = async (startDate, endDate) => {
    try {
      const formattedStartDate = startDate.format('YYYY-MM-DD');
      const formattedEndDate = endDate.clone().add(1, 'day').format('YYYY-MM-DD');
      const url = `http://10.6.45.100:8080/api/member/group/${lab}/${formattedStartDate}/${formattedEndDate}`;

      const response = await fetch(url, {
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
    fetchDataWithDateRange(selectedRange.startDate, selectedRange.endDate);
  }, [selectedRange]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDataWithDateRange(selectedRange.startDate, selectedRange.endDate);
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedRange.startDate, selectedRange.endDate]);

  const sortedData = visitorData.sort((a, b) => {
    const timeA = new Date(a.time);
    const timeB = new Date(b.time);
    return timeB - timeA;
  });

  // Use the sortedData array to render the table

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

        <RangePicker
          onChange={handleDateChange}
          size="medium"
          className="mt-4 p-2 sm:w-[500px]"
        />

        <button
          onClick={handleButtonClick}
          className="w-full mt-6 h-[38px] bg-teal-600 rounded-md text-white "
        >
          <div>Tambah Member Lab</div>
        </button>

        {/* sm and above graph */}
        <div className="sm:grid w-full hidden h-[900px] md:h-[390px] lg:h-[410px] xl:h-[580px] 2xl:h-[880px] sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-8 justify-start lg:pt-[25px] pt-[20px]  ">
          <div className="max-h-[1000px] overflow-y-auto">
            <table
              className="min-w-full table-auto border border-black text-center text-black space-y-4"
              border="1"
            >
              <thead>
                <tr>
                  <th className="border-y border-black">Name</th>
                  <th className="border-y border-black">NIM</th>

                  <th className="border-y border-black">Time In</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((visitor) => {
                  const originalTime = visitor.time;
                  const parsedTime = new Date(originalTime.slice(0, -1)); // Remove 'Z' at the end
                  parsedTime.setHours(parsedTime.getHours() + 7);
                  const options = {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  };
                  const formattedTime = parsedTime.toLocaleString(
                    "en-US",
                    options
                  );
                  return (
                    <tr key={visitor.id}>
                      {/* <td  >{visitor.id}</td> */}
                      <td className="py-3 border-x border-black">
                        {visitor.name}
                      </td>
                      <td className="py-3 border-x border-black">
                        {visitor.nim}
                      </td>
                      {/* <td>{visitor.lab}</td> */}
                      <td className="py-3 border-x border-black">
                        {formattedTime}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <VisitorChart
              chartType="column"
              data={visitorData}
              timeRange="Daily"
            />
            <VisitorChart
              chartType="column"
              data={visitorData}
              timeRange="Weekly"
            />
            <VisitorChart
              chartType="line"
              data={visitorData}
              timeRange="Monthly"
            />
          </div>
        </div>

        {/* sm and below graph */}
        <div className="w-[350px] sm:hidden grid grid-rows-2 gap-8 pt-8">
          <div className="w-[350px]">
            <VisitorChart
              chartType="column"
              data={visitorData}
              timeRange="Daily"
            />
            <VisitorChart
              chartType="column"
              data={visitorData}
              timeRange="Weekly"
            />
            <VisitorChart
              chartType="line"
              data={visitorData}
              timeRange="Monthly"
            />
          </div>
          <div className="max-h-[800px] overflow-y-auto">
            <table
              className="w-[350px] table-auto border border-black text-center text-black"
              border="2"
            >
              <thead>
                <tr>
                  <th className="border-y border-black">Name</th>
                  <th className="border-y border-black">NIM</th>

                  <th className="border-y border-black">Time In</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((visitor) => {
                  const originalTime = visitor.time;
                  const parsedTime = new Date(originalTime.slice(0, -1)); // Remove 'Z' at the end
                  parsedTime.setHours(parsedTime.getHours() + 7);
                  const options = {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  };
                  const formattedTime = parsedTime.toLocaleString(
                    "en-US",
                    options
                  );
                  return (
                    <tr key={visitor.id}>
                      {/* <td  >{visitor.id}</td> */}
                      <td className="py-3 border-x border-black">
                        {visitor.name}
                      </td>
                      <td className="py-3 border-x border-black">
                        {visitor.nim}
                      </td>
                      {/* <td>{visitor.lab}</td> */}
                      <td className="py-3 border-x border-black">
                        {formattedTime}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <div className="bg-gray-200 p-4 py-5 flex justify-end items-center md:mt-[800px] xl:mt-[400px]">
        {/* Right-aligned content */}
        <div className="text-sm text-gray-600 flex items-center space-x-2">
          <Image
            src={ugm}
            alt="Main Screen"
            width={40}
            height={40}
          />
          <div className="flex= flex-col">
            <span>UNIVERSITAS GADJAH MADA </span><br/>
            <span>Bulaksumur Yogyakarta 55281</span><br/>
            <span>Email: paholoimanprakoso@ugm.ac.id</span>
          </div>

        </div>
      </div>
    </div>
  );
}
