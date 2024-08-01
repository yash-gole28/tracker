import React from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Draw from '../drawer/Draw';
import Avatar from '@mui/material/Avatar'

const Navbar = () => {
  const router = useNavigate();

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
          
            <Avatar sx={{backgroundColor:'#ffffff', color:'#34495e' ,fontWeight:'bold'}}>Y</Avatar>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
