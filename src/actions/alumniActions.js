import { getAllAlumni, searchAlumni } from '../api/alumniApi';
import * as types from './actionTypes';  

export function loadAlumni() {  
  return dispatch => {
    return getAllAlumni().then((res) => {
      dispatch(loadAlumniSuccess(res))
    })
  }
}

export function loadAlumniSuccess(alumni) {
  return {type: types.LOAD_ALUMNI_SUCCESS, alumni};
}

export function findAlumni(query) {
  return dispatch => {
    return searchAlumni(query).then((res) => {
      dispatch(loadAlumniSuccess(res))
    })
  }
}
