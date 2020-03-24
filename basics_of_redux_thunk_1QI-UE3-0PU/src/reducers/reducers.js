import { FETCH_PROFILES } from '../actions/actions'

let initialState = {users: []}

export default(state = initialState, action) => {
  switch(action.type) {
    case FETCH_PROFILES:
      return Object.assign({}, state, { users: action.payload})
    default:
      return state
  }
}
