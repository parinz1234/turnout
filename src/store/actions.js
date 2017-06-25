import types from './mutation-types'

const signIn = ({commit}, user_payload) => {
  commit(types.SIGN_IN, user_payload)
}

const signOut = ({commit}) => {
  commit(types.SIGN_OUT)
}

const setEvents = ({commit}, event_payload)  => {
  commit(types.SET_EVENTS, event_payload)
}
export default {
  signIn,
  signOut,
  setEvents
}
