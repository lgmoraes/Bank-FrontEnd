import userLoginReducer from '../features/userLogin'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    userLogin: userLoginReducer,
  },
})
