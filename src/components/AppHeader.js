import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ py: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            NariNivesh
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
            <Button
              component={Link}
              to="/about"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/solutions"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Solutions
            </Button>
            <Button
              component={Link}
              to="/contact"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Contact
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/contact"
              sx={{ ml: 2 }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;