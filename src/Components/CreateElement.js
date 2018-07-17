import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class FadeMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          style={{width: "41px", height: "41px"}}
          variant="fab"
          aria-label="Add"
          aria-owns={anchorEl ? 'fade-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <AddIcon />
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={this.handleClose}>Add Reading Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Add Person</MenuItem>
          <MenuItem onClick={this.handleClose}>Add Event Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Add Job Item</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default FadeMenu;
