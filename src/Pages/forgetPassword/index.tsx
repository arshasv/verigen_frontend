'use client'

import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import KeyIcon from '@mui/icons-material/Key'

export default function Component() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log('Password reset requested for:', email)
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
            Forgot Password?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            No worries, we'll send you reset instructions.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="bg-white"
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700 py-3 text-white"
          >
            Proceed
          </Button>
        </form>
      </div>
    </div>
  )
}