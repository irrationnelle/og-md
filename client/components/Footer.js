import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import ListIcon from 'material-ui-icons/List';
import FaceIcon from 'material-ui-icons/Face';
import AndroidIcon from 'material-ui-icons/Android';

import { Link } from 'react-router-dom';

const styles = {
  root: {
    width: '100%',
    bottom: '0',
    position: 'absolute',
  },
  label: {
    textAlign: 'center',
  },
};

const propTypes = {
    classes: PropTypes.object.isRequired,
};

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const classes = this.props.classes;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
          <BottomNavigationButton
            label="Scenario"
            icon={<ListIcon />}
            component={Link}
            to="/"
          />
          <BottomNavigationButton
            label="Character"
            icon={<FaceIcon />}
            component={Link}
            to="/characters"
          />
          <BottomNavigationButton
            label="Mechanic"
            icon={<AndroidIcon />}
            component={Link}
            to="/mechanics"
          />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = propTypes;

export default withStyles(styles)(Footer);
