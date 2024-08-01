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
    <Box sx={{backgroundColor:'#F4F4F9', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Navbar />
      <Box sx={{backgroundColor:'white',borderRadius:'10px',border:'1px solid rgb(238, 237, 235)',boxShadow:'0px 2px 2px rgb(147, 145, 133)',display:'flex',flexDirection:'column',padding:'2rem'}}>
      <Typography variant='h6'sx={{marginBottom:'1.5rem'}}>Login</Typography>
        <InputBase onChange={handleChange} value={user.email} placeholder='email' name='email' sx={{borderRadius:'8px',paddingLeft:'8px', marginBottom: '10px', width: '300px' ,backgroundColor:'white',border:'1px solid rgb(238, 237, 235)'}} />
        <InputBase type='password' onChange={handleChange} value={user.password} placeholder='password' name='password'  sx={{borderRadius:'8px',paddingLeft:'8px', marginBottom: '10px', width: '300px' ,backgroundColor:'white',border:'1px solid rgb(238, 237, 235)'}} />
        <Button variant='contained' sx={{backgroundColor:'#2c3e50', ':hover': { backgroundColor: '#2c3e50' }}} onClick={() => router('/')}>Submit</Button>
        <Typography onClick={() => router('/signup')} sx={{ color: 'black', marginTop: '1.5rem' }}>
          Don't have an acount ?
        </Typography>
      </Box>


      <div>
        
      </div>
    </Box>
  )
}

export default Login