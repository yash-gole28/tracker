import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dummy from './../../dummyJson/data.json';
import { Box, Typography, useTheme, TextField, FormControl, InputLabel, Select, MenuItem, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';
import CloseIcon from '@mui/icons-material/Close';
import { SelectChangeEvent } from '@mui/material/Select';

// Define or import the Expense type
interface Expense {
  category: string;
  date: string;
  amount: number;
  amountLeft: number;
}

const Transactions = () => {
  const theme = useTheme();
  const [search, setSearch] = React.useState<string>('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('');
  const [open, setOpen] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<Omit<Expense, 'amountLeft'>>({
    category: '',
    date: '',
    amount: 0
  });

  const arr = dummy.expenses;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Add form validation and submission logic here
    console.log('Form Data:', formData);
    handleClose();
  };

  const filteredData = arr.filter((item) => {
    const matchesSearch =
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.date.toLowerCase().includes(search.toLowerCase()) ||
      item.amount.toString().includes(search) ||
      item.amountLeft.toString().includes(search);

    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;

    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = Array.from(new Set(arr.map(expense => expense.category)));

  return (
    <>
      <Navbar />

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          width: '95%',
          margin: '.5rem auto',
          position: 'relative',
          top: '70px',
          padding: '1.4rem',
          boxShadow: '0px 0px 0px solid rgb(255, 255, 255)',
          overflowX: 'auto',
          border: `1px solid ${theme.palette.divider}`,
          minHeight: '100vh'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'start', md: 'center' } }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: { xs: 'start', md: 'start' },
              marginBottom: '1rem',
              marginLeft: '1rem',
              fontWeight: '600',
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', sm: '1.2rem' },
            }}
          >
            History
          </Typography>

          <Box sx={{ display: 'flex',flexDirection:{xs:'column',md:'row'}, gap: '20px',alignItems:{xs:'start',md:'center'}}}>
            <TextField
              placeholder='Search expenses'
              value={search}
              onChange={handleSearchChange}
              variant='outlined'
              size='small'
              sx={{ minWidth: { xs: '120px', md: '200px' }, backgroundColor: '#fff' }}
            />
            {/* <FormControl variant='standard' sx={{ minWidth: { xs: '150px', md: '200px' } }}> */}
             <Box sx={{display:'flex',alignItems:'center'}}> <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                size='small'
              >
                <MenuItem value=""><em>All Categories</em></MenuItem>
                {uniqueCategories.map(category => (
                  <MenuItem key={category} value={category}>{category}</MenuItem>
                ))}
              </Select></Box>
            {/* </FormControl> */}
            <Button
            disableElevation disableFocusRipple disableRipple
              variant='contained'
              color='primary'
              onClick={handleClickOpen}
              sx={{ width: '150px', fontSize: '0.875rem', padding: '8px' }}
            >
              Add Expense
            </Button>
          </Box>
        </Box>

        <Table sx={{ border: '' }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: { xs: '14px', sm: '16px' },
                    fontWeight: '600',
                    color: theme.palette.text.primary,
                  }}
                >
                  Category
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: { xs: '14px', sm: '16px' },
                    fontWeight: '600',
                    color: theme.palette.text.primary,
                  }}
                >
                  Date
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: { xs: '14px', sm: '16px' },
                    fontWeight: '600',
                    color: theme.palette.text.primary,
                  }}
                >
                  Amount
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: { xs: '14px', sm: '16px' },
                    fontWeight: '600',
                    color: theme.palette.text.primary,
                  }}
                >
                  Balance
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((e, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                    cursor: 'pointer',
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '14px', sm: '15px' },
                      fontWeight: '500',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {e.category}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '14px', sm: '15px' },
                      fontWeight: '500',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {e.date}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '14px', sm: '15px' },
                      fontWeight: '500',
                      color: 'red',
                    }}
                  >
                    &#8377;{e.amount}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '14px', sm: '15px' },
                      fontWeight: '500',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {e.amountLeft}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Add Expense
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="category"
            label="Category"
            fullWidth
            variant="outlined"
            value={formData.category}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="date"
            label="Date"
            type="date"
            fullWidth
            variant="outlined"
            value={formData.date}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="dense"
            name="amount"
            label="Amount"
            type="number"
            fullWidth
            variant="outlined"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Transactions;
