import { Box, Button, Input, InputAdornment, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { boolean, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import Navbar from '../../components/navbar/Navbar';
import { loginSchema } from '../../Schema';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { apiList } from '../../apiList';
import { API } from '../../network 1';

const Login = () => {
  const router = useNavigate();
  const [visible , setVisible] = useState<boolean>(false)
  type UserFormValues = z.infer<typeof loginSchema>;

  // Handle form validation and submission
  const { register, handleSubmit, formState: { errors } } = useForm<UserFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const toggleVisibility = ()=>{
    setVisible(!visible)
  }
  const visibleType = visible ? 'text' : 'password'
  const onSubmit =async (data: UserFormValues) => {
  try{
    const url = apiList.login
    const response = await API.post(url, {data})
    if(response){
      // console.log(response)
        console.log(response.success)
      localStorage.setItem('token',JSON.stringify(response.token))
      router('/')
    }

  }catch(error){
    console.log(error)
  }

  };

  // useEffect(()=>{  
  //   const currentUser =async ()=>{
  //     const url = apiList.currentUser
  //     const response = await API.get(url)
  //     // console.log(response.data)
  //     if(response.data.success){
  //       console.log(response.data)
  //       toast.success(response.data.getUser.username)
  //     }
  //   }
  //   currentUser()
    
  // },[])

  return (
    <Box sx={{ backgroundColor: '#F4F4F9', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {/* <Navbar /> */}
      <Box sx={{ width: '100%', maxWidth: '500px', padding: '20px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#FFFFFF' }}>
        <Typography variant='h5' sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '1.5rem' }}>Login</Typography>
        <form onSubmit={handleSubmit(onSubmit)}> 
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px',textAlign:'start' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography textAlign={'start'} variant='h6' sx={{ marginBottom: '10px', fontSize: '1rem' }}>Email <sup className='imp'>*</sup></Typography>
              <Input
                {...register('email')}
                placeholder='Enter the Email'
                type="email"
                disableUnderline
                sx={{height: '38px', width: '100%', fontSize: '1rem', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                // size='small'
              />
              {/* {errors.email && <Typography sx={{ color: 'red', marginTop: '5px' }}>{errors.email.message}</Typography>} */}
              <Box sx={{height:'15px'}}>
                {errors.email &&  <Typography sx={{ color: 'red',fontSize:'13px' }}>{errors.email.message}</Typography>}
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography textAlign={'start'} variant='h6' sx={{ marginBottom: '10px', fontSize: '1rem' }}>Password <sup className='imp'>*</sup></Typography>
              <Input
                {...register('password')
                }
                placeholder='Enter the Password'
                endAdornment={<InputAdornment position="end">{visible?<VisibilityOffIcon onClick={toggleVisibility}/>:<VisibilityIcon onClick={toggleVisibility}/>}</InputAdornment>}
                type={visibleType}
                disableUnderline
                sx={{ height: '38px', width: '100%', fontSize: '1rem', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                // size='small'
              />
              {/* {errors.password && <Typography sx={{ color: 'red', marginTop: '5px' }}>{errors.password.message}</Typography>} */}
              <Box sx={{height:'15px'}}>
                {errors.password &&  <Typography sx={{ color: 'red',fontSize:'13px' }}>{errors.password.message}</Typography>}
                </Box>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#2c3e50', ':hover': { backgroundColor: '#2c3e50' } }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
        <Typography sx={{ margin: '10px 0px', textAlign: 'center', cursor: 'pointer' }} onClick={() => router('/signup')}>Forgot password?</Typography>
        <Typography textAlign={'center'} onClick={() => router('/signup')}>Don't have an account?</Typography>
      </Box>
    </Box>
  );
};

export default Login;
