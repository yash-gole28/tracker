import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import userData from './../../dummyJson/data.json';

const Chart = () => {
  const [expenses, setExpenses] = useState<any>({ user: [] });
  
  // Fetching data
  const spendsArray = userData.monthData.map(item => item.spends);
  
  // Preparing the x-axis labels
  const arr = userData.monthData.map((_, index) => String(index + 1));
  
  // Optionally use useEffect if data needs to be fetched or updated dynamically
  // useEffect(() => {
  //   setExpenses(userData);
  // }, []);
  
  return (
    <BarChart
      borderRadius={10}
      series={[
        {
          data: spendsArray,
          label: 'Daily Spends',
          color: 'rgb(64, 93, 114)', // Aligns with the theme
        },
      ]}
      sx={{
        color: 'rgb(32, 30, 67)', // Updated to match the text color
        height: '100%', // Ensures chart takes full height of the container
        width: '100%', // Ensures chart takes full width of the container
        backgroundColor: 'white', // Background color to make the chart stand out
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
