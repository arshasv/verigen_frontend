import { Button } from "@mui/material";
import "./style.css";

export const Login = (): JSX.Element => {
  return (
    <main className="login">
      <section className="container-wrapper">
        <div className="container">
          <div className="content">
            <div className="header-and-form">
              <header className="header">
                <div className="text-and-supporting">
                  <h1 className="text">Log in</h1>
                  <p className="supporting-text">
                    Welcome back! Please enter your details.
                  </p>
                </div>
              </header>

              <form className="form">
                <div className="form-group">
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <div className="input">
                    <input
                      className="text-wrapper"
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <div className="input">
                    <input
                      className="text-wrapper"
                      id="password"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                </div>

                <div className="row">
                  <Button color="primary" size="medium" variant="text">
                    Forgot password
                  </Button>
                </div>

                <div className="actions">
                  <Button color="primary" size="large" variant="contained">
                    Confirm
                  </Button>
                </div>
              </form>

              <div className="row-2">
                <p className="text-2">Don’t have an account?</p>
                <Button color="primary" size="medium" variant="text">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};