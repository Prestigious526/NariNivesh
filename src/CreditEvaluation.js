import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, LinearProgress, Avatar, Grid } from '@mui/material';
import { CreditScore, VerifiedUser, Assessment } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

const CreditEvaluation = () => {
  const [upiId, setUpiId] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [score, setScore] = useState(null);

  const evaluateCredit = () => {
    setIsEvaluating(true);
    // Simulate API call
    setTimeout(() => {
      setIsEvaluating(false);
      setScore(Math.floor(Math.random() * 300) + 500);
    }, 2000);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        AI-Powered Credit Evaluation
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Get a fair credit assessment using alternative data sources
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Evaluate Your Credit
            </Typography>
            
            <Box sx={{ mt: 3 }}>
              <TextField
                label="UPI ID or Transaction History"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                fullWidth
                sx={{ mb: 3 }}
                placeholder="yourname@upi"
              />
              
              <TextField
                label="Business Social Media/Reviews"
                value={socialMedia}
                onChange={(e) => setSocialMedia(e.target.value)}
                fullWidth
                sx={{ mb: 3 }}
                placeholder="Facebook/Instagram page"
              />
              
              <LoadingButton
                loading={isEvaluating}
                variant="contained"
                size="large"
                fullWidth
                onClick={evaluateCredit}
                disabled={!upiId || !socialMedia}
              >
                Get My Credit Score
              </LoadingButton>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
            {score ? (
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  Your Credit Score
                </Typography>
                <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                  <Avatar sx={{ 
                    width: 120, 
                    height: 120, 
                    bgcolor: score > 700 ? 'success.main' : score > 600 ? 'warning.main' : 'error.main',
                    fontSize: '2rem'
                  }}>
                    {score}
                  </Avatar>
                </Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {score > 700 ? 'Excellent' : score > 600 ? 'Good' : 'Fair'} credit rating
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={(score/850)*100} 
                  sx={{ height: 10, borderRadius: 5, mb: 3 }}
                  color={score > 700 ? 'success' : score > 600 ? 'warning' : 'error'}
                />
                <Button variant="contained" fullWidth>
                  View Loan Options
                </Button>
              </Box>
            ) : (
              <Box textAlign="center" sx={{ py: 4 }}>
                <CreditScore color="primary" sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  No Credit Score Yet
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Complete the evaluation to get your personalized credit score
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          How It Works
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
              <Box textAlign="center">
                <VerifiedUser color="primary" sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  No Collateral
                </Typography>
                <Typography variant="body2">
                  We evaluate your digital footprint instead of physical assets
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
              <Box textAlign="center">
                <Assessment color="primary" sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Fair Assessment
                </Typography>
                <Typography variant="body2">
                  AI eliminates human bias in credit decisions
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
              <Box textAlign="center">
                <CreditScore color="primary" sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Build Credit History
                </Typography>
                <Typography variant="body2">
                  Establish a formal credit profile for future needs
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreditEvaluation;