import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart, CategoryScale, BarElement, LinearScale, PointElement, LineElement } from "chart.js";
import {Line } from "react-chartjs-2";
ChartJS.register(BarElement,Tooltip,Legend,CategoryScale,LinearScale,PointElement,LineElement)

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
    tension: 0.3,
    pointRadius:6
    },
    ],
    };
  return (
    <div className='sm:w-5/6 w-11/12 h-auto border sm:min-h-60'>
       <Line data={data}  />
    </div>
  )
}
