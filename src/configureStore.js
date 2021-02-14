import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers';

// const sagaMiddleWare=createSagaMiddleware();

export default (initialState) => {
  const store = createStore(reducer, initialState, applyMiddleware(thunk));
  // sagaMiddleWare.run(rootSaga);
  // store.runSaga()=()=>sagaMiddleWare.run(rootSaga);
  // store.close()=()=>store.dispatch(END);
  return store;
};
