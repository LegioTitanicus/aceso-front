import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  useMediaQuery,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useScrollTrigger,
} from "@material-ui/core";

import theme from "./Theme";
import NavTabs from "./NavTabs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navTabs: {
    textAlign: "center",
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const AcesoAppBar = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const companyName = !isDesktop ? "Aceso Clinical Solutions" : "ACS";

  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            {!isDesktop && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" className={classes.title}>
              {companyName}
            </Typography>
            {isDesktop && (
              <Grid container justify="center">
                <NavTabs />
              </Grid>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default AcesoAppBar;
