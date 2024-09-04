import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
        </Typography>
        <Button color="secondary" component={Link} to="/">Home</Button>
        <Button color="primary">Contact</Button>
        <Button color="primary">Demo</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
