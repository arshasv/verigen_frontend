'use client'

import { useState, useRef, DragEvent } from 'react'
import { IconButton, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

export default function Component() {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    handleFiles(droppedFiles)
  }

  const handleFiles = (newFiles: File[]) => {
    // Add your file validation logic here
    setFiles(newFiles)
    console.log('Files received:', newFiles)
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files))
    }
  }

  const handleClose = () => {
    console.log('Close clicked')
    // Add your close logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <Typography variant="h6" className="font-bold">
              Media Upload
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Add your design basics file here
            </Typography>
          </div>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </div>

        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInput}
            className="hidden"
            multiple
          />
          
          <CloudUploadIcon 
            className="text-blue-500 mb-4"
            style={{ fontSize: '48px' }}
          />
          
          <Typography variant="body1" className="mb-2">
            Drag your file(s) or{' '}
            <Button
              onClick={handleBrowseClick}
              variant="text"
              className="text-blue-500 p-0 min-w-0 font-normal"
              style={{ textTransform: 'none' }}
            >
              browse
            </Button>
          </Typography>
          
          <Typography variant="body2" className="text-gray-500">
            Only support .v files
          </Typography>

          {files.length > 0 && (
            <div className="mt-4 text-left">
              <Typography variant="body2" className="font-medium mb-2">
                Selected files:
              </Typography>
              {files.map((file, index) => (
                <Typography key={index} variant="body2" className="text-gray-600">
                  {file.name}
                </Typography>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}