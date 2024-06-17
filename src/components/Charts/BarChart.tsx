import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart, CategoryScale, BarElement, LinearScale, PointElement, LineElement } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
ChartJS.register(BarElement,Tooltip,Legend,CategoryScale,LinearScale,PointElement,LineElement)
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
  {
  label: "My First dataset",
  backgroundColor: "red", 
  borderColor: "rgb(255, 99, 132)",
  data: [0, 10, 5, 2, 20, 30, 45],
  },
  ],
  };

export default function BarChart() {
  return (
    <div className='w-5/6 h-auto border min-h-60'>
      <Bar data={data} />
    </div>
  )
}
