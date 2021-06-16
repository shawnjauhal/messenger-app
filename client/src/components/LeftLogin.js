import React, { Component } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  CardMedia,
  Icon,
} from "@material-ui/core";
import bkg from "../images/bg-img.png";
import bubble from "../images/bubble.svg";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3A8DFF",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

const cardStyles = {
  media: {
    height: "700px",
    width: "425px",
  },
};

const cardOverlay = {
  media: {
    background: "linear-gradient(45deg, #3A8DFF, #86B9FF)",
    opacity: "85%",
  },
};

export default class LeftLogin extends Component {
  render() {
    return (
      <Grid item>
        <CardMedia
          image={bkg}
          style={cardStyles.media}
          children={
            <Box style={cardOverlay.media} width="100%" height="100%">
              <Box pt={24}>
                <Grid container direction="column" alignItems="center">
                  <Grid item>
                    <Box>
                      <Icon>
                        <img
                          src={ bubble }
                        />
                      </Icon>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography color="secondary" align="center" variant="h4">
                      Converse with anyone with any language
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          }
        ></CardMedia>
      </Grid>
    );
  }
}

/*
<SvgIcon style={{ fontSize: 115 }} viewBox="0 0 100 100">
                        
                      </SvgIcon>*/
