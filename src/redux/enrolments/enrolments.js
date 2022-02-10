const DELETE_ENROLMENT = 'enrolment/delete_enrolment';
const FETCH_DATA = 'enrolments/FETCH_DATA';
const UPDATE_STATE = 'enrolments/UPDATE_STATE';
const CREATE_ENROLMENT = 'enrolments/CREATE_COURSE';

const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

const initialState = [];

export const createEnrolmentAction = (payload) => ({
  type: CREATE_ENROLMENT,
  payload,
});

export const deleteEnrolmentAction = (payload) => ({
  type: DELETE_ENROLMENT,
  payload,
});

export const dispatchEnrolments = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getEnrolments = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${END_POINT}${API_ROUTE}Enrolments`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  dispatch(dispatchEnrolments(data));
};

export const deleteEnrolment = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  await fetch(`${END_POINT}${API_ROUTE}enrolments/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `${token}`,
    },
  });
  dispatch(deleteAEnrolmentAction(id));
};

export const createEnrolment = (payload) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${END_POINT}${API_ROUTE}enrolments`, {
    method: 'POST',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  dispatch(createEnrolmentAction(data));
};

export const enrolmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case UPDATE_STATE:
      return action.payload;
    case CREATE_ENROLMENT:
      return [...state, action.payload];
    case DELETE_ENROLMENT:
      return state.filter((obj) => obj.id !== action.payload);
    default:
      return state;
  }
};