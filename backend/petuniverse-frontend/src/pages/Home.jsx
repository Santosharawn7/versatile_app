import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Welcome to Flask Auth App
      </Typography>
      <Typography>
        This is a simple authentication system using React for the frontend and Flask for the backend.
      </Typography>
    </Container>
  );
};

export default Home;
