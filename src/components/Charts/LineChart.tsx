import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart, CategoryScale, BarElement, LinearScale, PointElement, LineElement } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
ChartJS.register(BarElement,Tooltip,Legend,CategoryScale,LinearScale,PointElement,LineElement)
//const labels = ["January", "February", "March", "April", "May", "June"];

  type Props = {
    month:string[],

  revenue:number[]
  }
export default function LineChart({month,revenue}:Props) {
  const data = {
    labels: month,
    datasets: [
    {
    label: "Revenue By Month",
    backgroundColor: "rgb(67 56 202)", 
    borderColor: "rgb(67 56 202)",
    data: revenue,
    tension: 10,
    pointRadius:6
    },
    ],
    };
  return (
    <div className='w-5/6 h-auto border min-h-60'>
       <Line data={data}  />
    </div>
  )
}
