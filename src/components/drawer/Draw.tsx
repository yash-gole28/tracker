import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';



interface drawerOpen{
  setOpenValue:any
}
const Draw:React.FC<drawerOpen> = ({setOpenValue}) => {
  const [open, setOpen] = React.useState(false); 
  const theme = useTheme();
  const router = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const getUser = localStorage.getItem('user');
  const drawerWidth = 240
  const handleDrawerToggle = () => {
    setOpenValue(!open)
    setOpen(!open);
  };

  const Logout = () => {
    setOpenValue(!open)
    setOpen(!open);
    localStorage.removeItem('user');
    router('/login');
  };

  const toProfile = () => {
    if (!getUser) {
      toast.error('Login to access profile');
    } else {
      router('/profile');
    }
    setOpenValue(!open)
    setOpen(!open);
  };

  const toHistory = () => {
    if (!getUser) {
      toast.error('Login to access History');
    } else {
      router('/history');
    }
    setOpenValue(!open)
    setOpen(!open);
  };

  const toDashBoard = () => {
    if (!getUser) {
      toast.error('Login to access dashboard');
    } else {
      router('/');
    }
    setOpenValue(!open)
    setOpen(!open);
  };

  const DrawerList = (
    <Box
      sx={{
        width: {xs:'100vw',md:drawerWidth},
        backgroundColor: '#34495e',
        height: '100%',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column'
      }}
      role="presentation"
    >
      <List >
        {open ? 
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <ListItemIcon>
                <ArrowBackIcon sx={{ color: '#ffffff' }} />
              </ListItemIcon>
             {open ?  <ListItemText primary="Close Menu" />:null}
            </ListItemButton>
          </ListItem>
        :<ListItem disablePadding>
        <ListItemButton onClick={handleDrawerToggle}>
          <ListItemIcon>
            <ArrowForwardIcon sx={{ color: '#ffffff' }} />
          </ListItemIcon>
          <ListItemText primary="Close Menu" />
        </ListItemButton>
      </ListItem>}
        <ListItem disablePadding>
          <ListItemButton onClick={toDashBoard}>
            <ListItemIcon>
              <HomeIcon sx={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={toHistory}>
            <ListItemIcon>
              <AddIcon sx={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary='History' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ backgroundColor: '#ffffff' }} />
      <List >
        <ListItem disablePadding>
          <ListItemButton onClick={toProfile}>
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
        {getUser ? (
          <ListItem disablePadding>
            <ListItemButton onClick={Logout}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItemButton>
          </ListItem>
        ) : null}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex'}}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={ isSmallScreen ? open : true}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width:{xs:'100vw',md:open?drawerWidth:'50px'},
            boxSizing: 'border-box',
            backgroundColor: '#34495e',overflow:'hidden' ,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            })
          },
        }}
      >
        {DrawerList}
      </Drawer>
      <Button
        sx={{ color: '#ffffff', position: 'fixed', top: 16, left: 16, zIndex: 1 }}
        onClick={handleDrawerToggle}
      >
        {isSmallScreen ? <MenuIcon /> : null}
      </Button>
    
    </Box>
  );
};

export default Draw;
