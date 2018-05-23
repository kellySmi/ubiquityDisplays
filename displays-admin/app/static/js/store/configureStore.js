import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import initialState from '../reducers/initialState';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}