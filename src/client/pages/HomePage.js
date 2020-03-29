import React from 'react';
import { API_SERVER } from 'client/config';
import { Helmet } from 'react-helmet-async';

const HomePage = () => (
  <section>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>Yooo! Welcome to the home page</h1>
    <p>Welcome to server-side boiletplate setup for react, sass using webpack 4</p>
    <a target="_blank" rel="noopener noreferrer" className="btn btn-primary" href="https://www.linkedin.com/in/manjiltamang/" style={{marginTop: '10px'}}>Developer</a>
  </section>
);

export default {
  component: HomePage
}
