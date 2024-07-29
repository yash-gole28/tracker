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


export default function Draw() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, backgroundColor: 'white', height: '100vh', color: 'rgb(32, 30, 67)' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon >
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              <MailIcon sx={{ color: 'rgb(32, 30, 67)' }} />
            </ListItemIcon>
            <ListItemText primary='Menu' />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider sx={{ backgroundColor: "rgb(32, 30, 67)" }} />
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
      <Button sx={{ color: 'rgb(32, 30, 67)' }} onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
