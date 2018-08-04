import * as types from '../actions/actionTypes';

const initialState = {
    alumni:[]
    // {
    //   firstName:null
    // }
}

export default function alumniReducer(state = initialState, action) { 
  switch(action.type) {
    case types.LOAD_ALUMNI_SUCCESS:{
      return Object.assign({}, state, {
        alumni: action.alumni
      })

    }
    default: 
      return state;
  }
}