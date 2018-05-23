import React from "react";
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import routes from './routes';
import {loadDisplays} from './actions/displayActions';
import {loadClients} from './actions/clientActions';
import {loadSequences} from './actions/sequenceActions';

const store = configureStore();
store.dispatch(loadDisplays());
store.dispatch(loadClients());
store.dispatch(loadSequences());

render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
    	{routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

