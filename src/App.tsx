// App.tsx

import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ValidationPage from './pages/Validation'; 
function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ValidationPage />} />
      
      </Routes>
    </Router>
  );
}

export default App;
