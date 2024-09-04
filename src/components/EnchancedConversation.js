import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

function ImageTextGrid() {
  return (
    <Box sx={{ display: 'flex' }} style={{ padding: "9vh" }}>
      {/* Left side content */}
      <Box
        sx={{
          flex: 3,
          backgroundImage: 'url(/enhancedImage.png)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
        }}
      />

      {/* Right side content */}
      <Box sx={{ 
        flex: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        padding: '3vh', 
        paddingLeft: '5vh' 
      }}>
        <Typography variant="h4" color="black" textAlign="left">
          Enhanced Conversation
        </Typography>
        <Typography variant="h8" color="black" textAlign="left">
          Built for your business needs, <br />
          acts towards business success
        </Typography>
        
        <Box sx={{ my: 4 }} />

        <Typography variant="h6" color="black" textAlign='left'>
          Smart Negotiation
        </Typography>
        
        <Typography variant="body1" color="black" textAlign='left'>
          Our empathatic AI senses customer tone, emotion, and intent to respond just like human would
        </Typography>

        <Box sx={{ my: 2 }} />

        <Typography variant="h6" color="black" textAlign='left'>
          Cross-selling Capabilities
        </Typography>
        
        <Typography variant="body1" color="black" textAlign='left'>
        Feels like a natural conversation with someone who truly understands you.
        </Typography>
      </Box>
    </Box>
  );
}

export default ImageTextGrid;