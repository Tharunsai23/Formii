import React, { useState } from 'react';
import { Box, Grid, Typography, Stepper, Step, StepLabel, Button, MenuItem, TextField, Paper } from '@mui/material';

function Setup() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });

  const steps = [
    'What is your organization’s primary industry?',
    'What is the size of your customer support team?',
    'What AI technologies are you currently using?',
    'How do you plan to integrate AI into customer support?',
    'What are your goals for AI in customer support?',
  ];

  const options = {
    question1: ['Healthcare', 'Finance', 'Retail', 'Technology', 'Education', 'Other'],
    question2: ['1-10', '11-50', '51-200', '201-500', '500+'],
    question3: ['None', 'Chatbots', 'Sentiment Analysis', 'Voice Recognition', 'Other'],
    question4: ['Automate responses', 'Analyze customer sentiment', 'Enhance agent capabilities', '24/7 support', 'Other'],
    question5: ['Improve customer satisfaction', 'Reduce response time', 'Cut costs', 'Increase efficiency', 'Other'],
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Paper elevation={3} sx={{ margin: '5vh', padding: '3vh', borderRadius: '15px', backgroundColor: '#f0f4f8', height: '80vh' }}>
      <Box sx={{ display: 'flex', height: '100%' }}>
        <Grid container spacing={4} sx={{ height: '100%' }}>
          {/* Left Side Text */}
          <Grid item xs={4} sx={{ padding: '2rem', borderRadius: '10px', height: '100%' }}>
            <Typography variant="h4" color="#3f51b5" gutterBottom>
              Setup and enter auto-cruise
            </Typography>
            <Box sx={{ marginTop: '2rem' }}>
              <Typography variant="h6" color="textSecondary">
                One-time Setup
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Setup in just 3 days
              </Typography>
            </Box>
            <Box sx={{ marginTop: '2rem' }}>
              <Typography variant="h6" color="textSecondary">
                Personalization
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Setup your brand guidelines in one go to get started
              </Typography>
            </Box>
            <Box sx={{ marginTop: '2rem' }}>
              <Typography variant="h6" color="textSecondary">
                Self-learning
              </Typography>
              <Typography variant="body1" color="textSecondary">
                AI learns from various customer interactions and improves itself. You can train your AI when necessary.
              </Typography>
            </Box>
            <Box sx={{ marginTop: '2rem' }}>
              <Typography variant="h6" color="textSecondary">
                Analytics
              </Typography>
              <Typography variant="body1" color="textSecondary">
                See call recordings, transcripts, and smart metrics that analyze your call quality.
              </Typography>
            </Box>
          </Grid>

          {/* Right Side Form */}
          <Grid item xs={8} sx={{ height: '100%' }}>
            <Paper elevation={2} sx={{ padding: '2vh', backgroundColor: '#ffffff', borderRadius: '10px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={label} completed={index < activeStep}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              {activeStep < steps.length && (
                <Box sx={{ marginTop: '2rem', flex: 1 }}>
                  <TextField
                    select
                    fullWidth
                    label={steps[activeStep]}
                    name={`question${activeStep + 1}`}
                    value={formData[`question${activeStep + 1}`]}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    {options[`question${activeStep + 1}`].map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" color="secondary" disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default Setup;
