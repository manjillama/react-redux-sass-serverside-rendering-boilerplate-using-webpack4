import React from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';
const Footer = loadable(() => import('client/components/Footer.jsx'));

const HomePage = () => (
  <div className="container-lg">
    <section>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Yooo! Congrats you made it!!!</h1>
      <p>
        Hi, {process.env.AUTHOR} here, welcome to server-side boiletplate setup
        for react, sass using webpack 4 along with SEO and code-splitting
        support
      </p>
      <hr />
      <Footer />
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="link"
        href="https://manjiltamang.com/"
        style={{ marginTop: '10px' }}
      >
        Find me
      </a>
    </section>
  </div>
);

export default {
  component: HomePage,
};
