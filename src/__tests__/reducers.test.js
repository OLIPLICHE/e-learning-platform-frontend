import { coursesReducer } from '../redux/courses/courses';
import authReducer from '../redux/auth';
import { enrolmentsReducer } from '../redux/enrolments/enrolments';

describe('coursesReducer', () => {
  it('should return the initial state', () => {
    expect(coursesReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_DATA', () => {
    expect(
      coursesReducer([], {
        type: 'courses/FETCH_DATA',
        payload: [{ id: 1, name: 'test' }],
      }),
    ).toEqual([{ id: 1, name: 'test' }]);
  });

  it('should handle UPDATE_STATE', () => {
    expect(
      coursesReducer([], {
        type: 'courses/UPDATE_STATE',
        payload: [{ id: 1, name: 'test' }],
      }),
    ).toEqual([{ id: 1, name: 'test' }]);
  });

  it('should handle CREATE_course', () => {
    expect(
      coursesReducer([], {
        type: 'courses/CREATE_course',
        payload: [{ id: 1, name: 'test' }],
      }),
    ).toEqual([[{ id: 1, name: 'test' }]]);
  });
});

describe('authReducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(
      {
        currentUser: null,
        token: null,
      },
    );
  });

  it('should handle LOAD_CURRENT_USER', () => {
    expect(
      authReducer(
        {
          currentUser: null,
          token: null,
        },
        {
          type: 'auth/current_user',
          payload: {
            currentUser: {
              id: 1,
              name: 'test',
            },
            token: 'token',
          },
        },
      ),
    ).toEqual({
      currentUser: {
        id: 1,
        name: 'test',
      },
      token: 'token',
    });
  });

  it('should handle LOGOUT', () => {
    expect(
      authReducer({}, {
        type: 'auth/LOGOUT',
      }),
    ).toEqual({});
  });
});

describe('enrolmentsReducer', () => {
  it('should return the initial state', () => {
    expect(enrolmentsReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_DATA', () => {
    expect(
      enrolmentsReducer([], {
        type: 'enrolments/FETCH_DATA',
        payload: [{ id: 1, name: 'test' }],
      }),
    ).toEqual([{ id: 1, name: 'test' }]);
  });

  it('should handle UPDATE_STATE', () => {
    expect(
      enrolmentsReducer([], {
        type: 'enrolments/UPDATE_STATE',
        payload: [{ id: 1, name: 'test' }],
      }),
    ).toEqual([{ id: 1, name: 'test' }]);
  });
});
