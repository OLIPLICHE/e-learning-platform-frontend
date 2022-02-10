const CREATE_ENROLMENT = 'enrolment/create_enrolment';
const GET_SINGLE_ENROLMENT = 'enrolment/get_single_enrolment';
const GET_ALL_ENROLMENT = 'enrolment/get_all_enrolment';
const DELETE_ENROLMENT = 'enrolment/delete_enrolment';

const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

export const createEnrolmentAction = (payload) => ({
  type: CREATE_ENROLMENT,
  payload,
});
export const getSingleEnrolmentAction = (payload) => ({
  type: GET_SINGLE_ENROLMENT,
  payload,
});
export const getAllEnrolmentAction = (payload) => ({
  type: GET_ALL_ENROLMENT,
  payload,
});
export const deleteEnrolmentAction = (payload) => ({
  type: DELETE_ENROLMENT,
  payload,
});

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

const initialState = [];

const enrolmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ENROLMENT:
      return [...state, action.payload];
    case GET_SINGLE_ENROLMENT:
      return action.payload;
    case GET_ALL_ENROLMENT:
      return [...state, action.payload];
    case DELETE_ENROLMENT:
      return [...state, state.filter((r) => r.id !== action.payload)];
    default:
      return state;
  }
};
export default enrolmentsReducer;