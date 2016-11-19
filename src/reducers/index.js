import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import series from './seriesReducer';

const rootReducer =
  combineReducers({
    series,
    routing : routerReducer
});

export default rootReducer;
