const CREATE_ENROLMENT = 'enrolment/create_enrolment';
const GET_SINGLE_ENROLMENT = 'enrolment/get_single_enrolment';
const GET_ALL_ENROLMENT = 'enrolment/get_all_enrolment';
const DELETE_ENROLMENT = 'enrolment/delete_enrolment';

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

export const deleteAEnrolmentAction = (payload) => ({
  type: DELETE_ENROLMENT,
  payload,
});

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
