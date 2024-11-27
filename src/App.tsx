import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SigninPage from './pages/Signin'; 
import SignupPage from './pages/Signup'; 
import ForgotPassword  from './pages/ForgotPassword';
import Authentication from './pages/Authentication'; 
import PasswordVerified from './pages/PasswordVerified';
function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SigninPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/password-verified" element={<PasswordVerified />} />

      </Routes>
    </Router>
  );
}

export default App;