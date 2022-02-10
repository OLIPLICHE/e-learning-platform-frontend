import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { coursesReducer } from './courses/courses';
import authReducer from './auth';
import enrolmentsReducer from './enrolments/enrolments';

const reducer = combineReducers({
  coursesReducer,
  enrolmentsReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);

export default store;
