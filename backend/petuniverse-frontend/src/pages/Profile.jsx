import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { getUserProfile } from '../services/auth';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getUserProfile();
        setUser(profile);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
    fetchProfile();
  }, []);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Typography>First Name: {user.first_name}</Typography>
      <Typography>Last Name: {user.last_name}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>Phone: {user.phone_number}</Typography>
      <Typography>Sex: {user.sex}</Typography>
      <Typography>Age: {user.age}</Typography>
    </Container>
  );
};

export default Profile;