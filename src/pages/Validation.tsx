import { Box, Button, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';

export default function Component() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/homepage'); 
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
          color: '#4CAF50',
          fontSize: 48,
          mb: 1,
        }}
      />
      <Typography
        variant="h6"
        component="h1"
        sx={{
          color: '#1a1a1a',
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
          backgroundColor: '#4361ee',
          px: 4,
          py: 1,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#3451db',
          },
        }}
      >
        Let's get started
      </Button>
    </Box>
  )
}