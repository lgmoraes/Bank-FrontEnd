export const selectUserLogin = (state) => state.userLogin

export const selectUserIsConnected = (state) =>
  state.userLogin.status === 'resolved'

export const selectUserToken = (state) => state.userLogin.token

export const selectUserProfile = (state) => state.userProfile

export const selectUserData = (state) => state.userProfile.data