import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SigninPage from './pages/Signin'; 
import SignupPage from './pages/Signup'; 
import ForgotPassword  from './pages/ForgotPassword'; 
import Authentication  from './pages/Authentication'; 

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SigninPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/signup" element={<ForgotPassword />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/authentication" element={<Authentication />} />

      </Routes>
    </Router>
  );
}

export default App;