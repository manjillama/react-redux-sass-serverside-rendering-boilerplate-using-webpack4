import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';
import { API_SERVER } from '../client/config';

export default req => {
  /*
  * Creating server side axios instance with base url being api server url
  */
  const axiosInstance = axios.create({
    baseURL: API_SERVER,
    headers: { cookie: req.get('cookie') || '' }  // taking cookie from client side request and attaching it to server side request
  });
  /*
  * Creating server side redux store
  */
  const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
  return store;
}
