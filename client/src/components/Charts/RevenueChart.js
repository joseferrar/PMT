import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const RevenueChart = () => {
  const labels = ["", "", "", "", "", "", "", "", "", "", "", ""];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sales",
        backgroundColor: "#5540ff",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45, 55, 33, 21, 11, 27],
      },
      {
        label: "Products",
        backgroundColor: "#b740ff",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 5, 3, 2, 10, 30, 21, 22, 22, 11, 11, 27],
      },
    ],
  };
  return (
    <div>
      <Bar
        data={data}
        options={{ plugins: { legend: { display: false } }, responsive: true }}
      />
    </div>
  );
};

export default RevenueChart;
