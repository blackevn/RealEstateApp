import React from "react";
import { Referrals } from "./data";


const ReferralsChart: React.FC<Referrals> = ({name, color, percentage, percentageBar}) => {
  return <div className=" w-full space-y-2">
            <div className="flex justify-between items-center w-full">
            <h1>{name}</h1>
            <h1>{percentage}%</h1>
            </div>
            <div className="w-full bg-gray-400/70 rounded-full h-[20px]">
                <div className={`${color} ${percentageBar} rounded-full h-full`}></div>
            </div>
        </div>;
};

export default ReferralsChart;
