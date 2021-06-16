import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import LeftLogin from "./components/LeftLogin.js";
import TopLogin from "./components/TopLogin.js";
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
      main: "#000000",
    },
    textSecondary: {
      main: "#C0C0C0",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    weight: "600",
  },
});

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
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
              <Box width="100%">
                <Grid container item justify="flex-end">
                  <Box m={3} mr={8}>
                    <Typography color="textSecondary">
                      Don't have an account?
                    </Typography>
                  </Box>
                  <Box mr={7} mt={2.4}>
                    <Button
                      variant="text"
                      color="primary"
                      justify="right"
                      onClick={() => history.push("/register")}
                    >
                      Register
                    </Button>
                  </Box>
                </Grid>
                <Box mt={9} width="70%">
                  <form onSubmit={handleLogin}>
                    <Grid container direction={"column"} spacing={4}>
                      <Grid item>
                        <Typography variant="h4">Welcome Back!</Typography>
                      </Grid>
                      <Grid item>
                        <FormControl fullWidth required>
                          <TextField
                            aria-label="username"
                            label="Username"
                            name="username"
                            type="text"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl fullWidth required>
                          <TextField
                            label="password"
                            aria-label="password"
                            type="password"
                            name="password"
                          />
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
                            Login
                          </Button>
                        </Grid>
                      </Box>
                    </Grid>
                  </form>
                </Box>
              </Box>
            </Grid>
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
