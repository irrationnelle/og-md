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

const accent = red['A400']; // #FF1744

const styles = theme => ({
    root: {
        marginTop: 65,
        marginBottom: 60,
    },
    card: {
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

class MechList extends Component {
    state = { expanded: false };
    
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const classes = this.props.classes;
        const fullBonus = <span className={classes.infoname}>FB: </span>
        const movePoint = <span className={classes.infoname}>이동: </span>
        const skill = <span className={classes.infoname}>특수: </span>
        const geoState = <span className={classes.infoname}>지형: </span>
        return (
            <div className={this.props.classes.root}>
                <Card className={classes.card}>
                    <CardActions>
                        <Typography paragraph type="headline" className={classes.title}>
                            에그젝스바인
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
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                        <CardContent>
                            <Divider light />
                            <Typography paragraph type="body2" className={classes.info}>
                                {fullBonus} 염동무기 공격력 + (염동력 Lv. * 30)
                            </Typography>
                            <Divider light />
                            <Typography paragraph type="body2" className={classes.info}>
                                {movePoint} 6 (공중, 육지) <br />
                                {skill} 염동필드S, 분신 <br />
                                {geoState} AABA
                            </Typography>
                            <Divider light />
                        </CardContent>
                    </Collapse>
                </Card>
          </div>
        );
    }
}

MechList.propTypes = propTypes;

export default withStyles(styles)(MechList);
