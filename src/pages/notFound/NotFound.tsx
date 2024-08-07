import { Box, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';

const NotFound: React.FC = () => {
    const [timer, setTimer] = useState<number>(3);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer === 0) {
                navigate('/');
            } else {
                setTimer((prev) => prev - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timer, navigate]);

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            backgroundColor: '#F4F4F9',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <Box sx={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #E0E0E0',
                borderRadius: '8px',
                padding: '2rem',
                boxShadow: '0px 2px 4px rgba(117, 134, 148, 0.2)',
                width: { xs: '90%', sm: '70%', md: '50%' },
                maxWidth: '600px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <ErrorOutlineIcon sx={{ fontSize: { xs: '50px', md: '80px' }, color: '#E74C3C' }} />
                <Typography variant='h4' sx={{ color: '#20203F', fontWeight: '500', marginY: '1rem' }}>
                    Page Not Found
                </Typography>
                <Typography sx={{ color: '#20203F', marginBottom: '1.5rem' }}>
                    Sorry, this page doesn't exist. You will be redirected to the homepage in <Typography variant='h6' sx={{color:'#E74C3C'}}>{timer}</Typography> seconds.
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<HomeIcon />}
                    onClick={() => navigate('/')}
                    sx={{
                        marginTop: '1rem',
                        boxShadow: '0px 2px 4px rgba(117, 134, 148, 0.2)',
                        '&:hover': {
                            boxShadow: '0px 4px 6px rgba(117, 134, 148, 0.4)'
                        }
                    }}
                >
                    Go to Homepage
                </Button>
            </Box>
        </Box>
    );
};

export default NotFound;
