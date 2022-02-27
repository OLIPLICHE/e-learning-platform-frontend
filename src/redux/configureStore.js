import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coursesReducer from './courses/coursesSlice';
import reservationsReducer from './reservations/reservationsSlice';
import utilReducer from './utils/utilsReducer';
import authReducer from './auth/authSlice';

const reducer = combineReducers({
  courses: coursesReducer,
  reservations: reservationsReducer,
  utils: utilReducer,
  auth: authReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
