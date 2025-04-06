import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Empowering Women Entrepreneurs
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Access funding, build credit, and grow your business with our innovative financial solutions
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  component={Link}
                  to="/solutions"
                  variant="contained"
                  size="large"
                  sx={{ mr: 2 }}
                >
                  Explore Solutions
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="large"
                >
                  Contact Us
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Paper elevation={0} sx={{ p: 2, borderRadius: 4 }}>
                <Box
                  component="img"
                  src=".\images.jpg" // Replace with your image
                  alt="Women entrepreneurs"
                  sx={{
                    width: '100%',
                    borderRadius: 3,
                    boxShadow: 3,
                  }}
                />
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;