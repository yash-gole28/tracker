import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { Input, Typography } from '@mui/material';


const AddExpense = () => {

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
    <Button disableTouchRipple sx={{ color: 'rgb(32, 30, 67)',':hover':{backgroundColor:'transparent'} }} variant='text' onClick={handleClickOpen}>
        <AddIcon />
        Add Expense
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
        <Input disableUnderline type='number' sx={{backgroundColor:'white',borderRadius:'8px',paddingLeft:'10px',border:'1px solid rgb(255, 191, 120)'}} />
        </DialogContent>
        <DialogActions sx={{width:'400px',display:'flex',justifyContent:'center' ,backgroundColor:'rgb(255, 125, 41)'}}>
        <AddIcon /><Typography>Add</Typography>
        </DialogActions>
      </Dialog>
  </React.Fragment>
  )
}

export default AddExpense