import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { createContainer } from 'meteor/react-meteor-data';

import Mechanics from '../../../imports/collections/mechanics';
import MechDetail from './MechDetail';

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

class MechList extends Component {
    render() {
        const mapToComponent = (data) => {
            return data.map((mech, i) => {
                return (
                    <MechDetail
                        key={mech._id}
                        data={mech}
                    />
                );
            });
        }

        return (
            <div className={this.props.classes.root}>
                {mapToComponent(this.props.mechs)}
            </div>
        );
    }
}

MechList.propTypes = propTypes;
MechList.defaultProps = defaultProps;

const MechContainer = createContainer(() => {
    Meteor.subscribe('mechs');

    return { mechs: Mechanics.find({}).fetch() };
}, MechList);

export default withStyles(styles)(MechContainer);
