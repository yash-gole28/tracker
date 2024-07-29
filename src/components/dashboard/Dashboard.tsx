import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import dummy from './../../dummyJson/data.json'
import AddIncome from '../dialoguebox/AddIncome'
interface MyComponentProps {
    totalSpends : number
   }

const Dashboard: React.FC<MyComponentProps> = ({totalSpends}) => {

  return (
    <Box>
        <Stack sx={{margin:'2rem 2rem',display:'flex',justifyContent:'space-around',flexWrap:'wrap'}} direction='row' spacing={18}  >
            <Box flex={2} sx={{backgroundColor:'#cdb4db',minWidth:'400px',height:'14rem', borderRadius:'8px',display:'flex',flexDirection:'column',justifyContent:'center',boxShadow: '0px 4px 8px rgb(43, 37, 35)',"&:hover":{boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.6)',transform:'scale(1.05)',transition:'200ms ease-in-out'}}}>
                <Typography variant='h4' sx={{color:'rgb(32, 30, 67)'}}>
                Total Spents this month 
                </Typography>
                <Typography  variant='h2' sx={{color:'rgb(32, 30, 67)'}} >
                {totalSpends}
                </Typography>
            <AddIncome/>
            </Box>
            <Box flex={2} sx={{backgroundColor:'#cdb4db',minWidth:'400px',height:'14rem', borderRadius:'8px',display:'flex',flexDirection:'column',justifyContent:'center',boxShadow: '0px 4px 8px rgb(43, 37, 35)',"&:hover":{boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.6)',transform:'scale(1.05)',transition:'200ms ease-in-out'}}}>
                   <Typography variant='h4' sx={{color:'rgb(32, 30, 67)'}}>

                    Money left-
                   </Typography>
                <Typography variant='h2' sx={{color:'rgb(32, 30, 67)'}}>
                    {dummy.user[0].income-totalSpends}
                </Typography>
            </Box>
        </Stack>
    </Box>
  )
}

export default Dashboard