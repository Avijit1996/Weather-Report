import {createStore, applyMiddleware, Middleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './RootReducer';

const middlewares = [thunk];

const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;
