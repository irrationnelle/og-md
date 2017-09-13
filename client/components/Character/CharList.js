import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { createContainer } from 'meteor/react-meteor-data';

import Characters from '../../../imports/collections/characters';
import CharDetail from './CharDetail';

const styles = theme => ({
  root: {
    marginTop: 65,
    marginBottom: 60,
  },
});

const propTypes = {
  classes: PropTypes.object.isRequired,
};

const defaultProps = {
  classes: undefined,
};

class CharList extends Component {
  render() {
    const mapToComponent = data => data.map((char, i) => <CharDetail key={char._id} data={char} />);

    return <div className={this.props.classes.root}>{mapToComponent(this.props.chars)}</div>;
  }
}

CharList.propTypes = propTypes;
CharList.defaultProps = defaultProps;

const CharContainer = createContainer(() => {
  Meteor.subscribe('chars');

  return { chars: Characters.find({}).fetch() };
}, CharList);

export default withStyles(styles)(CharContainer);
