import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import LeftLogin from "./components/LeftLogin.js";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3A8DFF",
    },
    secondary: {
      main: "#FFFFFF",
    },
    textPrimary: {
      main: "#000000"
    }, 
    textSecondary: {
      main: "#C0C0C0" 	
    }
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    weight: "600"
  },
});

const Login = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction={"row"} alignItems={"flex-start"}>
        <LeftLogin />
        <Grid item sm={7} xs={12}>
          <Box ml={5} p={3} width="100%" pb={15}>
            <Grid container item justify="flex-end">
              <Box m={3} mr={8}>
                <Typography color="textSecondary">Already have an account?</Typography>
              </Box>
              <Box mr={7} mt={2.4}>
                <Button
                  variant="text"
                  color="primary"
                  justify="right"
                  onClick={() => history.push("/login")}
                >
                  Login
                </Button>
              </Box>
            </Grid>
            <Box mt={9} width="70%">
              <form onSubmit={handleRegister}>
                <Grid container direction={"column"} spacing={4}>
                  <Grid item>
                    <Typography variant="h4">Create an account.</Typography>
                  </Grid>


                  <Grid item>
                    <FormControl fullWidth>
                      <TextField
                        aria-label="username"
                        label="Username"
                        name="username"
                        type="text"
                        required
                      />
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <FormControl fullWidth>
                      <TextField
                        label="E-mail address"
                        aria-label="e-mail address"
                        type="email"
                        name="email"
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl
                      error={!!formErrorMessage.confirmPassword}
                      fullWidth
                    >
                      <TextField
                        aria-label="password"
                        label="Password"
                        type="password"
                        inputProps={{ minLength: 6 }}
                        name="password"
                        required
                      />
                      <FormHelperText>
                        {formErrorMessage.confirmPassword}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl
                      error={!!formErrorMessage.confirmPassword}
                      fullWidth
                    >
                      <TextField
                        label="Confirm Password"
                        aria-label="confirm password"
                        type="password"
                        inputProps={{ minLength: 6 }}
                        name="confirmPassword"
                        required
                      />
                      <FormHelperText>
                        {formErrorMessage.confirmPassword}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Box mt={8}>
                    <Grid container justify={"center"}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        color="primary"
                      >
                        Create
                      </Button>
                    </Grid>
                  </Box>
                </Grid>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
