require('dotenv').config();

import 'babel-polyfill'; // to solve regeneratorRunTime not defined error
import express from 'express';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

import cookieParser from 'cookie-parser';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();

app.use(express.static('public'));
app.use('/favicon.ico', express.static('public'));
app.use(cookieParser());

/*
 * Proxy setup
 * taking client side request with url starting from '/api' and redirecting it to the api server
 * Browser request with starting with '/api' -> web server -> api server
 * We're doing this so that the cookie that is set from the api server is set up through web-server domain and not direct
 */
app.use(
  '/api',
  proxy(process.env.API_SERVER, {
    // proxyReqOptDecorator(opts){
    //   opts.headers['x-forwarded-host'] = '';
    //   return opts;
    // }
  })
);

app.get('*', async (req, res) => {
  /*
   * Intializing redux store
   */
  const store = createStore(req);

  /*
   * matchRoutes function looks at list of Routes(array) and returns an array of component that's about to be rendered
   * custom loadData functions returns promises for pre-rendering server-side contents
   */
  const promises = matchRoutes(Routes, req.path)
    .map(({ route, match }) => {
      return route.loadData
        ? route.loadData(store, match.params, req.query)
        : null;
    })
    .map((promise) => {
      // interating through all to-be rendered components loadData funtions
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  /*
   * Promise.all() is a native function that takes an array of functions and returns one single new promise
   * As soon as all the promises has been resolved Promise.all() will be resolved as well.
   * If one promise is failed then all promise will fail
   */
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    /*
    // context.url is set from RequireAuth HOC when trying to access unauthorized page
    if(context.url)
      return res.redirect(301, context.url);
    */

    // context.notFound is set to true from NotFoundPage component
    if (context.notFound) res.status(404);

    res.send(content);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
