import React from 'react';
import { Box, Typography, Container, Divider, Link, Grid, TextField, Button } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const AppFooter = () => {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              NariNivesh
            </Typography>
            <Typography variant="body2" paragraph>
              Empowering women entrepreneurs through innovative financial solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn />
              </Link>
              <Link href="#" color="inherit">
                <Instagram />
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Solutions
            </Typography>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Crowdlending
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Credit Evaluation
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Financial Literacy
            </Link>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Company
            </Typography>
            <Link href="#" variant="body2" display="block" gutterBottom>
              About Us
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Team
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Careers
            </Link>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" paragraph>
              Subscribe to our newsletter for updates
            </Typography>
            <Box component="form" sx={{ display: 'flex' }}>
              <TextField
                placeholder="Your email"
                variant="outlined"
                size="small"
                fullWidth
                sx={{ 
                  bgcolor: 'white',
                  borderRadius: '4px 0 0 4px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent',
                    },
                  },
                }}
              />
              <Button 
                variant="contained" 
                color="secondary"
                sx={{ 
                  borderRadius: '0 4px 4px 0',
                  boxShadow: 'none'
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />
        
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} NariNivesh. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default AppFooter;