import coursesReducer from '../../redux/courses/coursesSlice';
// import car from './carMock';

describe('reducers working as expected', () => {
  it('should return the initial state', () => {
    expect(coursesReducer(undefined, {})).toEqual(
      {
        data: [],
        error: {},
        isFetching: false,
      },
    );
  });
});
