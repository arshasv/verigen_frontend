import React from 'react';
import { Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const VerificationSuccessful: React.FC = () => {
  const handleSignIn = () => {
    console.log('Sign in button clicked');
    // Add your sign in logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <CheckCircleOutlineIcon 
          className="text-green-500 mb-4" 
          style={{ fontSize: '4rem' }}
        />
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Verification Successful
        </h1>
        <Button 
          variant="contained" 
          onClick={handleSignIn}
          className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md text-white font-medium"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default VerificationSuccessful;