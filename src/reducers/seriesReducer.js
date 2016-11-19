import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function seriesReducer(state = initialState.series, action) {

  switch (action.type) {
    case types.GET_SERIES:
      return Object.assign([], action.payload.data);
      case types.SAVE_SERIES:
        return Object.assign([], ...state, action.payload.data);
    default:
      return state;
  }
}
