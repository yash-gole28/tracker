import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Box, Input, MenuItem, Select, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIncome from '../../components/dialoguebox/AddIncome';
import AddExpense from '../../components/dialoguebox/AddExpense';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


interface information {
    firstName: string;
    middleName: string;
    lastName: string;
    username: string;
    email: string;
    phoneNumber: string;
    dob: string;
    gender: string;
    password: string;
    confirmPassword: string
}
const Profile = () => {
    const user = localStorage.getItem('token')
    // const userInfo = localStorage.getItem('userData')
    const theme = useTheme();
    const [editable , setEditable] = useState<boolean>(false)
    const [openState, setOpenState] = useState<boolean>(true)
    const [userData, setuserData] = useState<information>({
        firstName: '',
        middleName: '',
        lastName: '',
        username: '',
        email: '',
        phoneNumber: '',
        dob: '',
        gender: '',
        password: '',
        confirmPassword: ''
    })

    const makeEditable = ()=>{
        setEditable(!editable)
        console.log(editable)
    }
    const route = useNavigate()
    useEffect(() => {
        // if (user) {
        //     // let data = JSON.parse(userInfo)
        //     // setuserData(data)
        // } else {
        //     toast.error('login first')
        //     route('/login')
        // }
        console.log(user)
    }, []);
    return (
        <Box sx={{ backgroundColor: '#F4F4F9', minHeight: '100vh', display: 'flex', justifyContent: 'end' }}>
            <Box sx={{
                width: { xs: '100%', md: openState ? 'calc(100% - 240px)' : 'calc(100% - 50px)' }, transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.standard,
                })
            }}>


                <Navbar setOpenState={setOpenState} />
                {/* <Navbar /> */}
                <Box sx={{ width: '100%', display: 'flex', paddingTop: '80px', flexDirection: { xs: 'column', md: 'row' }, alignItems:{xs:'center',md:'normal'},justifyContent: 'center', paddingBottom: '2rem' }}>
                    <Box sx={{ width: { xs: '100%', md: '30%' } ,m:'1rem'}}>
                        <Box sx={{ padding: '20px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
                            <AccountCircleIcon sx={{ fontSize: { xs: '100px', md: '120px' }, color: '#B0BEC5' }} />
                            <Typography variant='h4' sx={{ textTransform: 'capitalize', fontWeight: 'bold', marginBottom: '10px', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                                {userData.firstName}
                            </Typography>
                            <Typography variant='body1' sx={{ color: '#757575', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                {userData.email}
                            </Typography>
                            <Typography variant='body1' sx={{ color: '#757575', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                {userData.phoneNumber}
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'start', marginTop: '20px', padding: '20px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#FFFFFF' }}>
                            <Typography variant='h6' sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, marginBottom: '10px' }}> Income </Typography>
                            <Input
                                disabled
                                disableUnderline
                                value='10000'
                                sx={{ color: '#333333', marginBottom: '1rem', fontWeight: '500', width: '100%', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                size='small'
                            />
                            <Typography variant='h6' sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, marginBottom: '10px' }}> Balance </Typography>
                            <Input
                                disabled
                                disableUnderline
                                value='2000'
                                sx={{ color: '#333333', fontWeight: '500', width: '100%', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                size='small'
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
                                <AddIncome />
                                <AddExpense />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: 'start', width: { xs: '100%', md: '70%' },m:"1rem", padding: '20px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#FFFFFF' }}>
                        <Typography variant='h5' sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>Edit Profile 
                            <EditOutlinedIcon onClick={makeEditable}  sx={{fontSize:'15px',border:'1px solid black'}}/></Typography>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', gap: '20px' }}>
                            <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Username <sup className='imp'>*</sup></Typography>
                                <Input
                                    disabled={!editable}
                                    value={userData.username}
                                    disableUnderline
                                    sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                    size='small'
                                />
                            </Box>
                            <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Email <sup className='imp'>*</sup></Typography>
                                <Input
                                    disabled
                                    value={userData.email}
                                    disableUnderline
                                    type="email"
                                    sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                    size='small'
                                />
                            </Box>
                            <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Phone Number <sup className='imp'>*</sup></Typography>
                                <Input
                                    disabled={!editable}
                                    value={userData.phoneNumber}
                                    disableUnderline
                                    type="number"
                                    sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                    size='small'
                                />
                            </Box>
                            <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Date of Birth <sup className='imp'>*</sup></Typography>
                                <Input
                                    disabled
                                    value={userData.dob}
                                    disableUnderline
                                    type="date"
                                    sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                    size='small'
                                />
                            </Box>
                            <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Gender <sup className='imp'>*</sup></Typography>
                                <Select
                                    disabled
                                    variant='standard'
                                    disableUnderline
                                    defaultValue={0}
                                    sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                    size='small'
                                >
                                    <MenuItem value={0}>Male</MenuItem>
                                    <MenuItem value={1}>Female</MenuItem>
                                    <MenuItem value={2}>Others</MenuItem>
                                </Select>
                            </Box>
                            <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Address line 1 <sup className='imp'>*</sup></Typography>
                                <Input
                                    disabled={!editable}
                                    disableUnderline
                                    type="text"
                                    sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                    size='small'
                                />
                            </Box>
                            <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Address line 2</Typography>
                                <Input
                                    disabled={!editable}
                                    disableUnderline
                                    type="text"
                                    sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                    size='small'
                                />
                            </Box>
                            <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Postal Code <sup className='imp'>*</sup></Typography>
                                <Input
                                    disabled={!editable}
                                    disableUnderline
                                    type="number"
                                    sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                                    size='small'
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Profile;
