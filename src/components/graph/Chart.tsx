import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import userData from './../../dummyJson/data.json';

const Chart = () => {
  const [expenses, setExpenses] = useState<any>({ user: [] });
  
 
  const spendsArray = userData.monthData.map(item => item.spends);
  
  
  const arr = userData.monthData.map((_, index) => String(index + 1));
  
 
  
  return (
    <BarChart
      borderRadius={10}
      series={[
        {
          data: spendsArray,
          label: 'Daily Spends',
          color: 'rgb(64, 93, 114)',
        },
      ]}
      sx={{
        color: 'rgb(32, 30, 67)',
        height: '100%', 
        width: '100%',
        backgroundColor: 'white',
        minHeight:{xs:'250px',md:'300px'}
      }}
      xAxis={[
        {
          data: arr,
          label: 'Date',
          scaleType: 'band',
          colorMap: {
            type: 'piecewise',
            thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
            colors: ['rgb(64, 93, 114)'], // Aligns with the theme
          },
        },
      ]}
      margin={{ top: 40, bottom: 40, left: 40, right: 10 }}
    />
  );
}

export default Chart;
