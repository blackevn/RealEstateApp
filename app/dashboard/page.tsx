'use client'

import { BiCollapse } from "react-icons/bi";
import { PieChart, ReferralsChart } from "../components";
import { referrals, pieCharts } from "../components/Charts/data";
import { BarChart } from "../components/Charts/barChart";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "../hooks";
import { useEffect } from "react";

export interface PieChartProps {
  title: string,
  value: number,
  data: any
}


const page = () => {

  const router = useRouter()
  const { data: user } = useCurrentUser()

  useEffect(() => {
    if ( !user ) return router.push('/')
  }, [user])
  
        
  return <div className="space-y-4 ">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full flex-wrap">
            {pieCharts.map((item) => (<PieChart
                                          title={item.title}
                                          value={item.value}
                                          data={item.data}                                                                   
                                      />))}
            </div>
            <div className="lg:grid grid-cols-12 gap-4">
                <div className=" grid col-span-7 rounded-xl bg-gray-2 p">
                  <div className="flex justify-between items-center p-4">
                    <div>
                      <h1>Total Revenue</h1>
                    </div>
                    <div className="flex gap-4 items-center">
                      <h1>Last Month</h1>
                      <h1>Running Month</h1>
                    </div>
                  </div>
                  <div className="h-full w-full p-4">
                    <BarChart/>
                  </div>
                </div>
                <div className="grid col-span-5 rounded-xl bg-gray-2 p-4">
                  <div>
                    <h1>Property Referrals</h1>
                  </div>
                  <div className="space-y-4">
                    {referrals.map((referral) => (<ReferralsChart
                                                  id={referral.id}
                                                  color={referral.color}
                                                  name={referral.name}
                                                  percentage={referral.percentage}
                                                  percentageBar={referral.percentageBar}
                                                  />))}
                  </div>
                </div>
            </div>

        </div>;
};

export default page;
