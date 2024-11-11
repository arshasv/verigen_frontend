'use client'

import { useState } from 'react'
import { TextField, Button, Link } from '@mui/material'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log('Sign in attempt with:', { email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign In</h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back! Please enter your details.
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
              className="bg-white"
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white"
            />
          </div>

          <div className="flex items-center justify-end">
            <Link
              href="#"
              className="text-sm text-blue-600 hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault()
                console.log('Forgot password clicked')
              }}
            >
              Forgot password
            </Link>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700 py-3 text-white"
          >
            Confirm
          </Button>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              {"Don't have an account? "}
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-500"
                onClick={(e) => {
                  e.preventDefault()
                  console.log('Sign up clicked')
                }}
              >
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}