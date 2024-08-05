import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Input, MenuItem, Select, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import Navbar from '../../components/navbar/Navbar';
import { signupSchema } from '../../Schema';


type SignupFormData = z.infer<typeof signupSchema>;

const Signup = () => {
  const navigate = useNavigate();


  const { register, handleSubmit, control, formState: { errors } } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: '',
      email: '',
      phoneNumber: '',
      dob: '',
      gender: '',
      address1: '',
      address2: '',
      postalCode: '',
      password: '',
      confirmPassword: ''
    }
  });


  const onSubmit = (data: SignupFormData) => {
    console.log(data);
    localStorage.setItem('userData',JSON.stringify(data))
    navigate('/login');
  };

  return (
    <Box sx={{ backgroundColor: '#F4F4F9', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ display: 'flex', paddingTop: '80px', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', gap: '20px', paddingBottom: '2rem' }}>
        <Box sx={{ textAlign: 'start', width: { xs: '100%', md: '70%' }, maxWidth: '800px', padding: '20px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#FFFFFF' }}>
          <Typography variant='h5' sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>Create Your Account</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', gap: '20px' }}>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Username</Typography>
                <Input
                  {...register('username')}
                  disableUnderline
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
                {errors.username &&  <Typography sx={{ color: 'red' }}>{errors.username.message}</Typography>}
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Email</Typography>
                <Input
                  {...register('email')}
                  type="email"
                  disableUnderline
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
                {errors.email && <Typography sx={{ color: 'red' }}>{errors.email.message}</Typography>}
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Phone Number</Typography>
                <Input
                  {...register('phoneNumber')}
                  type="number"
                  disableUnderline
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
                {errors.phoneNumber && <Typography sx={{ color: 'red' }}>{errors.phoneNumber.message}</Typography>}
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Date of Birth</Typography>
                <Input
                  {...register('dob')}
                  type="date"
                  disableUnderline
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
                {errors.dob && <Typography sx={{ color: 'red' }}>{errors.dob.message}</Typography>}
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Gender</Typography>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      defaultValue=""
                      variant='standard'
                      disableUnderline
                      sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                      size='small'
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  )}
                />
                {errors.gender && <Typography sx={{ color: 'red' }}>{errors.gender.message}</Typography>}
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Address line 1</Typography>
                <Input
                  {...register('address1')}
                  disableUnderline
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
                {errors.address1 && <Typography sx={{ color: 'red' }}>{errors.address1.message}</Typography>}
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Address line 2</Typography>
                <Input
                  {...register('address2')}
                  disableUnderline
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
                {errors.address2 && <Typography sx={{ color: 'red' }}>{errors.address2.message}</Typography>}
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Postal Code</Typography>
                <Input
                  {...register('postalCode')}
                  type="number"
                  disableUnderline
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
                {errors.postalCode && <Typography sx={{ color: 'red' }}>{errors.postalCode.message}</Typography>}
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Password</Typography>
                <Input
                  {...register('password')}
                  type="password"
                  disableUnderline
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
                {errors.password && <Typography sx={{ color: 'red' }}>{errors.password.message}</Typography>}
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 20px)', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontSize: { xs: '0.875rem', md: '1rem' } }}>Confirm Password</Typography>
                <Input
                  {...register('confirmPassword')}
                  type="password"
                  disableUnderline
                  sx={{ width: '100%', fontSize: { xs: '0.875rem', md: '1rem' }, border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  size='small'
                />
                {errors.confirmPassword && <Typography sx={{ color: 'red' }}>{errors.confirmPassword.message}</Typography>}
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
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
