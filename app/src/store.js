import ThunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import {rootReducer} from './reducers/rootReducer';

const composedEnchancer = compose(applyMiddleware(ThunkMiddleware));
const store = createStore(rootReducer, composedEnchancer);

export default store;