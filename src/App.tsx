import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SetNewPasswordPage from './pages/SetNewPassword'; // Adjust the path as necessary

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SetNewPasswordPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
