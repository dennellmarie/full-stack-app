const redux = require('redux')
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

import actions from './actions/cheese';
import reducers from './reducers/cheese';

const thunk = require('redux-thunk').default;

const store = redux.createStore(reducers, redux.applyMiddleware(thunk));

module.exports  = store;