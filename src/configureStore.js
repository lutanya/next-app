
import { applyMiddleware, createStore } from 'redux';
import reducer from './redux/reducers';
import thunk from 'redux-thunk';

//const sagaMiddleWare=createSagaMiddleware();

export default (initialState)=>
{
const store = createStore(reducer, initialState, applyMiddleware(thunk));
// sagaMiddleWare.run(rootSaga);
// store.runSaga()=()=>sagaMiddleWare.run(rootSaga);
// store.close()=()=>store.dispatch(END);
return store;
}