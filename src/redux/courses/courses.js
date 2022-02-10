const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

const FETCH_DATA = 'courses/FETCH_DATA';
const UPDATE_STATE = 'courses/UPDATE_STATE';
const CREATE_COURSE = 'courses/CREATE_COURSE';
const DELETE_COURSE = 'courses/DELETE_COURSE';

const initialState = [];

export const createNewCourse = (payload) => ({
  type: CREATE_COURSE,
  payload,
});

export const dispatchCourses = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const deleteCourseAction = (payload) => ({
  type: DELETE_COURSE,
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

export const deleteCourse = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  await fetch(`${END_POINT}${API_ROUTE}courses/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `${token}`,
    },
  });
  dispatch(deleteCourseAction(id));
};

export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case DELETE_COURSE:
      return state.filter((course) => course.id !== parseInt(action.payload, 10));
    case UPDATE_STATE:
      return action.payload;
    case CREATE_COURSE:
      return [...state, action.payload];
    default:
      return state;
  }
};
