import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function ImageGallery() {
  const [playingAudio, setPlayingAudio] = useState(null);
  const [audioObjects, setAudioObjects] = useState({});

  const createAudio = useCallback((audioSrc) => {
    if (!audioObjects[audioSrc]) {
      const audio = new Audio(audioSrc);
      audio.onended = () => {
        console.log(`Audio ended: ${audioSrc}`);
        setPlayingAudio(null);
      };
      audio.onerror = () => {
        console.error("Error playing audio:", audioSrc);
        setPlayingAudio(null);
      };
      setAudioObjects(prev => ({ ...prev, [audioSrc]: audio }));
      return audio;
    }
    return audioObjects[audioSrc];
  }, [audioObjects]);

  const handleClick = useCallback((audioSrc) => {
    const audio = createAudio(audioSrc);

    if (playingAudio && playingAudio.src === audio.src) {
      playingAudio.pause();
      setPlayingAudio(null);
    } else {
      if (playingAudio) {
        playingAudio.pause();
      }
      

      audio.play()
        .then(() => {
          console.log(`Playing audio: ${audioSrc}`);
          setPlayingAudio(audio);
        })
        .catch(error => {
          console.error(`Error playing audio: ${error}`);
        });
    }
  }, [playingAudio, createAudio]);

  useEffect(() => {
    return () => {
      Object.values(audioObjects).forEach(audio => audio.pause());
    };
  }, [audioObjects]);

  const audioItems = [
    { imgSrc: '/image1.png', audioSrc: '/audio1.mp3' },
    { imgSrc: '/image2.png', audioSrc: '/audio2.mp3' },
    { imgSrc: '/image3.png', audioSrc: '/audio3.mp3' },
    { imgSrc: '/image4.png', audioSrc: '/audio4.mp3' },
  ];

  return (
    <Box sx={{ display: 'flex' }} style={{ padding: "9vh" }}>
      {/* Left side content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '3vh', paddingRight: '20vh' }}>
        <Typography variant="h4" color="black" textAlign="left">
          Human <br />
          connection
        </Typography>
        
        <Box sx={{ my: 4 }} />

        <Typography variant="h6" color="black" textAlign='left'>
          Human-like emotion and tone
        </Typography>
        
        <Typography variant="body1" color="black" textAlign='left'>
          Our empathetic AI senses customer tone, emotion, and intent to respond just like a kind human would.
        </Typography>

        <Box sx={{ my: 2 }} />

        <Typography variant="h6" color="black" textAlign='left'>
          Contextual understanding and response
        </Typography>
        
        <Typography variant="body1" color="black" textAlign='left'>
          Feels like a natural conversation with someone who truly understands you.
        </Typography>
      </Box>

      {/* Right side content */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: 'url(/imagegallerybg.png)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px', 
        }}
      >
        <Grid container spacing={2}>
          {audioItems.map((item, index) => (
            <Grid
              item
              xs={6}
              key={index}
              sx={{ position: 'relative', padding: '10px' }} 
            >
              <img
                src={item.imgSrc}
                alt={`Description of Image ${index + 1}`}
                onClick={() => handleClick(item.audioSrc)}
                style={{ width: '100%', cursor: 'pointer', display: 'block' }}
              />
              <IconButton
                onClick={() => handleClick(item.audioSrc)}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)', 
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                }}
              >
                {playingAudio && playingAudio.src.endsWith(item.audioSrc) ? (
                  <PauseIcon />
                ) : (
                  <PlayArrowIcon />
                )}
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ImageGallery;