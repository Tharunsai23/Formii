import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './VideoSlideshow.css'; 

function VideoSlideshow() {
  const videos = useMemo(() => [
    '/video1.mp4',
    '/video2.mp4',
    '/video3.mp4',
    '/video4.mp4',
  ], []);

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideo((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [videos]);

  return (
    <Box className="slideshow-container">
      <br />
      <br /> 
      <Typography variant="h4" color="black" style={{ textAlign: "center" }}>Intelligence behind every customer interaction</Typography>
      <br></br>
      <video src={videos[currentVideo]} autoPlay muted controls width="100%">
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>
      <div className="slideshow-controls">
        <Button variant="contained" color="primary" onClick={() => setCurrentVideo((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)}>
          Previous
        </Button>
        <Typography variant="h6" color='white'>{currentVideo + 1} of {videos.length}</Typography>
        <Button variant="contained" color="primary" onClick={() => setCurrentVideo((prevIndex) => (prevIndex + 1) % videos.length)}>
          Next
        </Button>
      </div>
    </Box>
  );
}

export default VideoSlideshow;