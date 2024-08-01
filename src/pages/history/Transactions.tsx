import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dummy from './../../dummyJson/data.json';
import { Typography, useTheme } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Transactions = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const arr = dummy.expenses;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredData = arr.filter((item) =>
    item.category.toLowerCase().includes(searchQuery) ||
    item.date.toLowerCase().includes(searchQuery) ||
    item.amount.toString().includes(searchQuery) ||
    item.amountLeft.toString().includes(searchQuery)
  );

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          width: '100%',
          position: 'relative',
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

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Search>

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
