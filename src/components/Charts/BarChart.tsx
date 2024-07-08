import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart, CategoryScale, BarElement, LinearScale, PointElement, LineElement } from "chart.js";
import { Bar} from "react-chartjs-2";
ChartJS.register(BarElement,Tooltip,Legend,CategoryScale,LinearScale,PointElement,LineElement)

  type Props = {
    month:string[],
  orders:number[],

  }
export default function BarChart({month,orders}:Props) {
  const data = {
    labels: month,
    datasets: [
    {
    label: "Orders By Month",
    backgroundColor: "rgb(67 56 202)", 
    borderColor: "#5c64ff",
    barThickness : 25,
    borderRadius:10,
  
     data: orders,
    },
    ],
    };
  return (
    <div className='sm:w-5/6 w-11/12 h-auto border sm:min-h-60'>
      <Bar data={data} />
    </div>
  )
}
