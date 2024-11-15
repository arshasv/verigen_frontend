import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword, { LinkItem } from './pages/ForgotPassword'; // Adjust the path as necessary

function App() {
  return (
    <Router>
      <CssBaseline />
      <LinkItem to="/">Home</LinkItem> 
      <Routes>
        <Route path="/" element={<ForgotPassword />} />
       
      </Routes>
    </Router>
  );
}

export default App;
