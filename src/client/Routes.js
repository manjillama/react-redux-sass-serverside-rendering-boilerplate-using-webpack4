import HomePage from './pages/HomePage';
import UserPage from './pages/UsersPage';
import NotFoundPage from './pages/404Page';
import App from './App';

/*
 * react-router-config for pre server-side data loading
 * @see https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
 * Figure out what component would have rendered (based on url)
 * call a 'loadData' method attached to each of those components
 */
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UserPage,
        path: '/users',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
