import { Box, Button, InputBase } from '@mui/material';
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
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box  sx={{borderRadius:'10px' , backgroundColor: 'rgb(105, 79, 142)',display:'flex',flexDirection:'column',padding:'2rem'}}>

            <InputBase onChange={handleChange} value={user.username} placeholder='username' name='username' sx={{ border: 'none',borderRadius:'8px',paddingLeft:'8px', marginBottom: '10px', width: '300px' ,backgroundColor:'white'}} />
            <InputBase onChange={handleChange} value={user.email} placeholder='email' name='email' sx={{ border: 'none',borderRadius:'8px',paddingLeft:'8px', marginBottom: '10px', width: '300px' ,backgroundColor:'white'}} />
            <InputBase onChange={handleChange} value={user.password} placeholder='password' name='password' sx={{ border: 'none',borderRadius:'8px',paddingLeft:'8px', marginBottom: '10px', width: '300px' ,backgroundColor:'white'}} />
            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
            </Box>

            {/* Display allUsers data (for testing) */}
        </Box>
    );
};

export default Signup;
