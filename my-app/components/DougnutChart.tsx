"use client";

import { Chart as ChartJs,ArcElement, Tooltip,Legend} from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJs.register(ArcElement,Tooltip,Legend);

import React from 'react'
import { date } from "zod";

const DougnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets:[
            {
                label:"Banks",
                data:[1250,2500,3700],
                backgroundColor:['#0747B6','#2265D8','#2F91F8']
            }
        ],
        labels:['Bank 1','Bank 2','Bank 3']
    }
  return (
    <Doughnut 
    data={data}
    options={
        {
        cutout:'60%',
        plugins:{
            legend:{
                display:false
            }
        }
    }
}

    />
  )
}

export default DougnutChart

