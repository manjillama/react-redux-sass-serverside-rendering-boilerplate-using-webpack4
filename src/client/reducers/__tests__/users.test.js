import { FETCH_USERS } from 'client/actions/types';
import reducer from '../users';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('should handle FETCH_USERS', () => {
    const payload = [
      { id: 1, name: 'Manjil' },
      { id: 2, name: 'Marina' },
    ];

    expect(
      reducer([], {
        type: FETCH_USERS,
        payload,
      })
    ).toEqual(payload);
  });
});
