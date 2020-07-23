import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getUsers } from 'client/actions/users';
import Users from 'client/components/Users.jsx';

const UsersPage = ({ users }) => {
  return (
    <>
      <Helmet>
        <title>Users</title>
        <meta property="og:title" content="Users" />
      </Helmet>
      <Users users={users} />
    </>
  );
};
function mapStateToProps({ users }) {
  return { users };
}

export default {
  component: connect(mapStateToProps)(UsersPage),
  /**
    Fetches data from server-side and dispatches it into redux store before react is rendered
    @param {object} store redux store object
    @param {object} params url parameters
  */
  loadData: (store) => {
    return store.dispatch(getUsers());
  },
};
