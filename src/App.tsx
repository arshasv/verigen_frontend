import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/Signup'; 

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
