import React, { useState } from 'react';
import { Box, Typography, Stepper, Step, StepLabel, Button, TextField, Paper, Grid } from '@mui/material';
import { VerifiedUser, AccountBalanceWallet, Business } from '@mui/icons-material';

const steps = ['Personal Information', 'Business Details', 'Verification'];

const BlockchainIdentity = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [business, setBusiness] = useState({
    name: '',
    type: '',
    upi: ''
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    alert('Identity creation submitted!');
    // Reset form
    setActiveStep(0);
    setAadhaar('');
    setPan('');
    setBusiness({ name: '', type: '', upi: '' });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Blockchain Identity
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Create a secure, tamper-proof digital identity for financial access
      </Typography>
      
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mt: 4 }}>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        {activeStep === 0 && (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              Personal Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Aadhaar Number"
                  fullWidth
                  value={aadhaar}
                  onChange={(e) => setAadhaar(e.target.value)}
                  placeholder="12-digit number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="PAN Number"
                  fullWidth
                  value={pan}
                  onChange={(e) => setPan(e.target.value)}
                  placeholder="10-character code"
                />
              </Grid>
            </Grid>
          </Box>
        )}
        
        {activeStep === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              Business Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Business Name"
                  fullWidth
                  value={business.name}
                  onChange={(e) => setBusiness({...business, name: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  select
                  label="Business Type"
                  fullWidth
                  value={business.type}
                  onChange={(e) => setBusiness({...business, type: e.target.value})}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="">Select business type</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="services">Services</option>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Business UPI ID"
                  fullWidth
                  value={business.upi}
                  onChange={(e) => setBusiness({...business, upi: e.target.value})}
                  placeholder="yourbusiness@upi"
                />
              </Grid>
            </Grid>
          </Box>
        )}
        
        {activeStep === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              Identity Verification
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
                  <VerifiedUser color="primary" sx={{ fontSize: 50, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Aadhaar Verification
                  </Typography>
                  <Typography variant="body2" paragraph>
                    We'll send an OTP to your registered mobile number
                  </Typography>
                  <Button variant="outlined">
                    Send OTP
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
                  <AccountBalanceWallet color="primary" sx={{ fontSize: 50, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Business Verification
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Upload business registration documents
                  </Typography>
                  <Button variant="outlined">
                    Upload Documents
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        )}
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
          >
            Back
          </Button>
          
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
            >
              Create Identity
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={
                (activeStep === 0 && (!aadhaar || !pan)) ||
                (activeStep === 1 && (!business.name || !business.type || !business.upi))
              }
            >
              Next
            </Button>
          )}
        </Box>
      </Paper>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <VerifiedUser color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Secure Identity
            </Typography>
            <Typography variant="body2">
              Tamper-proof digital identity on the blockchain
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Business color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Business Credentials
            </Typography>
            <Typography variant="body2">
              Verifiable business records for lenders
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <AccountBalanceWallet color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Financial History
            </Typography>
            <Typography variant="body2">
              Build credit without traditional banks
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlockchainIdentity;