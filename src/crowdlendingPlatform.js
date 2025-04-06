import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, TextField, Slider, Button, Divider } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AccountBalance, Groups, MonetizationOn } from '@mui/icons-material';

const CrowdlendingPlatform = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [isApplying, setIsApplying] = useState(false);

  const handleApply = () => {
    setIsApplying(true);
    // Simulate API call
    setTimeout(() => {
      setIsApplying(false);
      alert('Application submitted successfully!');
    }, 2000);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Pay-It-Forward Crowdlending
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Connect with women investors who want to support your business growth
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Apply for a Loan
            </Typography>
            
            <Box sx={{ mt: 3 }}>
              <Typography gutterBottom>Loan Amount (₹)</Typography>
              <Slider
                value={loanAmount}
                onChange={(e, newValue) => setLoanAmount(newValue)}
                min={10000}
                max={500000}
                step={5000}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `₹${value.toLocaleString()}`}
                sx={{ mb: 3 }}
              />
              
              <TextField
                select
                label="Loan Term"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                fullWidth
                SelectProps={{
                  native: true,
                }}
                sx={{ mb: 3 }}
              >
                <option value={6}>6 Months</option>
                <option value={12}>12 Months</option>
                <option value={18}>18 Months</option>
                <option value={24}>24 Months</option>
              </TextField>
              
              <LoadingButton
                loading={isApplying}
                variant="contained"
                size="large"
                fullWidth
                onClick={handleApply}
              >
                Apply Now
              </LoadingButton>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Become an Investor
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Join our community of women supporting women with fair financing
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Box textAlign="center">
                    <MonetizationOn color="primary" sx={{ fontSize: 50 }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>0% Options</Typography>
                    <Typography variant="body2">Interest-free loans available</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box textAlign="center">
                    <AccountBalance color="primary" sx={{ fontSize: 50 }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>Tax Benefits</Typography>
                    <Typography variant="body2">Special deductions for investors</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box textAlign="center">
                    <Groups color="primary" sx={{ fontSize: 50 }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>Community</Typography>
                    <Typography variant="body2">Mentorship opportunities</Typography>
                  </Box>
                </Grid>
              </Grid>
              
              <Divider sx={{ my: 4 }} />
              
              <Button
                variant="outlined"
                size="large"
                fullWidth
              >
                Join as Investor
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CrowdlendingPlatform;