import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Paper, Grid, Button, Avatar, Chip, TextField } from '@mui/material';
import { School, Groups, Chat } from '@mui/icons-material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`financial-tabpanel-${index}`}
      aria-labelledby={`financial-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const courses = [
  { id: 1, title: "Basic Bookkeeping", language: "Hindi", duration: "1h", level: "Beginner" },
  { id: 2, title: "Digital Payments", language: "Tamil", duration: "45m", level: "Beginner" },
  { id: 3, title: "Loan Management", language: "Bengali", duration: "2h", level: "Intermediate" },
  { id: 4, title: "Business Scaling", language: "English", duration: "3h", level: "Advanced" },
];

const mentors = [
  { id: 1, name: "Rekha Kumar", expertise: "Textile Business", experience: "10+ years", location: "Delhi" },
  { id: 2, name: "Sunita Patel", expertise: "AgriTech", experience: "7 years", location: "Pune" },
  { id: 3, name: "Priya Sharma", expertise: "E-commerce", experience: "5 years", location: "Bangalore" },
];

const FinancialLiteracy = () => {
  const [value, setValue] = useState(0);
  const [activeChat, setActiveChat] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Financial Literacy & Training
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Build your financial knowledge with our tailored programs
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Courses" icon={<School />} iconPosition="start" />
          <Tab label="Mentorship" icon={<Groups />} iconPosition="start" />
          <Tab label="Live Chat" icon={<Chat />} iconPosition="start" />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={3} key={course.id}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <Chip 
                  label={course.language} 
                  size="small" 
                  sx={{ mb: 2 }} 
                  color="primary"
                  variant="outlined"
                />
                <Typography variant="body2" color="text.secondary" paragraph>
                  Duration: {course.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Level: {course.level}
                </Typography>
                <Button 
                  variant="outlined" 
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Enroll Now
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          {mentors.map((mentor) => (
            <Grid item xs={12} sm={6} md={4} key={mentor.id}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ mr: 2 }}>
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{mentor.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {mentor.expertise}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" paragraph>
                  Experience: {mentor.experience}
                </Typography>
                <Typography variant="body2" paragraph>
                  Location: {mentor.location}
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Request Mentorship
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          {activeChat ? (
            <Box>
              <Box sx={{ 
                height: 300, 
                border: '1px solid #ddd', 
                borderRadius: 2, 
                p: 2, 
                mb: 2,
                overflowY: 'auto'
              }}>
                <Box textAlign="center" sx={{ py: 4 }}>
                  <Chat color="primary" sx={{ fontSize: 60, mb: 2 }} />
                  <Typography variant="h6">Chat with our Financial Expert</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ask any questions about loans, business finance, or investments
                  </Typography>
                </Box>
              </Box>
              <Box display="flex">
                <TextField
                  fullWidth
                  placeholder="Type your question..."
                  variant="outlined"
                  size="small"
                />
                <Button variant="contained" sx={{ ml: 1 }}>
                  Send
                </Button>
              </Box>
            </Box>
          ) : (
            <Box textAlign="center" sx={{ py: 4 }}>
              <Chat color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h6">Live Financial Advice</Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Connect with our financial experts in real-time
              </Typography>
              <Button 
                variant="contained"
                onClick={() => setActiveChat(true)}
              >
                Start Chat
              </Button>
            </Box>
          )}
        </Paper>
      </TabPanel>
    </Box>
  );
};

export default FinancialLiteracy;