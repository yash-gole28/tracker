import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { Input, InputBase, TextField, Typography } from '@mui/material';
export default function AddIncome() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
    <Button
      disableTouchRipple
      sx={{
        color: '#34495e', // Use Modern Charcoal
        ':hover': { backgroundColor: '#2c3e50' }, // Secondary color for hover
        fontSize: { xs: '14px', sm: '16px' }, // Responsive font size
        padding: { xs: '6px 12px', sm: '8px 16px' }, // Responsive padding
        display: 'flex',
        alignItems: 'center'
      }}
      variant='text'
      onClick={handleClickOpen}
    >
      <AddIcon sx={{ fontSize: { xs: '20px', sm: '24px' }, color: '#34495e' }} />
      <Typography variant='button' sx={{ marginLeft: '8px', color: '#34495e' }}>
        Add Expense
      </Typography>
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: 'white', // Dialog background color
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }
      }}
    >
      <DialogTitle
        sx={{
        
          color: '#2c3e50',
          textAlign: 'center',
          padding: '16px',
          borderRadius: '8px 8px 0 0',
          fontSize: { xs: '20px', sm: '24px' } // Responsive font size
        }}
      >
        Enter Amount
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '16px',
          backgroundColor: 'white', // Dialog content background color
          borderRadius: '0 0 8px 8px',
        }}
      >
        <Input
          disableUnderline
          type='number'
          sx={{
            backgroundColor: 'white',
            borderRadius: '8px',
            paddingLeft: '10px',
            border: `1px solid #2c3e50`, // Secondary color for border
            width: '100%',
            fontSize: { xs: '16px', sm: '18px' }, // Responsive font size
          }}
        />
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: 'center',
          padding: '16px',
          borderRadius: '0 0 8px 8px',
        }}
      >
        <Button
          onClick={handleClose}
          sx={{
            color: '#2c3e50',
            width:'fit-content',
            fontSize: { xs: '14px', sm: '16px' }, // Responsive font size
            ':hover': { backgroundColor: '#34495e' } // Modern Charcoal for hover
          }}
        >
          <AddIcon sx={{ fontSize: { xs: '20px', sm: '24px' } }} />
          <Typography variant='button' sx={{ marginLeft: '8px' }}>
            Add
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
  );
}