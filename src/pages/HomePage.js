import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import VideoSlideshow from '../components/VideoSlideshow';
import ImageGallery from '../components/ImageGallery';
import Setup from '../components/Setup';
import PartnerSection from '../components/PartnerSection';
import EnchancedConversation from '../components/EnchancedConversation';
import SmartAutomation from '../components/SmartAutomation';
import SaveTime from '../components/SaveTime';
import FutureWork from '../components/FutureWork';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <ParallaxProvider>
      <div>
        <Parallax speed={0}>
          <Box
            sx={{
              height: '100vh',
              backgroundImage: 'url(/background.png)',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h3">The Future of Work is here</Typography>
            <Typography variant="h5">No more staffing woes. Experience human-like empathy with machine like precision</Typography>
            <Button variant="contained" color="secondary" component={Link} to="/demo">
              Try the Demo
            </Button>
          </Box>
        </Parallax>

        <Parallax speed={12}>
          <Box sx={{ height: '70vh', padding: '20px' }}>
            <VideoSlideshow />
          </Box>
        </Parallax>

        <Parallax speed={-5}>
          <Box sx={{ height: '90vh', display: 'flex' }}>
            <Box sx={{ flex: 1 }}>
              <ImageGallery />
            </Box>
          </Box>
        </Parallax>

        <Parallax speed={10}>
          <Box sx={{ height: '100vh' }}>
            <EnchancedConversation />
          </Box>
        </Parallax>

        <Parallax speed={-10}>
          <Box sx={{ height: '70vh', padding : '5vh' }}>
            <SmartAutomation />
          </Box>
        </Parallax>

        <Parallax speed={5}>
          <Box sx={{ height: '90vh' }}>
            <Setup />
          </Box>
        </Parallax>

        <Parallax speed={-5}>
          <Box sx={{ height: '60vh', padding: '20px' }}>
            <PartnerSection />
          </Box>
        </Parallax>
        <Parallax speed={5}>
          <Box sx={{ height: '80vh', padding: '20px' }}>
            <SaveTime />
          </Box>
        </Parallax>
        <Parallax speed={-5}>
          <Box sx={{ height: '100vh', padding: '20px' }}>
            <FutureWork />
          </Box>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default HomePage;