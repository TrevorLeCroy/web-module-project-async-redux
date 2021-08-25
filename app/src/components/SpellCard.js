import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        margin: '0px auto',
        textAlign: 'center',
        minWidth: 200,
        maxWidth: 300,
        marginBottom: 20
    },
})



const SpellCard = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <p> {props.spell.name} </p>
        </Card>
    )
}

export default SpellCard;