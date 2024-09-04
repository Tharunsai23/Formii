import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

function SaveTimeSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#F5F5F0', 
        padding: '4vh 2vw', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4vh 2vw',
          borderRadius: '15px',
          maxWidth: '80%',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '4vh' }}>
          Save Time, Cut Costs, and Drive Revenue with AI
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" color="orange">
              0
            </Typography>
            <Typography variant="h6">Missed Interactions</Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h3" color="orange">
              &lt; 48hrs
            </Typography>
            <Typography variant="h6">On time to set, no more staffing woes</Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h3" color="orange">
              80%
            </Typography>
            <Typography variant="h6">Cost Reduction</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default SaveTimeSection;
