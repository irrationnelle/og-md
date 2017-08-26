import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/MoreVert';
import Menu, { MenuItem } from 'material-ui/Menu';
import AccountCircleIcon from 'material-ui-icons/LockOpen';

const styles = {
  root: {
    width: '100%',
    top: '0',
    position: 'fixed',
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

class Header extends Component {
    state = {
        anchorEl: undefined,
        open: false,
    };
    
    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };
    
    handleRequestClose = () => {
        this.setState({ open: false });
    };

    testClick(event) {
        event.preventDefault();

        Meteor.call('chars.test', (err, charId) => {
            if(err) {
                console.log(err);
            }
            console.log(charId);   
        });
    }

    render() {
        const classes = this.props.classes;
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
                        <IconButton
                            color="contrast"
                            aria-label="Menu"
                            aria-owns={this.state.open ? 'simple-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            open={this.state.open}
                            onRequestClose={this.handleRequestClose}
                        >
                            <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
                            <MenuItem onClick={this.testClick.bind(this)}>Logout</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withStyles(styles)(Header);
