import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import dummy from './../../dummyJson/data.json'
interface MyComponentProps {
    totalSpends: number
}

const Dashboard: React.FC<MyComponentProps> = ({ totalSpends }) => {

    return (
        <Box sx={{width:'100vw'}}>
            {/* <Box>
                <Typography variant='h4'>
                    Hello {dummy.user[0].name} !!
                </Typography>
            </Box> */}
            <Grid container sx={{mt:".5rem", display: 'flex', justifyContent:'space-around', alignItems: 'center', flexWrap: 'wrap' }} direction='row' >
                <Grid item xs={5} md={2.5} sx={{border: '2px solid rgb(209, 216, 197)',mb:'1rem',backgroundColor: 'white',width:{md:"300px",xs:'200px'}, maxWidth: '300px', height:{xs:'6rem',md:'8rem'}, borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', padding: '1.5rem', "&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)', transform: 'scale(1.02)', transition: '200ms ease-in-out' } }}>
                    <Typography variant='h6' sx={{ color: 'rgb(32, 30, 67)', fontWeight: '400', fontSize:{sx:'13px',md:'15px'}}}>
                        Income
                    </Typography>
                    <Typography sx={{ color: 'rgb(32, 30, 67)', fontSize:{xs:'28px',md:'40px'}, fontWeight: '500' }} >
                        {dummy.user[0].income}
                    </Typography>
                    {/* <AddIncome /> */}
                </Grid>
                <Grid item  xs={5} md={2.5} sx={{border: '2px solid rgb(209, 216, 197)',mb:'1rem',backgroundColor: 'white',width:{md:"300px",xs:'200px'}, maxWidth: '300px', height:{xs:'6rem',md:'8rem'}, borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', padding: '1.5rem', "&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)', transform: 'scale(1.02)', transition: '200ms ease-in-out' } }}>
                    <Typography variant='h6' sx={{ color: 'rgb(47, 54, 69)', fontWeight: '400', fontSize: '15px' ,textAlign:'start' }}>
                        Total Spents this month
                    </Typography>
                    <Typography sx={{ color: 'rgb(32, 30, 67)', fontSize:{xs:'28px',md:'40px'}, fontWeight: '500' }} >
                        {totalSpends}
                    </Typography>
                    {/* <AddExpense /> */}
                </Grid>
                <Grid item xs={5} md={2.5} sx={{border: '2px solid rgb(209, 216, 197)',mb:'1rem',backgroundColor: 'white', maxWidth: '300px',width:{md:"300px",xs:'200px'}, height:{xs:'6rem',md:'8rem'}, borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', padding: '1.5rem', "&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)', transform: 'scale(1.02)', transition: '200ms ease-in-out' } }}>
                    <Typography variant='h6' sx={{ color: 'rgb(32, 30, 67)', fontWeight: '400', fontSize: '15px' }}>

                        Balance
                    </Typography>
                    <Typography sx={{ color: 'rgb(32, 30, 67)', fontSize:{xs:'28px',md:'40px'},fontWeight: '500' }}>
                        {dummy.user[0].income - totalSpends}
                    </Typography>

                </Grid>
                <Grid item xs={5} md={2.5}sx={{border: '2px solid rgb(209, 216, 197)',mb:'1rem',backgroundColor: 'white', maxWidth: '300px',width:{md:"300px",xs:'200px'}, height:{xs:'6rem',md:'8rem'}, borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', padding: '1.5rem', "&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)', transform: 'scale(1.02)', transition: '200ms ease-in-out' } }}>
                    <Typography variant='h6' sx={{ color: 'rgb(32, 30, 67)', fontWeight: '400', fontSize: '15px' }}>

                        Savings
                    </Typography>
                    <Typography sx={{ color: 'rgb(32, 30, 67)', fontSize:{xs:'28px',md:'40px'}, fontWeight: '500' }}>
                        {dummy.user[0].income - totalSpends}
                    </Typography>

                </Grid>

            </Grid>
        </Box>
    )
}

export default Dashboard