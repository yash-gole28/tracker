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
      <Button disableTouchRipple sx={{ color: 'rgb(32, 30, 67)',':hover':{backgroundColor:'transparent'},padding:'0px',margin:'0px' }} variant='text' onClick={handleClickOpen}>
        <AddIcon />
        Add Income
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{}}
      >
        <DialogTitle sx={{width:'400px',display:'flex',justifyContent:'center',backgroundColor:'rgb(254, 255, 210)'}}>
        <Typography variant='h5'>Enter Amount</Typography>
        </DialogTitle>
        <DialogContent sx={{width:'400px',display:'flex',justifyContent:'center',backgroundColor:'rgb(254, 255, 210)'}}>
        <Input disableUnderline type='number' sx={{backgroundColor:'white',borderRadius:'8px',paddingLeft:'10px'}} />
        </DialogContent>
        <DialogActions sx={{width:'400px',display:'flex',justifyContent:'center'}}>
        <AddIcon /><Typography>Add</Typography>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}