import axios from 'axios';
import * as types from './actionTypes';

export function getSeries() {

  const series = axios.get('http://localhost:8080/api/series');

  return {
    type: types.GET_SERIES,
    payload: series
  };
}

export function saveSeries(serie) {

  const series = axios.post('http://localhost:8080/api/series', serie);

  return {
    type: types.SAVE_SERIES,
    payload: series
  };
}
