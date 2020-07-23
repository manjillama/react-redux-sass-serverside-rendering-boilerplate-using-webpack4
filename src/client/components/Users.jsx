import React from 'react';

export default ({ users }) => (
  <div className="container-lg">
    <h3 style={{ margin: '1rem 0' }}>View page source code and viola!!!</h3>
    <ul className="neutralize list-group">
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>
);
