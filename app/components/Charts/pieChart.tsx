'use client'

import { Doughnut } from "./doughnut/doughnut"

export interface PieChartProps {
  title: string,
  value: number,
  data: any
}

const PieChart: React.FC<PieChartProps> = ({ title, value, data }) => {
  return (
    <div
     className='md:flex justify-between w-full bg-gray-2 rounded-xl p-8 items-center'
    >
      <div className="column">
        <h1 className='text-md font-thin'>{title}</h1>
        <h1 className='text-2xl font-black'>{value}</h1>
      </div>

      <div className="grid place-items-center max-h-[200px] lg:w-1/2">
      
      <Doughnut data={data}/>

      </div>

  
    </div>
  )
}

export default PieChart