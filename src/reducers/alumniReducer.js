import * as types from '../actions/actionTypes';

const initialState = {
    alumni:{
      firstName:null
    }
}

export default function alumniReducer(state = initialState, action) { 
  switch(action.type) {
    case types.LOAD_ALUMNI_SUCCESS:{
      console.log(action)
      return Object.assign({}, state, {
        alumni: {
          firstName: action.alumni[0].firstName,
          lastName: action.alumni[0].lastName,
          classYear: action.alumni[0].classYear
        }
      })

    }
    default: 
      return state;
  }
}