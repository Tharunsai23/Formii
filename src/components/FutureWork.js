import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function FutureOfWork() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: `url('/finalbg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
        <Typography variant="h3" color='white' sx={{ fontWeight: 'bold', mb: 4 }}>
          Experience the Future of Work Today
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              padding: '10px 20px',
              borderRadius: '25px',
              textTransform: 'none',
              fontWeight: 'bold',
            }}
          >
            Get in touch with Sales
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'orange',
              padding: '10px 20px',
              borderRadius: '25px',
              textTransform: 'none',
              fontWeight: 'bold',
            }}
          >
            Try the Demo
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FutureOfWork;
