'use client'

import React, { useState, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../API/apiService';
import { useAuth } from '../Context/AuthContext';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Grid,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const signinSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

type ISignin = z.infer<typeof signinSchema>;

export default function ImprovedSignInForm() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: mode === 'light' ? '#1976d2' : '#90caf9',
          },
          background: {
            default: mode === 'light' ? '#f5f5f5' : '#303030',
            paper: mode === 'light' ? '#ffffff' : '#424242',
          },
        },
      }),
    [mode]
  );

  const { register, handleSubmit, formState: { errors } } = useForm<ISignin>({
    resolver: zodResolver(signinSchema),
  });

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const onSubmitHandler: SubmitHandler<ISignin> = async (data) => {
    try {
      const response = await signInUser(data);
      console.log('Response:', response);
      setUser(response);
      navigate('/');
    } catch (error: any) {
      console.error('Error Message:', error.response?.data);
      console.error('Error Status:', error.response?.status);
      if (error.response?.status === 400) {
        alert('Invalid email or password.');
      } else if (error.response?.status === 500) {
        alert('Server error. Please try again later.');
      } else {
        console.error('An unexpected error occurred:', error);
        alert('Something went wrong. Please try again.');
      }
    }
  };

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ mt: 8, mb: 4, position: 'relative' }}>
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            sx={{ position: 'absolute', top: -40, right: 0 }}
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
              Sign In
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Please enter your credentials
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmitHandler)} sx={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 1.5 }}
                size="large"
              >
                SIGN IN
              </Button>

              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2">
                  Don't have an account?{' '}
                  <Link href="/sign-up" underline="hover" sx={{ fontWeight: 'medium' }}>
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

