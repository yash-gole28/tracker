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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import AddIncome from '../dialoguebox/AddIncome';

export default function Draw() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 ,backgroundColor:'rgb(105, 79, 142)',height:'100vh', color:'white' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <MailIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary='Menu' />
            </ListItemButton>
          </ListItem>
       
      </List>
      <Divider sx={{backgroundColor:"white"}}/>
      <List>
       
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>
  
      </List>
    </Box>
  );

  return (
    <div>
       <Button sx={{ color: 'white' }} onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
