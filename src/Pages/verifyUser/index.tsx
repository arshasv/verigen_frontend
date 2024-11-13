'use client'

import { useState } from 'react'
import { TextField, Button, Container, Typography, Box, Avatar } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

export default function Component() {
  const [answer, setAnswer] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle verification logic here
    console.log('Submitted answer:', answer)
  }

  return (
    <Container maxWidth="sm" className="min-h-screen flex items-center justify-center">
      <Box className="w-full max-w-md p-6 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="bg-blue-500">
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" component="h1" align="center" className="font-semibold">
            Verify User
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            Fill the details as given during the time of sign up
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Typography variant="subtitle1" className="font-medium" align="left">
              Security Question
            </Typography>
            <TextField
              fullWidth
              placeholder="Ex: What was the name of your first school?"
              variant="outlined"
              disabled
              className="bg-gray-50"
            />
          </div>

          <div className="space-y-4">
            <Typography variant="subtitle1" className="font-medium" align="left">
              Answer
            </Typography>
            <TextField
              fullWidth
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              variant="outlined"
              placeholder="Enter your answer"
              required
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="bg-blue-500 hover:bg-blue-600 normal-case py-3 text-base"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  )
}