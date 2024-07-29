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
    <Box sx={{backgroundColor:'rgb(248, 249, 237)'}}>
      <Navbar />
      <Box sx={{ paddingTop: '100px' }}>

        <Dashboard totalSpends={totalSpends} />
      </Box>

      <Box className='.box' sx={{backgroundColor:"white", display: "flex", justifyContent: 'center',border:'2px solid rgb(209, 216, 197)',borderRadius:'8px',width:'fit-content',margin:'5rem auto 5rem auto',padding:'1rem' }}>

        <Chart />
      </Box>
      <Box >
        <History/>
      </Box>

    </Box>
  )
}

export default Home
