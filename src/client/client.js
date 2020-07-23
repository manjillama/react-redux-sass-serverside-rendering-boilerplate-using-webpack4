// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Routes from './Routes';

import reducers from './reducers';
import { axiosInstance } from './services/utils';

const store = createStore(
  reducers,
  window.INITIAL_STATE, // Initializing client side redux state with server-side redux state
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

/*
 * Re-rendering into the same div rendered by SSR.
 * Putting funcationality back to the element is called hydration
 */
loadableReady(() => {
  ReactDOM.hydrate(
    // Anytime the redux store changes the provider will alert any connected components inside our app to re-render
    <Provider store={store}>
      <Router>
        <div>{renderRoutes(Routes)}</div>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});
