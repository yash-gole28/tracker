import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Box, Input, TextField, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIncome from '../../components/dialoguebox/AddIncome';
import AddExpense from '../../components/dialoguebox/AddExpense';


const Profile = () => {
    return (
        <Box sx={{ backgroundColor: 'rgb(248, 249, 237)', minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{ display: 'flex', paddingTop: '80px', justifyContent: 'space-around' }}>
                <Box sx={{ width: '30%',height:'fit-content',borderRadius:'8px', border: '2px solid rgb(209, 216, 197)', backgroundColor: 'white',color:'grey' }}>
                    <AccountCircleIcon sx={{ fontSize: '160px', color: 'rgb(209, 216, 197)' }} />
                    <Typography variant='h3'>
                        Yash Gole
                    </Typography>
                    <Typography variant='h6'>
                        yashgole@gmail.com
                    </Typography>
                    <Typography variant='h6'>
                        9695233456
                    </Typography>
                </Box>
                <Box sx={{ width: '60%',borderRadius:'8px', border: '2px solid rgb(209, 216, 197)', backgroundColor: 'white',color:'grey',display:'flex',flexDirection:'column',alignItems:'center' }}>
                    <Typography variant='h5'>Edit Profile</Typography>
                    {/* <Label>Name</Label>
                 */}
                   
                    <Box sx={{display:'flex',alignItems:'center', mb:'1rem'}}>
                        <Typography variant='h6'>Username</Typography>
                    <Input
                        disableUnderline
                        id="outlined-password-input"
                        type="text"
                        sx={{ width:'400px',border:'1px solid rgb(209, 216, 197)',borderRadius:'8px',pl:'1rem'}}
                        size='small'
                    />
                    </Box>
                    <Box sx={{display:'flex',alignItems:'center', mb:'1rem'}}>
                        <Typography variant='h6'>Email :</Typography>
                    <Input
                        disableUnderline
                        id="outlined-password-input"
                        type="email"
                        sx={{ width:'400px',border:'1px solid rgb(209, 216, 197)',borderRadius:'8px',pl:'1rem'}}
                        size='small'
                    />
                    </Box>
                    <Box sx={{display:'flex',alignItems:'center', mb:'1rem'}}>
                        <Typography variant='h6'>Phone Number :</Typography>
                    <Input
                        disableUnderline
                        id="outlined-password-input"
                        type="number"
                        sx={{ width:'400px',border:'1px solid rgb(209, 216, 197)',borderRadius:'8px',pl:'1rem',alignItems:'center','WebkitAppearance':'none'}}
                        size='small'
                    />
                
                    </Box>
                </Box>
            </Box>

            <Box>
                <AddIncome/>
            </Box>
            <Box>
                <AddExpense/>
            </Box>
        </Box>
    )
}

export default Profile