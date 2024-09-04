import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function ImageRow() {
  return (
    <Box sx={{ padding: '3vh', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Join the business redefinig work with AI.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <img
            src="/Partner1.jpeg"
            alt="Service 1"
            style={{ width: '100%', borderRadius: '10px', height : '300px' }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img
            src="/Partner2.jpeg"
            alt="Service 2"
            style={{ width: '100%', borderRadius: '10px', height : '300px' }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img
            src="/partner3.jpg"
            alt="Service 3"
            style={{ width: '100%', borderRadius: '10px', height : '300px'}}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ImageRow;
