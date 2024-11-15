import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthenticationPage from './pages/Authentication'; 
function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
      </Routes>
    </Router>
  );
}

export default App;