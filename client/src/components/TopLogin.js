import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
} from "@material-ui/core";

const TopLogin = (props) => {
  const url = props.url;

  return (
    <Grid container item justify="flex-end">
      <Box m={3} mr={8}>
        <Typography color="textSecondary">{props.message}</Typography>
      </Box>
      <Box mr={7} mt={2.4}>
        <Button
          variant="text"
          color="primary"
          justify="right"
          onClick={() => props.history.push(url)}
        >
          {props.buttonmsg}
        </Button>
      </Box>
    </Grid>
  );
};

export default TopLogin;