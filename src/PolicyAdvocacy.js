import React from 'react';
import { Box, Typography, Grid, Paper, Button, Divider, List, ListItem, ListItemText, TextField } from '@mui/material';
import { Gavel, Policy, Campaign } from '@mui/icons-material';

const policies = [
  {
    title: "30% Mandate for Women Loans",
    description: "Advocating for banks to allocate 30% of Mudra/Stand-Up India loans to women entrepreneurs",
    status: "In Progress",
    action: "Sign Petition",
    icon: <Policy color="primary" />
  },
  {
    title: "GST Exemptions",
    description: "Proposing zero GST for first 3 years for women-owned MSMEs",
    status: "Under Review",
    action: "Contact MP",
    icon: <Gavel color="primary" />
  },
  {
    title: "SHG Digital Integration",
    description: "Pushing for nationwide digitization of SHG records for seamless banking",
    status: "Pilot Launched",
    action: "Join Pilot",
    icon: <Campaign color="primary" />
  }
];

const PolicyAdvocacy = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Policy Advocacy
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Driving systemic change through policy reforms
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {policies.map((policy, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Box sx={{ mr: 2 }}>
                  {policy.icon}
                </Box>
                <Typography variant="h6">{policy.title}</Typography>
              </Box>
              <Typography variant="body2" paragraph>
                {policy.description}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="caption" sx={{ 
                  bgcolor: policy.status === 'In Progress' ? 'warning.light' : 
                          policy.status === 'Under Review' ? 'info.light' : 'success.light',
                  px: 1,
                  borderRadius: 1
                }}>
                  {policy.status}
                </Typography>
              </Box>
              <Button 
                variant="outlined" 
                fullWidth
              >
                {policy.action}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mt: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Get Involved in Advocacy
        </Typography>
        <Typography variant="body1" paragraph>
          Join our network of advocates pushing for gender-inclusive financial policies
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemText
                  primary="Policy Awareness Campaigns"
                  secondary="Participate in our state-level awareness programs"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Community Mobilization"
                  secondary="Help organize SHG members for policy advocacy"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Research & Data Collection"
                  secondary="Contribute to our policy research initiatives"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Your Name"
              fullWidth
              sx={{ mb: 3 }}
            />
            <TextField
              label="Email"
              fullWidth
              sx={{ mb: 3 }}
            />
            <TextField
              label="Phone"
              fullWidth
              sx={{ mb: 3 }}
            />
            <Button 
              variant="contained"
              fullWidth
              size="large"
            >
              Join Advocacy Network
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PolicyAdvocacy;