import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/List';
import FavoriteIcon from 'material-ui-icons/Face';
import LocationOnIcon from 'material-ui-icons/Android';

import { Link } from 'react-router-dom';

const styles = {
  root: {
    width: '100%',
    bottom: '0',
    position: 'absolute',
  },
};

class SimpleBottomNavigation extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const classes = this.props.classes;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
          <BottomNavigationButton label="Scenario" icon={<RestoreIcon />} component={Link} to="/" />
          <BottomNavigationButton label="Character" icon={<FavoriteIcon />} component={Link} to="/characters" />
          <BottomNavigationButton label="Mechanic" icon={<LocationOnIcon />} component={Link} to="/mechanics" />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);