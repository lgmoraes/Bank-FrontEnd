import userLoginReducer from '../features/userLogin'
import userProfileReducer from '../features/userProfile'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userProfile: userProfileReducer,
  },
})
