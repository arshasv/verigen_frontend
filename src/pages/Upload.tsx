import React, { FC, useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Paper,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

interface UploadProps {
  onClose?: () => void;
  onFileUpload?: (file: File) => void;
}

const uploadSchema = object({
  file: string().min(1, 'File is required').regex(/\.v$/, 'Only .v files are allowed'),
});

type IUpload = TypeOf<typeof uploadSchema>;

const Upload: FC<UploadProps> = ({ onClose, onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  
  const methods = useForm<IUpload>({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      file: '',
    },
  });

  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<IUpload> = (data) => {
    if (data.file && onFileUpload) {
      const file = new File([], data.file);
      onFileUpload(file);
      navigate('/loading');
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const vFile = files.find(file => file.name.endsWith('.v'));

    if (vFile && onFileUpload) {
      methods.setValue('file', vFile.name); // Set the file name
      setUploadedFileName(vFile.name); // Set the uploaded file name

      // Create a preview URL for the uploaded file
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(vFile); // Only if it's an image; for .v files this may not apply

      onFileUpload(vFile);
      navigate('/loading');
    } else {
      alert('Please upload a valid .v file.'); // Alert for invalid file type
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '8px' }}>
              {onClose && (
                <IconButton 
                  sx={{ position: 'absolute', right: 8, top: 8 }} 
                  onClick={onClose}
                >
                  <CloseIcon />
                </IconButton>
              )}
              <FormProvider {...methods}>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  onSubmit={methods.handleSubmit(onSubmitHandler)}
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <Typography variant="h4" component="h1" sx={{ mb: '1rem' }}>
                    Media Upload
                  </Typography>
                  <Typography variant="body2" sx={{ mb: '1rem' }}>
                    Add your Verilog source file here
                  </Typography>

                  <Paper
                    elevation={0}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    sx={{
                      border: '2px dashed #ccc',
                      borderRadius: 1,
                      padding: 4,
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'action.hover',
                      },
                      borderColor: isDragging ? 'primary.main' : undefined,
                      bgcolor: isDragging ? 'action.hover' : undefined,
                      width: '100%',
                      position: 'relative', // Position relative for absolute positioning of preview
                    }}
                  >
                    <input
                      type="file"
                      accept=".v"
                      hidden
                      id="file-upload"
                      {...methods.register('file', { required: true })}
                    />
                    <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                      <CloudUploadIcon 
                        sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} 
                      />
                      <Typography>
                        Drag your file(s) or browse
                      </Typography>
                    </label>

                    {/* Displaying the uploaded file name and preview */}
                    {uploadedFileName && (
                      <Box sx={{ position: 'absolute', bottom: 10, left: 10 }}>
                        <Typography variant="body1">{uploadedFileName}</Typography>
                        {filePreviewUrl && (
                          <img src={filePreviewUrl} alt="preview" style={{ width: 50, height: 50 }} />
                        )}
                      </Box>
                    )}
                  </Paper>

                  <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1 }}>
                    Only support .v files
                  </Typography>

                  <LoadingButton
                    loading={false}
                    type='submit'
                    variant='contained'
                    sx={{
                      py: '0.8rem',
                      mt: 2,
                      width: '80%',
                      bgcolor: '#3683dc',
                      '&:hover': {
                        bgcolor: '#2a6cb9',
                      },
                    }}
                  >
                    Upload
                  </LoadingButton>
                </Box>
              </FormProvider>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Upload;