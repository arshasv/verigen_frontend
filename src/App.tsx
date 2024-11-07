import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { SignUp } from './pages/signUp'
import { Login } from './pages/logIn'
import { HomePage } from './pages/homepage';

const router = createBrowserRouter([
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/log-in',
    element: <Login />,},
  {
    path: '/home-page',
    element: <HomePage />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
