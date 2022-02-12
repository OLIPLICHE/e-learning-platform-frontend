import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { coursesReducer } from './courses/courses';
import authReducer from './auth';
import { enrolmentsReducer } from './enrolments/enrolments';
import { setIdReducer } from './enrolments/setId';

const reducer = combineReducers({
  coursesReducer,
  enrolmentsReducer,
  setIdReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export default store;
