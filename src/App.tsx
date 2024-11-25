import { CssBaseline } from '@mui/material';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SigninPage from './pages/Signin'; 
import SignupPage from './pages/Signup'; 
import ForgotPassword  from './pages/ForgotPassword'; 
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SigninPage from './pages/Signin'; 
import SignupPage from './pages/Signup'; 
>>>>>>> origin/develop

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SigninPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
<<<<<<< HEAD
        <Route path="/signup" element={<ForgotPassword />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />

=======
>>>>>>> origin/develop
      </Routes>
    </Router>
  );
}

export default App;