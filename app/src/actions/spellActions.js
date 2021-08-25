import axios from "axios"

export const SPELLS_LOADED = 'spells_loaded';

export async function fetchSpells(dispatch, getState) {
    const response = await axios.get('https://www.dnd5eapi.co/api/spells/');
    console.log(response);
    dispatch({type: SPELLS_LOADED, payload: response.data.results })
}

