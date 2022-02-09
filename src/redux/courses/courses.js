const initialState = [];
const FETCH_DATA = 'courses/FETCH_DATA';
const UPDATE_STATE = 'courses/UPDATE_STATE';

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case UPDATE_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default coursesReducer;
