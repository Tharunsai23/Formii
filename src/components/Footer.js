import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#111', color: 'white' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            formi
          </Typography>
          <Box sx={{ borderTop: '1px solid #444', margin: '20px 0' }}></Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: 'orange', fontWeight: 'bold' }}>
            Get in Touch
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '10px' }}>
            Call us - +91 8017727622
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '10px' }}>
            Email - admin@formi.co.in
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '10px' }}>
            Find us - SY NO. 4/41 K No. 556 Venkateshwara Layout, Mahadevapura, Bangalore, Karnataka, India, 560048
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: 'orange', fontWeight: 'bold' }}>
            Find us
          </Typography>
          <Link href="#" color="inherit" sx={{ display: 'block', marginTop: '10px' }}>
            <Typography variant="h6">in</Typography>
          </Link>
          <Box sx={{ marginTop: '20px' }}>
            <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '5px' }}>
              Terms and Conditions
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '5px' }}>
              About Us
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '5px' }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '5px' }}>
              Refund Policy
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ borderTop: '1px solid #444', marginTop: '40px', paddingTop: '20px', textAlign: 'center' }}>
        <Typography variant="body2">© 2024 Qultured Media Private Limited</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
