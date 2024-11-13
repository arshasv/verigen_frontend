'use client'

import { useState } from 'react'
import { TextField, Button, FormHelperText } from '@mui/material'
import KeyIcon from '@mui/icons-material/Key'

export default function Component() {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: ''
  })

  const validatePasswords = () => {
    const newErrors = {
      newPassword: '',
      confirmPassword: ''
    }

    if (passwords.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters'
    }

    if (passwords.confirmPassword && passwords.newPassword !== passwords.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return !newErrors.newPassword && !newErrors.confirmPassword
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validatePasswords()) {
      // Handle password reset logic here
      console.log('Password reset submitted:', passwords.newPassword)
    }
  }

  const handlePasswordChange = (field: 'newPassword' | 'confirmPassword') => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswords(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-blue-100 p-3">
              <KeyIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Set New Password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your new password must be different to previously used passwords.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <TextField
                fullWidth
                label="New Password"
                variant="outlined"
                type="password"
                value={passwords.newPassword}
                onChange={handlePasswordChange('newPassword')}
                error={!!errors.newPassword}
                required
                className="bg-white"
              />
              <FormHelperText className="ml-4 text-gray-500">
                Must be at least 8 characters.
              </FormHelperText>
              {errors.newPassword && (
                <FormHelperText error className="ml-4">
                  {errors.newPassword}
                </FormHelperText>
              )}
            </div>
            <div>
              <TextField
                fullWidth
                label="Confirm New Password"
                variant="outlined"
                type="password"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange('confirmPassword')}
                error={!!errors.confirmPassword}
                required
                className="bg-white"
              />
              {errors.confirmPassword && (
                <FormHelperText error className="ml-4">
                  {errors.confirmPassword}
                </FormHelperText>
              )}
            </div>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700 py-3 text-white"
          >
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  )
}