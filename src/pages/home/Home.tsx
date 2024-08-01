import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import dummy from './../../dummyJson/data.json';
import { Box, Typography } from '@mui/material';
import Chart from '../../components/graph/Chart';
import History from '../../components/history/History';
import Dashboard from '../../components/dashboard/Dashboard';
import Pie from '../../components/graph/Pie';

const Home = () => {
  const [data, setData] = useState<any>({ user: [] });
  const date = new Date();
  const totalSpends = dummy.monthData.map(item => item.spends).reduce((total, value) => total + value);

  useEffect(() => {
    setData(dummy);
    setTimeout(() => {
      console.log(data?.user);
    }, 1000);
  }, [data]);

  return (
    <Box sx={{ backgroundColor: '#F4F4F9', width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ paddingTop: '85px' }}>
        <Dashboard totalSpends={totalSpends} />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginLeft: { xs: '0rem', md: '.7rem' },
        flexDirection: { xs: 'column', md: 'row' },
        gap: '20px'
      }}>
        <Box sx={{
          margin: '1rem',
          minHeight: { xs: '250px', md: '350px' },
          backgroundColor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'center',
          border: '2px solid #E0E0E0',
          borderRadius: '8px',
          width: { xs: '90vw', md: '55vw' },
          padding: '1rem'
        }}>
          <Chart />
        </Box>
        <Box sx={{
          margin: '1rem',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid #E0E0E0',
          borderRadius: '8px',
          width: { xs: '90vw', md: '35vw' },
          padding: '1rem'
        }}>
          <Pie />
        </Box>
      </Box>
      <Box sx={{
        margin: '1.7rem',
        padding: '1rem',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        border: '2px solid #E0E0E0'
      }}>
        <History />
      </Box>
    </Box>
  );
};

export default Home;
