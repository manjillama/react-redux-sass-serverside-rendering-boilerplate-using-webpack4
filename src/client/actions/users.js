import axios from 'axios';
import { FETCH_USERS } from './types';

/*
 * User axiosInstance for making request to personal API server
 * And regular axios for third party api
 */
export const getUsers = () => async (dispatch) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({ type: FETCH_USERS, payload: data });
};
