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
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          innerRadius: isSmallScreen ? 0 : 20, // Reduce innerRadius on small screens
          outerRadius: isSmallScreen ? 75 : 120 // Adjust outerRadius for better spacing
        }
      ]}
      colors={palette}
      width={isSmallScreen ? 300 : 500}
      height={isSmallScreen ? 250 : 300}
      sx={{
        fontSize: isSmallScreen ? '0.7rem' : '1rem', // Further reduce font size on small screens
        '& .MuiPieChart-label': {
          fontSize: isSmallScreen ? '0.7rem' : '1rem', // Ensure label font size is consistent
          padding: isSmallScreen ? '0.1rem' : '0.5rem' // Adjust padding for better spacing
        },
        '& .MuiPieChart-tooltip': {
          fontSize: isSmallScreen ? '0.7rem' : '1rem' // Adjust tooltip font size
        }
      }}
    />
  );
};

export default Pie;
