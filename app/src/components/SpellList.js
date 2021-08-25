import React from "react";
import { connect } from "react-redux";
import SpellCard from "./SpellCard";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: 10,
        display: 'flex',
        flexFlow: 'row wrap'
    }
});

const SpellList = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.spells.map(spellList => {
                console.log(spellList);
                return spellList.map(spell => {
                    return <SpellCard key={spell.name} spell={spell}/>
                })
            })}
        </div>
    )
}
const mapStateToProps = state => {
    return {
      spells: state.spells
    }
}

export default connect(mapStateToProps, {})(SpellList);
