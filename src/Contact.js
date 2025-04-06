import React from 'react';
import { Box, Typography, Grid, TextField, Button, Paper, Container } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
          Contact Us
        </Typography>
        
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                Send us a message
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <TextField
                  name="name"
                  label="Your Name"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                />
                
                <TextField
                  name="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                />
                
                <TextField
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  fullWidth
                  value={formData.phone}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                
                <TextField
                  name="message"
                  label="Your Message"
                  multiline
                  rows={4}
                  fullWidth
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                />
                
                <Button 
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                Get in touch
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Email color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1">
                    pragya.mahajan06@gmail.com
                  </Typography>
                </Box>
                
                <Box display="flex" alignItems="center" mb={2}>
                  <Phone color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1">
                    +91 8427233663
                  </Typography>
                </Box>
                
                <Box display="flex" alignItems="flex-start" mb={2}>
                  <LocationOn color="primary" sx={{ mr: 2, mt: 0.5 }} />
                  <Typography variant="body1">
                    Asima Hostel<br />
                    IIT Patna<br />
                    Bihar 801106
                  </Typography>
                </Box>
              </Box>
              
              {/*<Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Office Hours
                </Typography>
                <Typography variant="body1" paragraph>
                  Monday - Friday: 9:00 AM - 6:00 PM
                </Typography>
                <Typography variant="body1">
                  Saturday: 10:00 AM - 2:00 PM
                </Typography>
              </Box>*/}
              
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Follow Us
                </Typography>
                <Box display="flex" gap={2}>
                  <Button variant="outlined" size="small">
                    Facebook
                  </Button>
                  <Button variant="outlined" size="small">
                    Twitter
                  </Button>
                  <Button variant="outlined" size="small">
                    LinkedIn
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;