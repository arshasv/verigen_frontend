import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthenticationPage from './pages/Authentication'; 
import SigninPage from './pages/Signin'; 
import SignupPage from './pages/Signup'; 
import ForgotPassword  from './pages/ForgotPassword'; 
function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/authentication" element={<AuthenticationPage />} />
        <Route path="/" element={<SigninPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;