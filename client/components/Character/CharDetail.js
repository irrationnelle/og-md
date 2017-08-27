import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader ,CardActions, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton'
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { red } from 'material-ui/colors';
import { createContainer } from 'meteor/react-meteor-data';

import Characters from '../../../imports/collections/characters';

const accent = red['A400']; // #FF1744

const styles = theme => ({
    card: {
        marginLeft: 4,
        marginTop: 7,
        minWidth: 275,
    },
    title: {
        marginLeft: 20,
        marginTop: 14,
        fontSize: 17,
    },
    infoname: {
        fontSize: 15,
        color: accent,
        marginTop: 10,
    },
    info: {
        fontSize: 15,
        marginTop: 10,
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    flexGrow: {
        flex: '1 1 auto',
    },
});

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const defaultProps = {
    classes: undefined,
};

class CharDetail extends Component {
    state = { expanded: false };
    
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const classes = this.props.classes;
        const aceBonus = <span className={classes.infoname}>AB: </span>
        const mindCommand = <span className={classes.infoname}>정신: </span>
        const twinCommand = <span className={classes.infoname}>트윈: </span>

        const char = this.props.data;

        return (
            // TODO: MAKE CHAR DETAIL COMPONENT AND TRANSFER KEY PROPS
            <div>
                <Card className={classes.card}>
                    <CardActions>
                        <Typography paragraph type="headline" className={classes.title}>
                            {char.name}
                        </Typography>
                        <div className={classes.flexGrow} />
                        <IconButton aria-label="Add to favorites">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton
                            className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                            name={char._id}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse
                        in={this.state.expanded}
                        transitionDuration="auto"
                        unmountOnExit
                    >
                        <CardContent>
                            <Divider light />
                            <Typography paragraph type="body2" className={classes.info}>
                                {aceBonus} {char.ace}
                            </Typography>
                            <Divider light />
                            <Typography paragraph type="body2" className={classes.info}>
                                {mindCommand} 집중 가속 직감 직격 열혈 <br />
                                {twinCommand} {char.twin}
                            </Typography>
                            <Divider light />
                        </CardContent>
                    </Collapse>
                </Card>
            </div>      
        );
    }
}

CharDetail.propTypes = propTypes;
CharDetail.defaultProps = defaultProps;

export default withStyles(styles)(CharDetail);
