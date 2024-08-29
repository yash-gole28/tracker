import React, { useEffect, useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Box, Input, MenuItem, Select, Typography ,SelectChangeEvent, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIncome from '../../components/dialoguebox/AddIncome';
import AddExpense from '../../components/dialoguebox/AddExpense';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { apiList } from '../../apiList';
import { API } from '../../network 1';

interface Information {
  firstName: string;
  middleName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  dob: string;
  gender: string;
  password: string;
  confirmPassword: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
}

const Profile = () => {
  // const user = localStorage.getItem('token');
  const theme = useTheme();
  const [editable, setEditable] = useState<boolean>(false);
  const [openState, setOpenState] = useState<boolean>(true);
  const [userData, setUserData] = useState<Information>({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
  });

  const makeEditable = () => {
    setEditable(!editable);
    console.log(editable);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async()=>{
    try{
      const data = userData
      console.log(data)
      const url = apiList.updateUserData
      const response =await API.put(url , data)
      if(response){
        // console.log(response.data)
        setEditable(false)
      }
    }catch(error){
      console.error(error);
    }
  }

  // const route = useNavigate();

  useEffect(() => {
    const currentUser = async () => {
      try {
      const url = apiList.getUserData;
      const response = await API.get(url);
      console.log(response.data);
      if (response.data.success) {
        setUserData(response.data.getUser);
        console.log(response.data.getUser);
        toast.success(response.data.getUser.username);
      }}catch(error){
        console.error(error);
      }

    }
    currentUser();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#F4F4F9', minHeight: '100vh', display: 'flex', justifyContent: 'end' }}>
      <Box sx={{
        width: { xs: '100%', md: openState ? 'calc(100% - 240px)' : 'calc(100% - 50px)' },
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.standard,
        }),
      }}>
        <Navbar setOpenState={setOpenState} />
        <Box sx={{ width: '100%', display: 'flex', paddingTop: '80px', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', md: 'normal' }, justifyContent: 'center', paddingBottom: '2rem' }}>
          <Box sx={{ width: { xs: '100%', md: '30%' }, m: '1rem' }}>
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
          <Box sx={{ textAlign: 'start', width: { xs: '100%', md: '70%' }, m: "1rem", padding: '20px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#FFFFFF' }}>
            <Typography variant='h5' sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
              Edit Profile
              <EditOutlinedIcon onClick={makeEditable} sx={{ fontSize: '15px', border: '1px solid black' }} />
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', gap: '20px' }}>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Username <sup className='imp'>*</sup></Typography>
                <Input
                  name='username'
                  disabled={!editable}
                  value={userData.username}
                  onChange={handleChange}
                  disableUnderline
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Email <sup className='imp'>*</sup></Typography>
                <Input
                  name='email'
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
                  name='phoneNumber'
                  disabled={!editable}
                  value={userData.phoneNumber}
                  onChange={handleChange}
                  disableUnderline
                  type="number"
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Date of Birth <sup className='imp'>*</sup></Typography>
                <Input
                  name='dob'
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
                  name='gender'
                  disabled
                  variant='standard'
                  disableUnderline
                  value={userData.gender}
                  defaultValue='male'
                  onChange={handleSelectChange}
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                >
                  <MenuItem value='male'>Male</MenuItem>
                  <MenuItem value='female'>Female</MenuItem>
                  <MenuItem value='others'>Others</MenuItem>
                </Select>
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Address line 1 <sup className='imp'>*</sup></Typography>
                <Input
                  name='addressLine1'
                  disabled={!editable}
                  value={userData.addressLine1}
                  onChange={handleChange}
                  disableUnderline
                  type="text"
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Address line 2</Typography>
                <Input
                  name='addressLine2'
                  disabled={!editable}
                  value={userData.addressLine2}
                  onChange={handleChange}
                  disableUnderline
                  type="text"
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Postal Code <sup className='imp'>*</sup></Typography>
                <Input
                  name='postalCode'
                  disabled={!editable}
                  value={userData.postalCode}
                  onChange={handleChange}
                  disableUnderline
                  type="number"
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
              </Box>
            </Box>
            {editable ? <Button onClick={handleSubmit}>click me</Button>:null}
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
