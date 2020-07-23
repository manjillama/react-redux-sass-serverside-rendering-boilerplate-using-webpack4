import mockStore from 'tests/services/mockStore';
import { FETCH_USERS } from '../types';

describe('Users action dispath', () => {
  it('Should dispatch actions of users', () => {
    const payload = [
      { id: 1, name: 'Manjil' },
      { id: 2, name: 'Marina' },
    ];

    mockStore.dispatch({
      type: FETCH_USERS,
      payload,
    });

    expect(mockStore.getState().users).toEqual(payload);
  });
});
