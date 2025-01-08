import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, object, string, TypeOf } from 'zod';
import { resetPassword } from '../API/apiService'; // Import the resetPassword function

const authenticationSchema = object({
  answer: string().min(1, 'Answer is required'),
  password: string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character'
    ),
  confirmPassword: string().min(1, 'Confirm Password is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type AuthenticationForm = TypeOf<typeof authenticationSchema>;

export default function Authentication() {
  const methods = useForm<AuthenticationForm>({
    resolver: zodResolver(authenticationSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const location = useLocation();
  const { email, securityQuestion } = location.state || { email: '', securityQuestion: '' };
  const navigate = useNavigate(); // Use useNavigate hook

  const onSubmitHandler: SubmitHandler<AuthenticationForm> = async (data) => {
    try {
      // Call the resetPassword function
      const response = await resetPassword(email, data.answer, data.password);
      console.log('Password reset successful:', response);

      // Navigate to the next page after successful submission
      navigate('/'); // Replace '/next-page' with your actual next page route
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmitHandler)}
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          maxWidth: '400px',
          mx: 'auto',
          px: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(67, 97, 238, 0.1)',
            borderRadius: '50%',
            p: 2,
            mb: 1,
          }}
        >
          <KeyIcon
            sx={{
              color: '#4361ee',
              fontSize: 32,
            }}
          />
        </Box>

        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          Verify User
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            mb: 2,
          }}
        >
          Fill the details as given during the time of sign up
        </Typography>

        <TextField
          label="Security Question"
          value={securityQuestion}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
        />

        <TextField
          fullWidth
          label="Answer"
          {...register('answer')}
          error={!!errors.answer}
          helperText={errors.answer ? errors.answer.message : ''}
          required
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
          required
          sx={{ mb: 3 }}
          autoComplete="new-password"
        />

        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          {...register('confirmPassword')}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
          required
          sx={{ mb: 3 }}
          autoComplete="new-password"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#4361ee',
            py: 1.5,
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          Submit
        </Button>
      </Box>
    </FormProvider>
  );
}