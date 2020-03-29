import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript'; // preventing xss attacks
import { Helmet, HelmetProvider } from 'react-helmet-async';

/*
* Server side redux set up
*/
export default (req, store, context) => {
  const helmetContext = {};
  /*
  * All html dom created by react-redux will be converted into string and is passed into content variable
  */
  const content  = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <HelmetProvider context={helmetContext}>
          <div>{renderRoutes(Routes)}</div>
        </HelmetProvider>
      </StaticRouter>
    </Provider>
  );

  /*
  * Helmet for SEO support
  */
  const { helmet } = helmetContext;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Boilerplate for server-side React App</title>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,500,700&display=swap" rel="stylesheet">
        <link href="main.css" rel="stylesheet" />
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
};
