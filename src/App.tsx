import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SigninPage from './pages/Signin'; 
import SignupPage from './pages/Signup'; 
import ForgotPassword  from './pages/ForgotPassword';
import Authentication from './pages/Authentication'; 
import PasswordVerified from './pages/PasswordVerified';
import Validation from './pages/Validation';
import SetNewPassword from './pages/SetNewPassword';
import Home from './pages/Home'; 
function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/signin" element={<SigninPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/password-verified" element={<PasswordVerified />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/new-password" element={<SetNewPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-password" element={<SetNewPassword />} />




      </Routes>
    </Router>
  );
}

export default App;