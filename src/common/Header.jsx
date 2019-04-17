import React, { Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import red from "@material-ui/core/colors/red";

const drawerWidth = 300;

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  toolBar: {
    backgroundColor: red[500]
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
});

class Header extends React.Component {
  render() {
    const { classes, handleDrawerToggle } = this.props;

    return (
      <Fragment>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              MATA Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
