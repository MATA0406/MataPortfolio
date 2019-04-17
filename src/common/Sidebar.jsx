import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Home from "@material-ui/icons/Home";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 300;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  githubImg: {
    width: "24px",
    height: "24px"
  }
});

class Sidebar extends React.Component {
  render() {
    const {
      classes,
      theme,
      handleDrawerToggle,
      mobileOpen,
      container
    } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <Link component={RouterLink} to="/">
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="jinho_46@naver.com" />
          </ListItem>
          <Link href="https://github.com/MATA0406">
            <ListItem button>
              <ListItemIcon>
                <img
                  alt=""
                  className={classes.githubImg}
                  src={`${process.env.PUBLIC_URL}/GitHub-Mark-32px.png`}
                />
              </ListItemIcon>
              <ListItemText primary="https://github.com/MATA0406" />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </div>
    );

    return (
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar);
