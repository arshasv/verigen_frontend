import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './Pages/signUp';
import SignIn from './Pages/signIn';
import VerificationSuccessful from './Pages/verificationSuccessful';
import ForgetPassword from './Pages/forgetPassword';
import SetNewPassword from './Pages/setNewPassword';
import PasswordResetSuccessful from './Pages/passwordResetSuccesfull';
import Verifyuser from './Pages/verifyUser';
import HomePage from './Pages/homePage';
import  FileUpload from './Pages/fileUpload';

const router = createBrowserRouter([
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/verification-successful',
    element: <VerificationSuccessful />,},
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
  {
    path: '/set-new-password',
    element: <SetNewPassword />,
  },
  {
    path: '/password-reset-successful',
    element: <PasswordResetSuccessful />,
  },
  {
    path: '/verify-user',
    element: <Verifyuser />,
  },
  {
    path: '/home-page',
    element: <HomePage />,
  },
  {
    path: '/file-upload', 
    element: <FileUpload />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;