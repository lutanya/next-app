import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

export const initStore = createStore(reducer, applyMiddleware(thunk));
