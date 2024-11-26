import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../components/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

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
  email: string().min(1, 'Email is required').email('Email is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

// Type for sign-in form
type ISignin = TypeOf<typeof signinSchema>;

const SigninPage: FC = () => {
  const navigate = useNavigate();
  const defaultValues: ISignin = {
    email: '',
    password: '',
  };

  const methods = useForm<ISignin>({
    resolver: zodResolver(signinSchema),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<ISignin> = (values: ISignin) => {
    console.log(values);
   
    navigate('/verification');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container
        maxWidth={false}
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
                      autoComplete='off'
                      onSubmit={methods.handleSubmit(onSubmitHandler)}
                    >
                      <Typography
                        variant='h4'
                        component='h1'
                        sx={{
                          textAlign: 'center',
                          mb: '2rem',
                          color: '#333',
                        }}
                      >
                        Welcome Back
                      </Typography>
                      <Typography
                        variant='h6'
                        component='h2'
                        sx={{ textAlign: 'center', mb: '1.5rem', color: '#555' }}
                      >
                        Sign in to your account
                      </Typography>

                      <FormInput
                        label='Enter your email'
                        type='email'
                        name='email'
                        focused
                        required
                      />
                      <FormInput
                        type='password'
                        label='Password'
                        name='password'
                        required
                        focused
                      />

                      <LoadingButton
                        loading={false}
                        type='submit'
                        variant='contained'
                        sx={{
                          py: '0.8rem',
                          mt: 2,
                          width: '80%',
                          marginInline: 'auto',
                          bgcolor: '#3683dc',
                          '&:hover': {
                            bgcolor: '#2a6cb9',
                          },
                        }}
                      >
                        Sign In
                      </LoadingButton>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                  <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '0.9rem', mb: '1rem' }}>
                      Need an account?{' '}
                      <LinkItem to='/signup'>Sign up here</LinkItem>
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem' }}>
                     
                      <LinkItem to='/forgot-password'> Forgot password </LinkItem>?
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </FormProvider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SigninPage;