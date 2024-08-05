import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { Grid, Input, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import dummy from './../../dummyJson/category.json'
import toast from 'react-hot-toast';

const AddIncome = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    toast.error('hello')
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        disableTouchRipple
        size='small'
        sx={{
          color: '#34495e',
          border:  `1px solid ${theme.palette.divider}`,
          ':hover': { backgroundColor: '#2c3e50', color: '#ffffff' },
          fontSize: { xs: '14px', sm: '16px' }, // Responsive font size
          padding:{xs:'8px 9px',md:'7px 9px'},
          display: 'flex',
          alignItems: 'center'
        }}
        variant='outlined'
        onClick={handleClickOpen}
      >
        <AddIcon sx={{ fontSize: { xs: '20px', sm: '24px' } }} />
        <Typography variant='button' sx={{ marginLeft: '8px' }}>
          Add income
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
            padding: '16px',
            backgroundColor: '#FFFFFF',
            borderRadius: '0 0 8px 8px',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ marginBottom: '8px', color: '#20203F' }}>Amount</Typography>
              <Input
                disableUnderline
                placeholder='Enter amount'
                type='number'
                sx={{
                  backgroundColor: '#F5F5F5',
                  borderRadius: '8px',
                  paddingLeft: '10px',
                  border: `1px solid #E0E0E0`,
                  width: '100%',
                  fontSize: { xs: '16px', sm: '18px' },
                  marginBottom: '16px'
                }}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Typography sx={{ marginBottom: '8px', color: '#20203F' }}>Category</Typography>
              <Select
                variant='standard'
                disableUnderline
                defaultValue={0}
                sx={{
                  backgroundColor: '#F5F5F5',
                  borderRadius: '8px',
                  paddingLeft: '10px',
                  border: `1px solid #E0E0E0`,
                  width: '100%',
                  fontSize: { xs: '16px', sm: '18px' },
                  marginBottom: '16px'
                }}
                size='small'
              >
                {dummy.category.map((e, index) => (
                  <MenuItem key={index} value={e}>{e}</MenuItem>
                ))}
              </Select>
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <Typography sx={{ marginBottom: '8px', color: '#20203F' }}>Date</Typography>
              <Input
                disableUnderline
                type="date"
                sx={{
                  width: '100%',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  padding: '3px 10px',
                  backgroundColor: '#F5F5F5',
                  marginBottom: '16px'
                }}
                size='small'
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Typography sx={{ marginBottom: '8px', color: '#20203F' }}>Bill</Typography>
              <Input
                disableUnderline
                type="file"
                sx={{
                  width: '100%',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  padding: '10px',
                  backgroundColor: '#F5F5F5',
                  marginBottom: '16px'
                }}
                size='small'
              />
            </Grid> */}
            <Grid item xs={12} sm={12}>
              <Typography sx={{ marginBottom: '8px', color: '#20203F' }}>Description</Typography>
              <TextField
                multiline
                maxRows={3}
                sx={{
                  width: '100%',
                  borderRadius: '8px',
                  border: `1px solid #E0E0E0`,
                  padding: '10px',
                  backgroundColor: '#F5F5F5'
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            padding: '16px',
            borderRadius: '0 0 8px 8px',
          }}
        >
          <Button
            disableTouchRipple
            size='small'
            sx={{
              color: '#34495e',
              border: `1px solid ${theme.palette.divider}`,
              ':hover': { backgroundColor: '#2c3e50', color: '#ffffff' },
              fontSize: { xs: '14px', sm: '16px' },
              padding: { xs: '8px 9px', md: '7px 9px' },
              display: 'flex',
              alignItems: 'center'
            }}
            variant='outlined'
            onClick={handleClose}
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
};

export default AddIncome;
