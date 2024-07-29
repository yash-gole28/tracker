import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import dummy from './../../dummyJson/data.json'
import AddIncome from '../dialoguebox/AddIncome'
import AddExpense from '../dialoguebox/AddExpense'
import Chart from '../graph/Chart'
interface MyComponentProps {
    totalSpends: number
}

const Dashboard: React.FC<MyComponentProps> = ({ totalSpends }) => {

    return (
        <Box>
            <Box>
                <Typography variant='h4'>
                    Hello {dummy.user[0].name} !!
                </Typography>
            </Box>
            <Stack sx={{ margin: '2rem 2rem', display: 'flex', justifyContent: 'center',alignItems:'center', flexWrap: 'wrap' }} direction='row' spacing={2} >
                <Box flex={2} sx={{ backgroundColor: 'white', maxWidth: '300px', height: '12rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems:'start',padding:'1.5rem',"&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)', transform: 'scale(1.01)', transition: '200ms ease-in-out' } }}>
                    <Typography variant='h6' sx={{ color: 'rgb(32, 30, 67)',fontWeight:'400',fontSize:'15px' }}>
                        Income 
                    </Typography>
                    <Typography variant='h3' sx={{ color: 'rgb(32, 30, 67)',fontWeight:'500' }} >
                        {dummy.user[0].income}
                    </Typography>
                    <AddIncome />
                </Box>
                <Box flex={2} sx={{ backgroundColor: 'white', maxWidth: '300px', height: '12rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems:'start',padding:'1.5rem',"&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)', transform: 'scale(1.01)', transition: '200ms ease-in-out' } }}>
                    <Typography variant='h6' sx={{ color: 'rgb(47, 54, 69)',fontWeight:'400',fontSize:'15px' }}>
                        Total Spents this month
                    </Typography>
                    <Typography variant='h3' sx={{ color: 'rgb(32, 30, 67)',fontWeight:'500' }} >
                        {totalSpends}
                    </Typography>
                    <AddExpense/>
                </Box>
                <Box flex={2} sx={{ backgroundColor: 'white', maxWidth: '300px', height: '12rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems:'start',padding:'1.5rem', "&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)', transform: 'scale(1.01)', transition: '200ms ease-in-out' } }}>
                    <Typography variant='h6' sx={{ color: 'rgb(32, 30, 67)' ,fontWeight:'400',fontSize:'15px'}}>

                        Balance-
                    </Typography>
                    <Typography variant='h3' sx={{ color: 'rgb(32, 30, 67)' ,fontWeight:'500'}}>
                        {dummy.user[0].income - totalSpends}
                    </Typography>
                   
                </Box>
                
            </Stack>
        </Box>
    )
}

export default Dashboard