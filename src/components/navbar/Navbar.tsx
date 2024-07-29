import React, { useState } from 'react'
import './navbar.css'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Draw from '../drawer/Draw';



const Navbar = () => {
  const router = useNavigate()
  return (
    <Box>
      <AppBar sx={{ backgroundColor: 'rgb(105, 79, 142)', color: 'white' }}>
        <Toolbar>

          <Draw/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={() => router('/login')}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
