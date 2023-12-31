'use client'

import { useProperties } from '@/app/hooks';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


export interface PieChartProps {
  title: string,
  value: number,
  data: any
}

export interface Referrals {
  id: number
  name: string
  percentageBar: string
  color: string
  percentage: string
}


const Data = () => {

  const { data: properties } = useProperties()
  
  const data = {
   
    datasets: [
      {
        data: [5],
        backgroundColor: [
            'rgba(255, 206, 86)',
            'rgba(255, 206, 86, 0.0)',
            'rgba(255, 206, 86, 0.0)',
            
        ],
     
      },
    ],
  };
  const data1 = {
   
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const data2 = {
   
    datasets: [
      {
        data: [6],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        
        ],
  
      },
    ],
  };
  const data3 = {
   
    datasets: [
      {
        data: [3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        
        
        ],
      
      },
    ],
  };
  
  const referrals: Referrals[] = [
    {
      id: 1,
      name: 'Social Media',
      percentageBar: 'w-[64%]',
      color: 'bg-yellow-500',
      percentage: '64'
    },
    {
      id: 2,
      name: 'Marketplaces',
      percentageBar: 'w-[55%]',
      color: 'bg-green-500',
      percentage: '55'
    },
    {
      id: 3,
      name: 'Websites',
      percentageBar: 'w-[40%]',
      color: 'bg-red-500',
      percentage: '40'
    },
    {
      id: 4,
      name: 'Digital Ads',
      percentageBar: 'w-[83%]',
      color: 'bg-pink-500',
      percentage: '83'
    },
    {
      id: 5,
      name: 'Others',
      percentageBar: 'w-[13%]',
      color: 'bg-blue-500',
      percentage: '13'
    },
   
  ]
 
  
  const pieCharts: PieChartProps[] = [
    {
    title: "Properties for Sale",
    value: properties?.length,
    data: data
    },
    {
    title: "Properties for Rent",
    value: 46,
    data: data1
    },
    {
    title: "Total customers",
    value: 5684,
    data: data2
    },
    {
    title: "Properties for Cities",
    value: 209,
    data: data3
    },
  ]

  return { data, data1, data2, data3, referrals, pieCharts }
};

export default Data;


