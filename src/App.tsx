import { CssBaseline, ThemeProvider, Button } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home'; 
import SigninPage from './pages/Signin'; 
import SignupPage from './pages/Signup'; 
import ForgotPassword from './pages/ForgotPassword';
import Authentication from './pages/Authentication'; 
import PasswordVerified from './pages/PasswordVerified';
import Validation from './pages/Validation';
import { useColorTheme } from './themes/use-color-theme'; 
import SetNewPassword from './pages/SetNewPassword';

function App() {
  const { theme, toggleColorMode } = useColorTheme(); 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}>
          <Button onClick={toggleColorMode} color="inherit">
            Toggle Theme
          </Button>
        </div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} /> 
          <Route path="/signup" element={<SignupPage />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/password-verified" element={<PasswordVerified />} />
          <Route path="/new-password" element={<SetNewPassword />} />
          <Route path="/validation" element={<Validation />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;