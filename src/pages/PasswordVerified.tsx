import { Box, Button, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';

export default function PasswordVerified() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Box
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
            maxWidth: '400px',
            width: '90%',
            borderRadius: '8px',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <CheckCircleOutlineIcon
              sx={{
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
            Password Reset
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 2,
            }}
          >
            Your password has been successfully reset.
          </Typography>

          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{
              py: '0.8rem',
              px: '2rem',
              width: '80%',
              textTransform: 'none',
              fontSize: '1rem',
            }}
          >
            Let's get started
          </Button>
        </Box>
      </Box>
    </Box>
  );
}