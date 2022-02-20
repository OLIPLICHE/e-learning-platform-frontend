import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const COURSE_API_ENDPOINT = 'http://localhost:4000/api/v1/courses';

const initialState = {
  isFetching: false,
  data: [],
  error: {},
};

// eslint-disable-next-line no-unused-vars
const jsonTypeConfig = (token) => {
  if (token) {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
  }

  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

const bodyOptions = (formElem) => {
  const data = new FormData(formElem);
  const entries = [...data.entries()];
  const courseEntries = entries.slice(0, 3);
  const descEntries = entries.slice(3);

  const body = {
    course: {
    },
    description: {
    },
  };

  courseEntries.forEach((pair) => {
    const [key, value] = pair;
    body.course[key] = value;
  });

  descEntries.forEach((pair) => {
    const [key, value] = pair;
    body.description[key] = value;
  });

  return body;
};

const filterDeleted = (data, id) => data.filter((courseObj) => courseObj.id !== parseInt(id, 10));

export const getCourses = createAsyncThunk(
  'redux/courses/getCourses.js',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios
        .get(COURSE_API_ENDPOINT, jsonTypeConfig(false));
      return response.data;
    } catch (err) {
      return rejectWithValue({ ...err.response.data });
    }
  },
);

export const addCourse = createAsyncThunk(
  'redux/courses/addCourse.js',
  async (payload, { rejectWithValue }) => {
    const rcoursesJwt = JSON.parse(localStorage.getItem('rcourses_jwt'));
    const token = (rcoursesJwt) ? rcoursesJwt.token : null;
    const data = bodyOptions(payload);
    const config = jsonTypeConfig(token);

    try {
      const response = await axios
        .post(COURSE_API_ENDPOINT, data, config);
      return response.data;
    } catch (error) {
      return rejectWithValue({ ...error.response.data });
    }
  },
);

export const removeCourse = createAsyncThunk(
  'redux/courses/removeCourse.js',
  async (payload, { rejectWithValue }) => {
    const rcoursesJwt = JSON.parse(localStorage.getItem('rcourses_jwt'));
    const token = (rcoursesJwt) ? rcoursesJwt.token : null;
    const config = jsonTypeConfig(token);

    try {
      const response = await axios
        .delete(`${COURSE_API_ENDPOINT}/${payload}`, config);
      return response.data;
    } catch (error) {
      return rejectWithValue({ ...error.response.data });
    }
  },
);

const coursesSlicer = createSlice({
  name: 'courses',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getCourses.pending.type]: (state) => ({ ...state, isFetching: true, error: {} }),
    [getCourses.fulfilled.type]: (state, action) => (
      {
        ...state, isFetching: false, data: action.payload, error: {},
      }),
    [getCourses.rejected.type]: (state, action) => (
      { ...state, isFetching: false, error: action.payload }
    ),
    [addCourse.pending.type]: (state) => (
      { ...state, isFetching: true, error: {} }
    ),
    [addCourse.fulfilled.type]: (state, action) => (
      { ...state, isFetching: false, data: [...state.data, action.payload] }
    ),
    [addCourse.rejected.type]: (state, action) => (
      { ...state, isFetching: false, error: { ...action.payload } }
    ),
    [removeCourse.pending.type]: (state) => (
      { ...state, isFetching: true, error: {} }
    ),
    [removeCourse.fulfilled.type]: (state, action) => (
      {
        ...state,
        isFetching: false,
        data: filterDeleted(state.data, action.payload.id),
      }
    ),
    [removeCourse.rejected.type]: (state, action) => (
      { ...state, isFetching: false, error: { ...action.payload } }
    ),
  },
});

export default coursesSlicer.reducer;
