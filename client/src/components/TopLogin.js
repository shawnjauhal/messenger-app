import React, { Component } from "react";
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
import { login } from "../store/utils/thunkCreators";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";



export default class TopLogin extends Component {

  render() {
    return (
      <Grid container item justify="flex-end">
        <Box m={3} mr={8}>
          <Typography color="textSecondary">{this.props.message}</Typography>
        </Box>
        <Box mr={7} mt={2.4}>
          <Button
            variant="text"
            color="primary"
            justify="right"
            onClick={() => this.props.history.push("/register")}
          >
            {this.props.buttonmsg}
          </Button>
        </Box>
      </Grid>
    );
  }
}
