import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Home';
import About from './About';
import Solutions from './Solutions';
import Contact from './Contact';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppHeader />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <AppFooter />
    </Box>
  );
}

export default App;