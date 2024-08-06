import React, { useEffect, useState } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Draw from '../drawer/Draw';
import Avatar from '@mui/material/Avatar'

const Navbar = () => {
  // const router = useNavigate();
  const getUser = localStorage.getItem('user')
  const getUserName = localStorage.getItem('userData')
  const [initial , setInitial] = useState<String>('')
  const [userName, setuserName] = useState<String>('')
  const getInitial = ()=>{
    if(getUser && getUserName){
      const userData = JSON.parse(getUser)
      const name = JSON.parse(getUserName)
      if(typeof userData == 'object' && userData !== null){
          setInitial(userData.email[0])
          setuserName(name.username)
      }
    }
  }
  useEffect(()=>{
    getInitial()
  },[])

  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: '#34495e', // Modern Charcoal
          boxShadow: '0px 0.5px 4px rgba(0, 0, 0, 0.2)',
          color: '#ffffff', // White
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Draw />
          <Box sx={{display:'flex',alignItems:'center',gap:'15px'}}>

            <Avatar sx={{backgroundColor:'#ffffff', color:'#34495e' ,fontWeight:'bold',textTransform:'capitalize'}}>{initial}</Avatar>
            {getUser? <Typography sx={{textTransform:'capitalize',fontWeight:'500'}}>{userName}</Typography> : null}
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
