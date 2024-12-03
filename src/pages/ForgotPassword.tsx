import { Container, Grid, Box, Typography, Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../components/FormInput';
import { Link, useNavigate } from 'react-router-dom'; // Ensure you're using react-router-dom
import styled from '@emotion/styled';
import KeyIcon from '@mui/icons-material/Key';

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;

const forgotPasswordSchema = object({
  email: string().min(1, 'Email is required').email('Email is invalid'),
});

type IForgotPassword = TypeOf<typeof forgotPasswordSchema>;

const ForgotPasswordPage: FC = () => {
  const navigate = useNavigate();
  const defaultValues: IForgotPassword = {
    email: '',
  };

  const methods = useForm<IForgotPassword>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<IForgotPassword> = (values: IForgotPassword) => {
    console.log(values);
    // Handle password reset logic here
    navigate('/authentication'); // Navigate to authentication page after form submission
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{ width: '100%' }}
      >
        <Grid item sx={{ maxWidth: '70rem', width: '100%' }}>
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
                    <Box
                      sx={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                      }}
                    >
                      <KeyIcon sx={{ fontSize: '24px' }} />
                    </Box>
                    <Typography
                      variant='h4'
                      component='h1'
                      sx={{
                        textAlign: 'center',
                        mb: '1rem',
                      }}
                    >
                      Forgot Password?
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{ textAlign: 'center', mb: '2rem' }}
                    >
                      No worries, we'll send you reset instructions.
                    </Typography>

                    <FormInput
                      label='Enter your email'
                      type='email'
                      name='email'
                      focused
                      required
                    />

                    <LoadingButton
                      loading={false} // You can manage loading state if needed
                      type='submit'
                      variant='contained'
                      sx={{
                        py: '0.8rem',
                        mt: 2,
                        width: '80%',
                        marginInline: 'auto',
                      }}
                    >
                      Proceed
                    </LoadingButton>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent='center'>
                <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    Remember your password?{' '}
                    <LinkItem to='/signin'>Back to signin</LinkItem> {/* Ensure this points to the correct route */}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ForgotPasswordPage;