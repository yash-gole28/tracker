import { Box, Button, InputBase } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    const [user , setUser] = useState({username:'', email:'',password:''})

    const [allUsers , setAllUsers] = useState<any[] | null>([])


    const handleChange = (event :React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,[event.target.name]:event.target.value})
        console.log(user)
    }
    const handleSubmit = ()=>{
        localStorage.setItem('user',JSON.stringify(user))
    }
  return (
    <Box sx={{height:'100vh', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <InputBase onChange={handleChange} placeholder='username' name='username' sx={{border:'1px solid red'}}/>
        <InputBase onChange={handleChange} placeholder='email' name='email' sx={{border:'1px solid red'}}/>
        <InputBase onChange={handleChange} placeholder='password' name='password' sx={{border:'1px solid red'}}/>
        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
    </Box>
  )
}

export default Signup