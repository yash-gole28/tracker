import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dummy from './../../dummyJson/data.json'
import { Typography } from '@mui/material';

const History = () => {
    const arr = dummy.expenses
    arr.reverse()
    return (
        <TableContainer sx={{ backgroundColor:'white',border:'2px solid rgb(209, 216, 197)',borderRadius:'8px',width:'fit-content',margin:'auto',padding:'1.3rem'}}>
      <Typography variant='h6'sx={{textAlign:'start'}}>Latest History</Typography>
      <Table sx={{ minWidth: 650 ,width:900}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant='h6' sx={{fontSize:'16px'}}>Category</Typography></TableCell>
            <TableCell align="right"><Typography variant='h6' sx={{fontSize:'16px'}}>Date</Typography></TableCell>
            <TableCell align="right"><Typography variant='h6' sx={{fontSize:'16px'}}>Amount</Typography></TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          
            {
                arr.map((e)=>(
                    <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row">
              <Typography variant='h6'sx={{fontSize:'15px'}}> {e.category}</Typography>
              </TableCell>
              <TableCell align="right">{e.date}</TableCell>
              <TableCell sx={{color:'red'}} align="right"><Typography variant='h6'sx={{fontSize:'15px'}}>&#8377;{e.amount}</Typography></TableCell>
              <TableCell align="right"><Typography> {e.amountLeft} </Typography></TableCell>
              {/* <TableCell align="right"></TableCell> */}
            </TableRow>
                ))
            }
 
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default History