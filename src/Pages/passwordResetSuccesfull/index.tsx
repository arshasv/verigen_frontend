import { Button } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export default function Component() {
  const handleLogin = () => {
    console.log('Login button clicked')
    // Add your login navigation logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <CheckCircleOutlineIcon 
              className="h-12 w-12 text-green-500"
            />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Password Reset
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your password has been successfully reset.
          </p>
          <p className="text-sm text-gray-600">
            Click below to log in magically
          </p>
        </div>
        <div className="mt-8">
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700 py-3 text-white"
          >
            Log in
          </Button>
        </div>
      </div>
    </div>
  )
}