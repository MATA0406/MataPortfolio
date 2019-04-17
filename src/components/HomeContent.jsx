import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Grid container item xs={12} sm={4} md={2} lg={2} xl={6}>
          Hello MATA!!
        </Grid>
      </Fragment>
    );
  }
}

export default Home;
