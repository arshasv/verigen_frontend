import React from 'react';
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
  Paper,
  Link,
  Avatar,
  CssBaseline,
  Snackbar,
  Alert,
  Stack,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const signinSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

type ISignin = z.infer<typeof signinSchema>;

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<ISignin>({
    resolver: zodResolver(signinSchema),
  });

  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<'error' | 'success'>('error');

  const onSubmitHandler: SubmitHandler<ISignin> = async (data) => {
    try {
      const response = await signInUser(data);
      console.log('Response:', response);
      setUser(response);
      navigate('/home');
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

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign In
        </Typography>
        <Box 
          component="form" 
          onSubmit={handleSubmit(onSubmitHandler)} 
          sx={{ mt: 1, width: '100%' }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
          <Box sx={{ mt: 2, mb: 2, textAlign: 'right' }}>
            <Link href="forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link href="signup" variant="body2">
                Sign Up
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

