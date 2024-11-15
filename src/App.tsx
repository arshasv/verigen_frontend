import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PasswordVeified from './pages/PasswordVerified'; // Adjust the path as necessary

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<PasswordVeified />} />
      </Routes>
    </Router>
  );
}

export default App;
