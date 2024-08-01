import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import dummy from './../../dummyJson/data.json';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';
import LocalMallIcon from '@mui/icons-material/LocalMall';

interface MyComponentProps {
    totalSpends: number;
}

const Dashboard: React.FC<MyComponentProps> = ({ totalSpends }) => {
    return (
        <Box sx={{ width: '100vw', backgroundColor: '#F4F4F9', padding: '1rem' }}>
            <Grid container sx={{
                display: 'flex',
                justifyContent: { xs: 'space-around', md: 'center' },
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
            }} direction='row'>
                <Grid item xs={5} md={2.5} sx={{
                    border: '2px solid #E0E0E0',
                    backgroundColor: '#FFFFFF',
                    width: { md: '300px', xs: '200px' },
                    height: { xs: '6rem', md: '8rem' },
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: { xs: '0.5rem', md: '1.5rem' },
                    boxShadow: '0px 2px 4px rgba(117, 134, 148, 0.2)',
                    transition: 'transform 200ms ease-in-out',
                    "&:hover": {
                        boxShadow: '0px 2px 4px rgba(117, 134, 148, 0.4)',
                        transform: 'scale(1.02)'
                    }
                }}>
                    <Box>
                        <Typography textAlign={'start'} variant='h6' sx={{
                            color: '#20203F', // Dark text color
                            fontWeight: '400',
                            fontSize: { xs: '12px', md: '15px' }
                        }}>
                            Income
                        </Typography>
                        <Typography textAlign={'start'} sx={{
                            color: '#20203F', // Dark text color
                            fontSize: { xs: '24px', md: '36px' },
                            fontWeight: '500'
                        }}>
                            {dummy.user[0].income}
                        </Typography>
                    </Box>
                    <Box>
                        <AttachMoneyIcon sx={{ fontSize: { xs: '30px', md: '45px' }, color:"#2c3e50" ,":hover":{color:'#34495e'} }} />
                    </Box>
                </Grid>
                <Grid item xs={5} md={2.5} sx={{
                    border: '2px solid #E0E0E0',
                    backgroundColor: '#FFFFFF',
                    width: { md: '300px', xs: '200px' },
                    height: { xs: '6rem', md: '8rem' },
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: { xs: '0.5rem', md: '1.5rem' },
                    boxShadow: '0px 2px 4px rgba(117, 134, 148, 0.2)',
                    transition: 'transform 200ms ease-in-out',
                    "&:hover": {
                        boxShadow: '0px 2px 4px rgba(117, 134, 148, 0.4)',
                        transform: 'scale(1.02)'
                    }
                }}>
                    <Box>
                        <Typography variant='h6' sx={{
                            color: '#20203F', // Dark text color
                            fontWeight: '400',
                            fontSize: { xs: '12px', md: '15px' },
                            textAlign: 'start'
                        }}>
                            Total Spends
                        </Typography>
                        <Typography textAlign={'start'} sx={{
                            color: '#20203F', // Dark text color
                            fontSize: { xs: '24px', md: '36px' },
                            fontWeight: '500'
                        }}>
                            {totalSpends}
                        </Typography>
                    </Box>
                    <Box>
                        <LocalMallIcon sx={{ fontSize: { xs: '30px', md: '45px' }, color:"#2c3e50" ,":hover":{color:'#34495e'} }} />
                    </Box>
                </Grid>
                <Grid item xs={5} md={2.5} sx={{
                    border: '2px solid #E0E0E0',
                    backgroundColor: '#FFFFFF',
                    width: { md: '300px', xs: '200px' },
                    height: { xs: '6rem', md: '8rem' },
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: { xs: '0.5rem', md: '1.5rem' },
                    boxShadow: '0px 2px 4px rgba(117, 134, 148, 0.2)',
                    transition: 'transform 200ms ease-in-out',
                    "&:hover": {
                        boxShadow: '0px 2px 4px rgba(117, 134, 148, 0.4)',
                        transform: 'scale(1.02)'
                    }
                }}>
                    <Box>
                        <Typography textAlign={'start'} variant='h6' sx={{
                            color: '#20203F', // Dark text color
                            fontWeight: '400',
                            fontSize: { xs: '12px', md: '15px' }
                        }}>
                            Balance
                        </Typography>
                        <Typography textAlign={'start'} sx={{
                            color: '#20203F', // Dark text color
                            fontSize: { xs: '24px', md: '36px' },
                            fontWeight: '500'
                        }}>
                            {dummy.user[0].income - totalSpends}
                        </Typography>
                    </Box>
                    <Box>
                        <AccountBalanceIcon sx={{ fontSize: { xs: '30px', md: '45px' }, color:"#2c3e50" ,":hover":{color:'#34495e'} }} />
                    </Box>
                </Grid>
                <Grid item xs={5} md={2.5} sx={{
                    border: '2px solid #E0E0E0',
                    backgroundColor: '#FFFFFF',
                    width: { md: '300px', xs: '200px' },
                    height: { xs: '6rem', md: '8rem' },
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: { xs: '0.5rem', md: '1.5rem' },
                    boxShadow: '0px 2px 4px rgba(117, 134, 148, 0.2)',
                    transition: 'transform 200ms ease-in-out',
                    "&:hover": {
                        boxShadow: '0px 2px 4px rgba(117, 134, 148, 0.4)',
                        transform: 'scale(1.02)'
                    }
                }}>
                    <Box>
                        <Typography textAlign={'start'} variant='h6' sx={{
                            color: '#20203F', // Dark text color
                            fontWeight: '400',
                            fontSize: { xs: '12px', md: '15px' }
                        }}>
                            Savings
                        </Typography>
                        <Typography textAlign={'start'} sx={{
                            color: '#20203F', // Dark text color
                            fontSize: { xs: '24px', md: '36px' },
                            fontWeight: '500'
                        }}>
                            {dummy.user[0].income - totalSpends}
                        </Typography>
                    </Box>
                    <Box>
                        <SavingsIcon sx={{ fontSize: { xs: '30px', md: '45px' }, color:"#2c3e50" ,":hover":{color:'#34495e'} }} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
