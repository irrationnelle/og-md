import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import StarIcon from 'material-ui-icons/Star';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      background: theme.palette.background.paper,
    },
});

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const defaultProps = {
    classes: undefined,
};

class CharList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCharacter: true,
        };
    }

    render() {
        const classes = this.props.classes;
        return (
            <List className={classes.root}>
                <ListItem button>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="레오나 거슈타인" />
                </ListItem>
                <ListItem button>
                    <ListItemText inset primary="아리에일 오그" />
                </ListItem>
            </List>
        );
    }
}

CharList.propTypes = propTypes;
CharList.defaultProps = defaultProps;

export default withStyles(styles)(CharList);
