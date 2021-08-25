import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import store from './store';
import { fetchSpells } from './actions/spellActions';
import SpellList from './components/SpellList';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchSpells);
    console.log(store.spellsLoaded);
  }, []);

  return (
    <div>
      <SpellList/>
    </div>
  );
}

export default App;
