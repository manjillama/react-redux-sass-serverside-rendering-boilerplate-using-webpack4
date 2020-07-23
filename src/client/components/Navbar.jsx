import React from 'react';
import './navbar.scss';

export default () => (
  <nav className="container-lg">
    <div className="navbar">
      <ul className="neutralize nav">
        <li>
          <a href="/">Awesomeness</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
      </ul>
    </div>
  </nav>
);
