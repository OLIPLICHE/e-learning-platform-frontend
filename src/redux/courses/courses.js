const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';
const initialState = [];
const FETCH_DATA = 'courses/FETCH_DATA';
const UPDATE_STATE = 'courses/UPDATE_STATE';
const CREATE_COURSE = 'courses/CREATE_COURSE';

export const createNewCourse = (payload) => ({
  type: CREATE_COURSE,
  payload,
});
export const addCourse = (payload) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${END_POINT}${API_ROUTE}courses`, {
    method: 'POST',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  dispatch(createNewCourse(data));
};
export const dispatchCourses = (payload) => ({
  type: FETCH_DATA,
  payload,
});
export const getCourses = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${END_POINT}${API_ROUTE}courses`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  dispatch(dispatchCourses(data));
};
export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case UPDATE_STATE:
      return action.payload;
    case CREATE_COURSE:
      return [...state, action.payload];
    default:
      return state;
  }
};