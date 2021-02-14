import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers';

export default (initialState) => {
  const store = createStore(reducer, initialState, applyMiddleware(thunk));
  return store;
};
