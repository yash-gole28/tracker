import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import dummy from './../../dummyJson/data.json'
import { Box, Typography } from '@mui/material'
import Chart from '../../components/graph/Chart'
import History from '../../components/history/History'

const Home = () => {
  const [data ,setData] = useState<any>({user:[]})
  const date = new Date()
  const totalSpends = dummy.monthData.map(item => item.spends).reduce((total , value)=> total+value)
  useEffect(()=>{
    setData(dummy) 
    setTimeout(()=>{
      console.log(data?.user)
    },1000)
  },[])
  return (
    <div>
        <Navbar/>

        <Box sx={{marginTop:'80px'}}>
        {date.toLocaleDateString()}
         
        </Box>
        <button onClick={()=>{console.log(data)}}>button</button>
        <br />
        <Typography variant='h6'>
          Total Spents this month -
          {totalSpends}
        </Typography>


          <br /><br /><br />
          <Chart/>

          <br /><br /><br />
          <History/>
    </div>
  )
}

export default Home
