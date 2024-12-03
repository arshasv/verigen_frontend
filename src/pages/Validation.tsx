import { Box, Button, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';

export default function Component() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/home'); 
  };

  return (
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
      <CheckCircleOutlineIcon
        sx={{
          fontSize: 48,
          mb: 1,
        }}
      />
      <Typography
        variant="h6"
        component="h1"
        sx={{
          fontWeight: 500,
          mb: 2,
        }}
      >
        Verification Successful
      </Typography>
      <Button
        variant="contained"
        onClick={handleButtonClick} 
        sx={{
          px: 4,
          py: 1,
          textTransform: 'none',
        }}
      >
        Let's get started
      </Button>
    </Box>
  );
}