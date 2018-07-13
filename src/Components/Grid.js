import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from './AppBar';
import ListItemComposition from './ListItemComposition';
import ProfileOverview from './ProfileOverview';
import Careers from './Careers';
import ReadingList from './ReadingList';
import LatestTrends from './LatestTrends';
import Events from './Events';
import Analytics from './Analytics';
import Didactia from './Didactia';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <MenuAppBar className={classes.paper}>xs=12</MenuAppBar>
        </Grid>
        <Grid item xs={3}>
          <ListItemComposition className={classes.paper}>xs=6</ListItemComposition>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Switch>
              <Route exact path='/' component={ProfileOverview}/>
              <Route path='/careers' component={Careers}/>
              <Route path='/readinglist' component={ReadingList}/>
              <Route path='/latesttrends' component={LatestTrends}/>
              <Route path='/events' component={Events}/>
              <Route path='/analytics' component={Analytics}/>
              <Route path='/didactia' component={Didactia}/>
            </Switch>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
