import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import dummy from './../../dummyJson/category.json';
import { useTheme, useMediaQuery } from '@mui/material';

const Pie = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const amountData = dummy.amountSpent.map(item => ({
    id: item.category,
    value: item.amount,
    label: item.category
  }));

  const palette = [
    'rgb(255, 76, 76)',
    'rgb(239, 90, 111)',
    'rgb(83, 100, 147)',
    'rgb(255, 222, 77)',
    'rgb(212, 189, 172)',
    'rgb(255, 170, 170)'
  ];

  return (
    <PieChart
      series={[
        {
          data: amountData,
          paddingAngle: 2,
          innerRadius: isSmallScreen ? 0 : 20 
        }
      ]}
      colors={palette}
      width={isSmallScreen ? 300 : 500} 
      height={isSmallScreen ? 200 : 300} 
      sx={{ 
        fontSize: isSmallScreen ? '0.8rem' : '1rem'
      }}
   
    />
  );
};

export default Pie;
