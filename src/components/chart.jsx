"use client";

import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

function adVisitorChart({ data, chartType, timeRange }) {
  let options;

  if (timeRange === "Daily") {
    // Calculate weekly data
    const weeklyData = calculateWeekData(data);

    options = {
      chart: {
        type: chartType,
      },
      title: {
        text: "Daily Visitors",
      },
      xAxis: {
        categories: weeklyData.map((item) => item.day),
        // You can customize the labels as needed
      },
      yAxis: {
        title: {
          text: "Visitor Count",
        },
      },
      series: [
        {
          name: "Daily Data",
          data: weeklyData.map((item) => item.count),
        },
      ],
    };

  } else if (timeRange === "Weekly") {
    // Calculate monthly data
    const weeklyData = calculateWeeklyData(data);

    options = {
      chart: {
        type: chartType,
      },
      title: {
        text: "Weekly Visitors",
      },
      xAxis: {
        categories: weeklyData.map((item) => item.week),
        // You can customize the labels as needed
      },
      yAxis: {
        title: {
          text: "Visitor Count",
        },
      },
      series: [
        {
          name: "Weekly Data",
          data: weeklyData.map((item) => item.count),
        },
      ],
    };

  } else if (timeRange === "Monthly") {
    // Calculate monthly data
    const monthlyData = calculateMonthlyData(data);

    options = {
      chart: {
        type: chartType,
      },
      title: {
        text: "Monthly Visitors",
      },
      xAxis: {
        categories: monthlyData.map((item) => item.month),
        // You can customize the labels as needed
      },
      yAxis: {
        title: {
          text: "Visitor Count",
        },
      },
      series: [
        {
          name: "Monthly Data",
          data: monthlyData.map((item) => item.count),
        },
      ],
    };
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

function calculateWeekData(data) {
  // Calculate weekly data, grouping by day of the week
  const weeklyData = Array(7).fill(0);

  data.forEach((entry) => {
    const date = new Date(entry.time);
    const dayOfWeek = date.getUTCDay(); // 0 for Sunday, 1 for Monday, etc.
    weeklyData[dayOfWeek]++;
  });

  return weeklyData.map((count, day) => ({
    day: getDayName(day), // Implement a function to get day name from the day number
    count,
  }));
}

function calculateMonthlyData(data) {
  // Calculate weekly data, grouping by week in a month
  const monthlyData = [];

  data.forEach((entry) => {
    const date = new Date(entry.time);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    //const weekNumber = getWeekNumber(date);

    // Ensure that the week number doesn't exceed the weeks in the month
    const weeksInMonth = getWeeksInMonth(year, month);

    // Construct the label with the month and week number
    const monthName = getMonthName(month);
    const monthLabel = `${monthName}`;

    const existingEntry = monthlyData.find((item) => item.month === monthLabel);

    if (existingEntry) {
      existingEntry.count++;
    } else {
      monthlyData.push({ month: monthLabel, count: 1 });
    }
  });

  return monthlyData;
}

function getDayName(dayNumber) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayNumber];
}


function calculateWeeklyData(data) {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth();

  // Calculate the first day of the current month
  const firstDay = new Date(currentYear, currentMonth, 1);

  // Calculate the day of the week (0 = Sunday, 1 = Monday, etc.) for the first day
  const firstDayOfWeek = firstDay.getUTCDay();

  // Calculate the number of days in the current month
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const totalDays = lastDay.getUTCDate();

  // Calculate the number of days in each of the four weeks
  const daysInWeek = Math.ceil((totalDays + firstDayOfWeek) / 4);

  // Initialize an array to store weekly data
  const weeklyData = Array(4).fill(0);

  data.forEach((entry) => {
    const date = new Date(entry.time);
    if (date >= firstDay && date.getUTCMonth() === currentMonth) {
      // Only consider entries from the current month
      const weekNumber = Math.floor((date.getUTCDate() + firstDayOfWeek) / daysInWeek) + 1;
      if (weekNumber >= 1 && weekNumber <= 4) {
        weeklyData[weekNumber - 1]++;
      }
    }
  });


  const monthName = getMonthName(currentMonth);
  const weeklyLabels = Array.from(
    { length: 4 },
    (_, i) => `Week ${i + 1}`
  );

  return weeklyLabels.map((label, index) => ({
    week: `${monthName}: ${label}`,
    count: weeklyData[index],
  }));
}








const { getISOWeek } = require('date-fns');

function getWeekNumber(date) {
  return getISOWeek(date);
}
// function getWeekNumber(date) {
//   // Implement a function to calculate the week number based on the date
//   // You can use libraries like `date-fns` for this
//   return 1; // Placeholder, replace with actual implementation
// }

function getWeeksInMonth(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstWeekNumber = getWeekNumber(firstDay);
  const lastWeekNumber = getWeekNumber(lastDay);
  return lastWeekNumber - firstWeekNumber + 1;
}


function getMonthName(monthNumber) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthNumber];
}

export default VisitorChart;
