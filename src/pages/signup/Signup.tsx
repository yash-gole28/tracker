import { Box, Button, InputBase, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const [allUsers, setAllUsers] = useState<any[]>([]);
    const router = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log(user)
    };

    const handleSubmit = () => {
        setAllUsers(prevUsers => [...prevUsers, user]);
        console.log(allUsers)

        localStorage.setItem('user', JSON.stringify(allUsers));
        
      
        setUser({ username: '', email: '', password: '' });
        router('/login')
    };
    const checkUsers = ()=>{
       localStorage.setItem('user',JSON.stringify([]))
    }

    useEffect(() => {
        // Retrieve allUsers data from localStorage on component mount
        if(!localStorage.getItem('user')){
          checkUsers()
        }
        
        const storedUsers = JSON.parse(localStorage.getItem('user') || '[]');
        setAllUsers(storedUsers);
    }, []); 

    return (
        <Box sx={{backgroundColor:'rgb(248, 249, 237)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box  sx={{backgroundColor:'white',borderRadius:'10px',border:'1px solid rgb(238, 237, 235)',boxShadow:'0px 2px 2px rgb(147, 145, 133)',display:'flex',flexDirection:'column',padding:'2rem'}}>
            <Typography variant='h6'sx={{marginBottom:'1.5rem'}}>SignIn</Typography>
            <InputBase onChange={handleChange} value={user.username} placeholder='username' name='username' sx={{borderRadius:'8px',paddingLeft:'8px', marginBottom: '10px', width: '300px' ,backgroundColor:'white',border:'1px solid rgb(238, 237, 235)'}} />
            <InputBase onChange={handleChange} value={user.email} placeholder='email' name='email' sx={{ borderRadius:'8px',paddingLeft:'8px', marginBottom: '10px', width: '300px' ,backgroundColor:'white',border:'1px solid rgb(238, 237, 235)'}} />
            <InputBase onChange={handleChange} value={user.password} placeholder='password' name='password' sx={{borderRadius:'8px',paddingLeft:'8px', marginBottom: '10px', width: '300px' ,backgroundColor:'white',border:'1px solid rgb(238, 237, 235)'}} />
            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
            </Box>

            {/* Display allUsers data (for testing) */}
        </Box>
    );
};

export default Signup;
