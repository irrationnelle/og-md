import React from 'react';
import PropTypes from 'prop-types';

import { createContainer } from 'meteor/react-meteor-data';

import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

import MapIcon from 'material-ui-icons/Map';
import TerrainIcon from 'material-ui-icons/Terrain';
import LanguageIcon from 'material-ui-icons/Language';
import Brightness2Icon from 'material-ui-icons/Brightness2';
import LocalFloristIcon from 'material-ui-icons/LocalFlorist';
import LocalBarIcon from 'material-ui-icons/LocalBar';
import DomainIcon from 'material-ui-icons/Domain';
import PlaceIcon from 'material-ui-icons/Place';

import Divider from 'material-ui/Divider';

import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 55,
    marginBottom: 60,
    minWidth: '100%',
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = { open: false, land: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleLandClick = () => {
    this.setState({ land: !this.state.land });
  };

  render() {
    const classes = this.props.classes;
    return (
      <List className={classes.root} subheader={<ListSubheader>시나리오 분기</ListSubheader>}>
        <Divider />
        <ListItem button onClick={this.handleLandClick}>
          <ListItemIcon>
            <TerrainIcon />
          </ListItemIcon>
          <ListItemText inset primary="지상" />
          {this.state.land ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.land} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText inset primary="1화" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText inset primary="2화" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText inset primary="3화" />
          </ListItem>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText inset primary="우주" />
          <ExpandMore />
        </ListItem>
        <Divider />
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText inset primary="공통" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText inset primary="10화" />
          </ListItem>
        </Collapse>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LocalBarIcon />
          </ListItemIcon>
          <ListItemText inset primary="파리" />
          <ExpandMore />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DomainIcon />
          </ListItemIcon>
          <ListItemText inset primary="카라치" />
          <ExpandMore />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText inset primary="공통" />
          <ExpandMore />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LocalFloristIcon />
          </ListItemIcon>
          <ListItemText inset primary="바랄" />
          <ExpandMore />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Brightness2Icon />
          </ListItemIcon>
          <ListItemText inset primary="달" />
          <ExpandMore />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText inset primary="공통" />
          <ExpandMore />
        </ListItem>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
