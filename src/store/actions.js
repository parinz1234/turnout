import types from './mutation-types'

const signIn = ({commit}, user_payload) => {
  commit(types.SIGN_IN, user_payload)
}

const signOut = ({commit}) => {
  commit(types.SIGN_OUT)
}

export default {
  signIn,
  signOut
}
