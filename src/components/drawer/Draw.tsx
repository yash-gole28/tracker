import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

export default function Draw() {
  const [open, setOpen] = React.useState(false);
  const router = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 230,
        backgroundColor: '#34495e', // Modern Charcoal
        height: '100vh',
        color: '#ffffff', // White text
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List sx={{ paddingLeft: '1rem' }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router('/')}>
            <ListItemIcon>
              <HomeIcon sx={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router('/history')}>
            <ListItemIcon>
              <AddIcon sx={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary='Transactions' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ backgroundColor: '#ffffff' }} />
      <List sx={{ paddingLeft: '1rem' }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router('/profile')}>
            <ListItemIcon>
              <PermIdentityIcon sx={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router('/settings')}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router('/login')}>
            <ListItemIcon>
              <LoginIcon sx={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary='Login' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router('/')}>
            <ListItemIcon>
              <LogoutIcon sx={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button sx={{ color: '#ffffff' }} onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
