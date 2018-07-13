import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NetworkCell from '@material-ui/icons/NetworkCell';
import Account from '@material-ui/icons/AccountCircle';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import { Link } from 'react-router-dom';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

function ListItemComposition(props) {
  const { classes } = props;

  return (
    <Paper>
      <MenuList>
        <Link to='/'>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <Account />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Profile Overview" />
          </MenuItem>
        </Link>
        <Link to='/ReadingList'>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <LibraryBooks />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Reading List" />
          </MenuItem>
        </Link>
        <Link to='/Careers'>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <NetworkCell />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Careers" />
          </MenuItem>
        </Link>
        <Link to='/LatestTrends'>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <NetworkCell />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Latest Trends" />
          </MenuItem>
        </Link>
        <Link to='/Events'>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <NetworkCell />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Events" />
          </MenuItem>
        </Link>
        <Link to='/Analytics'>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <NetworkCell />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Analytics" />
          </MenuItem>
        </Link>
        <Link to='/Didactia'>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <NetworkCell />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Didactia" />
          </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);
