import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import dummy from './../../dummyJson/data.json';
import { Box, Typography } from '@mui/material';
import Chart from '../../components/graph/Chart';
import History from '../../components/history/History';
import Dashboard from '../../components/dashboard/Dashboard';
import Pie from '../../components/graph/Pie';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Home = () => {
  const [data, setData] = useState<any>({ user: [] });
  const route = useNavigate()
  const totalSpends = dummy.monthData.map(item => item.spends).reduce((total, value) => total + value);
  const user = localStorage.getItem('user')
  useEffect(() => {
    if(user){
      console.log(user)
      setData(dummy);
    }else{
      toast('login first')
      route('/login')
    }
   
  }, [data]);

  return (
    <Box sx={{ backgroundColor: '#F4F4F9', width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ paddingTop: '85px', width:'90%',margin:'auto'}}>
        <Dashboard totalSpends={totalSpends} />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        // marginLeft: { xs: '0rem', md: '.7rem' },
        flexDirection: { xs: 'column', md: 'row' },
        // gap: '20px'
        width:'90%',
        margin:'auto'
      }}>
        <Box sx={{
          margin: '.3rem .0rem',
          marginRight:'.2rem',
          height: { xs: '250px', md: '350px' },
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
          margin: '.3rem .0rem',
          marginLeft:'.2rem',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid #E0E0E0',
          borderRadius: '8px',
          width: { xs: '90vw', md: '38vw' },
          padding: '1rem'
        }}>
          <Pie />
        </Box>
      </Box>
      <Box sx={{
        // margin: '.3rem 1.6rem',
        width:"90%",
        margin:'auto',
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
