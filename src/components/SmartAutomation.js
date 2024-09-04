import React from 'react';
import { Paper, Box, Typography, Grid } from '@mui/material';

function SmartAutomation() {
  const sections = [
    {
      heading: "24/7 Availability",
      text: "No down-times or shifts like teleCallers. Available at all-time and every time"
    },
    {
      heading: "Scalable as per your need",
      text: "All calls and conversations address during sudden and standard peak times. No more missed interactions."
    },
    {
      heading: "Only failovers to live agents",
      text: "Handles all calls and ensuring only important calls reach your live agents."
    }
  ];

  return (
    <Box sx={{ width: '100%', height: '60vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h3" color="black" align="center" gutterBottom sx={{ my: 3 }}>
        Smart Automation
      </Typography>
      <Paper elevation={3} sx={{ width: '100%', flex: 1, overflow: 'hidden' }}>
        <Grid container sx={{ height: '100%' }}>
          {sections.map((section, index) => (
            <Grid item xs={4} key={index}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '2vh',
                  borderRight: index < 2 ? '1px solid rgba(0, 0, 0, 0.12)' : 'none',
                }}
              >
                <Typography variant="h5" color="black" gutterBottom>
                  {section.heading}
                </Typography>
                <Typography variant="body1" align="center">
                  {section.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default SmartAutomation;