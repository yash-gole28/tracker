import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dummy from './../../dummyJson/data.json';
import { Box, Typography, useTheme } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import AddExpense from '../../components/dialoguebox/AddExpense';
import Navbar from '../../components/navbar/Navbar';

// Transactions component
const Transactions = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | undefined>(undefined);
  const arr = dummy.expenses;

  // Filter data based on selected category and search query
  const filteredData = arr.filter((item) => {
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchesQuery = searchQuery ? (
      item.category.toLowerCase().includes(searchQuery) ||
      item.date.toLowerCase().includes(searchQuery) ||
      item.amount.toString().includes(searchQuery) ||
      item.amountLeft.toString().includes(searchQuery)
    ) : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <Navbar />
      <Box sx={{ position: 'absolute', right: '10px', top: '100px', zIndex: '5' }}>
        <AddExpense />
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          width: '100%',
          position: 'relative',
          top: '70px',
          padding: '1.4rem',
          boxShadow: '0px 0px 0px solid rgb(255, 255, 255)',
          overflowX: 'auto',
        }}
      >
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

        <Autocomplete
          freeSolo
          id="category-autocomplete"
          disableClearable
          options={arr.map((option) => option.category)}
          value={selectedCategory || ''} // Convert undefined to empty string
          onChange={(event, newValue) => setSelectedCategory(newValue || undefined)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Category"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />

        <Table>
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
    </>
  );
};

export default Transactions;
