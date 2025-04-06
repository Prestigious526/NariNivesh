import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, Container } from '@mui/material';
import { Diversity3, School, TrendingUp } from '@mui/icons-material';
const About = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
          About NariNivesh
        </Typography>
        
        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              NariNivesh is dedicated to bridging the gender gap in financial inclusion by providing innovative solutions tailored for women entrepreneurs in India.
            </Typography>
            <Typography variant="body1" paragraph>
              We combine technology, community support, and policy advocacy to create an ecosystem where women can access fair financing, build credit, and grow their businesses.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 2, borderRadius: 4 }}>
              <Box
                component="img"
                src="./image.jpg" 
                alt="Women entrepreneurs"
                sx={{
                  width: '100%',
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
        
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6 }}>
          Why We Exist
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={3}>
                <Diversity3 color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  The Gender Gap
                </Typography>
              </Box>
              <Typography variant="body1">
                Women constitute 48% of India's population but contribute only 18% to GDP. Only 14% of Indian women become business owners compared to 22% globally.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={3}>
                <School color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Financial Exclusion
                </Typography>
              </Box>
              <Typography variant="body1">
                Women receive only 27% of total bank credit despite multiple government schemes. Startups founded by women get less than 5% of total VC funding.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={3}>
                <TrendingUp color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Economic Potential
                </Typography>
              </Box>
              <Typography variant="body1">
                Advancing women's equality in India could add $770 billion to GDP by 2025. 30 million new women-led enterprises could generate 150-170 million jobs.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6 }}>
          Our Team
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {[
            { name: 'Pragya Mahajan', role: 'Founder & CEO', bio: 'Student' },
          ].map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%', textAlign: 'center' }}>
                <Avatar
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    mx: 'auto',
                    mb: 3,
                    bgcolor: 'primary.main',
                    fontSize: '2.5rem'
                  }}
                >
                  {member.name.split(' ').map(n => n[0]).join('')}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" paragraph>
                  {member.role}
                </Typography>
                <Typography variant="body2">
                  {member.bio}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;