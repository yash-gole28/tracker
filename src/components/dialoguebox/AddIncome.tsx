import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
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
      <Button disableTouchRipple sx={{ color: 'rgb(32, 30, 67)' }} variant='text' onClick={handleClickOpen}>
        <AddIcon />
        Add Income
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}

      >
        <DialogTitle sx={{backgroundColor:'rgb(105, 79, 142)',color:'white'}}>
          <AddIcon />
        </DialogTitle>
        <DialogContent sx={{backgroundColor:'rgb(105, 79, 142)',color:'white'}}>

        </DialogContent>
        <DialogActions sx={{backgroundColor:'rgb(105, 79, 142)',color:'white'}}>
          <Button>

          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}