import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dummy from './../../dummyJson/data.json';
import { Typography, useTheme, useMediaQuery, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2c3e50', // Deep Charcoal
  color: '#ffffff', // White text
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#34495e', // Slightly lighter Charcoal
  },
}));

const History = () => {
  const router = useNavigate()
  const theme = useTheme(); 
  const arr:any = []

  for(let i = 0 ;i<4 ; i++){
      arr.push(dummy.expenses[i])
  }

  return (
    <>
    <Box sx={{display:'flex', justifyContent:'space-between',mb:'1rem'}}>

     <Typography
        variant="h6"
        sx={{
          textAlign:{xs:'start',md:'center'},
          marginBottom: '1rem',
          fontWeight: '600',
          color: theme.palette.text.primary,
          fontSize: { xs: '1rem', sm: '1.2rem' }, // Responsive font size
        }}
      >
        Latest History
      </Typography>
      <Button  sx={{
          color: '#34495e',
          border:  `1px solid ${theme.palette.divider}`,
          ':hover': { backgroundColor: '#2c3e50', color: '#ffffff' },
          fontSize: { xs: '14px', sm: '16px' }, // Responsive font size
          padding:{xs:'8px 9px',md:'7px 9px'},
          display: 'flex',
          alignItems: 'center'
        }} size='small' onClick={()=>router('/history')}>History</Button>
    </Box>
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: 'white',
        // border: `2px solid ${theme.palette.divider}`,
        borderRadius: '8px',
        width: '100%',
        position:'relative',
        // margin: 'auto',
        padding: '1.4rem',
        boxShadow: '0px 0px 0px solid rgb(255, 255, 255)',
        overflowX: 'auto',
      }}
    >
      
     
     
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
          {arr.map((e:any, index:number) => (
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

export default History;
