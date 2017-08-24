import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/MoreVert';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
};

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const defaultProps = {
    classes: undefined,
};

const Header = (props) => {
        const classes = props.classes;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            SRW OG MD
                        </Typography>
                        <IconButton color="contrast" aria-label="Login">
                            <AccountCircleIcon />
                        </IconButton>
                        <IconButton color="contrast" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withStyles(styles)(Header);
