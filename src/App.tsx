import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SigninPage from './pages/Signin'; 

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;
