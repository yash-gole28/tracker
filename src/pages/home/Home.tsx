import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import dummy from './../../dummyJson/data.json'
import { Box, Typography } from '@mui/material'
import Chart from '../../components/graph/Chart'
import History from '../../components/history/History'
import Dashboard from '../../components/dashboard/Dashboard'
import AddIncome from '../../components/dialoguebox/AddIncome'

const Home = () => {
  const [data, setData] = useState<any>({ user: [] })
  const date = new Date()
  const totalSpends = dummy.monthData.map(item => item.spends).reduce((total, value) => total + value)
  useEffect(() => {
    setData(dummy)
    setTimeout(() => {
      console.log(data?.user)
    }, 1000)
  }, [])
  return (
    <Box sx={{ backgroundColor: 'rgb(254, 250, 246)' }}>
      <Navbar />
      <Box sx={{ paddingTop: '100px' }}>

        <Dashboard totalSpends={totalSpends} />
      </Box>

      {/* <Box sx={{marginTop:'80px'}}>
        {date.toLocaleDateString()}
         
        </Box>
        <button onClick={()=>{console.log(data)}}>button</button>
        <br />
        <Typography variant='h6'>
          Total Spents this month -
          {totalSpends}
        </Typography> */}

      <AddIncome />
      <br /><br /><br />
      <Box className='.box' sx={{ display: "flex", justifyContent: 'center' }}>

        <Chart />
      </Box>

      <br /><br /><br />
      {/* <History/> */}

    </Box>
  )
}

export default Home
