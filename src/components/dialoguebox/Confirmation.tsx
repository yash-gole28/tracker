import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md')); // Adjust the breakpoint as needed
  const router = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Logout = () => {
    localStorage.removeItem('token');
    setOpen(false);
    router('/login');
  };

  return (
    <React.Fragment>
      <LogoutIcon 
        sx={{ color: '#ffffff', cursor: 'pointer' }} 
        onClick={handleClickOpen} 
      />

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#34495e',
            color: '#ffffff',
            maxWidth: '500px', // Restrict the max width of the dialog
            margin: 'auto', // Center the dialog horizontally
            width: '90%', // Ensure it uses up to 90% of the screen width
            maxHeight:'250px'
          },
        }}
      >
        <DialogTitle 
          id="responsive-dialog-title" 
          sx={{ backgroundColor: '#34495e', color: '#ffffff' }}
        >
          {"Are you sure you want to logout?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: '#34495e',
          }}
        >
          <Button 
            autoFocus 
            onClick={handleClose} 
            sx={{ color: '#ffffff' }}
          >
            Disagree
          </Button>
          <Button 
            onClick={Logout} 
            autoFocus 
            sx={{ color: '#ffffff' }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
