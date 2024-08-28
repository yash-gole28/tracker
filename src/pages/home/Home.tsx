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
import { useTheme } from '@mui/material/styles';
import { apiList } from '../../apiList';
import { API } from '../../network 1';

const Home = () => {
  // const [data, setData] = useState<any>({ user: [] });
  const [openState , setOpenState] = useState<boolean>(true)
  const route = useNavigate()
  const theme = useTheme();
  const totalSpends = dummy.monthData.map(item => item.spends).reduce((total, value) => total + value);
  const user = localStorage.getItem('token')
  // useEffect(() => {
  //   if(user){
  //     console.log(user)
  //     setData(dummy);
  //   }else{
  //     toast.error('login first')
  //     route('/login')
  //   }
   
  // }, [data]);
  useEffect(()=>{
    const currentUser =async ()=>{
      try{
        const url = apiList.currentUser
      const response = await API.get(url)
      // console.log(response.data)
      if(response.data.success){
        console.log(response.data)
        toast.success(response.data.getUser.username)
      }
      }catch(error:any){
        toast.error("invalid token or expired token")
        localStorage.removeItem('token')
        route('/login')
      }
      
    }
    currentUser()
  },[])

  return (
    <Box sx={{ backgroundColor: '#F4F4F9', width: '100%', minHeight: '100vh' ,display:'flex',justifyContent:'end'}}>
      <Box sx={{width:{xs:'100%',md:openState?'calc(100% - 240px)':'calc(100% - 50px)'}, transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            })}}>
      <Navbar setOpenState={setOpenState}/>
      <Box sx={{ paddingTop: '85px', width:'95%',margin:'auto'}}>
        <Dashboard totalSpends={totalSpends} />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems:{xs:'center', md:'normal'},
        // marginLeft: { xs: '0rem', md: '.7rem' },
        flexDirection: { xs: 'column', md: 'row' },
        // gap: '20px'
        width:'95%',
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
        width:"95%",
        margin:'auto',
        padding: '1rem',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        border: '2px solid #E0E0E0'
      }}>
        <History />
      </Box>
      </Box>
     
    </Box>
  );
};

export default Home;