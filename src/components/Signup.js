import React from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Signup() {
  return (
    <Container maxWidth="xs">
      <div>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <form>
          <TextField label="Name" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
          />
          <Button variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" align="center">
          Already have an account?{' '}
          <Link component={RouterLink} to="/login">
            Login
          </Link>
        </Typography>
      </div>
    </Container>
  );
}

export default Signup;
