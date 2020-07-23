import React from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

/*
  For loadable component we cannot use client-side route 
  need to reload page so that route is handled by the server
  and inject necessary loadable chunk files
  More at: https://loadable-components.com/docs/server-side-rendering/
*/
const Footer = loadable(() => import('client/components/Footer.jsx'));

const HomePage = () => (
  <div className="container-lg">
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div>
      <div style={{ padding: '15px 0' }}>
        <h1>Yooo! Congrats you made it!!!</h1>
        <p>
          Hi,
          {process.env.AUTHOR}
          here, welcome to server-side boiletplate setup for react, sass using webpack 4 along with SEO and
          code-splitting support
        </p>
      </div>
      <hr />
      <Footer />
    </div>
  </div>
);

export default {
  component: HomePage,
};
