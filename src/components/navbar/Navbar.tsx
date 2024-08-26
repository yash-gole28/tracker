import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Draw from '../drawer/Draw'; // Adjust the path as necessary
import { useBooleanContext } from '../Context/DrawerContext';
interface ToggleState{
  setOpenState:any
}
const Navbar: React.FC<ToggleState> = ({setOpenState}) => {
  const getUser = localStorage.getItem('user');
  const getUserName = localStorage.getItem('userData');
  const [initial, setInitial] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  // const [openValue , setOpenValue] = useState<boolean>(true)
  const {value , setValue} = useBooleanContext()

  const getInitial = () => {
    if (getUser && getUserName) {
      const userData = JSON.parse(getUser);
      const name = JSON.parse(getUserName);
      if (typeof userData === 'object' && userData !== null) {
        setInitial(userData.email[0]);
        setUserName(name.username);
      }
    }
  };

  useEffect(() => {
    getInitial();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        sx={{
          backgroundColor: '#34495e', // Modern Charcoal
          boxShadow: '0px 0.5px 4px rgba(0, 0, 0, 0.2)',
          color: '#ffffff', // White
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between',width:'100vw'}}>
          <Box sx={{width:'fit-content'}}>
         <Draw  setOpenValue={setOpenState}/>
          {value ? null : <Typography>Expense Tracker</Typography>}
          </Box>
      
         {/* <Typography>Expense Tracker</Typography> */}
        
          {/* {value ? 'hello' : 'byee'} */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Avatar
              sx={{ backgroundColor: '#ffffff', color: '#34495e', fontWeight: 'bold', textTransform: 'capitalize' }}
            >
              {initial}
            </Avatar>
            {getUser ? <Typography sx={{ textTransform: 'capitalize', fontWeight: '500' ,marginRight:'10px'}}>{userName}</Typography> : null}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
