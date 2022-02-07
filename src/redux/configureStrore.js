import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { coursesReducer } from './courses/courses';

const reducer = combineReducers({
    coursesReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;