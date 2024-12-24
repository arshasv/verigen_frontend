'use client'

import React, { useState, useMemo } from 'react';
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
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// Assuming this import is correct for your project structure
import { signUpUser } from '../API/apiService';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  security_question: z.string().min(1, { message: 'Security question is required' }),
  confirmPassword: z.string().min(8, { message: 'Confirm Password must be at least 8 characters' }),
  answer: z.string().min(1, { message: 'Answer is required' }),
  password: z.string().min(8, 'Password must be at least 8 characters').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 
    'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character'
  ),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type FormData = z.infer<typeof schema>;

export default function ImprovedRegistrationForm() {
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

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { confirmPassword, ...dataToSend } = data;
    try {
      const response = await signUpUser(dataToSend);
      console.log('Response:', response);
      navigate('/signin');
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
              Register
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Please enter your details
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    placeholder="Enter your name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    type="email"
                    placeholder="Enter your email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    type="password"
                    placeholder="Create a password"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    {...register("confirmPassword")}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    type="password"
                    placeholder="Confirm password"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Security Question"
                    {...register("security_question")}
                    error={!!errors.security_question}
                    helperText={errors.security_question?.message}
                    placeholder="Ex. What was the name of your first school?"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Answer"
                    {...register("answer")}
                    error={!!errors.answer}
                    helperText={errors.answer?.message}
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
                REGISTER NOW
              </Button>

              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2">
                  Have an account?{' '}
                  <Link href="/sign-in" underline="hover" sx={{ fontWeight: 'medium' }}>
                    Sign in
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

