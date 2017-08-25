import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader ,CardActions, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton'
import FavoriteIcon from 'material-ui-icons/Favorite';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    title: {
        marginLeft: 20,
        marginTop: 12,
        fontSize: 20,
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

class MechList extends Component {
    state = { expanded: false };
    
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <br />
                <Card className={classes.card}>
                    <CardActions>
                        <Typography paragraph type="headline" className={classes.title}>
                            에그젝스바인
                        </Typography>
                        <div className={classes.flexGrow} />
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton
                            className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                        <CardContent>
                            <Divider light />
                            <Typography paragraph type="headline" className={classes.title}>
                                FULL :
                            </Typography>
                            <Typography paragraph type="headline" className={classes.title}>
                                염동무기 공격력 + (염동력 Lv. * 30)
                            </Typography>
                            <Typography paragraph type="body2">
                                탑승 가능 파일럿: 
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
          </div>
        );
    }
}

MechList.propTypes = propTypes;

export default withStyles(styles)(MechList);
