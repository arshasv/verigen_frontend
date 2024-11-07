import { Button, TextField } from "@mui/material";
import "./style.css";

export const SignUp = (): JSX.Element => {
  return (
    <section className="sign-up">
      <div className="content-wrapper">
        <div className="content">
          <div className="header-and-form">
            <header className="header">
              <div className="text-and-supporting">
                <h1 className="text">Register</h1>
                <p className="supporting-text">Please enter your details.</p>
              </div>
            </header>

            <form className="form">
              <TextField
                id="username"
                label="Username*"
                placeholder="Enter your name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="email"
                label="Email*"
                placeholder="Enter your email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                label="Password*"
                placeholder="Create a password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                helperText="Must be at least 8 characters."
              />
              <TextField
                id="confirm-password"
                label="Confirm Password*"
                placeholder="Create a password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                helperText="Must be at least 8 characters."
              />

              <div className="actions">
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  fullWidth
                >
                  Register Now
                </Button>
              </div>
            </form>

            <div className="row-2">
              <p className="text-3">Have an account?</p>
              <Button color="primary" size="medium" variant="text">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};