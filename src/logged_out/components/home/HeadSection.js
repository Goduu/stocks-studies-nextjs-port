import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
  makeStyles,
} from "@material-ui/core";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import { login } from "../../../shared/functions/requests"
// import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../../shared/redux/actions/auth.actions.js'
import { withRouter } from "react-router-dom";
import ParticlesMain from "../../../shared/components/Particles"

const useStyles = makeStyles((theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
}));

function HeadSection(props) {
  const classes = useStyles()
  const { theme, width, history } = props;
  // const dispatch = useDispatch();

  const loginTour = () => {
    login({ email: 'guide@tour.com', password: 'xL1ZuT9vPVb' })
      .then(res => {
        // dispatch(setToken(res.authToken))
        // dispatch(setUser(res.info))
        history.push("/c/grid");
      })

  }
  return (
    <div style={{zIndex: 0}}>
      <Fragment>
        <div className={classNames("lg-p-top", classes.wrapper)}>
          <div style={{ position: 'absolute', width: '100vw', marginTop: '-145px', zIndex: 0 }}>

            <ParticlesMain density={30} />
          </div>
          <div className={classNames("container-fluid", classes.container)}>
            <Box display="flex" justifyContent="center" className="row">
              <Card
                className={classes.card}
                data-aos-delay="200"
                data-aos="zoom-in"
              >
                <div className={classNames(classes.containerFix, "container")}>
                  <Box justifyContent="space-between" className="row">
                    <Grid item xs={12} md={5}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                      >
                        <Box mb={4}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h3" : "h4"}
                          >
                            Stocks Studies made easyer!
                          </Typography>
                        </Box>
                        <div>
                          <Box mb={2}>
                            <Typography
                              variant={isWidthUp("lg", width) ? "h6" : "body1"}
                              color="textSecondary"
                            >
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.extraLargeButton}
                            classes={{ label: classes.extraLargeButtonLabel }}
                            onClick={loginTour}
                          >
                            Start now!
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Hidden smDown>
                      <Grid item md={6}>
                        <ZoomImage
                          src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg`}
                          className={classes.image}
                          alt="header example"
                        />
                      </Grid>
                    </Hidden>
                  </Box>
                </div>
              </Card>
            </Box>
          </div>
        </div>
        {/* <WaveBorder
          upperColor={theme.palette.primary.main}
          lowerColor={theme.palette.background.default}
          className={classes.waveBorder}
          animationNegativeDelay={2}
        /> */}
      </Fragment>
    </div>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
  history: PropTypes.object.isRequired,
};

export default HeadSection

