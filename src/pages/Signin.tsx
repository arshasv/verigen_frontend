import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { signInUser } from '../API/apiService';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { object, z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../components/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAuth } from '../Context/AuthContext'; // Import the context

// Styled Link component
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;


const signinSchema = object({
  email: z.string().min(1, 'Email is required').email('Email is invalid'),
  password: z.string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

// Type for sign-in form
type ISignin = z.infer<typeof signinSchema>;

export default function SignIn() {
  const methods = useForm<ISignin>({
    resolver: zodResolver(signinSchema),
  });
  const { register, handleSubmit, formState: { errors } } = methods;

  const navigate = useNavigate();
  const { setUser } = useAuth(); // Use the context

  const onSubmitHandler: SubmitHandler<ISignin> = async (data) => {
    try {
      const response = await signInUser(data);
      console.log('Response:', response);
      setUser(response.data); // Store the response in context
      navigate('/');
    } catch (error: any) { // Type the error as any for flexibility

      // Access error details directly from the error object
      console.error('Error Message:', error.response?.data); 
      console.error('Error Status:', error.response?.status);
      if (error.response?.status === 400) {
        alert('Invalid email or password.');
      } else if (error.response?.status === 500) {
        alert('Server error. Please try again later.');   return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <label>Email</label>
        <input type="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
      } else {
        console.error('An unexpected error occurred:', error);
        alert('Something went wrong. Please try again.');
      }
    }
  };


  return (
    <Box
      maxWidth="none"
      sx={{
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{ width: '100%', height: '100%' }}
      >
        <Grid
          item
          sx={{
            maxWidth: '70rem',
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '8px',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <FormProvider {...methods}>
            <Grid
              container
              sx={{
                py: '6rem',
                px: { xs: '2rem', sm: '3rem' },
              }}
            >
              <Grid
                item
                container
                justifyContent='center'
                rowSpacing={5}
                sx={{
                  maxWidth: { sm: '45rem' },
                  marginInline: 'auto',
                }}
              >
                <Grid item xs={12} sm={8}>
                  <Box
                    display='flex'
                    flexDirection='column'
                    component='form'
                    noValidate
                    onSubmit={handleSubmit(onSubmitHandler)}
                  >
                    <div>
                      <label>Email</label>
                      <input type="email" {...register('email')} />
                      {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div>
                      <label>Password</label>
                      <input type="password" {...register('password')} />
                      {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <button type="submit">Sign In</button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Box>
  );
}