import { FETCH_USERS, ADD_USER } from '../actions/users.actions'

let initialState = []

export default(state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS:
      return [ ...state, ...action.payload ]
    case ADD_USER:
      return [ ...action.payload ]
    default:
      return state
  }
}
