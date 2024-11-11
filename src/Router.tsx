import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './Pages/signUp';
import SignIn from './Pages/signIn';

const router = createBrowserRouter([
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;