import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Box, Input, MenuItem, Select, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIncome from '../../components/dialoguebox/AddIncome';
import AddExpense from '../../components/dialoguebox/AddExpense';

const Profile = () => {
    return (
        <Box sx={{ backgroundColor: '#F4F4F9', minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{ display: 'flex', paddingTop: '80px', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', gap: '20px' }}>
                <Box sx={{ width: { xs: '100%', md: '30%' }, maxWidth: '400px' }}>
                    <Box sx={{ padding: '20px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
                        <AccountCircleIcon sx={{ fontSize: { xs: '100px', md: '120px' }, color: '#B0BEC5' }} />
                        <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom: '10px', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                            Yash Gole
                        </Typography>
                        <Typography variant='body1' sx={{ color: '#757575', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            yashgole@gmail.com
                        </Typography>
                        <Typography variant='body1' sx={{ color: '#757575', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            9695233456
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '20px', padding: '20px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#FFFFFF' }}>
                        <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '1rem', md: '1.25rem' } }}>Father's Name</Typography>
                        <Input
                            disabled
                            disableUnderline
                            value='Subhash'
                            sx={{ color: '#333333', fontWeight: '500', width: '100%', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                            size='small'
                        />
                    </Box>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '70%' }, maxWidth: '800px', padding: '20px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#FFFFFF' }}>
                    <Typography variant='h5' sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>Edit Profile</Typography>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', gap: '20px' }}>
                        <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Username</Typography>
                            <Input
                                disableUnderline
                                sx={{ width: '100%', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                size='small'
                            />
                        </Box>
                        <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Email</Typography>
                            <Input
                                disableUnderline
                                type="email"
                                sx={{ width: '100%', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                size='small'
                            />
                        </Box>
                        <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Phone Number</Typography>
                            <Input
                                disableUnderline
                                type="number"
                                sx={{ width: '100%', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                size='small'
                            />
                        </Box>
                        <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Date of Birth</Typography>
                            <Input
                                disableUnderline
                                type="date"
                                sx={{ width: '100%', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                size='small'
                            />
                        </Box>
                        <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Gender</Typography>
                            <Select
                                variant='standard'
                                disableUnderline
                                defaultValue={0}
                                sx={{ width: '100%', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                size='small'
                            >
                                <MenuItem value={0}>Male</MenuItem>
                                <MenuItem value={1}>Female</MenuItem>
                                <MenuItem value={2}>Others</MenuItem>
                            </Select>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Date of Birth</Typography>
                            <Input
                                disableUnderline
                                type="date"
                                sx={{ width: '100%', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                size='small'
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
                <AddIncome />
                <AddExpense />
            </Box>
        </Box>
    );
}

export default Profile;
