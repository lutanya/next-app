import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers/index';
import thunk from 'redux-thunk';
export const initStore = createStore(reducer, applyMiddleware(thunk));


