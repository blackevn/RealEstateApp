import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Doughnut as Ring } from 'react-chartjs-2';

interface DoughnutProps {
    data: any
}

export const Doughnut: React.FC<DoughnutProps> = ({ data }) => {
    return <>
                <Ring data={ data }/>
          </>
}