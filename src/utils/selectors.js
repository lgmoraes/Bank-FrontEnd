export const selectUserLogin = (state) => state.userLogin

export const selectUserIsConnected = (state) =>
  state.userLogin.status === 'resolved'

export const selectUserToken = (state) => state.userLogin.token
