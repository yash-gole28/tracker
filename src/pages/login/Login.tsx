import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const router = useNavigate()
  return (
    <Box>
        <Typography onClick={()=>router('/signup')}>
            Don't have an acount
        </Typography>
    </Box>
  )
}

export default Login