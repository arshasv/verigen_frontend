import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import { object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

// Zod schema for password validation
const passwordSchema = object({
  newPassword: string()
    .min(8, 'Password must be at least 8 characters long')
    .max(32, 'Password must be less than 32 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-zA-Z]/, 'Password must contain at least one letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),
    
  passwordConfirm: string().min(1, 'Please confirm your password'),
}).refine((data) => data.newPassword === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
});

type ISetNewPassword = {
  newPassword: string;
  passwordConfirm: string;
};

export default function SetNewPassword() {
  const [errorMessage, setErrorMessage] = useState('');
  
  const methods = useForm<ISetNewPassword>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      newPassword: '',
      passwordConfirm: '',
    },
  });

  const onSubmitHandler: SubmitHandler<ISetNewPassword> = (values) => {
    console.log('New password submitted:', values);
    
    setErrorMessage(''); 
  };

  return (
    <Box
      component="form"
      onSubmit={methods.handleSubmit(onSubmitHandler)}
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(67, 97, 238, 0.1)',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 1,
        }}
      >
        <KeyIcon
          sx={{
            color: '#4361ee',
            fontSize: 24,
          }}
        />
      </Box>

      <Typography
        variant="h6"
        component="h1"
        sx={{
          color: '#1a1a1a',
          fontWeight: 500,
        }}
      >
        Set New Password
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          textAlign: 'center',
          mb: 2,
        }}
      >
        Your new password must be different from previously used passwords.
      </Typography>

      {errorMessage && (
        <Typography
          variant="body2"
          sx={{
            color: 'error.main',
            textAlign: 'center',
            mb: 2,
          }}
        >
          {errorMessage}
        </Typography>
      )}

      <TextField
        fullWidth
        type="password"
        label="New Password"
        {...methods.register('newPassword')}
        helperText={methods.formState.errors.newPassword?.message || "Must be at least 8 characters and include uppercase letters, lowercase letters, numbers, and special characters."}
        error={!!methods.formState.errors.newPassword}
        sx={{
          maxWidth: 400,
          mb: 1,
        }}
      />

      <TextField
        fullWidth
        type="password"
        label="Confirm New Password"
        {...methods.register('passwordConfirm')}
        helperText={methods.formState.errors.passwordConfirm?.message}
        error={!!methods.formState.errors.passwordConfirm}
        sx={{
          maxWidth: 400,
          mb: 3,
        }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: '#4361ee',
          maxWidth: 400,
          py: 1.5,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#3451db',
          },
        }}
      >
        Reset Password
      </Button>
    </Box>
  );
}