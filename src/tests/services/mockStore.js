import thunk from 'redux-thunk';
import reducers from 'client/reducers';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  reducers,
  window.INITIAL_STATE, // Initializing client side redux state with server-side redux state
  applyMiddleware(thunk)
);

export default store;
