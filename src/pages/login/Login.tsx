import { Box, ButtonBase, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, InputBase } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';

const Login = () => {
  const router = useNavigate()
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [allUsers, setAllUsers] = useState<any[]>([]);

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user)
  };

  // Handle form submission
  // const handleSubmit = () => {
  //     setAllUsers(prevUsers => [...prevUsers, user]);
  //     console.log(allUsers)

  //     localStorage.setItem('user', JSON.stringify(allUsers));


  //     setUser({ username: '', email: '', password: '' });
  // };
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Navbar />
      <Box sx={{ borderRadius: '10px', backgroundColor: 'rgb(105, 79, 142)', display: 'flex', flexDirection: 'column', padding: '2rem' }}>

        <InputBase onChange={handleChange} value={user.email} placeholder='email' name='email' sx={{ border: 'none', borderRadius: '8px', paddingLeft: '8px', marginBottom: '10px', width: '300px', backgroundColor: 'white' }} />
        <InputBase type='password' onChange={handleChange} value={user.password} placeholder='password' name='password' sx={{ border: 'none', borderRadius: '8px', paddingLeft: '8px', marginBottom: '10px', width: '300px', backgroundColor: 'white' }} />
        <Button variant='contained' onClick={() => router('/')}>Submit</Button>
        <Typography onClick={() => router('/signup')} sx={{ color: 'white', marginTop: '1.5rem' }}>
          Don't have an acount ?
        </Typography>
      </Box>


      <div>
        
      </div>
    </Box>
  )
}

export default Login