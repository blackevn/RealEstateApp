'use client'

import ReactApexChart from 'react-apexcharts';

export interface PieChartProps {
  title: string,
  value: number,
  series: Array<number>
  colors: Array<string>
}

const PieChart: React.FC<PieChartProps> = ({ title, value, series, colors }) => {
  return (
    <div
     className=''
    >
      <div className="column">
        <h1 className='text-lg'>{title}</h1>
        <h1 className=''>{value}</h1>
      </div>

      <ReactApexChart 
        options={{
          chart: { type: 'donut' },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </div>
  )
}

export default PieChart