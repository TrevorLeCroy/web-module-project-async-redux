import {axios} from 'axios';
import { SPELLS_LOADED } from '../actions/spellActions';

const initialState = {
    spells: [],
    spellsLoaded: false,
    appTitle: 'Spellr' 
};

export const rootReducer = (state=initialState, action) => {
    switch(action.type) {        
        case(SPELLS_LOADED): {
            return {
                spellsLoaded: true,
                spells: [...state.spells, action.payload]
            }
        }

        default:
            return state;
    }
}