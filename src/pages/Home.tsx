import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Grid,
  Paper,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm, Controller } from 'react-hook-form';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
    background: {
      default: '#f0f9ff', 
    },
  },
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

const Logo = styled(Typography)({
  flexGrow: 1,
  fontWeight: 600,
  color: '#2563eb', 
  fontSize: '1.5rem',
});

const ProfileIcon = styled(AccountCircleIcon)({
  color: '#2563eb', 
});

const GetStartedButton = styled(Button)({
  marginTop: '64px', 
  padding: '16px 32px', 
  fontSize: '1.125rem',
});

const StepCard = styled(Paper)({
  padding: '24px', 
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', 
  },
});

export default function Upload() {
  const { control } = useForm();

  const steps = [
    { id: 1, title: 'Code Upload' },
    { id: 2, title: 'Code Syntax Verification' },
    { id: 3, title: 'Synthesis' },
    { id: 4, title: 'Floorplan' },
    { id: 5, title: 'Placement' },
    { id: 6, title: 'CTS' },
    { id: 7, title: 'Routing' },
    { id: 8, title: 'Finishing' },
    { id: 9, title: 'GDS II' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        flexGrow: 1, 
        minHeight: '100vh',
        backgroundColor: '#f0f9ff', 
        backgroundImage: 'linear-gradient(to bottom, #f0f9ff, #ffffff)',
      }}>
        <StyledAppBar position="static">
          <Toolbar>
            <Logo variant="h6">
              Verigen
            </Logo>
            <Button
              sx={{
                minWidth: 'auto',
                p: 1,
                borderRadius: '50%',
                '&:hover': { backgroundColor: 'rgba(37,99,235,0.1)' },
              }}
            >
              <ProfileIcon fontSize="large" />
            </Button>
          </Toolbar>
        </StyledAppBar>
        <Container maxWidth="lg">
          <Box sx={{ my: 8, textAlign: 'center' }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '6rem', color:'#2563eb' }}>
              Embrace The Power Of Electronic Design Automation
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ maxWidth: '600px', mx:'auto' }}>
              Experience a seamless and efficient automated design workflow for your Verilog code modules.
            </Typography>
            <Grid container spacing={4} sx={{ mt :8 }} justifyContent="center">
              {steps.map((step) => (
                <Grid item xs={12} sm={6} md={4} key={step.id} sx={step.id ===9 ? { md :{ gridColumn : '2 /3'}} :{}}>
                  <StepCard elevation={1}>
                    <Box sx={{ 
                      width :40 , 
                      height :40 , 
                      borderRadius :'50%', 
                      backgroundColor :'rgba(37,99,235,0.1)', 
                      display :'flex', 
                      alignItems :'center', 
                      justifyContent :'center',
                      mb :2,
                    }}>
                      <Typography variant="subtitle1" sx={{ color :'#2563eb' , fontWeight :600 }}>
                        {step.id}
                      </Typography>
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      
                    </Typography>
                  </StepCard>
                </Grid>
              ))}
            </Grid>
            <Controller
              name="getStarted"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <GetStartedButton
                  {...field}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Get Started
                </GetStartedButton>
              )}
            />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}