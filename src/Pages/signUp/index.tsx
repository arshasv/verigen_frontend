'use client'

import { useState } from 'react'
import { TextField, Button, Box, Typography, Container, Link } from '@mui/material'

interface FormData {
  username: string
  email: string
  password: string
  confirmPassword: string
  securityQuestion: string
  answer: string
}

export default function Component() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    securityQuestion: '',
    answer: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <Container maxWidth="sm" className="mt-16">
      <Box className="bg-white p-8 rounded-lg shadow-sm">
        <Typography variant="h5" className="text-center font-medium mb-2">
          Register
        </Typography>
        <Typography variant="body2" className="text-gray-600 mb-8 text-center">
          Please enter your details
        </Typography>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <TextField
            fullWidth
            label="Username"
            name="username"
            placeholder="Enter your name"
            value={formData.username}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <Box className="flex flex-col gap-6">
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              required
              helperText="Must be at least 8 characters"
            />

            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Create a password"
              value={formData.confirmPassword}
              onChange={handleChange}
              variant="outlined"
              required
              helperText="Must be at least 8 characters"
            />
          </Box>

          <TextField
            fullWidth
            label="Security Question"
            name="securityQuestion"
            placeholder="Ex. What was the name of your first school?"
            value={formData.securityQuestion}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Answer"
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="bg-blue-500 hover:bg-blue-600 py-3 mt-4"
            size="large"
          >
            REGISTER NOW
          </Button>

          <Typography className="text-center mt-4">
            Have an account?{' '}
            <Link href="/sign-in" className="text-blue-500 hover:text-blue-600 no-underline">
              Sign in
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  )
}