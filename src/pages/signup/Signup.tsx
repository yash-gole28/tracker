import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Input, MenuItem, Select, Typography, Button, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { signupSchema } from '../../Schema';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Navbar from '../../components/navbar/Navbar';

type SignupFormData = z.infer<typeof signupSchema>;

const Signup = () => {
  const [visible , setVisible] = useState<boolean>(false)
  const [visible2 , setVisible2] = useState<boolean>(false)
  const navigate = useNavigate();
  const visibleType = visible ? 'text' : 'password'
  const visibleType2 = visible2 ? 'text' : 'password'
  const { register, handleSubmit, control, formState: { errors } } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      username: '',
      email: '',
      phoneNumber: '',
      dob: '',
      gender: '',
      password: '',
      confirmPassword: ''
    }
  });

  const toggleVisibility = ()=>{
    setVisible(!visible)
  }
  const toggleVisibility2 = ()=>{
    setVisible2(!visible2)
  }

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
    localStorage.setItem('userData', JSON.stringify(data));
    navigate('/login');
  };
  const router = useNavigate()
  return (
    <Box sx={{ backgroundColor: '#F4F4F9', minHeight: '100vh' }}>
      {/* <Navbar /> */}
      <Box sx={{ display: 'flex', paddingTop: '20px', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', gap: '20px', paddingBottom: '2rem' }}>
        <Box sx={{ textAlign: 'start', width: { xs: '100%', md: '70%' }, maxWidth: '800px', padding: '20px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#FFFFFF' }}>
          <Typography variant='h5' sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>Create Your Account</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', gap: '10px' }}>
              {/* First Name */}
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>First Name <sup className='imp'>*</sup></Typography>
                <Input
                  {...register('firstName')}
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                />
                <Box sx={{ height: '15px' }}>
                  {errors.firstName && <Typography sx={{ color: 'red', fontSize: '13px' }}>{errors.firstName.message}</Typography>}
                </Box>
              </Box>

              {/* Middle Name */}
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Middle Name</Typography>
                <Input
                  {...register('middleName')}
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                />
                <Box sx={{ height: '15px' }}>
                  {errors.middleName && <Typography sx={{ color: 'red', fontSize: '13px' }}>{errors.middleName.message}</Typography>}
                </Box>
              </Box>

              {/* Last Name */}
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Last Name <sup className='imp'>*</sup></Typography>
                <Input
                  {...register('lastName')}
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                />
                <Box sx={{ height: '15px' }}>
                  {errors.lastName && <Typography sx={{ color: 'red', fontSize: '13px' }}>{errors.lastName.message}</Typography>}
                </Box>
              </Box>

              {/* Username */}
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Username <sup className='imp'>*</sup></Typography>
                <Input
                  {...register('username')}
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                />
                <Box sx={{ height: '15px' }}>
                  {errors.username && <Typography sx={{ color: 'red', fontSize: '13px' }}>{errors.username.message}</Typography>}
                </Box>
              </Box>

              {/* Email */}
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Email <sup className='imp'>*</sup></Typography>
                <Input
                  {...register('email')}
                  type="email"
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                />
                <Box sx={{ height: '15px' }}>
                  {errors.email && <Typography sx={{ color: 'red', fontSize: '13px' }}>{errors.email.message}</Typography>}
                </Box>
              </Box>

              {/* Phone Number */}
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Phone Number <sup className='imp'>*</sup></Typography>
                <Input
                  {...register('phoneNumber')}
                  type="number"
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                />
                <Box sx={{ height: '15px' }}>
                  {errors.phoneNumber && <Typography sx={{ color: 'red', fontSize: '13px' }}>{errors.phoneNumber.message}</Typography>}
                </Box>
              </Box>

              {/* Date of Birth */}
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Date of Birth <sup className='imp'>*</sup></Typography>
                <Input
                  {...register('dob')}
                  type="date"
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                />
                <Box sx={{ height: '15px' }}>
                  {errors.dob && <Typography sx={{ color: 'red', fontSize: '13px' }}>{errors.dob.message}</Typography>}
                </Box>
              </Box>

              {/* Gender */}
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Gender <sup className='imp'>*</sup></Typography>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      defaultValue=""
                      variant='standard'
                      disableUnderline
                      sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  )}
                />
                <Box sx={{ height: '15px' }}>
                  {errors.gender && <Typography sx={{ color: 'red', fontSize: '13px' }}>{errors.gender.message}</Typography>}
                </Box>
              </Box>

              {/* Password */}
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Password <sup className='imp'>*</sup></Typography>
                <Input
                  {...register('password')}
                  endAdornment={<InputAdornment position="end">{visible?<VisibilityOffIcon onClick={toggleVisibility}/>:<VisibilityIcon onClick={toggleVisibility}/>}</InputAdornment>}
                  type={visibleType}
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                />
                <Box sx={{ height: '15px' }}>
                  {errors.password && <Typography sx={{ color: 'red', fontSize: '13px' }}>{errors.password.message}</Typography>}
                </Box>
              </Box>

              {/* Confirm Password */}
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Confirm Password <sup className='imp'>*</sup></Typography>
                <Input
                  {...register('confirmPassword')}
                  endAdornment={<InputAdornment position="end">{visible2?<VisibilityOffIcon onClick={toggleVisibility2}/>:<VisibilityIcon onClick={toggleVisibility2}/>}</InputAdornment>}
                  type={visibleType2}
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                />
                <Box sx={{ height: '15px' }}>
                  {errors.confirmPassword && <Typography sx={{ color: 'red', fontSize: '13px' }}>{errors.confirmPassword.message}</Typography>}
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
          <Typography sx={{ margin: '10px 0px', textAlign: 'center', cursor: 'pointer' }} onClick={() => router('/login')}>Already have an account?</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
