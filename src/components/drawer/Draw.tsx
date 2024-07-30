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
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export default function Draw() {
  const [open, setOpen] = React.useState(false);
  const router = useNavigate()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, backgroundColor: 'white', height: '100vh', color: 'rgb(32, 30, 67)' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>router('/')}>
            <ListItemIcon >
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              <MailIcon sx={{ color: 'rgb(32, 30, 67)' }} />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>router('/income')} >
            <ListItemIcon >
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {/* <MailIcon sx={{ color: 'rgb(32, 30, 67)' }} /> */}
              
            </ListItemIcon>
            <ListItemText primary='Add Income' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon >
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {/* <MailIcon sx={{ color: 'rgb(32, 30, 67)' }} /> */}
            
            </ListItemIcon>
            <ListItemText primary='' />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider sx={{ backgroundColor: "rgb(32, 30, 67)" }} />
      <List>

        <ListItem disablePadding>
          <ListItemButton onClick={()=>router('/profile')}>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              <PermIdentityIcon/>
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );

  return (
    <div>
      <Button sx={{ color: 'rgb(32, 30, 67)' }} onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
