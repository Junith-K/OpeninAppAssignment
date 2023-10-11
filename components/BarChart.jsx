import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart from 'chart.js/auto'

const BarChart = () => {
  const data = {
    labels: ["", "Week 1", "", "Week 2", "", "Week 3", "", "Week 4", ""],
    datasets: [
      {
        label: "Guest",
        data: [0, 390, 0, 370, 0, 300, 0, 320, 0],
        backgroundColor: "#EE8484",
        borderRadius: 3,
      },
      {
        label: "User",
        data: [0, 480, 0, 420, 0, 200, 0, 380, 0],
        backgroundColor: "#98D89E",
        borderRadius: 3,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true, // Make the legend items use point style (circle)
          fontFamily: '',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        type: 'category', // Use the 'category' scale
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      id="mainGraphContainer"
      className="p-5 rounded-[20px] h-[400px] bg-white w-[100%] mb-5 border-[#E0E0E0] border-2"
    >
      <div className="max-w-[99%] h-[300px] m-auto mb-3">
        <div className="flex justify-between items-center">
          <div className="flex-[7]">
            <h3 className="font-black text-2xl font-MontserratBold">Activities</h3>
            <div className="flex-[1] flex justify-start gap-2 items-center">
              <p className="font-extralight font-Montserrat text-[#858585]">May - June 2021</p>
            </div>
          </div>
        </div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
