import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Header from "common/Header";
import Sidebar from "common/Sidebar";

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class Layout extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, children, container } = this.props;
    const { mobileOpen } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header handleDrawerToggle={this.handleDrawerToggle} />
        <Sidebar
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={mobileOpen}
          container={container}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>{children}</Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
