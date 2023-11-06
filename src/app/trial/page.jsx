import React from "react";
import VisitorChart from "../../components/chart.jsx";

const visitorData = [
  {
    id: 1,
    name: "Visitor 1",
    nim: "NIM-1",
    lab: "Lab A",
    timeIn: "2023-10-09T10:00:00",
  },
  {
    id: 2,
    name: "Visitor 2",
    nim: "NIM-2",
    lab: "Lab B",
    timeIn: "2023-11-21T11:30:00",
  },
  {
    id: 3,
    name: "Visitor 3",
    nim: "NIM-3",
    lab: "Lab A",
    timeIn: "2023-10-02T09:45:00",
  },
  {
    id: 4,
    name: "Visitor 4",
    nim: "NIM-4",
    lab: "Lab B",
    timeIn: "2023-10-08T08:30:00",
  },
  {
    id: 5,
    name: "Visitor 5",
    nim: "NIM-5",
    lab: "Lab A",
    timeIn: "2023-10-10T14:15:00",
  },
  {
    id: 6,
    name: "Visitor 6",
    nim: "NIM-6",
    lab: "Lab B",
    timeIn: "2023-10-04T11:00:00",
  },
  {
    id: 7,
    name: "Visitor 7",
    nim: "NIM-2",
    lab: "Lab B",
    timeIn: "2023-10-01T11:40:00",
  },
  {
    id: 8,
    name: "Visitor 8",
    nim: "NIM-2",
    lab: "Lab B",
    timeIn: "2023-11-08T11:40:00",
  },
  {
    id: 9,
    name: "Visitor 8",
    nim: "NIM-2",
    lab: "Lab B",
    timeIn: "2023-10-17T11:40:00",
  },
  {
    id: 10,
    name: "Visitor 8",
    nim: "NIM-2",
    lab: "Lab B",
    timeIn: "2023-12-25T11:40:00",
  },
  {
    id: 11,
    name: "Visitor 8",
    nim: "NIM-2",
    lab: "Lab B",
    timeIn: "2024-01-27T11:40:00",
  },
  {
    id: 12,
    name: "Visitor 8",
    nim: "NIM-2",
    lab: "Lab B",
    timeIn: "2024-02-20T11:40:00",
  },
  {
    id: 13,
    name: "Visitor 8",
    nim: "NIM-2",
    lab: "Lab B",
    timeIn: "2024-11-21T11:40:00",
  },
  {
    id: 14,
    name: "Visitor 8",
    nim: "NIM-2",
    lab: "Lab B",
    timeIn: "2024-11-03T11:40:00",
  },
  {
    id: 14,
    name: "Visitor 8",
    nim: "NIM-2",
    lab: "Lab B",
    timeIn: "2024-11-04T11:40:00",
  },
  {
    id: 14,
    name: "Visitor 8",
    nim: "NIM-2",
    lab: "Lab B",
    timeIn: "2024-11-25T11:40:00",
  },
  
  // Add more visitor data for different dates
];

function MyPage() {
  return (
    <div className="sm:grid w-full hidden h-[900px] md:h-[390px] lg:h-[410px] xl:h-[580px] 2xl:h-[880px] sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-8 justify-start">
      <div>
        <h1>My Data Visualization Page</h1>
        <VisitorChart chartType="column" data={visitorData} timeRange="Daily" />
        <VisitorChart
          chartType="column"
          data={visitorData}
          timeRange="Weekly"
        />
        <VisitorChart chartType="line" data={visitorData} timeRange="Monthly" />
      </div>
      <div>
        <table className="min-w-full table-auto border border-gray-300 text-center space-y-4" border="1">
          <thead>
            <tr>
              <th className="border-y">ID</th>
              <th className="border-y">Name</th>
              <th className="border-y">NIM</th>
              <th className="border-y">Lab</th>
              <th className="border-y">Time In</th>
            </tr>
          </thead>
          <tbody>
            {visitorData.map((visitor) => (
              <tr key={visitor.id}>
                <td  className="py-3">{visitor.id}</td>
                <td>{visitor.name}</td>
                <td>{visitor.nim}</td>
                <td>{visitor.lab}</td>
                <td>{visitor.timeIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyPage;
